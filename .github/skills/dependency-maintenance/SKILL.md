---
name: dependency-maintenance
description: "ACTIVATE for routine dependency maintenance on this WordPress-plugin project (both Composer and npm sides): bumping packages in composer.json + package.json, sweeping outdated libraries, running composer/npm audit, and producing a maintenance PR summary. Trigger when the user asks to update/upgrade dependencies, do a 'dep bump', refresh lockfiles against new releases, check for security advisories, or prepare a dependency-maintenance PR. Do NOT use for adding a brand-new package, removing one, switching @wordpress/scripts or @wordpress/env major versions, bumping the WordPress / PHP compatibility floor, or non-Composer/non-npm package managers."
license: MIT
metadata:
  author: dekode
---

# Dependency Maintenance (Composer + npm)

Lift every safely-upgradeable Composer + npm dep, defer risky ones with
documented reasons, output one paste-ready PR description covering both
sides. Composer is dev-tooling only (PHPCS, PHPUnit, wp-phpunit,
polyfills, wp-cli/i18n) — the plugin has no PHP runtime deps. npm
covers JS build (`@wordpress/scripts`), local WP env (`@wordpress/env`),
editor WP packages, Playwright, Prettier, husky/lint-staged.

Run as two phases of one workflow: apply both, verify, write one PR
description.

## Policy

### Composer

| Bump  | `require` (runtime) | `require-dev` |
| ----- | ------------------- | ------------- |
| patch | apply               | apply         |
| minor | apply               | apply         |
| major | **defer** (manual)  | apply         |

`require` is empty besides `php: ">=8.0"` — leave it (coordinated with
`dekode-fundraising.php` and `.wp-env.json`). Every Composer bump here is
`require-dev`.

### npm

Every npm dep lives under `devDependencies`, but the label understates
risk:

1. **`@wordpress/*` packages are externalized, not bundled.**
   `@wordpress/scripts` runs `@wordpress/dependency-extraction-webpack-plugin`
   (DEWP), which rewrites `import … from '@wordpress/x'` into a `wp.x`
   global supplied by WP core at runtime, and emits
   `build/**/*.asset.php` listing those handles as enqueue dependencies.
   The npm package contributes types, peer-version metadata, and the
   externals mapping — the actual JS in the browser is whatever the
   user's WP install ships. Inspect
   `build/blocks/*/{editor,frontend}.asset.php` to see this (entries
   like `wp-element`, `wp-block-editor`, `react`).
2. **The compat axis is "does the npm package's API match the WP-core
   version we declare as our floor"** (`Requires at least: 6.4` in
   `dekode-fundraising.php`), not bundled bytes. A `@wordpress/element`
   6.x bump requiring React 18 hooks WP 6.4 doesn't ship will break the
   editor even though `build/` bytes look identical.

Two-tier classification:

**WP-core-coupled** (imported from `src/` — DEWP externalizes, must stay
API-compatible with the WP-core floor):

- `@wordpress/dom-ready`, `@wordpress/element` (in `package.json`)
- `@wordpress/blocks`, `@wordpress/block-editor`, `@wordpress/components`,
  `@wordpress/i18n` (imported in `src/` but not declared — provided
  transitively by `@wordpress/scripts`, resolved at runtime from WP core)
- anything else under `src/**/*.{js,ts,tsx}` named `@wordpress/*`

**Build / tooling only** (not in `src/`):

- `@wordpress/scripts`, `@wordpress/env`, `@wordpress/eslint-plugin`,
  `@wordpress/stylelint-config`, `@wordpress/e2e-test-utils-playwright`
- `@playwright/test`, `prettier`, `eslint-plugin-prettier`,
  `stylelint-order`, `husky`, `lint-staged`, `typescript`

Unsure: `grep -rE "from ['\"]<package>['\"]" src/`. Matches →
WP-core-coupled; no matches → tooling.

| Bump  | WP-core-coupled    | Build / tooling only |
| ----- | ------------------ | -------------------- |
| patch | apply              | apply                |
| minor | apply (see below)  | apply                |
| major | **defer** (manual) | apply                |

For WP-core-coupled **minors**, verify the new version's
`peerDependencies` and CHANGELOG don't drop WP 6.4 support before
applying. If the minor requires WP ≥ 6.5+, defer with that reason. WP
packages follow WP core's cadence — a minor often corresponds to a
WP-core version bump.

