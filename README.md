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

## Shortcode

If you do not have access to the Dekode Fundraising block, you can render any Dekode Fundraising form using the following shortcode:

```[fundy_form id='13']```

Where the `id` attribute indicates the form ID to render.

You can also define extra parameters to be passed to the frontend by using the `params` attribute, passing a serialized JSON object as a value:

```[fundy_form id='13' params='{"utm_source":123,"other_parameter":"some value"}]```

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
