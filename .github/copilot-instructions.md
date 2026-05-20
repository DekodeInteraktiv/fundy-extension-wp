# Fundy Extension (WordPress) — GitHub Copilot Instructions

You are assisting with **Dekode Fundraising for WordPress** (`fundy-extension-wp`),
the official WordPress plugin for the **Fundy** donations platform. The plugin's
job is to make it easy to drop a Fundy donation form into a WordPress site —
either through a Gutenberg block, a shortcode, or by enqueueing the
client-side bundles directly. It is **not** where forms or schemas live; it
loads the runtime assets and configures them, then gets out of the way.

At runtime the plugin:

- Registers two Gutenberg blocks (`fundy/donation-form`, `fundy/donation-receipt`).
- Registers a `[fundy_form id='…']` shortcode for classic-editor / page-builder use.
- Enqueues the `fundy-forms` JS/CSS bundles served from `FUNDY_CORE_URL`.
- Optionally enqueues the `fundy-conversion` and `fundy-tracking` scripts.
- Exposes a small set of settings (site + multisite/network) for environment
  overrides and feature toggles.

**This repo does not contain form layouts, validation rules, or the rendering
engine.** Those live in `fundy-core` (schema authoring) and `fundy-forms`
(rendering). When a task mentions form behaviour or fields, the change almost
certainly belongs in one of those repos — confirm before touching code here.

> If you only read one thing in this file, read the **House rules** section —
> those are the rules most often violated by generated code.

---

## Tech stack

- **WordPress 6.4+** target (see `Requires at least:` in
  `dekode-fundraising.php` and `.wp-env.json`). Stay compatible with this floor.
- **PHP 8.1+** (`Requires PHP: 8.1`). `composer.json` `config.platform.php` is
  pinned to `8.0` to keep dependency resolution conservative — don't raise it
  without coordinating a WP-version bump.
- **`@wordpress/scripts`** (v27) drives JS/CSS builds, ESLint, Stylelint,
  Playwright runner. Build output lands in `build/` and is **generated** —
  never hand-edit.
- **`@wordpress/env`** provides the local WordPress + MySQL Docker stack.
  `.wp-env.json` defines the dev + tests environments and the
  `FUNDY_CORE_URL` override for staging.
- **Gutenberg blocks (API v3)** declared via `block.json`. Each block lives in
  `src/blocks/<name>/` with `block.json` + `edit.js` + `editor.js` +
  `frontend.js` + `block.php`.
- **PHPUnit 9.6** + **`wp-phpunit/wp-phpunit`** + **Yoast polyfills** for PHP
  unit tests; run inside the `tests-wordpress` wp-env container.
- **Playwright** + **`@wordpress/e2e-test-utils-playwright`** for e2e tests
  driven through the wp-env site.
- **Dekode coding standards** (`dekode/coding-standards`, a PHPCS ruleset).
  `phpcs.xml.dist` references the `Dekode` ruleset — that is the source of
  truth for PHP style.
- **husky + lint-staged** wire Prettier + `wp-scripts lint-*` into the
  pre-commit hook. Don't bypass with `--no-verify`.
- **Node 24**, npm **>= 10** (see `package.json` `engines` — the `yarn` field
  intentionally errors).

There are no React/Preact app dependencies in this repo — the block editors
use `@wordpress/element` (which is React under the WP umbrella). Imports go
through `@wordpress/*` packages, not bare `react`.

---

## Architecture at a glance

