---
name: dependency-maintenance
description: "ACTIVATE for routine dependency maintenance on this WordPress-plugin project (both Composer and npm sides): bumping packages in composer.json + package.json, sweeping outdated libraries, running composer/npm audit, and producing a maintenance PR summary. Trigger when the user asks to update/upgrade dependencies, do a 'dep bump', refresh lockfiles against new releases, check for security advisories, or prepare a dependency-maintenance PR. Do NOT use for adding a brand-new package, removing one, switching @wordpress/scripts or @wordpress/env major versions, bumping the WordPress / PHP compatibility floor, or non-Composer/non-npm package managers."
license: MIT
metadata:
  author: dekode
---

# Dependency Maintenance (Composer + npm)

Goal: lift every safely-upgradeable dependency on both the Composer and npm
sides of this WordPress plugin, leave risky ones alone with a documented
reason, and hand the user a paste-ready PR description.

This repo has **two** package managers running side-by-side:

- **Composer** — PHP **dev tooling only** (PHPCS via `dekode/coding-standards`,
  PHPUnit, `wp-phpunit/wp-phpunit`, `yoast/phpunit-polyfills`, `wp-cli/i18n-command`).
  The plugin has **no PHP runtime dependencies**.
- **npm** — JS build (`@wordpress/scripts`), local-WP environment
  (`@wordpress/env`), editor-side WordPress packages (`@wordpress/dom-ready`,
  `@wordpress/element`), Playwright e2e, Prettier, husky/lint-staged.

Run them as two phases of one workflow. Apply both, then verify, then write
**one** PR description that covers both.

## Policy

### Composer side

| Bump   | `require` (runtime) | `require-dev` |
| ------ | ------------------- | ------------- |
| patch  | apply               | apply         |
| minor  | apply               | apply         |
| major  | **defer** (manual)  | apply         |

`require` is currently empty besides `php: ">=8.0"` (do **not** change that
without coordinating a WP-version bump — see `dekode-fundraising.php` plugin
header and `.wp-env.json`). In practice every Composer bump in this repo is
`require-dev`.

### npm side

This repo ships JS into a WordPress install (block editor + frontend
enqueues). Every npm dependency in `package.json` lives under
`devDependencies`, but that label is misleading — it understates risk for
two reasons:

1. **`@wordpress/*` packages are externalized at build time, not bundled.**
   `@wordpress/scripts` runs `@wordpress/dependency-extraction-webpack-plugin`
   (DEWP), which rewrites every `import … from '@wordpress/x'` into a
   reference to a `wp.x` global supplied by WordPress core at runtime, and
   emits `build/**/*.asset.php` listing those handles as enqueue
   dependencies. The npm package contributes **types, peer-version
   metadata, and the externals mapping** — the actual JS executing in the
   browser is whatever the user's WP install ships. Inspect
   `build/blocks/*/{editor,frontend}.asset.php` to see this in practice
   (entries like `wp-element`, `wp-block-editor`, `wp-i18n`, `react`).
2. **The compat axis is therefore not "bundled bytes" but "does the npm
   package's API match the WP core version we declare as our floor"**
   (`Requires at least: 6.4` in `dekode-fundraising.php`). A
   `@wordpress/element` 6.x bump that requires React 18 hooks WP 6.4
   doesn't ship will break the editor on a WP-6.4 site even though `build/`
   bytes look identical.

Use this two-tier classification:

**WP-core-coupled** (imported from anything under `src/` — DEWP externalizes
them, so they must stay API-compatible with the WP-core floor):

- `@wordpress/dom-ready`, `@wordpress/element` (currently in
  `package.json`)
- `@wordpress/blocks`, `@wordpress/block-editor`, `@wordpress/components`,
  `@wordpress/i18n` (imported in `src/` but not declared — provided
  transitively by `@wordpress/scripts` and resolved at runtime from WP
  core)
- anything else imported from `src/**/*.{js,ts,tsx}` whose name starts with
  `@wordpress/`

**Build / tooling only** (not referenced from `src/`):

- `@wordpress/scripts`, `@wordpress/env`, `@wordpress/eslint-plugin`,
  `@wordpress/stylelint-config`, `@wordpress/e2e-test-utils-playwright`
