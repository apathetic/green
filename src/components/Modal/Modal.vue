<template>
  <transition name="fade">
    <div
      v-if="open"
      aria-modal="true"
      role="dialog"
      ref="root"
      tabindex="0"
      :aria-labelledby="ariaLabel"
      :class="$style.modal"
      @keydown.esc="dismiss"
      @mousedown.self.stop="dismiss"
    >
      <div
        :class="[$style.body, size && `is-${size}`]"
        role="dialog"
        @click.stop
      >
        <header :class="$style.header">
          <h4 v-if="title" :id="ariaLabel">{{ title }}</h4>

          <g-button
            v-if="!hideClose"
            icon
            type="button"
            :class="$style.close"
            @click="dismiss"
          >
            <g-icon name="close" />
          </g-button>
        </header>

        <div :class="$style.content">
          <slot></slot>
        </div>

        <footer :class="$style.footer" v-if="hasFooterContent">
          <!-- @slot Overrides the whole footer section. Used for rendering custom footers with more than 2 actions. If defined, "actions" slot will get ignored. -->
          <slot name="footer">
            <div class="text-right">
              <div class="button-grid">
                <!-- @slot Modal footer actions, supports rendering up to 2 `<g-button>` children -->
                <slot name="actions"></slot>
              </div>
            </div>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>


<script>
  export default {
    name: 'g-modal',

    props: {
      /**
       * Shows or hides the close button
       */
      hideClose: Boolean,
      /**
       * Shows or hides the modal
       */
      open: {
        type: Boolean,
        default: false,
      },
      /**
       * Sets a preset max-width on the modal
       * Options: default (720px), narrow (360px)
       */
      size: {
        type: String,
        default: 'default',
      },
      title: {
        type: String,
        default: '',
      },
      ariaLabel: {
        type: [String, Boolean],
        default() { return this.title.replace(/[\W_]+/g,'') || false; },
      },
    },

    /** Enable usage via v-model */
    model: {
      prop: 'open',
      event: 'dismiss',
    },

    watch: {
      open() {
        if (this.open) {
          // Accessibility: Move focus to content
          this.$nextTick(() => {
            this.$refs.root.focus();
          });
        }
      },
    },

    computed: {
      hasFooterContent() {
        return this.$slots.actions || this.$slots.footer;
      },
    },

    methods: {
      dismiss() {
        this.$emit('dismiss');
      },
    },
  };
</script>


<style lang="scss" module>

  .modal {
    @include cover('fixed');

    background: rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    overflow: auto;
    place-content: center;
    z-index: z-index('modal');
    -webkit-overflow-scrolling: touch;
  }

  .body {
    @include elevation(2);

    background: colors('shades', 'white');
    border-radius: $border-radius;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-height: 100vh;
    max-width: 720px;
    transition: transform $primary-transition;
    width: 100%;

    &:global(.is-narrow) {
      max-width: 360px;
    }

    @include breakpoint('md') {
      max-height: 90vh;
    }
  }

  .header {
    background: colors('brand', 'purple');
    color: colors('text', 'white');
    min-height: space(5);
    padding: space(2) var(--grid-gutter);
    position: relative;

    @include breakpoint('md') {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }

    @include breakpoint('lg') {
      text-align: center;
    }

    h4 {
      color: inherit;
      flex-grow: 1;
      line-height: space(3);
      margin: 0;
    }
  }

  .content {
    flex-grow: 1;
    padding: space(3) var(--grid-gutter);
    overflow: auto;
  }

  .footer {
    background: colors('shades', 'light-grey');
    border-top: border('thin', colors('shades', 'grey'));
    padding: space(3) var(--grid-gutter);

    display: initial; // TEMP. Will need to fix marketplace `footer` style

    @include breakpoint('md') {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }

  .close {
    background: transparent;
    height: space(5);
    position: absolute;
    right: 0;
    top: 0;
    width: space(5);
  }

  :global(.fade-enter),
  :global(.fade-leave-active) {
    .body {
      transform: translate3d(0, #{space(2)}, 0);
    }
  }
</style>