```
dekode-fundraising.php   Plugin header + bootstrap. Defines constants
                         (FUNDY_VERSION, FUNDY_CORE_URL, FUNDY_SURGE_URL,
                         FUNDY_PLUGIN_URL/DIR) and requires the inc/ files.
inc/
  assets.php             wp_register_script / wp_enqueue_script for all
                         frontend bundles (fundy-config inline, fundy-forms,
                         fundy-conversion, fundy-tracking). CSP-friendly.
  head.php               <head> hooks (preconnect, early config).
  settings.php           Single-site settings: env, debug flag, dataLayer
                         toggle, tracking toggle. Reads with multisite
                         override awareness via get_setting_value().
  settings-page.php      wp-admin settings UI.
  settings-page-network.php  Multisite network admin settings UI.
  shortcodes.php         [fundy_form id='…' params='…'] handler.
src/blocks/
  donation-form/         API v3 block. block.json registers
                         fundy/donation-form. edit.js renders the editor
                         preview; editor.js is the entry built by wp-scripts.
                         block.php emits the front-end <div> the form mounts
                         into.
  donation-receipt/      Same shape as donation-form, for the receipt view.
build/                   wp-scripts output (asset.php + js + css). Generated.
tests/
  unit/
    test-assets.php      WP_UnitTestCase suites for inc/assets.php.
    config/bootstrap.php WP-PHPUnit bootstrap; loads the plugin into the
                         test WP install.
  e2e/
    test-00-settings.ts        Settings-page e2e.
    test-01-block-form.ts      Donation-form block e2e.
    test-01-block-receipt.ts   Donation-receipt block e2e.
    utils/{requestUtils,mock}.ts  Shared test plumbing.
    config/playwright.config.ts   Extends @wordpress/scripts playwright config.
languages/               .pot/.po/.mo + JSON translations (generated by
                         `composer make-pot` + `composer make-json`).
phpcs.xml.dist           Dekode PHPCS ruleset reference.
phpunit.xml.dist         Suite + bootstrap config.
.wp-env.json             Local + tests WP environment (PHP 8.1, WP latest).
```

Composer is used **only for dev tooling** (PHPCS, PHPUnit, WP-CLI i18n,
WP-PHPUnit) — the plugin has no PHP runtime dependencies. npm is used for the
JS build, lint, and e2e runner.

---

## House rules (the things to get right)

1. **WordPress coding standards via Dekode PHPCS — they are not optional.**
   - **Tabs** for indentation (PHP and JS).
   - `snake_case` for PHP functions/variables, namespaced under
     `Dekode\Fundraising\<Subsystem>`. `declare( strict_types = 1 );` at the
     top of every PHP file.
   - **Prefix calls to global functions/classes with `\`** inside namespaces
     (`\add_action(...)`, `\wp_enqueue_script(...)`, `\WP_Error`). This is
     the rule most often missed by generated code — match what the existing
     files do.
   - Run `composer lint` (`vendor/bin/phpcs .`) before declaring done.

2. **Talk to Fundy Core via constants, not hard-coded URLs.**
   - `FUNDY_CORE_URL`, `FUNDY_SURGE_URL`, `FUNDY_PLUGIN_URL`, `FUNDY_PLUGIN_DIR`,
     `FUNDY_VERSION` are defined in `dekode-fundraising.php`. Use them.
   - Allow override via the same-named env vars and via `define( … )` in
     `wp-config.php` (the resolution chain is: existing constant → `env()` →
     production default — see the top of `dekode-fundraising.php`).
   - Don't introduce new `FUNDY_*` constants without confirming — they leak
     into every install.

3. **Use the WordPress enqueue API; register before you enqueue.**
   - All script/style handles are registered in `inc/assets.php::register_assets()`
     on `wp_enqueue_scripts`. New bundles go there, not in the block PHP or
     the shortcode handler.
   - Block PHP / shortcode handlers `wp_enqueue_script( '<handle>' )` against
     a handle that's already registered.
   - `fundy-config` is a virtual handle that carries an inline JSON config —
     this is the CSP-compatible pattern. Mirror it for any new "config to JS"
     needs; don't `wp_localize_script` and don't inject `<script>` directly.

4. **`fundy/…` is the public filter/action namespace.**
   - Existing public filters: `fundy/enqueue/form_styles`, `fundy/base_url`.
     New ones in the same namespace.
   - Document new filters in `README.md` under the "Filters" section in the
     same PR.

5. **Blocks: `block.json` is the source of truth.**
   - Register blocks via `register_block_type( __DIR__ . '/build/blocks/<name>' )`
     against the built `block.json` (the build copies it). Don't hand-write
     PHP registration arrays in parallel.
   - Block names use the `fundy/` namespace (`fundy/donation-form`,
     `fundy/donation-receipt`).
   - `editorScript`, `viewScript`, `viewStyle` in `block.json` point at either
     a `file:` reference (built by wp-scripts) or a previously registered
     handle (`fundy-form-script`, `fundy-form-style`).

6. **Settings respect multisite.**
   - Single-site reads/writes go through `Dekode\Fundraising\Settings\get_setting_value()`,
     which already handles the network-vs-site override toggle.
     Don't call `get_option( 'fundy_options' )` directly in new code —
     route through the helper so multisite installs keep working.

7. **Don't commit generated files.**
   - `build/` is regenerated by `npm run build` (in CI on release).
   - `vendor/` and `node_modules/` are never committed.
   - `languages/*.pot`, `*.po`, `*.mo`, `*.json`, `*.php` are generated by
     `composer make-pot` + `composer make-json` — regenerate, don't hand-edit.

8. **WordPress + PHP compatibility is a contract.**
   - The plugin header (`Requires at least: 6.4`, `Requires PHP: 8.1`),
     `.wp-env.json` (`phpVersion`, `core`), and `composer.json`
     (`config.platform.php`) must stay coherent. If you raise one, raise the
     others in the same PR.
   - Avoid PHP features newer than the floor (no `readonly` classes, no
     `enum` improvements past 8.1 — `readonly` properties and basic enums
     are fine).

9. **JS in the editor uses WordPress packages, not bare React.**
   - Import from `@wordpress/element`, `@wordpress/blocks`,
     `@wordpress/block-editor`, `@wordpress/components`, `@wordpress/i18n`,
     `@wordpress/dom-ready`. Don't add `react` / `react-dom` to
     `package.json` — wp-scripts provides them as externals.
   - User-facing strings go through `__( '…', 'dekode-fundraising' )`.
     The text domain is `dekode-fundraising` (matches plugin header).

10. **Don't bypass wp-env for tests.**
    - PHPUnit runs inside the `tests-wordpress` container — that's what the
      `test:php` script does and what CI runs. Running phpunit on the host
      will fail (no WP test harness) or, worse, succeed against a different
      WP version than CI.

---

## Code style cheatsheet

PHP file template:

```php
<?php
/**
 * <One-line description>.
 *
 * @package dekode-fundraising
 */

