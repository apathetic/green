<template>
  <div :class="['input', 'z-select', {'has-error': error}]">
    <label v-if="label" class="input-label">{{ label }}</label>

    <!-- -SELECT -->
    <div
      v-clickoutside="dismiss"
      role="listbox"
      :aria-controls="'listbox-'+_uid"
      :aria-expanded="isActive.toString()"
      :aria-label="placeholder"
      :class="[$style['z-select'], {'is-active': isActive}, {'is-single': single}, {'is-disabled': disabled}]"
      @keydown="onKeyDown"
      @keyup.esc="dismiss"
    >

      <!-- CONTENT -->
      <div
        class="input-field pa-0"
        ref="content"
        tabindex="0"
        :class="$style.content"
        :id="'listbox-'+_uid"
        @focusin="open"
        @focusin.once="lazy && (options = lazy())"
        @focusout="!($refs.content.contains($event.relatedTarget)) && dismiss()"
      >
        <!-- CHIPS -->
        <ul
          ref="chips"
          :class="[$style.chips]"
          class="pr-4"
          @click.stop
        >

          <!-- PLACEHOLDER -->
          <li
            v-if="!internalValue.length"
            class="text-truncate px-1 mr-0"
            :class="$style.placeholder"
          >
            {{ placeholder }}
          </li>

          <!-- [TODO] use g-chip, here -->
          <li
            v-for="(option, index) of internalValue"
            class="text-truncate"
            :class="[single ? $style.selected : $style.chip]"
            :key="index"
          >
            <slot name="selected" :option="option">
              {{ option[displayBy] || option }}
              <button
                tabindex="-1"
                :class="$style.remove"
                @keypress.enter.prevent="remove(option)"
                @mousedown.prevent.stop="remove(option)"
              >
                <z-icon name="close" icon="close" class="icon--small" />
              </button>
            </slot>
          </li>
        </ul>

        <!-- TOTAL -->
        <span :class="[$style['total'], {'hidden': !isIntersecting || isActive || internalValue.length < 2}]">...{{ internalValue.length }} selected</span>

        <!-- TOGGLE -->
        <z-icon
          v-if="icon"
          :class="$style.icon"
          :name="icon"
          @mousedown.prevent="isActive ? dismiss() : open()"
        />

        <!-- DRAWER -->
        <transition name="fade">
          <div
            v-show="isActive && !disabled"
            :class="$style.options"
            @click.stop
          >

            <!-- SEARCH -->
            <div v-if="searchable" class="flex align-middle pr-1 border-b border-blue">
              <input
                v-model="searchTerm"
                autocomplete="off"
                class="no-border"
                placeholder="Search"
                ref="search"
                spellcheck="false"
                type="text"
                :class="$style['search']"
              />
              <z-icon name="search" class="color-light" />
            </div>

            <!-- OPTIONS -->
            <ul class="options my-1 bg-white w-full">

              <li
                v-for="(option, index) in filteredOptions"
                :class="optionClass(option, index)"
                :key="option.id"
                @mouseenter.self="setIndex(index)"
                @click="select(option)"
              >
                <slot name="option" :option="option">
                  {{ option[displayBy] || option }}
                </slot>

                <z-icon v-if="isSelected(option)" name="check" class="color-blue ml-auto" />
              </li>
              <li v-show="!filteredOptions.length" class="ma-1 pa-1 cursor-default">No options</li>
            </ul>

          </div>
        </transition>

      </div>

    </div>

    <span v-if="message" class="hint text-small">{{ message }}</span>

  </div>
</template>


