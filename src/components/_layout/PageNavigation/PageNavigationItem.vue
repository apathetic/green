<template>
  <router-link
    v-if="to"
    role="tab"
    tag="li"
    :data-id="index"
    exact-active-class="is-active"
    :to="to"
    @click.native="handleClick"
  >
    <a class="g-tabs__link">{{ label }}</a>
  </router-link>
  <li
    v-else
    role="tab"
    :aria-selected="isActive"
    :class="(isActive ? 'is-active' : '')"
    :data-id="index"
  >
    <a
      class="g-tabs__link"
      :href="href"
      @click="handleClick"
    >
      {{ label }}
    </a>
  </li>

</template>

<script>
  export default {
    name: 'PageNavigationItem',

    props: {
      /**
       * Private/inherited - Item index.
       */
      index: {
        type: Number,
        required: true,
      },
      /**
       * Private/inherited - Whether the current tab `index` matches `activeIndex`
       */
      isActive: Boolean,
      /**
       * Used to render an `<a>` tag. Denotes the target href of the link.
       */
      href: {
        default: '',
        type: String,
      },
      /**
       * The nav item label
       */
      label: {
        default: '',
        type: String,
      },
      /**
       * Used to render a `<router-link>`. Denotes the target route of the link.
       * See: https://router.vuejs.org/api/#router-link
       */
      to: {
        default: '',
        type: [Object, String],
      },
    },

    methods: {
      handleClick() {
        this.$emit('click', this.index);
      },
    },
  };
</script>