declare( strict_types = 1 );

namespace Dekode\Fundraising\<Subsystem>;

if ( ! \defined( 'ABSPATH' ) ) {
	die();
}

/**
 * Hooks.
 */
\add_action( 'init', __NAMESPACE__ . '\\bootstrap' );

function bootstrap(): void {
	// …
}
```

Enqueue pattern (mirror `inc/assets.php`):

```php
\wp_register_script(
	'fundy-thing',
	\FUNDY_CORE_URL . '/path/to/thing.latest.js',
	[ 'fundy-config' ],
	\FUNDY_VERSION,
	true
);
```

Block registration (in `inc/` or a block bootstrap):

```php
\register_block_type( \FUNDY_PLUGIN_DIR . 'build/blocks/donation-form' );
```

Block editor entry (`src/blocks/<name>/editor.js`):

```js
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import metadata from './block.json';
import Edit from './edit';

registerBlockType( metadata.name, {
	edit: Edit,
} );
```

---

## Commands

| Task                              | Command                       |
| --------------------------------- | ----------------------------- |
| Install JS deps                   | `npm ci`                      |
| Install PHP dev deps              | `composer install`            |
| Start local WP (Docker)           | `npm run wp-env start`        |
| Stop local WP                     | `npm run wp-env stop`         |
| Production JS/CSS build           | `npm run build`               |
| JS/CSS dev watch                  | `npm run dev`                 |
| Lint all (js + css + format)      | `npm run lint`                |
| Format-fix (Prettier)             | `npm run format`              |
| PHP lint (PHPCS)                  | `composer lint`               |
| PHP unit tests                    | `npm run test:php`            |
| E2E (Playwright, headless)        | `npm run test:e2e`            |
| E2E with UI                       | `npm run test:e2e:debug`      |
| Build .zip for WP.org             | `npm run plugin-zip`          |
| Regenerate translations           | `composer make-pot && composer make-json` |

---

## What's out of scope for Copilot

- **Don't edit `.github/workflows/*.yml`** unless asked — release.yml,
  security-scan.yml, and wp-org-release.yml deploy to the WP.org plugin
  directory and a GitHub release; small changes can ship a broken zip.
- **Don't touch `build/`, `vendor/`, `node_modules/`, `languages/` generated
  files** — they are regenerated by their respective tools.
- **Don't change `.wp-env.json` `env.tests` mappings or `phpVersion`** without
  confirming — the test container's WP install is wired to those paths and
  the PHPUnit bootstrap depends on them.
- **Don't commit `.env*.local` files.**
- **The Fundy Core API contract lives in the `fundy-core` repo**, the runtime
  rendering lives in `fundy-forms`, the conversion script lives in
  `fundy-conversion`, and the tracking script lives in `fundy-tracking`. If
  endpoint behaviour or bundle behaviour is unclear, say so rather than
  guessing.
- The full Fundy platform spans several repos — see the top of `README.md`
  for the list.
