<template functional>
  <a
    v-if="props.href"
    v-bind="data.attrs"
    :class="$options.generateClass(props, data)"
    :data-test="props.dataTest"
    :disabled="props.disabled"
    :href="props.href"
  >
    <slot></slot>
  </a>
  <button
    v-else
    v-on="listeners"
    v-bind="data.attrs"
    :class="$options.generateClass(props, data)"
    :data-test="props.dataTest"
    :disabled="props.disabled"
  >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'z-button',

    props: {
      /**
       * Core button types:
       */
      primary: {
        type: Boolean,
        default: true,
      },
      secondary: { type: Boolean },
      icon: { type: Boolean },
      tertiary: { type: Boolean },
      inline: { type: Boolean },

      /**
       * Renders a color variant
       */
      color: {
        type: String,
        default: '',
        validator(val) {
          return val === '' ? true : ['blue', 'red'].includes(val);
        },
      },

      /**
       * Disables the button
       */
      disabled: { type: Boolean },

      /**
       * Button link. If defined, the button will render as an `<a />` tag.
       */
      href: {
        type: String,
        default: '',
      }
    },

    generateClass(props, data) {
      let css = '';

      for (let type of ['secondary', 'tertiary', 'icon', 'inline']) {
        if (props[type]) {
          css += `button--${type} `;
        }
      }

      return [
        'button',
        data.staticClass,
        data.class,
        !!data.attrs && data.attrs.class,
        css || 'button--primary',
        props.color && `button--${props.color}`,
      ];
    },
  };
</script>