WP-core-coupled majors carry API breaks needing editor-level smoke on
the floor WP version. Tooling majors are blast-radius-limited — apply
if build + lint + tests pass, but list explicitly in the PR. These
tooling majors warrant **extra care**:

- **`@wordpress/scripts`** — can change webpack config, the DEWP
  externals table, eslint defaults, the bundled Playwright version, or
  `build/**/*.asset.php` shape. Always inspect the asset.php diff
  (Phase C) and run `npm run test:e2e` before green.
- **`@wordpress/env`** — rebuilds the wp-env Docker image. Run
  `npm run wp-env stop && npm run wp-env start -- --update` (double-dash
  separates npm args from wp-env args), then `npm run test:php`.
- **`@wordpress/eslint-plugin`** — typically adds rules. Build still
  passes; `npm run lint` may fail on previously-clean code. Fixing the
  flagged code is **out of scope for this skill** — surface failures
  and defer the bump.

---

## Workflow

Run sequentially. Stop and report if a step fails inexplicably.

**No-op short-circuit.** If `composer outdated --direct` returns empty
`installed`, `npm outdated` returns `{}`, and both audits are clean vs
baseline, print:

> No dependency changes needed — `composer outdated`, `npm outdated`,
> and both audits are clean.

Then stop without producing the PR description.

**Rollback.** `git status` the four manifests first — `git checkout HEAD --`
destroys uncommitted edits:

```bash
git status -- composer.json composer.lock package.json package-lock.json
git checkout HEAD -- composer.json composer.lock package.json package-lock.json
composer install --no-interaction
npm ci
```

If `git status` shows unrelated work, stash or commit first and surface
it — don't overwrite.

**Runtimes.**

- **PHP**: `config.platform.php = "8.0"` is the resolver pin (the plugin
  header advertises `Requires PHP: 8.1`; the platform pin is intentional
  per `copilot-instructions.md` — leave it). Resolver respects it on any
  host PHP ≥ 8.0.
- **Node**: `engines.node = "24"`. Run `npm update` on Node 24 or you'll
  get a different `package-lock.json` than CI.

**Stability is permissive.** `composer.json` has `minimum-stability: dev`
without `prefer-stable: true` (needed for the `phpunit/phpunit: 9.6.x-dev`
and `wp-phpunit/wp-phpunit: dev-master` pins). Dev versions of transitive
deps can therefore appear in `composer.lock`. After A3, grep the lock
diff for new `"version": "dev-*"` / `"version": "*-dev"` entries and
surface them with `(transitive dev-version)` — they may indicate a tagged
release rolled back to a dev branch.

### Phase A — Composer

#### A1. Baseline audit + outdated

```bash
composer audit --no-interaction --no-ansi --format=json || true
composer outdated --direct --no-interaction --no-ansi --format=json
```

`composer audit` exits non-zero on any advisory — `|| true` keeps the
workflow moving so A4 can diff against this baseline.

**User impact:** `require` is empty except for `php`, so every Composer
advisory is `require-dev` and **does not ship to plugin users** — only
contributors/CI are affected. State this in the Phase D audit summary.

`composer outdated --direct` returns
`{"installed": [{"name", "version", "latest", "latest-status", ...}]}`.
Route on `latest-status`:

- `semver-safe-update` — fits constraint; only lockfile moves, don't
  edit `composer.json`.
- `update-possible` — exceeds constraint; needs a `composer.json` edit.
- `up-to-date` — skip.

Classify the bump from `version → latest`:

- `X.Y.Z → X.Y.Z'` = patch
- `X.Y.Z → X.Y'.Z'` = minor
- `X.Y.Z → X'.Y'.Z'` = major
- any `0.y.z → 0.y'.z'` = effectively-major

#### A2. Edit composer.json (only for `update-possible`)

Preserve the existing constraint operator. This project uses `~X.Y.Z`
(tilde, three components, patch-only). Examples:

- `"dekode/coding-standards": "~6.4.0"` → 6.5.0 → `"~6.5.0"`
- `"yoast/phpunit-polyfills": "~4.0.0"` → 5.0.0 → `"~5.0.0"`
  (dev-tier major; apply but list explicitly).

**Defer (record in the deferred table)** for intentionally-pinned entries:

