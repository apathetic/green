<template>
  <div :class="['input', {'has-error': errorText}]" data-test="g-input">
    <label
      v-if="label"
      :for="id"
      class="input-label"
    >{{ label }}</label>
    <div class="relative">
      <input
        v-bind="attrs"
        v-model="internalValue"
        v-on="listeners"
        ref="inputElement"
        type="text"
        :autocomplete="autocomplete"
        :class="[isPrepended ? $style['input-prepended'] : '', isAppended ? $style['input-appended'] : '', 'input-field']"
        :disabled="disabled"
        :id="id"
        :placeholder="placeholder"
        :readonly="readonly"
        @change="handleChange"
        @input="handleInput"
      />
      <div v-if="isPrepended" class="input__symbol input__symbol--prepend font-weight-bold">
        <slot name="prepend">
        </slot>
      </div>
      <div v-if="isAppended" class="input__symbol input__symbol--append font-weight-bold">
        <slot name="append">
        </slot>
      </div>
    </div>
    <span v-if="hint" class="hint text-small">{{ hint }}</span>
  </div>
</template>

<script>
  import uniqueId from 'lodash/uniqueId';
  import { convertDecimal, decimalSeparator, sanitizeDecimal } from '@/utils/i18n';

  export default {
    name: 'z-input',

    inheritAttrs: false,

    props: {
      /**
       * Autocomplete takes in a string of off or on
       */
      autocomplete: {
        type: String,
        default: 'off',
      },
      /**
       * Label to render on top of input.
       * Render a space for respecting vertical alignment
       * relative to other inputs.
       */
      label: {
        type: [Boolean, String],
        default: ' ',
      },
      /**
       * Value for input
       */
      value: {
        type: [String, Number],
        default: '',
      },
      /**
       * For distinguishing between text & number internally
       * input type will always be `text` (for localization)
       */
      type: {
        type: String,
        default: 'text',
      },
      /**
       * Placeholder text
       */
      placeholder: {
        type: String,
        default: '',
      },
      /**
       * Error text to display. Replaces `hintText` (if provided) & adds error styling.
       */
      errorText: {
        type: String,
        default: '',
      },
      /**
       * Hint text to display below the input
       */
      hintText: {
        type: String,
        default: '',
      },
      /**
       * DOM `readonly` prop to pass to input
       */
      readonly: Boolean,
      /**
       * DOM `disabled` prop to pass to input
       */
      disabled: Boolean,
      /**
       * Unique ID for the Input, required for accessibility purposes
       */
      id: {
        type: String,
        default: () => `input-${uniqueId()}`,
      },

    },

    data() {
      return {
        decimal: decimalSeparator,
        /**
         * Localizes the initial value when a number
         * */
        internalValue: this.isNumber && (this.value || this.value === 0) ?
          convertDecimal(this.value, decimalSeparator) : this.value,
      };
    },

    computed: {
      attrs() {
        return {
          ...this.$attrs,
        };
      },
      listeners() {
        const { change, input, ...listeners } = this.$listeners;

        return listeners;
      },
      hint() {
        return (this.errorText ? this.errorText : this.hintText) || '';
      },
      isAppended() {
        return !!this.$slots.append;
      },
      isPrepended() {
        return !!this.$slots.prepend;
      },
      isNumber() {
        return this.type === 'number';
      },
      parsedValue() {
        if (this.isNumber) {
          return this.parseNumber();
        }

        return this.internalValue;
      },
    },

    watch: {
      value(newValue, oldValue) {
        if (newValue !== oldValue && newValue !== this.internalValue && newValue !== this.parseNumber()) {
          // Handle `value` prop change
          this.internalValue = this.format(newValue);
        }
      },
    },

    methods: {
      /**
       * Formats the input based on conditions
       * @param {number|string} value the value to format
       */
      format(value) {
        if (this.isNumber) {
          return sanitizeDecimal(value, this.decimal);
        }

        return value;
      },
      /**
       * Fired after focusing out of input, if value has changed
       * @type {string} The input value
       */
      handleChange(event) {
        this.$emit('change', this.parsedValue);
      },

      /**
       * Fired when typing on input
       * @type {string} The input value
       */
      handleInput(event) {
        let value = event.target.value;

        this.internalValue = this.format(value);

        this.$emit('input', this.parsedValue);
      },
      /**
       * Converts the localized number to a valid number (to emit).
       * 12,50 > 12.50
       * @returns {number|string} number or empty string (for empty input)
       */
      parseNumber() {
        let value = this.internalValue;

        if (!this.isNumber) {
          return value;
        }

        if (this.decimal !== '.') {
          value = convertDecimal(value, '.');
        }

        // Empty value converts to 0 with NumberFormat, so return '';
        if (`${value}`.length) {
          value = Intl.NumberFormat('en-US', {
            style: 'decimal',
            maximumFractionDigits: 7,
            useGrouping: false,
          }).format(value);
        } else {
          return '';
        }

        // Ensure valid number, otherwise clear value
        return isNaN(value) ? '' : parseFloat(value);
      },

      focus() {
        this.$refs.inputElement.focus();
      },

      blur() {
        this.$refs.inputElement.blur();
      },
    },
  };
</script>

<style lang="scss" module>
  .input-prepended {
    padding-left: input(height) + space(1) !important;
  }

  .input-appended {
    padding-right: input(height) + space(1) !important;
  }
</style>