- `@playwright/test`
- `prettier`, `eslint-plugin-prettier`, `stylelint-order`
- `husky`, `lint-staged`
- `typescript`

If you're unsure where a package falls, grep for it under `src/`:

```bash
grep -rE "from ['\"]<package>['\"]" src/
```

If `src/` references it → WP-core-coupled. Otherwise → tooling.

| Bump   | WP-core-coupled     | Build / tooling only |
| ------ | ------------------- | -------------------- |
| patch  | apply               | apply                |
| minor  | apply (see below)   | apply                |
| major  | **defer** (manual)  | apply                |

For WP-core-coupled **minor** bumps, before applying, confirm the new
version's `peerDependencies` and CHANGELOG don't drop support for the WP
floor declared in `dekode-fundraising.php` (`Requires at least: 6.4`). If
the new minor requires WP ≥ 6.5+, defer with that reason. The WP packages
follow WP core's release cadence — a minor on the npm side often
corresponds to a WP-core version bump.

Rationale: WP-core-coupled majors carry API breaks that need editor-level
smoke testing on the floor WP version. Build/tooling majors are
blast-radius-limited — apply them if the build + lint + tests pass, but
list them explicitly in the PR description. The following tooling majors
have a history of surprising breakage and warrant **extra care**:

- **`@wordpress/scripts`** can change webpack config, the DEWP externals
  table, eslint defaults, the bundled Playwright version, or the
  `build/**/*.asset.php` shape. Always inspect the `asset.php` diff
  (Phase C) and run `npm run test:e2e` before declaring green.
- **`@wordpress/env`** rebuilds the wp-env Docker image. After bumping,
  `npm run wp-env stop && npm run wp-env start -- --update` so the new
  image is pulled, then re-run `npm run test:php`.
- **`@wordpress/eslint-plugin`** typically adds rules. The build will still
  pass, but `npm run lint` may fail on previously-clean code. Fixing the
  flagged code is **out of scope for this skill** — surface the failures
  and defer the bump.

---

## Workflow

Run sequentially. Stop and report if a step fails in a way you cannot reason
about.

**No-op short-circuit.** If `composer outdated --direct` returns an empty
`installed` array and `npm outdated` returns `{}`, **and** both `composer
audit` / `npm audit` are clean against the baseline, print a single line:

> No dependency changes needed — `composer outdated`, `npm outdated`, and
> both audits are clean.

Then stop. Do not produce the PR description.

**Rollback.** Before rolling back, check the four manifest files are clean
of unrelated work — `git checkout HEAD --` destroys uncommitted edits:

```bash
git status -- composer.json composer.lock package.json package-lock.json
git checkout HEAD -- composer.json composer.lock package.json package-lock.json
composer install --no-interaction
npm ci
```

If `git status` shows changes from work outside this skill's scope, stash
or commit those first and surface what you saw — do not blindly overwrite.

Before starting, verify the runtimes match what CI uses:

- **PHP**: `composer.json` `config.platform.php` is pinned to `8.0`. The
  resolver will respect that pin regardless of host PHP, so `composer
  outdated/update` is safe on any PHP ≥ 8.0. Read-only commands are safe on
  any recent PHP. (The plugin header advertises `Requires PHP: 8.1`; the
  8.0 platform pin is intentional per `copilot-instructions.md` — leave
  it alone.)
- **Node**: `engines.node = "24"` and (if present) `.nvmrc`. Running `npm
  update` on a different Node major can produce a different `package-lock.json`
  than CI — switch with `nvm use` first if needed.

**Composer stability is permissive.** `composer.json` has `"minimum-stability":
"dev"` with no `"prefer-stable": true`. This is deliberate (it's what lets
the `phpunit/phpunit: 9.6.x-dev` and `wp-phpunit/wp-phpunit: dev-master`
pins resolve), **but it also means dev versions of transitive dependencies
can appear in `composer.lock` after an update**. After step A3, grep the
lockfile diff for `"version": "dev-*"` or `"version": "*-dev"` entries
that weren't present before, and surface any new ones in the deferred /
notes table with `(transitive dev-version)` — they may indicate a tagged
release got rolled back to a dev branch and warrant a closer look.

