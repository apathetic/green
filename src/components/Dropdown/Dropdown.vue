<template>
  <div
    class="dropdown"
    @keydown="onKeyDown"
    v-clickoutside="dismiss"
  >
    <!-- @slot Toggle component slot, receives `toggle` method to trigger Dropdown display -->
    <slot
      name="toggle"
      :isActive="isActive"
      :toggle="toggle"
    >
      <button
        class="dropdown__toggle button--icon"
        :aria-expanded="isActive.toString()"
        :class="$style['button']"
        @click="toggle"
      >
        <z-icon name="ellipse" />
      </button>
    </slot>

    <transition name="fade" @after-leave="resetOffset">
      <div
        v-show="isActive"
        ref="content"
        class="dropdown__content"
        :class="`dropdown__content--${align}`"
        :style="styles"
        @click="stop"
      >
        <!-- @slot Dropdown content slot. Receives `dismiss` method, to trigger manual close -->
        <slot :dismiss="dismiss"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
  import { clickoutside } from '@/directives';
  import { KEY_CODES } from '@/constants';
  import { calculateElementOverflow, getMountPoint } from '@/utils/helpers';

  export default {
    name: 'z-dropdown',

    directives: { clickoutside },

    props: {
      /**
       * Used to position the dropdown relative to target
       * Options: left, right
       */
      align: {
        type: String,
        default: 'right',
      },
      /**
       * If true, dropdown will remain open when clicking on it's content. Otherwise, it'll close automatically on click.
       */
      closeManually: Boolean,
      /**
       * Used to horizontally and vertically offset the dropdown in pixels
       * Keep in mind, `x` value is relative to `align` value.
       * if align=left, -6 will move left 6px
       * if align=right, -6 will move right 6px
       */
      offset: {
        type: Object,
        default: () => {},
      },
      /**
       * If `reattach` is true, the contents will be mounted in the mount point container,
       * so as to circumvent clipping issues from a parent's overflow property.
       */
      reattach: {
        type: [Boolean],
        default: true,
      },
    },

    data() {
      return {
        items: [],
        itemIndex: -1,
        isActive: false,
        styles: {},
      };
    },

    mounted() {
      if (this.reattach) {
        const target = getMountPoint();

        target.appendChild(this.$refs.content);
      }

      this.items = this.$refs.content.querySelectorAll('.dropdown__item');
      window.addEventListener('resize', this.dismiss);
    },

    beforeDestroy() {
      window.removeEventListener('resize', this.dismiss);
      this.$refs.content.parentNode.removeChild(this.$refs.content);
    },

    watch: {
      isActive(val) {
        if (!val) {
          this.itemIndex = -1;
        }

        this.$emit('toggle', val);
      },
      itemIndex(next, prev) {
        next in this.items && this.items[next].classList.add('is-highlighted');
        prev in this.items && this.items[prev].classList.remove('is-highlighted');
      },
    },

    methods: {
      /**
       * Opens or closes the Dropdown. If opening, positions and focuses its content.
       */
      toggle() {
        if (this.isActive) {
          this.isActive = false;
        } else {
          this.isActive = true;
          this.calculateOffset();
          this.$refs.content.focus();
        }
      },

      /**
       * Dismisses the Dropdown.
       */
      dismiss() {
        this.isActive = false;
      },

      /**
       * Prevent the dropdown from closing if a user interacts with a UI item
       * within the dropdown `content`. By default, the dropdown will close
       * after a user clicks something within.
       * @param {Event} e The click event.
       */
      stop(e) {
        this.closeManually && e.stopPropagation();
      },

      /**
       * Handles all user keyboard input on the Dropdown.
       * @param {Event} e The native keydown event.
       */
      onKeyDown(e) {
        if (e.keyCode === KEY_CODES.ESCAPE) {
          this.dismiss();
        }
        else if (e.keyCode === KEY_CODES.DOWN && this.itemIndex < this.items.length - 1) {
          this.isActive && this.itemIndex++;
        }
        else if (e.keyCode === KEY_CODES.UP && this.itemIndex > -1) {
          this.isActive && this.itemIndex--;
        }
        else if (e.keyCode === KEY_CODES.ENTER && this.itemIndex !== -1) {
          this.isActive && this.items[this.itemIndex].click();
        }
        else { return; }

        e.preventDefault(); // if keyDown did something / we didn't return
      },

      /**
       * Reset any page overflow offset
       */
      resetOffset() {
        this.$refs.content.style.setProperty('--offset', 0);
      },

      /**
       * Calculate the position for the Dropdown content element,
       * relative to the viewport.
       * Repositions the dropdown content element (& arrow)
       * if it overflows the page (including gutter).
       */
      calculateOffset() {
        const toggleBCR = this.$el.getBoundingClientRect();
        const top = toggleBCR.top + toggleBCR.height;
        const offset = {
          x: 0,
          y: 0,
          ...this.offset,
        };

        if (this.reattach) {
          this.styles = {
            left: this.align === 'left' ?
              `${Math.round(toggleBCR.left) + offset.x}px` : undefined,
            right: this.align === 'right' ?
              `${document.documentElement.clientWidth - Math.round(toggleBCR.right) + offset.x}px` : undefined,
            top: `${window.pageYOffset + top + offset.y}px`,
          };
        }

        // Let dropdown reposition first for an accurate getBoundingClientRect value
        this.$nextTick(() => {
          const dropdown = this.$refs.content;
          const overflow = calculateElementOverflow(dropdown);

          if (overflow) {
            const direction = this.align === 'left' ? '-' : '';

            this.$refs.content.style.setProperty('--offset', `${direction}${overflow}`);
          }
        });
      },
    },
  };

</script>

<style lang="scss" module>
  .button {
    height: space(4);
    width: space(4);

    &::after {
      content: "";
      height: 44px;
      left: -3px;
      position: absolute;
      top: -3px;
      width: 44px;
    }
  }
</style>
