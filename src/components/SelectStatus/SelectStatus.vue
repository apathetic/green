<template>
  <z-select
    ref="select"
    single
    :class="$style.select"
    :icon="disabled ? 'empty' : 'caret-down'"
    :disabled="disabled"
    :label="label"
    :options="statusOptions"
    :value="valueOption"
    :placeholder="placeholder"
    @input="onInput"
  >
    <div class="flex align-left align-middle" slot="selected" slot-scope="props">
      <span
        ref="status"
        class="rounded-full mr-1"
        :class="[
          $style.status,
          { [`bg-${props.option.color}`]: props.option.color },
          { 'bg-grey': !props.option.color && !props.option.hexCode }
        ]"
        :style="{ background: props.option.hexCode }"
      ></span>
      <span class="text-truncate">{{ props.option.name }}</span>
    </div>

    <div class="flex align-left align-middle" slot="option" slot-scope="props">
      <span
        class="rounded-full mr-1"
        :class="[
          $style.status,
          { [`bg-${props.option.color}`]: props.option.color },
          { 'bg-grey': !props.option.color && !props.option.hexCode }
        ]"
        :style="{ background: props.option.hexCode }"
      ></span>
      <span class="text-truncate">{{ props.option.name }}</span>
    </div>

  </z-select>
</template>


<script>
  import Select from '@/components/Select';

  export default {
    name: 'z-select-status',

    components: {
      'z-select': Select,
    },

    props: {
      label: {
        type: String,
        required: false,
        default: '',
      },
      placeholder: {
        type: String,
        required: false,
        default: 'Select Status',
      },
      statusOptions: {
        type: Array,
        required: true,
      },
      value: {
        type: [Number, String, Boolean],
        required: true,
      },
      disabled: Boolean,
    },

    computed: {
      valueOption() {
        const { value, statusOptions } = this;

        return statusOptions.find( (status) => status.id === value );
      },
    },

    methods: {
      onInput(option) {
        this.$emit('input', option.id);
      },
    },
  };
</script>

<style lang="scss" module>
  .select {
    :global(.g-select .is-disabled > .input-field) {
      background-color: colors('shades', 'lightest-grey') !important;
      border-color: transparent !important;

      @include breakpoint('lg') {
        background-color: colors('shades', 'white') !important;
      }
    }
  }

  .status {
    flex-shrink: 0;
    height: 10px;
    width: 10px;
  }
</style>
