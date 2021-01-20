<template functional>
  <transition-group name="fade" mode="out-in">
    <transition-group
      v-show="props.results.length"
      tag="ul"
      key="items"
      name="slide-y"
    >
      <slot></slot>
    </transition-group>
    <z-loading v-if="props.loading" key="loading" />
    <z-empty-state v-else-if="!props.results.length" key="empty" />
  </transition-group>
</template>

<script>
  export default {
    name: 'LoadingManager',
    props: {
      loading: Boolean,
      results: {
        type: Array,
        default: () => [],
      },
    },
  };
</script>
