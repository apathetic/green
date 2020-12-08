import locale from '@/locale';
import storageService from '@/storage';

let installed = false;

export function install(Vue, args = {}) {
  if (installed) { return; }

  const {
    components,
    directives,
    theme,
    ...config
  } = args;

  // directives
  for (const name in directives) {
    const directive = directives[name];

    directive && Vue.directive(name, directive);
  }

  // components
  for (const key in components) {
    const component = components[key];
    const name = component.name;

    component && Vue.component(name, component);
  }

  // locale
  locale.use(i18n && i18n.locale);
  locale.i18n(i18n && i18n.t);

  // storage
  storageService.use(storage);

  // theme
  Theme.use(theme);

  installed = true;
}


var Theme = {
  use: function(theme) {
    const spacers = theme.spacer;
    // ...

    this.setGroup('color', theme.color);
  },

  setGroup(type, items) {
    Object.keys(items).forEach((group) => {
      const props = items.group;

      Object.keys(props).forEach((name) => {
        const value = props.name;

        this.setVar(`--${type}-${group}-${name}`, value);
      });
    });
  },

  setVar(name, value) {
    document.documentElement.style.setProperty(name, value);

    // var rootStyles = document.styleSheets[0].cssRules[0].style;
    // rootStyles.setProperty('--theme-' + name, value + (unit || ''));
  },

};



