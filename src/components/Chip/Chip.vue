<template functional>
  <span
    class="badge text-small bg-blue color-white pa-1 rounded"
    :class="[ data.staticClass ]"
    :title="!!props.title && props.title"
  >
    <template v-if="props.text">
      {{ props.text }}
    </template>
  </span>
</template>

<script>
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
  };
</script>