### Phase A — Composer

#### A1. Baseline audit + outdated survey

```bash
composer audit --no-interaction --no-ansi --format=json || true
composer outdated --direct --no-interaction --no-ansi --format=json
```

`composer audit` exits non-zero whenever any advisory is reported (it is a
gate, not a query). The `|| true` keeps the workflow moving so step A4 can
still diff against this baseline. Capture the JSON output regardless of
exit code.

**User-impact framing for this repo.** `composer.json`'s `require` is
empty except for `php`. Every Composer advisory is therefore against a
`require-dev` package and **does not ship to plugin users** — it can only
affect contributors running tests / linting / `make-pot` locally or in CI.
State this explicitly in the audit summary in Phase D so reviewers don't
chase a phantom user-facing CVE.

`--direct` limits to packages declared in `composer.json`. The response shape
is `{"installed": [ { "name", "version", "latest", "latest-status", ... } ]}`.
The `latest-status` field is authoritative for routing:

- `semver-safe-update` — bump fits the existing constraint; **only the
  lockfile needs to move**, do not edit `composer.json`.
- `update-possible` — bump exceeds the existing constraint; needs a
  `composer.json` edit.
- `up-to-date` — skip.

For PR reporting, classify bump kind by component diff (`version` → `latest`):

- `X.Y.Z → X.Y.Z'` = patch
- `X.Y.Z → X.Y'.Z'` = minor
- `X.Y.Z → X'.Y'.Z'` = major

Treat any `0.y.z` package as effectively-major for minor bumps. Apply per the
dev policy if it's `require-dev` (everything here is).

#### A2. Edit composer.json (only for `update-possible`)

Skip for any package marked `semver-safe-update` — step A3 will move the
lockfile without a constraint edit.

For `update-possible` packages, preserve the existing constraint operator.
This project uses `~X.Y.Z` (tilde with three components, allows patch only)
for normal packages. Examples:

- `"dekode/coding-standards": "~6.4.0"` → bump to 6.5.0 → `"~6.5.0"`
- `"yoast/phpunit-polyfills": "~4.0.0"` → bump to 5.0.0 → `"~5.0.0"`
  (dev-tier major; apply but list explicitly).

**Skip and record in the deferred table** — the following entries use
intentionally-pinned constraints:

- `"phpunit/phpunit": "9.6.x-dev"` — dist-tag style pin tracking the 9.6 dev
  branch. Don't rewrite.
- `"wp-phpunit/wp-phpunit": "dev-master"` — branch alias tracking master.
  Don't rewrite.
- Anything else using a dist-tag, `dev-*` constraint, inline alias, or a
  matching entry under the root `repositories` array, `replace`, or `provide`.

Do not change `minimum-stability`, `prefer-stable`, `config.platform.php`, or
the `php` constraint under `require`.

#### A3. Apply the updates

```bash
composer update --with-all-dependencies --no-interaction --no-ansi
```

`--with-all-dependencies` lets transitives move where their parents' constraints
allow.

If resolution fails on a specific package (peer/conflict, etc.), **diagnose
before reverting**:

```bash
composer why-not <package> <target-version>   # what is blocking this version
composer depends <package>                    # what depends on this package
```

Use the output to pick the right entry to revert (the immediate blocker is
not always the package that was bumped — a transitive constraint may be the
real cause). Then revert that one entry in `composer.json`, move it to the
deferred table with the `why-not` / `depends` summary as the reason, and
re-run. Do **not** widen unrelated constraints to make the conflict go away.

#### A4. Post-update audit

```bash
composer audit --no-interaction --no-ansi --format=plain || true
```

Same exit-code caveat as A1 — use `|| true` so a non-zero exit (advisories
present) does not abort the workflow before Phase D can summarise.

Diff against the baseline from A1: count advisories before/after, name
resolved ones, and list remaining ones with a one-line reason. Mark each
remaining advisory `(dev-only — does not ship to plugin users)` since
that is true of every Composer dep in this repo.

