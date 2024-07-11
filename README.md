# Fundraising Extension for WordPress

Provides a WordPress integration for displaying donation forms.

## Repositories

The fundraising platform has many components in different repositories:

- [fundraising-core](https://github.com/DekodeInteraktiv/fundraising-core)
- [fundraising-analytics](https://github.com/DekodeInteraktiv/fundraising-analytics)
- [fundraising-interface](https://github.com/DekodeInteraktiv/fundraising-interface)
- [fundraising-form-renderer](https://github.com/DekodeInteraktiv/fundraising-form-renderer)
- [fundraising-extension-wp](https://github.com/DekodeInteraktiv/fundraising-extension-wp)

## Made by

- Peter Booker <peter.booker@dekode.no>
- Stian Øveråsen <stian.overasen@dekode.no>

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

When setting up on client sites, if you want to connect to a non-production Fundy environment, you will need to define the `FUNDY_CORE_URL` constant in WordPress. You might want to set it to the staging environment `https://fundy-stage-be.do.dekodes.no`.

If you do not do this, it will automatically connect to the production Fundy environment.

For local development you can edit this constant in the `.wp-env.json` file and then restart the wp-env environment.