- `"phpunit/phpunit": "9.6.x-dev"` — 9.6 dev branch.
- `"wp-phpunit/wp-phpunit": "dev-master"` — master branch alias.
- Anything else using a dist-tag, `dev-*`, inline alias, or matching
  `repositories` / `replace` / `provide`.

Do not change `minimum-stability`, `prefer-stable`, `config.platform.php`,
or the `php` constraint under `require`.

#### A3. Apply

```bash
composer update --with-all-dependencies --no-interaction --no-ansi
```

If resolution fails (peer/conflict), diagnose before reverting:

```bash
composer why-not <package> <target-version>
composer depends <package>
```

The immediate blocker isn't always the bumped package — a transitive
constraint may be the real cause. Revert the right entry in
`composer.json`, defer it with the `why-not` / `depends` summary, and
re-run. Do **not** widen unrelated constraints.

#### A4. Post-update audit

```bash
composer audit --no-interaction --no-ansi --format=plain || true
```

Diff against A1's baseline. Mark remaining advisories
`(dev-only — does not ship to plugin users)`.

### Phase B — npm

#### B1. Baseline audit + outdated

```bash
npm audit --json || true
npm outdated --json || true
```

Both exit non-zero in normal operation (`npm audit` on any finding,
`npm outdated` whenever anything is outdated).

**User impact:** Every dep is `devDependencies`, and `@wordpress/*`
runtime is supplied by WP core (DEWP externalization). So an `npm audit`
advisory is either:

- **build/tooling** (Playwright, Prettier, husky, webpack transitives)
  — contributor/CI machines only.
- **WP-core-coupled** (e.g. `@wordpress/element`) — still doesn't ship
  as JS, but indicates the WP package version we declare compatibility
  against had an upstream advisory; cross-check WP core release notes.

Neither ships JavaScript executing on a plugin user's site. State in the
Phase D summary.

`npm outdated` returns
`{"<pkg>": {"current", "wanted", "latest", "type", ...}}`. Route by
`current` / `wanted` / `latest`:

- `current < wanted` — fits constraint; only lockfile moves.
- `current === wanted < latest` — exceeds constraint; needs a
  `package.json` edit.
- absent — up-to-date.

`type` is **always `devDependencies`** here — route on the
WP-core-coupled vs tooling tier instead. Unsure → grep `src/`. Treat any
`0.y.z` as effectively-major; defer on WP-core-coupled only.

#### B2. Edit package.json (only when constraint blocks)

Preserve the existing operator. Project uses `~X.Y.Z` for every entry.
Examples:

- `"@playwright/test": "~1.58.0"` → 1.59.0 → `"~1.59.0"`
- `"prettier": "~3.8.0"` → tooling major 4.0.0 → `"~4.0.0"`

Other operators (`^`, exact pin, dist-tag, git/file/link URL, npm
alias): follow the file convention. Do not change `engines`, `private`,
`scripts`, `yarn`, `files`, or `lint-staged`.

**Defer (record in the deferred table)**:

- WP-core-coupled major or `0.y → 0.y+1`.
- WP-core-coupled minor whose new `peerDependencies` / CHANGELOG drops
  WP 6.4 support.
- Constraints with: exact pin (`"1.2.3"`), dist-tag
  (`"latest"`/`"next"`/`"canary"`), URL/protocol
  (`git+`/`github:`/`file:`/`link:`/`http(s):`), npm alias
  (`"npm:other@1.2.3"`), workspace protocol, matching
  `overrides`/`resolutions`, or `peerDependencies` /
  `optionalDependencies` with non-version targets.

For majors of `@wordpress/scripts`, `@wordpress/env`, and
`@wordpress/eslint-plugin`, follow the **extra care** checklist in the
npm policy section above — don't apply blindly even though they're
tooling-tier.

#### B3. Apply

```bash
npm update 2>&1 | tee /tmp/npm-update.log
```

Do **not** pass `--save` (rewrites constraint style), `--force`, or
`--legacy-peer-deps`.

If resolution fails (`ETARGET`, `ERESOLVE`, peer-dep conflict), diagnose
first:

```bash
npm explain <package>
npm ls <package>
```

The failing package is often a transitive; the right edit is usually
its parent. Revert, defer with the `npm explain` summary, re-run.

