# Fundy Extension for WordPress

Provides a WordPress integration for displaying donation forms.

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
