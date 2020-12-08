<template>
  <div :class="['input', {'has-error': errorText}]" data-test="g-textarea">
    <label class="input-label">{{ label }}</label>
    <textarea
      class="input-field pa-1"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      :name="name"
      :readonly="readonly"
      v-bind="attrs"
      @input="$emit('input', $event.target.value)"
    ></textarea>
    <span v-if="hint" class="hint text-small">{{ hint }}</span>
  </div>
</template>

<script>
  export default {
    name: 'g-textarea',

    inheritAttrs: false,

    props: {
      label: {
        type: String,
        default: ' ',
      },
      value: {
        type: [String, Number],
        default: '',
      },
      name: {
        type: String,
        default: '',
      },
      placeholder: {
        type: String,
        default: '',
      },
      errorText: {
        type: String,
        default: '',
      },
      hintText: {
        type: String,
        default: '',
      },
      readonly: Boolean,
      disabled: Boolean,
    },

    computed: {
      attrs() {
        return {
        // ...this.$attrs
        };
      },
      hint() {
        return (this.errorText ? this.errorText : this.hintText) || '';
      },
    },
  };
</script>
