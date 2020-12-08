<template>
  <div class="input input--radio" data-test="g-radio">
    <input
      type="radio"
      :disabled="disabled"
      :id="id"
      :name="name"
      :value="value"
      v-model="internalValue"
    />

    <label :for="id">
      {{ label }}
    </label>
  </div>
</template>

<script>
  export default {
    name: 'g-radio',
    model: {
      prop: 'checked',
      event: 'change',
    },
    props: {
      checked: {
        type: [String, Number],
        default: undefined,
      },
      disabled: {
        type: Boolean,
      },
      id: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        default: '',
      },
      name: {
        type: String,
        default: '',
      },
      value: {
        type: [String, Number],
        default: '',
      },
    },
    computed: {
      internalValue: {
        get() {
          return this.checked;
        },
        set(value) {
          this.$emit('change', value);
        },
      },
    },
  };
</script>
