/**
 * The v-sticky directive makes an element sticky and toggles the "is-sticky" class when stickiness changes.
 * Note: the "is-sticky" class is user-defined and therefore varies in usage
 * @example
 * // sticks to the top of the screen
 * v-sticky
 * @example
 * // sticks 60px from the top of the screen
 * v-sticky="60" or v-sticky:top="60"
 * @example
 * // sticks 0px from the left of the screen
 * v-sticky:left
 */


/**
 * Create an instance of window.IntersectionObserver and begin observing the element's position
 * Note: the instance is saved on the element under _stickyObserver so that it can be easily disconnected later
 * @param {Object} config
 * @param {Object} config.element - the HTMLElement that is sticky
 * @param {Number} [config.position] - where the element should stick
 * @param {Number} [config.offset] - space from edge of screen in pixels when sticky
 */
function observeStickiness({ element, position = 'top', offset = 0 }) {
  const topMargin = `${position === 'top' ? -(offset + 1) : 0}px`;
  const rightMargin = `${position === 'right' ? -(offset + 1) : 0}px`;
  const bottomMargin = `${position === 'bottom' ? -(offset + 1) : 0}px`;
  const leftMargin = `${position === 'left' ? -(offset + 1) : 0}px`;

  element._stickyObserver = new window.IntersectionObserver(updateStickyStyles, {
    root: null,
    threshold: 1.0,
    rootMargin: `${topMargin} ${rightMargin} ${bottomMargin} ${leftMargin}`,
  }); // InteractionObserver docs: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver

  element.style.position = 'sticky';
  element.style[position] = `${offset}px`;
  element._stickyObserver.observe(element);
}

/**
 * Stop observing, disconnect the InteractionObserver instance, and prepare for instance for garbage collection
 * @param {Object} element - an HTMLElement which may have a _stickyObserver property
 */
function removeSticky(element) {
  element.classList.remove('is-sticky');

  if (element._stickyObserver) {
    element._stickyObserver.unobserve(element);
    element._stickyObserver.disconnect();
    element._stickyObserver = undefined;
  }
}

/**
 * This is the callback function for the IntersectionObserver; it toggles the "is-sticky" class
 * @param {Object[]} entries - The IntersectionObserverEntry objects being observed. https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry
 */
function updateStickyStyles(entries = []) {
  entries.forEach((entry) => {
    // The target element is "intersecting" with the root element when it is not touching the nav bar
    entry.target.classList.toggle('is-sticky', !entry.isIntersecting);
  });
}

export const sticky = {
  inserted(el, binding, vnode) {
    observeStickiness({
      element: el,
      position: binding.arg,
      offset: binding.value,
    });
  },
  unbind(el, binding, vnode) {
    removeSticky(el);
  },
  componentUpdated(el, binding, vnode) {
    removeSticky(el);
    observeStickiness({
      element: el,
      position: binding.arg,
      offset: binding.value,
    });
  },
};

export default sticky;
