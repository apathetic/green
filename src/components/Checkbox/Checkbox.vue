<template>
  <div class="input input--checkbox" data-test="g-checkbox">
    <input
      type="checkbox"
      :disabled="disabled"
      :id="id"
      :indeterminate.prop="indeterminate"
      :name="name"
      :value="value"
      v-model="internalValue"
    />

    <label :for="id">
      <span>{{ label }}</span>
    </label>
  </div>
</template>

<script>
  import { hashCode } from '@/utils/helpers';

  export default {
    name: 'z-checkbox',
    model: {
      prop: 'checked',
      event: 'change',
    },
    props: {
      /**
       * The current checked value, can be a boolean or an array of values
       */
      checked: {
        type: [Boolean, Array],
        default: false,
      },
      /**
       * Whether the checkbox is disabled
       */
      disabled: {
        type: Boolean,
      },
      /**
       * Unique ID for the checkbox, required for accessibility purposes
       */
      id: {
        type: [String, Number],
        default: () => hashCode(Math.random().toString()),
      },
      /**
       * Label text to display with checkbox
       */
      label: {
        type: String,
        default: '',
      },
      /**
       * HTML name property
       */
      name: {
        type: String,
        default: '',
      },
      /**
       * Value associated with checkbox, when it is `checked`.  This value is
       * used to compare against `checked` property when passed as an array.
       */
      value: {
        type: [String, Number],
        default: '',
        validator(value) {
          if (typeof value === 'boolean') {
            console.warn('-Checkbox: use `checked` to toggle the state; `value` is what will be set if `checked` is true');
            return false;
          }

          return true;
        },
      },

      /**
       * The current indeterminate value
       */
      indeterminate: {
        type: Boolean,
        default: false,
      },
    },

    computed: {
      internalValue: {
        get() {
          return this.checked;
        },
        set(value) {
          /**
           * Change event - emits new checked value
           * @type {boolean,array} New `checked` value
           */
          this.$emit('change', value);
        },
      },
    },
  };
</script>
