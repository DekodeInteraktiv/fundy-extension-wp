# Fundy Extension for WordPress

Provides a WordPress integration for displaying various fundraising related content, like donation forms and receipts.

## Repositories

The fundy platform has many components in different repositories:

- [fundy-core](https://github.com/DekodeInteraktiv/fundy-core)
- [fundy-surge](https://github.com/DekodeInteraktiv/fundy-surge)
- [fundy-interface](https://github.com/DekodeInteraktiv/fundy-interface)
- [fundy-forms](https://github.com/DekodeInteraktiv/fundy-forms)
- [fundy-extension-wp](https://github.com/DekodeInteraktiv/fundy-extension-wp)
- [fundy-worker-schema](https://github.com/DekodeInteraktiv/fundy-worker-schema)
- [fundy-client-styling](https://github.com/DekodeInteraktiv/fundy-client-styling)

## Made by

- Peter Booker <peter.booker@dekode.no>
- Stian Øveråsen <stian.overasen@dekode.no>

## Compatibility

This plugin needs to be compatible with as wide a range of WordPress versions as possible. It is currently working with WordPress 6.0 to 6.7.

Compatibility should be kept in mind while developing new features.

## Environment Variables

You can define the env var `FUNDY_CORE_URL` to connect to a non-production Fundy environment. For example you can set it to the staging environment with `https://stage.fundy.cloud/core`.

For local development you can edit this constant in the `.wp-env.json` file and then restart the wp-env environment.

## Filters

* `fundy/enqueue/form_styles` (bool) - Whether to enqueue the Fundy form styles. Default is true.
* `fundy/base_url` (string) - Used to modify the base API URL.

## Shortcode

If you do not have access to the Fundy block, you can render any Fundy form using the following shortcode:

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
