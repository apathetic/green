<template functional>
  <span
    class="badge"
    :class="[
      data.staticClass,
      !!props.license && $options.generateColorClass('license', props.license)
    ]"
    :title="!!props.title && props.title"
  >
    <template v-if="props.license">
      {{ $options.formatLicenseTypeText(props.license) }}
    </template>
    <template v-if="props.text">
      {{ props.text }}
    </template>
  </span>
</template>

<script>
  import { generateColorClass, formatLicenseTypeText } from '@/utils/helpers';

  export default {
    name: 'g-chip',

    props: {
      /**
       * License type to be displayed, e.g. 'Medical', 'Recreational'
       */
      license: {
        type: String,
        default: '',
      },

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

    formatLicenseTypeText,
    generateColorClass,
  };
</script>
