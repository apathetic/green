<template functional>
  <svg
    class="icon"
    role="presentation"
    xmlns="http://www.w3.org/2000/svg"
    :aria-labelledby="props.id"
    :class="[`icon--${props.name}`, {'icon--small': props.small}, data.attrs.class, data.staticClass, data.class]"
    :id="props.id"
  >
    <title v-if="props.title">
      {{ props.title }}
    </title>
    <use :xlink:href="`/static/spritesheet.svg#${props.name}`" />
  </svg>
</template>

<script>
  import uniqueId from 'lodash/uniqueId';

  export default {
    name: 'z-icon',
    props: {
      id: {
        type: String,
        default: uniqueId,
      },
      name: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        default: '',
      },
      small: {
        type: Boolean,
      },
    },
  };
</script>
