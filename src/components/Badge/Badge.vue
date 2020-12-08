<template functional>
  <span
    :class="[
      data.staticClass,
      data.class,
      $style['badge'],
      'bg-blue',
      'color-white',
      'font-weight-bold'
    ]"
  >
    {{ props.content }}
  </span>
</template>

<script>
  export default {
    name: 'g-badge',

    props: {
      /**
       * The content we'll display in the Badge
       */
      content: {
        type: [Number, String],
        required: true,
        default: '',
      },
    },
  };
</script>

<style lang="scss" module>
  .badge {
    border-radius: 10px;
    line-height: 1rem;
    padding: 3px 8px;
    text-align: center;
    white-space: nowrap;
  }
</style>
