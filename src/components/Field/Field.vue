<template>
  <div :class="['input', {'has-error': hasError}]">
    <label class="input-label" v-if="label">{{ label }}</label>
    <slot v-bind="$attrs"></slot>
    <span v-if="helperText" class="input-hint text-small">{{ helperText }}</span>
  </div>
</template>

<script>
  export default {
    name: 'g-field',
    props: {

      errorText: {
        type: String,
        default: '',
      },

      hintText: {
        type: String,
        default: '',
      },

      label: {
        type: String,
        default: '',
      },

      disabled: Boolean, // this should be proxied via $attrs

      errors: {
        type: Array,
        default: () => [],
      },
    },


    computed: {
      hasError() {
        return !!(this.errorText || this.errors && this.errors.length);
      },

      helperText() {
        const { errors, errorText, hintText } = this;

        return errors.length ? `${ errors[0].$message }` :
          errorText ? errorText :
          hintText ? hintText :
          '';
      },
    },
  };
</script>


<style lang="scss">
  .has-error {
    .input-label {
      animation: 1s shake 1; // sleepy
    }
  }
</style>