**Capture peer-dep warnings.** Successful runs can still emit
`npm warn ERESOLVE … peer dep` lines — the canary for majors you should
have deferred. Grep `/tmp/npm-update.log` for `npm warn` and include
non-empty warnings in the **Notes** column of the matching row in Phase D.

After the update, run `npm install` once — should be a near no-op.

#### B4. Post-update audit

```bash
npm audit --json || true
```

Diff against B1; same dev-only / no-shipped-JS framing. Do **not** run
`npm audit fix` — it silently rewrites both files and introduces
constraint-style drift.

### Phase C — Verification (both phases)

Run in order; stop on the first hard failure.

#### C1. Snapshot `build/` before rebuilding

```bash
mkdir -p /tmp/dep-maint
find build -name '*.asset.php' -print0 | xargs -0 -I{} sh -c 'echo "=== {} ==="; cat "{}"' > /tmp/dep-maint/asset-before.txt 2>/dev/null || true
du -sb build > /tmp/dep-maint/size-before.txt 2>/dev/null || true
```

If `build/` is empty (clean checkout), skip — C3's diff trivially
becomes "new build".

#### C2. Lint + rebuild

```bash
composer lint
npm run lint
npm run build
```

#### C3. Diff the shipped artifact

`build/**/*.asset.php` is the actual runtime contract — its
`dependencies` array drives WP's enqueue graph, and its `version` hash
invalidates caches for every user. A `@wordpress/scripts` / DEWP /
WP-core-coupled bump can change either even when the JS source didn't.

```bash
find build -name '*.asset.php' -print0 | xargs -0 -I{} sh -c 'echo "=== {} ==="; cat "{}"' > /tmp/dep-maint/asset-after.txt
diff -u /tmp/dep-maint/asset-before.txt /tmp/dep-maint/asset-after.txt > /tmp/dep-maint/asset.diff || true
du -sb build > /tmp/dep-maint/size-after.txt
```

Surface in Phase D:

- **`dependencies` array changes** (added/removed
  `wp-*`/`react`/`react-dom`) — paste the diff; warrants reviewer
  attention.
- **`version` hash changes only** with identical `dependencies` — note
  as "asset hashes refreshed (expected)"; don't paste.
- **Bundle size delta > ~10%** — paste before/after + suspect package.

#### C4. Plugin Check + tests

```bash
npm run wp-env start
npm run wp-env run cli -- wp plugin check dekode-fundraising
npm run test:php
npm run test:e2e
```

Plugin Check is shipped by `.wp-env.json` (pulls `plugin-check.zip`) —
the WP.org plugin directory's own static analyser. New failures after a
bump usually mean DEWP/wp-scripts altered the asset graph in a way
WP.org review would flag. Surface, don't fix.

If `wp-env` can't start, record Plugin Check / `test:php` / `test:e2e`
as ⚪ skipped with reason. **Don't assume CI will catch it** —
`.github/workflows/` covers release packaging (`release.yml`) and a
nightly Snyk dev-dep scan (`security-scan.yml`); there is **no
PHPUnit / Playwright / Plugin Check / WP-floor matrix job**. If you
skip, say so in the PR so a reviewer runs it before merging.

Failure reporting: lint → first ~5 errors with `file:line`; build →
tail of wp-scripts output (it names the failing module); PHPUnit →
failing `Test\d+::method`; Playwright → failing spec. Name the suspect
upgraded package. Don't fix — surface.

### Phase D — Final output

Print **only** the PR description as the last message — no preamble.
Format:

````markdown
# Dependency Maintenance

Routine Composer + npm sweep. WP-core-coupled majors deferred per policy;
tooling/dev majors applied (listed explicitly below).

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

Transitive changes: N packages updated in `composer.lock` (not declared
in `composer.json`).

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

Transitive changes: N packages updated in `package-lock.json` (not
declared in `package.json`).

## npm — Deferred

| Package | Tier | From | To | Reason |
| ------- | ---- | ---- | -- | ------ |
| …       | wp-core-coupled | … | … | … |

## `composer audit` + `npm audit`

- Composer: N → M advisories. All dev-only — does not ship to plugin
  users.
- npm: N → M advisories. All dev-side — `@wordpress/*` runtime is
  supplied by WP core (DEWP externalization), so no advisory in this
  lockfile executes on a plugin user's site.
