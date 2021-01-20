<template>
  <div class="flex align-center">
    <ul class="pagination flex">
      <button
        :class="['prev', { 'is-disabled': currentPage === 1 }]"
        @click="prev"
      >
        <z-icon
          class="icon--small"
          name="chevron"
        />
      </button>
      <template v-for="page in pages">
        <button
          v-if="shouldShowFirstEllipsis(page)"
          :key="`${page}-ellipsis`"
        >
          &#x2026;
        </button>
        <button
          v-if="shouldShowPage(page)"
          :key="page"
          :class="{ 'is-active': currentPage === page }"
          @click="updatePage(page)"
        >
          {{ page }}
        </button>
        <button
          v-if="shouldShowLastEllipsis(page)"
          :key="`${page}-ellipsis`"
        >
          &#x2026;
        </button>
      </template>
      <button
        :class="['next', { 'is-disabled': currentPage === pages }]"
        @click="next"
      >
        <z-icon
          class="icon--small rotate-180"
          name="chevron"
        />
      </button>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'z-paginate',

    props: {
      currentPage: {
        type: Number,
        default: 1,
      },
      listLength: {
        type: Number,
        default: 1,
      },
      pageSize: {
        type: Number,
        default: 50,
      },
    },

    computed: {
      /**
       * @returns {number} - number of pages
       */
      pages() {
        return Math.ceil(this.listLength / this.pageSize);
      },
    },

    methods: {
      /**
       * Sets current page to next page
       */
      next() {
        if (this.currentPage < this.pages) {
          this.updatePage(this.currentPage + 1);
        }
      },

      /**
       * Sets current page to previous page
       */
      prev() {
        if (this.currentPage > 1) {
          this.updatePage(this.currentPage - 1);
        }
      },

      /**
       * Emits current page to list view.
       */
      updatePage(currentPage) {
        this.$emit('set-page', currentPage);
      },

      /**
       * @returns {boolean} - should show page in pagination component
       */
      shouldShowPage(page) {
        const pageDiff = Math.abs(this.currentPage - page);

        if (
          (this.pages < 10 || page === 1 || page === this.pages)
          || (this.currentPage < 6 && page < 8)
          || (this.pages - this.currentPage < 5 && this.pages - page < 7)
          || (pageDiff < 3)
        ) {
          return true;
        }

        return false;
      },

      /**
       * Determines whether to show the leading ellipsis
       * @returns {boolean} should show or not
       */
      shouldShowFirstEllipsis(page) {
        return this.pages > 9 && this.currentPage > 5 && page === 2;
      },

      /**
       * Determines whether to show the trailing ellipsis
       * @returns {boolean} should show or not
       */
      shouldShowLastEllipsis(page) {
        return this.pages > 9 &&  this.pages - this.currentPage > 4 && page === this.pages - 1;
      },
    },
  };
</script>