### Phase B — npm

#### B1. Baseline audit + outdated survey

```bash
npm audit --json || true
npm outdated --json || true
```

Both commands exit non-zero in normal operation (`npm audit` on any
finding, `npm outdated` whenever anything is outdated). `|| true` keeps
the workflow moving; the JSON output is the source of truth.

**User-impact framing for this repo.** Every npm dependency is in
`devDependencies`, and `@wordpress/*` runtime code is supplied by WP core
(see the npm policy section: DEWP externalization). So an `npm audit`
advisory in this repo is either:

- against a **build / tooling** package (Playwright, Prettier, husky,
  webpack transitives, etc.) — affects contributor / CI machines only,
  does not ship to plugin users.
- against a **WP-core-coupled** package (e.g. `@wordpress/element`) —
  still doesn't ship as JS (DEWP externalizes it), but it indicates the
  WP package version we're declaring compatibility against had an
  advisory upstream; cross-check the WP core release notes.

In **neither case** does an npm advisory ship as JavaScript executing on
a plugin user's site. State this in the Phase D audit summary.

`npm outdated` already shows only direct dependencies by default. The
response shape is `{ "<pkg>": { "current", "wanted", "latest", "dependent",
"location", "type" }, ... }`. Routing is decided by comparing `current`,
`wanted`, and `latest`:

- `current < wanted` — bump fits the existing constraint; **only the
  lockfile needs to move**, do not edit `package.json`.
- `current === wanted < latest` — bump exceeds the existing constraint;
  needs a `package.json` edit.
- Anything not listed is up-to-date — skip.

The `type` field is **always `devDependencies` in this repo** (see the npm
policy above), so route on the WP-core-coupled vs tooling classification
rather than `type` alone. If a package is new or you're not sure, grep for
it under `src/`.

Treat any `0.y.z` package as effectively-major for minor bumps — defer on
WP-core-coupled packages only. On tooling packages, apply per the dev policy.

#### B2. Edit package.json (only when constraint blocks the bump)

Skip for any package where `current < wanted` — step B3 will move the
lockfile without a constraint edit.

For packages where `current === wanted < latest`, preserve the existing
constraint operator. This project uses `~X.Y.Z` (tilde with three
components, allows patch only) for every entry — when bumping, keep the
tilde and rewrite the full `X.Y.Z`:

- `"@playwright/test": "~1.58.0"` → bump to 1.59.0 → `"~1.59.0"`
- `"prettier": "~3.8.0"` → tooling major to 4.0.0 → `"~4.0.0"`

If a package uses a different operator (`^`, exact pin, dist-tag, git/file/link
URL, npm alias), follow that file's convention. Do not change `engines`,
`private`, `scripts`, the `yarn` field (it intentionally errors), the
`files` array, or `lint-staged` config.

**Skip and record in the deferred table** — any of:

- WP-core-coupled major bump (policy)
- WP-core-coupled `0.y → 0.y+1` (effectively-major)
- WP-core-coupled minor whose new `peerDependencies` or CHANGELOG drops
  support for WP `Requires at least: 6.4` (see the npm policy section)
- entries whose constraint has any of these signals (treat as intentionally
  pinned):
  - exact pin (no operator, e.g. `"1.2.3"`)
  - dist-tag (e.g. `"latest"`, `"next"`, `"canary"`)
  - URL / protocol target (`git+…`, `github:…`, `file:…`, `link:…`,
    `http(s):…`)
  - npm alias syntax (`"npm:other-pkg@1.2.3"`)
  - workspace protocol (`workspace:…`)
  - a matching entry under root `overrides` or `resolutions`
  - package listed under `peerDependencies` or `optionalDependencies` with a
    non-version target

For majors of `@wordpress/scripts`, `@wordpress/env`, and
`@wordpress/eslint-plugin`, follow the **extra care** checklist in the npm
policy section above (DEWP / wp-env image refresh / lint-rule changes) —
do not apply blindly even though they are tooling-tier.

#### B3. Apply the updates

```bash
npm update 2>&1 | tee /tmp/npm-update.log
```