- (bullet per resolved advisory: package + summary)
- (bullet per remaining advisory: package + one-line reason, or "Clean.")

## Verification

- `composer lint` — ✅ OK / ❌ (first ~5 errors with file:line)
- `npm run lint` — ✅ OK / ❌ (first ~5 errors with file:line)
- `npm run build` — ✅ OK / ❌ (tail of build output + suspect package)
- `build/**/*.asset.php` — ✅ no dependency-array changes / ⚠️ (paste diff)
- `build/` size — ✅ within ~10% (Nb → Mb) / ⚠️ (Nb → Mb, suspect: pkg)
- `wp plugin check` — ✅ OK / ⚪ skipped (no wp-env) / ❌ (new findings)
- `npm run test:php` — ✅ OK / ⚪ skipped / ❌ (failing test)
- `npm run test:e2e` — ✅ OK / ⚪ skipped / ❌ (failing spec)
````

Omit empty tables. Always include audit and verification sections, even
when everything passed.

Compute "Transitive changes" from lockfile diffs — prefer a real diff
over name-counting (`package-lock.json` v3 churns `resolved`/`integrity`;
`composer.lock` churns `source.reference`/`time` — both inflate naive
counts):

- Composer:
  `git diff --unified=0 composer.lock | grep -E '^\+\s*"name":' | sort -u | wc -l`
  minus direct-update entries. If `composer-lock-diff` is installed, use
  that.
- npm:
  `git diff --unified=0 package-lock.json | grep -E '^\+\s*"version":' | sort -u | wc -l`
  minus direct-update entries (upper bound).

Drop the line if zero. If large but nothing moved by a major, say
"normal lockfile churn" in one line.

## Notes

- **Do not** `composer require <pkg>:<ver>`, `npm install <pkg>@<ver>`,
  or `npm update --save` to bump — they lose constraint style and
  reorder files. Edit the manifest then `composer update` / `npm update`.
- **Do not** commit. Skill produces the PR description; user commits.
- **Do not** use `composer audit --no-dev`, `npm audit fix`, `--force`,
  or `--legacy-peer-deps` — they mask the breakage signals this skill
  exists to capture.
- Both lockfiles will change — expected. Commit `composer.lock` with
  `composer.json`, `package-lock.json` with `package.json`.
- Rollback preflight + commands in the **Workflow** preamble — always
  `git status` the manifests before `git checkout HEAD --`.
- After any `@wordpress/scripts` bump, sanity-check
  `node -p "require('@wordpress/scripts/package.json').engines"` vs
  `engines.node` for a tightened floor.
- `phpunit/phpunit: 9.6.x-dev` and `wp-phpunit/wp-phpunit: dev-master`
  are intentional — do not rewrite to tagged versions. The 9.6 dev
  branch is the last PHPUnit line running under PHP 8.0 and stays
  compatible with the `wp-phpunit` master branch (tracks WP nightlies).
  `yoast/phpunit-polyfills` 4.x supports PHPUnit 9.6 (moves freely);
  5.x (PHPUnit 10+) would force a coordinated change to both pins —
  out of scope.
- `wp-env` image refresh after an `@wordpress/env` major:

  ```bash
  npm run wp-env stop
  npm run wp-env start -- --update    # double-dash separates npm args from wp-env args
  ```

- Plugin header (`Requires at least: 6.4`, `Requires PHP: 8.1`) is not
  in the bump path — coordinated separately across
  `dekode-fundraising.php`, `.wp-env.json`, and `composer.json`
  `config.platform.php`. (The floor matters as a per-bump compat check
  for WP-core-coupled minors — see npm policy.)
- **Out of scope** (do not edit, do not bump, do not flag unless asked):
  - `.github/workflows/*.yml` — GitHub Action `uses:` pins maintained
    separately (Dependabot / manual). Touching CI can ship a broken
    release zip.
  - `package.json`: `engines`, `private`, `scripts`, `files`,
    `lint-staged`, the `yarn` sentinel.
  - `composer.json`: `minimum-stability`, `prefer-stable`,
    `config.platform.php`, `config.allow-plugins`, `repositories`,
    `replace`, `provide`, `scripts`.
  - `.nvmrc`, `.wp-env.json`, `.husky/`, `phpcs.xml.dist`,
    `phpunit.xml.dist`.
