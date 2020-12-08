import { hashCode } from './helpers';

const PREFIX = 'g-';

/**
 * Persist an item to localStorage. Generate a hash based on the current URL,
 * and the name of the component setting the data.
 * @param {string} name The component's name
 * @param {object} data The data to persist
 */
export function setItem(name, data) {
  const key = hashCode(`${name}-${location.pathname}`);

  localStorage.setItem(PREFIX+key, JSON.stringify(data));
}

/**
 * Retrieve an item from localStorage, previously saved by `setItem`.
 * @param {string} name A key for lookup
 */
export function getItem(name) {
  const key = hashCode(`${name}-${location.pathname}`);
  const data = localStorage.getItem(PREFIX+key);

  return JSON.parse(data || '{}');
}