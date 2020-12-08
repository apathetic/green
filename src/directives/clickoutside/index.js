/**
 * Determine whether a click occurred outside the referenced
 * element(s) or not. Trigger the directive's handler if so.
 */
export const clickoutside = {
  bind(el, binding) {
    el._handler = (e) => {
      if (!el.contains(e.target) && binding.value) {
        binding.value(e);
      }
    };

    document.body.addEventListener('click', el._handler);
  },
  unbind(el) {
    document.body.removeEventListener('click', el._handler);
  },
};


