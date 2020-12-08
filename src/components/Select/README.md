## Changes

### Props
* selected:
  Deprecated. Do not use. Instead, use `value`
  Rationale:
    - `selected` was meant for use with legacy `<form>`, and would transparently proxy selected values to a hidden `<select>`
    - use `value` as it's consistent w/ Vue best practices. Works w/ v-model
* options: only accepts and array of _objects_, now. For both `single` and `multiple` variants

### Slots
* ~~`display-value`~~ --> use `option` instead
* ~~`selected-display-value`~~ --> use `selected` instead

---

## Props

* `label`: The label for the component {string}

* `displayBy`: If `options` are an object, this is what prop to use for display {string}

* `trackBy`: If `options` are an object, this is what is used to track selected {string}

* `searchBy`: Default field to search on. Currently, values (even single ones) must be in an array {array}

* `placeholder`: Placeholder text {string}

* `error`: Error text to display. Replaces `hint` (if provided) & adds error styling provide an array of errors. At present, we only surface one at a time.

* `hint`: text to display below the input

* `icon`: Sets a custom icon {string}


* `options`: The list of all options to select from {Object[]}

* `lazy`: Lazily evaluate and set component `options`. Will execute upon user mouseover. {Function}

* `value`: Sets the currently-selected value(s) for the component Accepts an array of Objects, or a single Object (if multiple is false) {Object[] || Object}

* `selected`: **deprecated** provided for backwards compatibility. use `value`, instead

* `searchable`: will surface the search input, if true { Boolean }
* `disabled`: will disable the component, if true { Boolean }
* `single`: will function as a single select, if true { Boolean }


## Events
* `input`: when options are changed, emits the current list of selected items
* `add`: when an option is _added_, emits the added option.
* `remove`: when an option is _removed_, emits the removed option
  <!-- - open: when the g-select is opened -->
  <!-- - close: when the g-select is closed -->

## Slots:

* `option`: for options in the dropdown
  i.e. <slot name="option">

* `selected` for the selected option. If multiple, this would be a tag/chip; if single it is the display
 i.e. <slot name="selected">

