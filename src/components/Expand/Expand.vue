<template>
  <div>
    <transition
      :name="transitionName"
      @after-enter="afterExpand"
      @enter="expand"
      @leave="collapse"
    >
      <div
        v-show="open"
        ref="expand"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    props: {
      open: Boolean,
      transitionName: {
        type: String,
        default: 'expand',
      },
    },

    mounted() {
      if (!this.open) {
        this.$refs.expand.style.overflow = 'hidden';
      }
    },

    methods: { 
      /**
       * Expands the element
       * @param {object} element - the element being expanded
       * @returns {void}
       */
      expand(element) {
        // Trick to calculate the height of the hidden element
        element.style.visibility = 'hidden';
        element.style.height = 'auto';

        const height = element.offsetHeight;

        // Restore default styling
        element.style.visibility = '';
        element.style.display = '';

        // Set height on the element to zero
        element.style.height = 0;
        
        // Force re-flow
        element.offsetHeight;

        // Set expanded height after the other height change takes affect
        setTimeout(() => {
          element.style.height = `${height}px`;
        });
      },

      /**
       * Resores default styling after the expand animation is completed
       * @param {object} element - the element being expanded
       * @returns {void}
       */
      afterExpand(element) {
        element.style.height = '';
        element.style.overflow = '';
      },

      /**
       * Collapses the element
       * @param {object} element - the element being expanded
       * @returns {void}
       */
      collapse(element) {
        const height = element.offsetHeight;

        // Set height to the expanded height
        element.style.height = `${height}px`;
        element.style.overflow = 'hidden';

        // Set height to zero after the other height change takes affect
        setTimeout(() => {
          element.style.height = 0;
        });
      },
    },
  };
</script>
