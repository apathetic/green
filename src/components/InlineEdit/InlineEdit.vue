<template>
  <div>
    <div class="inline-edit" :class="inline ? $style['inline']: ''" data-test="g-inline-edit">
      <z-input
        v-model="internalValue"
        ref="llInput"
        :disabled="disabled"
        :placeholder="`${originalValue}`"
        :type="type"
        @blur="save"
        @focus="edit"
        @keydown.esc="dismiss"
        @keyup.enter="blurInput"
      >
        <template slot="prepend">
          <div v-if="isPrepended" :class="$style['input-symbol']">
            <slot name="prepend">
            </slot>
          </div>
        </template>


        <template slot="append">
          <div v-if="isAppended" :class="$style['input-symbol']">
            <slot name="append">
            </slot>
          </div>
        </template>
      </z-input>

      <z-button
        v-if="inline && !editing && !disabled"
        class="edit-button"
        icon
        :class="[$style['edit-button'], isPrepended ? $style['prepended-button'] : $style['appended-button']]"
        @click.stop="edit"
      >
        <z-icon name="edit" />
      </z-button>
    </div>

    <span v-if="showOldValue" :class="[$style['original-value'], 'color-medium mb-0 hint text-strike-through']">
      {{ formattedOriginalValue }}
    </span>
  </div>
</template>


<script>
  import { money, percent } from '@/utils/i18n';

  export default {
    name: 'z-inline-edit',

    props: {
      /**
       * If true, editing is disabled
       */
      disabled: {
        type: Boolean,
      },
      /**
       * Formats the value displayed.
       * Options: currency, percent
       */
      format: {
        type: String,
        default: '',
      },
      /**
       * DOM `type` property to be passed to `g-input`.
       * Use type="number" for localized numbers
       */
      type: {
        type: String,
        default: 'text',
      },
      /**
       * The current value for the component
       */
      value: {
        type: [String, Number],
        default: undefined,
      },
      /**
       * Used to display a crossed out value below the component
       * if the current `value` does not match `oldValue`.
       */
      oldValue: {
        type: [String, Number],
        default: undefined,
      },

      /**
       * Adds specific styling when used
       */
      inline: Boolean,
    },

    data() {
      return {
        editing: false,
        originalValue: this.oldValue || this.value, // this value gets set once and never changes
        internalValue: this.value, // the _current_ value. This is a temporary value, used while editing
      };
    },

    computed: {
      formattedOriginalValue() {
        return this.formatValue(this.originalValue);
      },

      showOldValue() {
        return 1
          && (this.oldValue || this.oldValue === 0)
          && (this.oldValue !== this.internalValue);
      },

      isAppended() {
        return !!this.$slots.append;
      },

      isPrepended() {
        return !!this.$slots.prepend;
      },
    },

    watch: {
      value(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.internalValue = newVal;
        }
      },
    },

    methods: {
      /**
       * Toggles edit state off
       */
      dismiss() {
        this.internalValue = this.value || this.oldValue;
        this.editing = false;
        this.blurInput();
      },

      /**
       * Toggles edit state on
       */
      edit() {
        this.editing = true;
        this.focusInput();
      },

      /**
       * Formats the value based on `format`
       */
      formatValue(value) {
        switch (this.format) {
        case 'currency':
          return money({
            amount: value,
          });
        case 'percent':
          return percent(value / 100);
        default:
          return value;
        }
      },

      /**
       * This method saves the current value of the input field by `$emit`ing.
       * If the new value is empty, it reverts `internalValue` to the original value.
       */
      save() {
        this.internalValue = !(this.internalValue === '')
          ? this.internalValue
          : this.originalValue;

        /**
         * Emitted when saving the value
         *
         * @type {string} New value
         */
        this.$emit('input', this.internalValue);
        this.editing = false;
        this.blurInput();
      },

      focusInput() {
        this.$refs.llInput.focus();
      },

      blurInput() {
        this.$refs.llInput.blur();
      },

    },
  };
</script>


<style lang="scss" module>
  .original-value {
    padding-left: input(padding-x);
    padding-right: icon(default, width) + input(padding-x);
  }

  .edit-button {
    position: absolute;
    top: -4px;
    visibility: hidden;
  }

  .inline {
    position: relative;

    input {
      border: none !important;
      color: colors('brand', 'blue') !important;

      &:focus {
        background: colors('shades', 'light-grey') !important;
        box-shadow: none !important;
      }
    }

    &:focus-within {
      .input-symbol {
        display: block !important;
      }
    }

    &:hover {
      input {
        background: colors('shades', 'light-grey') !important;
        box-shadow: none !important;
      }

      .edit-button {
        visibility: visible;
      }

      .input-symbol {
        display: none;
      }
    }
  }

  .prepended-button {
    left: 0;
  }

  .appended-button {
    right: 0;
  }
</style>
