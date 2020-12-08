import { isPlainObject } from 'lodash';

const SEARCH_KEY = '_searchable';
const GUTTER = '--grid-gutter';
const MOUNT_POINT_CLASS = '.mount-point-container';


/**
 * Filters the list of `items` based on options selected in the `filters` object
 * @param {array} items A list of items to filter
 * @param {IFilter} options an options object for the filtering configuration
 */
export function filterItems(items, filters) {
  if (!Object.keys(filters).length) {
    return items;
  }

  return items.filter((item) => {
    for (let key in filters) {              // eg. `brand`, `category`, `status`...
      const filter = filters[key];          // IFilter;
      const filterValues = filter.filterBy; // eg. ['1906', 'LuvBuds'], ['vape', 'pen', 'flower']
      let itemValue = item[key];            // eg `LuvBuds`, 'vape'

      // TODO take care of this upstream. ie write custom filter function if itemValue is an object
      // ie.  if (typeof itemValue !== 'string' || typeof itemValue !== 'number' )
      if (isPlainObject(itemValue)) {
        itemValue = item[key].id;
      }

      if ('customFilter' in filter) {
        // custom function should return `false` when the filter logic does not match
        if (!filter.customFilter(filterValues, itemValue)) {
          return false;
        }
      }

      else {
        if (!Array.isArray(itemValue) && !~filterValues.indexOf(itemValue)) {
          return false;
        }
      }
    }

    return true;
  });
}

/**
 * Sorts an array of items
 * @param {Array} items the list of things to sort
 * @param {ISort} options an options object for the sorting configuration
 *   sortBy: the object key to sort on
 *   sortDesc: whether to sort descending or not
 *   customSorter: a custom sorting function
 *
 * https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/util/helpers.ts#L381
 */
export function sortItems(items, options) {
  const { sortBy, sortDesc, customSorter, locale='en' } = options;
  const isObject = items.length && typeof items[0] === 'object';

  if (!sortBy && isObject) {
    return items;
  }

  return [...items].sort((a, b) => {
    let sortA = a[sortBy] || a;
    let sortB = b[sortBy] || b;

    if (sortDesc) {
      [sortA, sortB] = [sortB, sortA];
    }

    if (customSorter) {
      return customSorter(sortA, sortB);
    }

    [sortA, sortB] = [sortA, sortB].map((s) => (s || '').toString().toLocaleLowerCase());

    if (sortA !== sortB) {
      const sortResult = (!isNaN(sortA) && !isNaN(sortB))
        ? Number(sortA) - Number(sortB)
        : sortA.localeCompare(sortB, locale);

      if (sortResult) {
        return sortResult;
      }
    }

    return 0;
  });
}

/**
 * Search through an array of items by searchTerm
 * @param {object[]} items to search through
 * @param {string} searchTerm to use for search
 * @param {Array<string>} fieldToSearch to search through
 */
export function searchItems(items, searchTerm, fieldToSearch = SEARCH_KEY) {
  if (!searchTerm.length) {
    return items;
  }

  function normalizeText(value) {
    return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  return items.filter((item) => {
    const text = normalizeText(item[fieldToSearch]);

    return text.indexOf(normalizeText(searchTerm)) !== -1;
  });
}

/**
 * Concatenate all searchable fields into one field
 * @param {object[]} items to search through
 * @param {Array<string>} fields to be concatenated
 */
export function searchableFields(items, fields) {
  return items.map((i) => {
    i[SEARCH_KEY] = fields.map((field) => {
      if (field.includes('.')) {
        const nestedKey = field.split('.');

        for (const key in nestedKey) {
          let value = nestedKey[key];

          if (i) {
            i = i[value];
          }
        }

        return i;
      }

      return i[field];
    }).join(' ');
  });
}



/**
 * Generates a hash code from a string
 * @param {string} s The string to generate a hash from
 */
export function hashCode(s) {
  return s.split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a; }, 0);
}

/**
 * Returns the mount point for elements that will reattach themselves, or creates one if not available
 */
export function getMountPoint() {
  const el = document.querySelector(MOUNT_POINT_CLASS);

  if (!el) {
    const div = document.createElement('div');

    div.className = MOUNT_POINT_CLASS.slice(1, MOUNT_POINT_CLASS.length);
    return document.body.appendChild(div);
  }

  return el;
}

/**
 * Calculates the distance (in px) an element overflows the page (and gutter).
 * If left aligned, returns the overflow on the right side, and vice versa
 *
 * @param {HTMLElement} element element to test page overflow
 * @return {number} offset distance, in pixels
 */
export function calculateElementOverflow(element) {
  const gutter = parseFloat(getCssVar(GUTTER));
  const elementBCR = element.getBoundingClientRect();

  // overflowing left side of the page
  if (Math.round(elementBCR.left) < gutter) {
    return gutter - Math.round(elementBCR.left);
  }

  // overflowing right side of the page
  if (Math.round(elementBCR.right) > document.documentElement.clientWidth - gutter) {
    return Math.round(elementBCR.right) - (document.documentElement.clientWidth - gutter);
  }

  return 0;
}

/**
 * Retrieves the value of a css variable
 *
 * @param {string} name name of the css var, with or without `--`
 * @return {string} value of the css var
 */
export function getCssVar(name) {
  let variable = name;

  if (variable.substr(0, 2) !== '--') {
    variable = `--${variable}`;
  }

  return getComputedStyle(document.documentElement).getPropertyValue(variable);
}
