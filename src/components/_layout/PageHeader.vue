<template>
  <header :class="$style['page-header']">
    <div :class="$style['page-header__description']">
      <slot name="title">
        <h1>{{ title }}</h1>
      </slot>

      <slot name="description">
        <p v-if="description">{{ description }}</p>
      </slot>
    </div>

    <div :class="$style['page-header__actions']" v-if="hasActions">
      <div class="button-grid">
        <slot name="secondary-action">
        </slot>
        <slot name="primary-action">
        </slot>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'PageHeader',

    props: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        default: '',
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
  @import './_page-header.scss';
</style>