Do **not** pass `--save` — that rewrites the constraint style in
`package.json`. Do **not** use `--force` or `--legacy-peer-deps`.

If resolution fails on a specific package (`ETARGET`, `ERESOLVE`, peer-dep
conflict), **diagnose before reverting**:

```bash
npm explain <package>   # full dependency path that pulls this in
npm ls <package>        # tree of versions currently resolved
```

The immediate failing package is often a transitive; the right edit is
usually on its parent. Revert the offending entry in `package.json`, move
it to the deferred table with the `npm explain` summary as the reason, and
re-run.

**Capture peer-dep warnings.** Successful `npm update` runs can still emit
`npm warn ERESOLVE … peer dep` lines. These are the canary for majors you
should have deferred — grep `/tmp/npm-update.log` for `npm warn` and
include any non-empty warnings in the **Notes** column of the matching
update row in Phase D.

After the update, run `npm install` once to confirm `node_modules` matches
the new lockfile. Should be a near no-op.

#### B4. Post-update audit

```bash
npm audit --json || true
```

Diff against the baseline from B1. Apply the same dev-only / no-shipped-JS
framing as B1 when summarising. Do **not** run `npm audit fix` — it
silently rewrites `package.json` / `package-lock.json` and can introduce
constraint-style drift.

### Phase C — Verification (covers both phases)

Run in order; stop on the first hard failure and surface it.

#### C1. Snapshot the build artifact (before rebuilding)

```bash
# Capture pre-rebuild artifact state so C3 can diff against it.
mkdir -p /tmp/dep-maint
find build -name '*.asset.php' -print0 | xargs -0 -I{} sh -c 'echo "=== {} ==="; cat "{}"' > /tmp/dep-maint/asset-before.txt 2>/dev/null || true
du -sb build > /tmp/dep-maint/size-before.txt 2>/dev/null || true
```

If `build/` doesn't exist (clean checkout), skip — both files will be
empty and C3's diff will trivially be "new build".

#### C2. Lint + rebuild

```bash
composer lint                 # PHPCS via Dekode ruleset
npm run lint                  # wp-scripts lint-js + lint-style + Prettier
npm run build                 # wp-scripts production build into build/
```

#### C3. Diff the shipped artifact

`build/**/*.asset.php` is the actual runtime contract — its `dependencies`
array tells WordPress which scripts to enqueue, and its `version` hash
invalidates caches for every plugin user. A `@wordpress/scripts`, DEWP, or
WP-core-coupled bump can change either, even when the JS source didn't.

```bash
find build -name '*.asset.php' -print0 | xargs -0 -I{} sh -c 'echo "=== {} ==="; cat "{}"' > /tmp/dep-maint/asset-after.txt
diff -u /tmp/dep-maint/asset-before.txt /tmp/dep-maint/asset-after.txt > /tmp/dep-maint/asset.diff || true

du -sb build > /tmp/dep-maint/size-after.txt
```

Surface in Phase D:

- **Any change to a `dependencies` array** (additions or removals of
  `wp-*` / `react` / `react-dom` handles) — this changes the WordPress
  enqueue graph and warrants explicit reviewer attention. Paste the diff.
- **`version` hash changes alone** with identical `dependencies` arrays
  are expected on any rebuild (content-addressed) — note as "asset
  hashes refreshed (expected)" without pasting the diff.
- **Bundle size delta** (`build/` total bytes) larger than ~10% — paste
  the before/after sizes and call out the suspect package.

#### C4. Run Plugin Check + test suites

If `wp-env` is running locally (or you can start it), run:

```bash
npm run wp-env start                              # idempotent
npm run wp-env run cli -- wp plugin check dekode-fundraising
npm run test:php                                  # PHPUnit inside tests-wordpress
npm run test:e2e                                  # Playwright against wp-env
```

Plugin Check is shipped by `.wp-env.json` (it pulls
`https://downloads.wordpress.org/plugin/plugin-check.zip`) and is the
WordPress.org plugin directory's own static analyser. New failures after a
bump usually mean a `wp-scripts` / DEWP change altered the asset graph in
a way WP.org review would flag. Surface every new failure — do not fix
them inside this skill's scope.

