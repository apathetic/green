<template>
  <div class="container">
    <nav
      class="g-tabs"
      :class="{ 'g-tabs--scrollable': !hasIntersectionObserver }"
    >
      <ul
        class="g-tabs__list"
        ref="tabList"
        :style="{
          width: `calc(100% - ${toggleWidth}px)`,
        }"
      >
        <PageNavigationItem
          v-for="(item, index) in items"
          class="g-tabs__item"
          :class="{ 'g-tabs__item--invisible': overflowIds.includes(`${index}`) }"
          :data-id="index"
          :href="item.href"
          :index="index"
          :is-active="index === activeIndex"
          :key="index"
          :label="item.label"
          :to="item.to"
          @click="handleClick"
        />
      </ul>
      <g-dropdown
        class="g-tabs__dropdown"
        ref="toggle"
        :class="{ 'is-visible': overflowIds.length }"
        :offset="{ x: -1 }"
      >
        <template #toggle="{ toggle }">
          <button
            aria-haspopup="true"
            class="g-tabs__link g-tabs__dropdown-toggle"
            type="button"
            aria-expanded="false"
            @click="toggle"
          >
            {{ $t('common.more') }}
            <svg class="icon g-tabs__dropdown-icon">
              <use xlink:href="/static/spritesheet.svg#caret-down" />
            </svg>
          </button>
        </template>

        <template slot="default">
          <ul :class="`g-tabs__dropdown-list ${$style['g-tabs__dropdown-list']}`">
            <PageNavigationItem
              v-for="(item, index) in items"
              class="g-tabs__dropdown-item"
              :class="{ 'hidden': !overflowIds.includes(`${index}`) }"
              :href="item.href"
              :index="index"
              :is-active="index === activeIndex"
              :key="index"
              :label="item.label"
              :to="item.to"
              @click="handleClick"
            />
          </ul>
        </template>
      </g-dropdown>
    </nav>
  </div>
</template>

<script>
  import PageNavigationItem from './PageNavigationItem.vue';

  export default {
    name: 'PageNavigation',

    components: {
      PageNavigationItem,
    },

    props: {
      /**
       * Index of active tab (zero-based)
       */
      activeIndex: {
        type: Number,
        default: 0,
      },
      /**
       * Array of tabs. A `tab` is an object containing a `label` and either an `href` | `to`
       */
      items: {
        type: Array,
        default: () => [],
      },
    },

    model: {
      prop: 'activeIndex',
      event: 'change',
    },

    data() {
      return {
        hasIntersectionObserver: 'IntersectionObserver' in window,
        observer: null,
        overflowIds: [],
        toggleWidth: 0,
      };
    },

    mounted() {
      if (this.hasIntersectionObserver) {
        const tabs = Array.from(this.$refs.tabList.children);

        const options = {
          root: this.$refs.tabList,
          rootMargin: '0px 0px 0px 0px',
          threshold: Array.from({ length: 100 }).map((v, i) => (i + 1) / 100),
        };

        this.observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            let dataId = entry.target.getAttribute('data-id');

            /**
             * Check for partial intersection.
             * Zooming out can result in ratio of approx 0.984
             * Anything higher will result in nav items disappearing
             */
            if (entry.intersectionRatio > 0.98) {
              if (this.overflowIds.includes(dataId)) {
                this.overflowIds.splice(this.overflowIds.indexOf(dataId), 1);
              }
            } else {
              if (!this.overflowIds.includes(dataId)) {
                this.overflowIds.push(dataId);
              }
            }
          });
        }, options);

        tabs.forEach((element, i) => {
          this.observer.observe(element);
        });

        this.toggleWidth = this.$refs.toggle.$el.getBoundingClientRect().width;
      }
    },

    destroyed() {
      if (this.observer) {
        this.observer.disconnect();
      }
    },

    methods: {
      handleClick(index) {
        /**
         * Event emitted when a tab is clicked, with the target tab index.
         */
        this.$emit('change', index);
      },
    },
  };
</script>

<style lang="scss" module>
  /**
    Overwrite 'legacy' g-tabs styles with use of Dropdown
    TODO: Eventually remove with CSS refactor once legacy g-tabs isn't needed
   */
  .g-tabs__dropdown-list {
    border: none;
    display: block;
    margin-top: 0;
    position: static;

    &::before {
      display: none;
    }
  }
</style>