<script>
  import { isPlainObject } from 'lodash';
  import { searchItems, searchableFields } from '@/utils/helpers';
  import { clickoutside } from '@/directives';
  import { KEY_CODES } from '@/constants';

  export default {
    name: 'z-select',

    inheritAttrs: false,
    directives: { clickoutside },

    props: {
      /**
       * The label for the component.
       * @type {string}
       */
      label: {
        type: String,
        default: '',
      },
      /**
       * If `options` are an object, this is what prop to use for display.
       * @type {string}
       */
      displayBy: {
        type: String,
        default: 'name',
      },
      /**
       * If `options` are an object, this is what is used to track selected.
       * @type {string}
       */
      trackBy: {
        type: String,
        default: 'id',
      },
      /**
       * Default field to search on. Currently, values (even single ones) must be in an array.
       * @type {array}
       */
      searchBy: {
        type: [String, Array],
        default: () => ['name'],
      },
      /**
       * Placeholder text.
       * @type {string}
       */
      placeholder: {
        type: String,
        default: 'Select option',
      },
      /**
       * Error text to display. Replaces `hint` (if provided) & adds error styling.
       * TODO: provide an array of errors. At present, we only surface one at a time.
       */
      error: {
        type: [String, Array],
        default: '',
      },
      /**
       * Hint text to display below the input
       */
      hint: {
        type: String,
        default: '',
      },
      /**
       * Sets a custom icon.
       * @type {string}
       */
      icon: {
        type: [String, Boolean],
        default: 'caret-down',
      },
      /**
       * The list of all options to select from.
       * @type {Object[]}
       */
      options: {
        type: Array,
        default: () => [],
      },
      /**
       * Lazily evaluate and set component `options`. Will execute upon user mouseover.
       * @type {Function}
       */
      lazy: {
        type: Function,
        default: undefined,
        validator(value) {
          return Array.isArray(value());
        },
      },


      /**
       * Sets the currently-selected value(s) for the component.
       * Accepts an array of Objects, or a single Object (if multiple is false)
       * @type {Object[] | Object}
       */
      value: {
        type: [Array, Object],
        default: () => [],
      },
      selected: {
        type: [Array, Object],
        default: undefined,
        validator(value) {
          console.warn('-Select: use `value` instead of `selected`. The latter is for use with <form> elements on legacy pages.');
          return true;
        },
      },

      searchable: Boolean,
      disabled: Boolean,
      single: Boolean,
    },

    mounted() {
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(
          (entries) => { this.isIntersecting = entries[0].intersectionRatio < 1; },
          { threshold: 1 }, // we want to know when the child is _not_ 100% contained (i.e. less than 1.0)
        ).observe(this.$refs.chips);
      }
    },

    data() {
      if (this.selected) { this.value = this.selected; }

      return {
        internalValue: Array.isArray(this.value) ? this.value : [this.value],
        searchTerm: '',
        activeIndex: -1,
        isActive: false,
        isIntersecting: false,
      };
    },

    computed: {
      internalOptions() {
        const { options, searchBy, searchable } = this;
        let OPTIONS = options;

        // if `options` is an array... but not an array of objects
        if (!isPlainObject(options[0])) {
          OPTIONS = options.map((name, id) => ({ name, id }) );
        }

        searchable && searchableFields(OPTIONS, searchBy);

        return OPTIONS;
      },

      filteredOptions() {
        return searchItems(this.internalOptions, this.searchTerm);
      },

      message() {
        return (this.error ? this.error : this.hint) || '';
      },
    },

    watch: {
      value: {
        handler(v) {
          this.internalValue =
            (Array.isArray(v)) ? v :
            (Object.keys(v).length) ? [v] :
            [];
        },
        immediate: true,
      },

      internalValue(value) {
        this.$emit('input', this.single ? this.internalValue[0] : value);
      },

      searchTerm(value) {
        this.$emit('search', value);
      },
    },

    methods: {

      /**
       * Adds (or selects) an option.
       * @param {Object} option The selected option
       */
      select(option) {
        if (this.disabled) { return; }

        if (!this.isSelected(option)) {
          if (this.single) { this.internalValue = []; }

          this.internalValue.push(option);
          this.$emit('add', option);
        } else {
          this.remove(option);
        }

        if (this.single) {
          this.dismiss();
        }
      },

      /**
       * Removes (or un-selects) an option.
       * @param {Object} option The option to be removed
       */
      remove(option) {
        if (this.disabled) { return; }

        const index = this.internalValue.indexOf(option);

        this.internalValue.splice(index, 1);
        this.$emit('remove', option, index);
      },

      /**
       * Opens the `options` drawer and provides focus.
       */
      open() {
        if (this.isActive) { return; }

        this.isActive = true;

        if (this.searchable) {
          this.$nextTick(() => { this.$refs.search.focus(); });
        }
      },

      /**
       * Closes the drawer and cleans up a few settings.
       */
      dismiss() {
        this.isActive = false;
        this.searchTerm = '';
        this.$refs.content.blur(); // if the component remains in focus, clicking it again will not open the options list
      },

      /**
       * Sets the `activeIndex` on hover, so that the user may then fine-tune
       * their selection with the arrow keys.
       */
      setIndex(index) {
        this.activeIndex = index;
      },

      /**
       * Handles all user keyboard input on the Dropdown.
       * @param {Event} e The native keydown event.
       */
      onKeyDown(e) {
        const { filteredOptions, activeIndex, isActive } = this;

        if (e.keyCode === KEY_CODES.ESCAPE) {
          this.dismiss();
        }
        else if (e.keyCode === KEY_CODES.DOWN && activeIndex < filteredOptions.length - 1) {
          isActive && this.activeIndex++;
        }
        else if (e.keyCode === KEY_CODES.UP && activeIndex > -1) {
          isActive && this.activeIndex--;
        }
        else if (e.keyCode === KEY_CODES.ENTER && activeIndex !== -1) {
          isActive && this.select(filteredOptions[activeIndex]);
        }
        else { return; }

        e.preventDefault(); // if keyDown did something / we didn't return
      },

      /**
       * Dynamically sets classes on an `option` in the drawer.
       * @param {Object} option The `option` for which to generate classes
       * @param {number} index The index of the `option` in the list of `options`
       */
      optionClass(option, index) {
        return {
          [this.$style['option']]: true,
          'is-selected': this.isSelected(option),
          'is-highlighted': this.activeIndex == index,
        };
      },

      /**
       * Finds out if the given item is already present in the selected options
       * @param {Object} option The item to check
       * @returns {boolean} Returns true if element is selected
       */
      isSelected (option) {
        return this.internalValue.indexOf(option) > -1;
      },
    },
  };
