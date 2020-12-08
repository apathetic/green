# Green-UI

![npm (tag)](https://img.shields.io/npm/v/@apathetic/green-ui/latest?color=%230072f0)

> A custom Vue component library.


The `Green-UI` framework best operates as a plugin, where components, directives, theming and storage options may be dynamically configured per environment.

## Getting Started

There are several ways to configure the framework to suit your specific needs. Configurable items include:

  * **components**: core components maybe be bundled _à la carte_, or in their entirety ([see list](#compnent-listing)).
  * **directives**: configure which directives are bundled.
  * **i18n**: translation options, language and locale.
  * **theme**: configure theme-specific options. (coming soon)
  * **storage**: setup methods to persist user-settings. There are several LocalStorage helpers which may be overridden.

The generated entry file will load all `esm` components by default. However, you may configure the framework with a few options:

```javascript
const options = {
  components: ... // provide components "à la carte"
  directives: ... // provide directives "à la carte"
  i18n: {         // i18n options
    locale: ...
    t: ...
  }
  theme: ...      // theming options
  storage: ...    // override localstorage persistence options
}
```

A sample configuration might look something like:

```javascript
// plugins/green-ui/index.js

import '@apatheticwes/green-ui/dist/green.min.css'; // optional. You may prefer to bundle this elsewhere
import Vue from 'vue';
import GreenUI, { Button, Checkbox } from '@apatheticwes/green-ui';
import i18n, { locale } from 'path/to/i18n';
import theme from 'path/to/themes/dark.json';

Vue.use(GreenUI, {
  theme,
  i18n: {
    locale,
    t: i18n.t
  },
  components: {
    Button,
    Checkbox,
  },
});

export default greenUI;
```
This example will load the core CSS stylesheet, i18n options, a dark theme, and the `Button` and `Checkbox` components.

Then, in your app's setup, simply:
```javascript
import greenUI from '@/plugins/green-ui';

// ...

Vue.use(greenUI);
```

---

## Developer Notes:

### Core files & Entry Points
* `framework.js`: is the framework `install` function (and any other framework-specific things). It registers components, themes, etc. with your Vue app.
* `index.js` is used as the main entry point to the framework. It also exports each component individually, for an _à la carte_ build. You may pull in the default export directly and `Vue.use` it (to quickly get up and running w/ all components and features); or, you may wish configure it with particular options, components, or features.


### Testing
Testing the framework uses `@vue-test-utils` under the hood. We use Jest (via `@vue/cli-plugin-unit-jest`) to run our unit-tests.

* **test command** `npm test`

## Contribution:

[Contribution guidelines](.github/CONTRIBUTING.md)


## Appendix

### Component Listing

[Visit our docs for a listing](/docs/components/README.md)

