/**
 * Focus the HTMLElement upon insertion into the DOM if an `input` or `textarea`;
 * otherwise, look for the first instance of one of these and focus it.
 */
export const autofocus = {
  inserted(el) {
    if (!/input|textarea/i.test(el.nodeName)) {
      el = el.querySelector('input,textarea');
    }

    el && el.focus();
  },
};

export default autofocus;