</script>


<style lang="scss" module>
  $MIN_DRAWER_WIDTH: 200px; // TODO, this number
  $MAX_DRAWER_HEIGHT: 300px; // TODO, this number. Share w/ dropdown, date, etc
  $CHIP_HEIGHT: 22px; // TODO, this.

  .z-select {
    height: input('height'); // ie. space(4)
  }

  .content {
    cursor: pointer;
    height: input('height');
    overflow: hidden;
    position: absolute;

    &:focus-within {
      border-color: colors('brand', 'blue') !important;
    }
  }

  .placeholder {
    color: colors('text', 'disabled');
  }

  // --------------
  // SELECTIONS
  // --------------

  .icon {
    color: colors('shades', 'dark-grey');
    cursor: pointer;
    position: absolute;
    right: space(1);
    top: space(1);
  }

  .chips {
    $HALF_SPACE: space(1) / 2; // distribute (or split?) the margin between chip and chips container. TODO?

    padding: $HALF_SPACE;

    // chip AND placeholder AND selected:
    > li {
      cursor: pointer;
      height: $CHIP_HEIGHT;
      margin: $HALF_SPACE;
      max-width: 100%;
    }
  }

  .selected {
    color: colors('text', 'medium');
    padding: 0 space(1);

    .remove {
      display: none;
    }
  }

  .chip {
    align-items: center;
    background-color: colors('brand', 'blue');
    border-radius: $border-radius;
    color: colors('text', 'white');
    display: inline-block;
    font-size: typo('button', 'size');
    line-height: space(2);
    padding: space(1);
    padding-right: $CHIP_HEIGHT + space(1);
    position: relative;
    vertical-align: bottom; // IMPORTANT.

    .remove {
      padding: 4px;
      position: absolute;
      right: 0;
      top: 0;

      &:hover {
        background: rgba(0, 0, 0, 0.1); // TEMP
      }
    }
  }

  .total {
    /* stylelint-disable */
    display: block;
    font-weight: typo('button', 'weight');
    line-height: typo('button', 'line-height');
    position: absolute;
    right: space(3);
    white-space: nowrap;
    z-index: z-index('content');
    //
    // -- design TBD ---
    top: 0;
    left: 0;
    bottom: 0;
    color: colors('text', 'link');
    background: white;
    padding: space(1);
    /* stylelint-enable */
  }

  // --------------
  // DROPDOWN
  // --------------

  .search {
    box-shadow: none !important;
  }

  .options {
    border-top: border(thin, colors('brand', 'blue'));
    max-height: $MAX_DRAWER_HEIGHT;
    overflow: auto;
  }

  .option {
    align-items: center;
    border-radius: $border-radius;
    cursor: pointer;
    display: flex;
    line-height: space(3);
    margin: space(1);
    padding: space(1);

    &:global(.is-highlighted) {
      background: colors('shades', 'light-grey');
    }

    &:global(.is-selected) {
      background: lighten-color(colors('brand', 'blue'));
      color: colors('text', 'medium');
    }
  }

  // --------------
  // STATES
  // --------------

  :global(.is-disabled) {
    &.g-select :global(.input-field) {
      @include input-disabled;
    }

    .chips > li {
      cursor: default;
    }

    .chip {
      background: grey;
      color: colors('text', 'white');
    }
  }

  :global(.is-active) {
    .content {
      @include elevation(1);

      cursor: default;
      height: auto;
      min-width: $MIN_DRAWER_WIDTH;
      overflow: visible;
      z-index: z-index('control');
    }

    .placeholder {
      cursor: default;
    }

    :global(.icon--caret-down) { transform: rotate(180deg); }
  }
</style>
