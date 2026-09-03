# Dekode Fundraising Extension for WordPress

A WordPress plugin for displaying various fundraising related content, like donation forms and receipts. It requires a Dekode Fundraising subscription to use, learn more about [Dekode Fundraising](https://intro.fundy.cloud).

## Repositories

The Dekode Fundraising platform has many components in different (private) repositories - [full list](https://github.com/search?q=topic%3Afundy+org%3ADekodeInteraktiv+fork%3Atrue&type=repositories):

## Compatibility

This plugin needs to be compatible with as wide a range of WordPress versions as possible. It currently requires WordPress 6.4.

Compatibility should be kept in mind while developing new features.

## Environment Variables

You can define the env var `FUNDY_CORE_URL` to connect to a non-production Dekode Fundraising environment. For example you can set it to the staging environment with `https://stage.fundy.cloud/core`.

For local development you can edit this constant in the `.wp-env.json` file and then restart the wp-env environment.

## Filters

* `fundy/enqueue/form_styles` (bool) - Whether to enqueue the Dekode Fundraising form styles. Default is true.
* `fundy/base_url` (string) - Used to modify the base API URL.
* `fundy/config/custom_css_url` (string|string[]) - Override the client stylesheet URL(s) injected into Dekode Fundraising forms (the `customCssUrl` key of `window.FundyConfig`). Receives the resolved URL per the precedence in "Form styling" below; an empty value omits the key.
* `fundy/load_form_assets_in_head` (bool) - Force (or prevent) loading the form script/style in `<head>` with preload hints. Defaults to automatic detection on singular pages.

## Form styling

Two settings under Settings → Dekode Fundraising → Advanced control the stylesheet injected into the forms (they render inside a shadow root, so host-page CSS does not reach them):

* **Theme** - a theme deployed for your organization in Fundy. The stylesheet URL is resolved from the Fundy API when the settings are saved (shown under the select), never at page render time.
* **Custom CSS URL** - an explicit stylesheet URL, also the local development loop.

Precedence: the custom CSS URL wins when set, otherwise the selected theme's URL, otherwise nothing. The winner is emitted as `window.FundyConfig.customCssUrl` and can be overridden with the `fundy/config/custom_css_url` filter.

## Shortcode

If you do not have access to the Dekode Fundraising block, you can render any Dekode Fundraising form using the following shortcode:

```[fundy_form id='13']```

Where the `id` attribute indicates the form ID to render.

You can also define extra parameters to be passed to the frontend by using the `params` attribute, passing a serialized JSON object as a value:

```[fundy_form id='13' params='{"utm_source":123,"other_parameter":"some value"}]```

You can select a styling variation for the form with the `variation` attribute, matching the `is-style-*` block styles available on the Donation Form block:

```[fundy_form id='13' variation='compact']```

Note: URL parameter keys are restricted to letters, digits, `_` and `-` (max 64 characters); values are capped at 500 characters. Entries outside those limits are dropped at render time.

## Notes & accepted trade-offs

* **Remote bundles without SRI.** The `fundy-forms`, `fundy-conversion`, and `fundy-tracking` scripts load from `assets.fundy.cloud` under rolling tags (`*.latest.js`), so Subresource Integrity hashes are impossible by design. This is an accepted supply-chain trade-off: the CDN origin is treated as trusted, the same way the Fundy API itself is.
* **Head-load detection gap.** Early (in-`<head>`) loading of the form assets relies on `has_block()` / `has_shortcode()` against the raw post content, which cannot see forms inside synced patterns or reusable blocks (`core/block` references). Those pages fall back to the standard footer `viewScript` path — the form still renders, just without the preload fast path. Use the `fundy/load_form_assets_in_head` filter to force the fast path for such pages.
* **Block color supports style the wrapper only.** The form itself renders inside a shadow root with its own styles, so block *background* color shows behind the form; text color would not reach inside the form and is therefore not offered.
* **Forms REST proxy.** The block editor lists available forms via `GET /wp-json/fundy/v1/forms` (users with `edit_posts`), which calls the Fundy API server-side. The organization API token never leaves PHP.

## Setup

You can get up and running with a few steps (requires Docker):

```bash
npm ci
npm run wp-env start
```

You can then build the project with:

```bash
npm run build
```

## Tests

### End-to-end testing (Playwright)

E2E tests live in the `tests/e2e` folder.

```bash
npm run test:e2e
```

Run the above command to run the tests and get a report in your console.

```bash
npm run test:e2e:debug
```

Run the above command to launch the Playwright UI to manually run and debug the tests individually.

### Unit testing (PHPUnit)

Unit tests live in the `tests/unit` folder.

```bash
npm run test:php
```

Run the above command to run the tests and get a report in your console.
