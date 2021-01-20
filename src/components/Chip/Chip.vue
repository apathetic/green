<template functional>
  <span
    class="badge"
    :class="[
      data.staticClass,
      props.color && $options.generateColorClass('color', props.license)
    ]"
    :title="!!props.title && props.title"
  >
    <template v-if="props.text">
      {{ props.text }}
    </template>
  </span>
</template>

<script>
  import { generateColorClass } from '@/utils/helpers';

  export default {
    name: 'z-chip',

    props: {
      /**
       * Text for title attribute
       */
      title: {
        type: String,
        default: '',
      },

      /**
       * Plaintext to be displayed
       */
      text: {
        type: String,
        default: '',
      },
    },

    generateColorClass,
  };
</script>