If `wp-env` cannot start (no Docker, port conflicts, etc.), record each of
Plugin Check / test:php / test:e2e as ⚪ skipped in Phase D and note why.
**Do not assume CI will catch it** — at time of writing, the CI workflows
in `.github/workflows/` cover release packaging (`release.yml`) and a
nightly Snyk dev-dep scan (`security-scan.yml`); there is **no
PHPUnit / Playwright / Plugin Check / WP-floor matrix job**. If you skip
local verification, the PR description must say so explicitly so a
reviewer can run it before merging.

For lint failures, surface the first ~5 errors with `file:line`. For build
failures, paste the tail of the wp-scripts output (it usually names the
failing module). For PHPUnit failures, paste the failing `Test\d+::method`
lines. For Playwright failures, paste the failing spec name. Name the
suspect package if the error stems from an upgraded one — do not fix the
failures inside this skill's scope; surface them.

### Phase D — Final output

Print **only** the PR description as the last message — no preamble, no
recap of the steps. Format:

````markdown
# Dependency Maintenance

Routine Composer + npm dependency sweep. WP-core-coupled majors deferred
per policy; tooling/dev majors applied (listed explicitly below).

## Composer — Updates Applied

### Major (dev only)

| Package | From | To | Notes |
| ------- | ---- | -- | ----- |
| …       | …    | …  | …     |

### Minor

| Package | Section | From | To |
| ------- | ------- | ---- | -- |
| …       | …       | …    | …  |

### Patch

| Package | Section | From | To |
| ------- | ------- | ---- | -- |
| …       | …       | …    | …  |

Transitive changes: N packages updated in `composer.lock` (not declared in
`composer.json`).

## Composer — Deferred

| Package | Section | From | To | Reason |
| ------- | ------- | ---- | -- | ------ |
| …       | …       | …    | …  | …      |

## npm — Updates Applied

### Major (tooling only)

| Package | From | To | Notes |
| ------- | ---- | -- | ----- |
| …       | …    | …  | …     |

### Minor

| Package | Tier | From | To |
| ------- | ---- | ---- | -- |
| …       | wp-core-coupled / tooling | … | … |

### Patch

| Package | Tier | From | To |
| ------- | ---- | ---- | -- |
| …       | wp-core-coupled / tooling | … | … |

Transitive changes: N packages updated in `package-lock.json` (not declared
in `package.json`).

## npm — Deferred

| Package | Tier | From | To | Reason |
| ------- | ---- | ---- | -- | ------ |
| …       | wp-core-coupled | … | … | … |

## `composer audit` + `npm audit`

- Composer: N advisories at baseline, M after. All dev-only — do not ship
  to plugin users.
- npm: N advisories at baseline, M after. All dev-side — `@wordpress/*`
  runtime JS is supplied by WP core (DEWP externalization), so no advisory
  in this lockfile executes on a plugin user's site.
- (bullet per advisory resolved by this PR with package + summary)
- (bullet per remaining advisory with package + one-line reason, or "Clean.")

## Verification

- `composer lint` — ✅ OK / ❌ (paste first ~5 errors with file:line)
- `npm run lint` — ✅ OK / ❌ (paste first ~5 errors with file:line)
- `npm run build` — ✅ OK / ❌ (paste tail of build output + suspect package)
- `build/**/*.asset.php` — ✅ no dependency-array changes / ⚠️ (paste diff)
- `build/` size — ✅ within ~10% (Nb → Mb) / ⚠️ (Nb → Mb, suspect: pkg)
- `wp plugin check` — ✅ OK / ⚪ skipped (no wp-env) / ❌ (paste new findings)
- `npm run test:php` — ✅ OK / ⚪ skipped (no wp-env) / ❌ (paste failing test)
- `npm run test:e2e` — ✅ OK / ⚪ skipped (no wp-env) / ❌ (paste failing spec)
````

Omit empty tables (e.g. drop "Major (dev only)" / "Major (tooling only)" if
nothing qualified). Always include the audit and verification sections, even
if everything passed.

