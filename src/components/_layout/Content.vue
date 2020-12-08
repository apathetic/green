<template>
  <div :class="$style['content']">
    <header :class="$style['header']" v-if="title || hasActions">
      <h2 class="flex__item">{{ title }}</h2>

      <div v-if="hasActions" class="button-grid align-middle" :class="$style['actions']">
        <slot name="secondary-action"></slot>

        <slot name="primary-action"></slot>
      </div>
    </header>
    <slot></slot>
  </div>
</template>

<script>
  /**
   * Individual section within PageContent
   */
  export default {
    name: 'Content',

    props: {
      title: {
        type: String,
        default: '',
      },
      /**
       * TODO: If true, title section works as accordion toggle.
       */
      collapsible: {
        type: Boolean,
      },
    },

    computed: {
      hasActions() {
        return this.$slots['primary-action'] || this.$slots['secondary-action'];
      },
    },
  };
</script>

<style lang="scss" module>
  .content {
    padding-bottom: space(4);
  }

  .content + .content {
    border-top: border(thin);
    padding-top: space(4);
  }

  .header {
    padding-bottom: space(3);
    padding-top: var(--grid-gutter);

    @include breakpoint('md') {
      display: flex;
      padding-top: 0;
    }
  }

  .actions {
    margin-top: space(2);

    @include breakpoint('md') {
      margin-top: 0;
    }
  }
</style>
