import get from 'lodash/get';
import messages from './en-US';
import format from './format';

let locale = 'en-US';
let i18nHandler;

/**
 * Returns a translation based on translation path
 * @param {string} path Translation path (foo.bar.baz)
 * @param {object} params Any params used in the translation message
 */
function translate(path, params) {
  // Lookup translation
  const value = get(messages, path);

  // Return translation, otherwise the path
  return value ? format(value, params) : path;
}

/**
 * Calls the provided translation method `config.i18n.t` if provided, or the built-in
 * @param {...(string|object)} args
 * @param {string} path Translation path (foo.bar.baz)
 * @param {object} params Any params used in the translation message
 * @returns {string} Translation message
 */
function t(...args) {
  const value = i18nHandler && i18nHandler(...args);

  // If value exists, but translation doesn't (returns translation key format (xx.xx)),
  // then fallback to default
  if (value && !/^\w{2,}\.\w{2,}/.test(value)) {
    return value;
  }

  // Default English message
  return translate(...args);
}

/**
 * Sets the locale
 * @param {string} l locale
 */
function use(l) {
  locale = l || locale;
}

/**
 * Sets the translate function `t()`
 * @param {function} fn Translate function `t()`
 */
function i18n(fn) {
  i18nHandler = fn;
}

export default { use, i18n };
export { locale, t };