Compute "Transitive changes" from the lockfile diffs. Prefer a real diff
over hand-counting `name` entries — `package-lock.json` v3 churns
`resolved` / `integrity` fields without a version moving, and
`composer.lock` churns `source.reference` / `time`. Both inflate naive
counts.

- Composer: `git diff --unified=0 composer.lock | grep -E '^\+\s*"name":' | sort -u | wc -l`
  then subtract direct-update entries. If `composer-lock-diff` is
  installed locally, use that instead.
- npm: `git diff --unified=0 package-lock.json | grep -E '^\+\s*"version":' | sort -u | wc -l`
  is a reasonable upper bound; subtract direct-update entries.

If zero, drop the line. If the number is large but no single transitive
moved by a major, that's normal lockfile churn — say so in one line
rather than enumerating.

## Notes

- Do **not** run `composer require <pkg>:<ver>`, `npm install <pkg>@<ver>`,
  or `npm update --save` to bump — they lose the constraint style and
  reorder the files. Edit the manifest then run `composer update` /
  `npm update`.
- Do **not** commit. The skill produces the PR description; the user decides
  when to commit and push.
- Do **not** use `composer audit --no-dev`, `npm audit fix`, `--force`, or
  `--legacy-peer-deps`. They mask the breakage signals this skill exists to
  capture.
- Both lockfiles will change — that is expected. Commit `composer.lock`
  alongside `composer.json` and `package-lock.json` alongside `package.json`.
- Rollback preflight + commands are in the **Workflow** preamble above —
  always run `git status` on the four manifest files before
  `git checkout HEAD --` to avoid clobbering unrelated work.
- Composer/npm runtimes: PHP resolves against `config.platform.php = "8.0"`
  in `composer.json` (safe on any host PHP ≥ 8.0). Node resolves against
  `engines.node = "24"` — `npm update` must run on Node 24. After any
  `@wordpress/scripts` bump, sanity-check `node -p "require('@wordpress/scripts/package.json').engines"`
  against `engines.node` to catch a tightened floor.
- `phpunit/phpunit: 9.6.x-dev` and `wp-phpunit/wp-phpunit: dev-master` are
  intentional dist-tag pins tracking active branches — do not "fix" them
  by rewriting to a tagged version. The 9.6 dev branch is the last
  PHPUnit line that runs under PHP 8.0 and stays compatible with the
  `wp-phpunit` master branch (which tracks WP nightlies). The
  `yoast/phpunit-polyfills` constraint must stay compatible with this
  PHPUnit line — `polyfills` 4.x supports PHPUnit 9.6, so it can move
  freely; a 5.x major (PHPUnit 10+) would force a coordinated change to
  both pins and is out of scope for this skill.
- `@wordpress/scripts`, `@wordpress/env`, and `@wordpress/eslint-plugin`
  majors warrant extra care — see the npm policy section above. Defer if
  you cannot verify locally and call that out in the PR description. The
  `wp-env` image refresh after an `@wordpress/env` major is:
  ```bash
  npm run wp-env stop
  npm run wp-env start -- --update    # double-dash separates npm args from wp-env args
  ```
- The plugin header (`Requires at least: 6.4`, `Requires PHP: 8.1`) is not in
  the dependency-bump path. Don't raise it here — that is a separate decision
  coordinated across `dekode-fundraising.php`, `.wp-env.json`, and
  `composer.json` `config.platform.php`. (For WP-core-coupled minor bumps,
  the floor matters as a per-bump compatibility check — see the npm policy.)
- **Out of scope for this skill** (do not edit, do not bump, do not flag
  as findings unless asked):
  - `.github/workflows/*.yml` — GitHub Action `uses:` pins are maintained
    separately (Dependabot or manual). Touching CI here can ship a broken
    release zip.
  - `package.json` `engines`, `private`, `scripts`, `files`, `lint-staged`,
    the `yarn` sentinel.
  - `composer.json` `minimum-stability`, `prefer-stable`,
    `config.platform.php`, `config.allow-plugins`, `repositories`,
    `replace`, `provide`, `scripts`.
  - `.nvmrc`, `.wp-env.json`, `.husky/`, `phpcs.xml.dist`, `phpunit.xml.dist`.
