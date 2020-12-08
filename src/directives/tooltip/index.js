const defaultPosition = 'top';
const positions = ['top', 'right', 'bottom', 'left'];

/**
 * Gets position name based on modifiers provided
 * 
 * @param {Object} modifiers Directive's binding modifiers
 * @returns {String} The position name, or the default position
 */
function getPosition(modifiers) {
  let position = defaultPosition;

  positions.forEach((pos) => {
    if (modifiers[pos]) {
      position = pos;
      return false;
    }
  });

  return position;
}

/**
 * Appends a new tooltip element to the directive element.
 * 
 * Adds .tooltip-toggle class to element.
 * 
 * @param {HTMLElement} el Directive element
 * @param {Object} binding Binding object
 * @returns {Void}
 */
function mount(el, binding) {
  if (binding.value) {
    const template = document.createElement('template');
    const tooltip = `
    <div class="tooltip tooltip--${getPosition(binding.modifiers)}" role="tooltip">
    ${ binding.value }
    </div>
    `;

    template.innerHTML = tooltip;
    el.appendChild(template.content);
    
    // Add classname to wrapper element for styling
    el.classList.add('tooltip-toggle');
    // Apply tabindex to make focusable (if it doesn't already have)
    el.tabIndex = 0;
  }
}

/**
 * Removes tooltip & cleans up any classnames added
 * 
 * @param {HTMLElement} el Directive element
 * @returns {Void}
 */
function unmount(el) {
  const tooltip = el.querySelector('.tooltip');

  el.classList.remove('tooltip-toggle');

  if (tooltip) {
    tooltip.remove();
  }
}

/**
 * Tooltip directive
 */
export const tooltip = {
  bind(el, binding) {
    mount(el, binding);
  },
  
  componentUpdated(el, binding) {
    const { oldValue, value } = binding;
 
    if (oldValue !== value) {
      unmount(el);
      mount(el, binding);
    }
  },
  
  unbind(el) {
    unmount(el);
  },
};