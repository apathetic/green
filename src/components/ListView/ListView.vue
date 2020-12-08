<template>
  <div>
    <div
      v-show="internalSearchSchema.isSearchable"
      ref="scrollTarget"
      class="controls box mb-2"
    >

      <div class="grid grid-cols-4 md:grid-cols-12">
        <g-input
          class="col-span-4"
          data-test="input|search-input"
          ref="search-input"
          :label="$t('common.search')"
          :placeholder="internalSearchSchema.placeholder"
          :value="searchTerm"
          @input="onSearch"
        >
          <template #append>
            <g-icon :name="searchIcon" :class="{'fx-spin color-teal': isSearching}" />
          </template>
        </g-input>

        <div v-if="filterSchema.length" class="col-span-1 md:col-span-2 flex align-bottom">
          <g-button
            secondary
            :class="[$style['filter-button'], isShowingFilters && 'border-blue color-blue', 'w-full', 'relative']"
            @click="isShowingFilters = !isShowingFilters"
          >
            {{ $t('common.filter') }}
            <g-icon v-if="isFiltering" :name="filterIcon" :class="{'fx-spin color-teal': isFiltering}" />
            <g-badge v-if="numberOfFilters" :class="$style['badge-overlap']" :content="numberOfFilters" />
          </g-button>
        </div>

        <div v-if="Object.keys(sorts).length" class="col-span-2 md:col-span-3">
          <g-select
            ref="sort-input"
            :label="$t('common.sort_by')"
            :placeholder="$t('common.sort_by')"
            :options="Object.keys(sorts)"
            @input="onSort"
            class="w-full"
          >
            <template #caret>
              <g-icon :name="sortIcon" :class="{'fx-spin color-teal': isSorting}" />
            </template>
          </g-select>

        </div>

        <div class="align-right align-bottom button-grid md:col-span-2 lg:col-span-3">
          <slot name="actions">
          </slot>
        </div>
      </div>

      <g-expand :open="isShowingFilters">
        <Filters
          :schema="filterSchema"
          @reset="clearSearch"
          @change="onFilter"
        />
      </g-expand>

      <slot name="eyebrow"></slot>
    </div>

    <div v-if="!selectedItems.length" class="text-small mb-2">{{ total }}</div>

    <div
      v-if="isSelectable"
      v-sticky="60"
      class="flex align-middle align-center"
      :class="[$style['select-bar'], isSelectBarVisible ? '' : 'hidden-lg']"
    >
      <g-checkbox
        class="hidden-lg"
        :checked="isSomePageChecked && !!results.length"
        :indeterminate="isSomePageChecked && !isAllPageChecked"
        :class="[$style['select-ag-checkbox'], !!selectedItems.length ? $style['hidden-label'] : '']"
        :label="$t('common.selectAll')"
        @change="onSelectPage"
      />
      <div v-if="!!selectedItems.length" class="w-full flex align-middle align-center">
        <span>{{ $t('common.number_of_total_selected', { num: selectedItems.length, total: results.length }) }}</span>
        <g-button
          v-if="selectedItems.length !== results.length"
          class="ml-2 hidden-sm-only"
          inline
          @click="selectAll"
        >
          <span v-if="results.length === items.length">{{ $t('common.selectAll') }}</span>
          <span v-else>{{ $t('common.select_all_that_match') }}</span>
        </g-button>
        <g-button
          v-else
          class="ml-2 hidden-sm-only"
          inline
          @click="clearAll"
        >
          {{ $t('common.clear_selection') }}
        </g-button>
        <div class="ml-3">
          <slot name="bulk-actions">
          </slot>
        </div>
      </div>
    </div>

    <div v-if="useDefinedSlots" :class="$style['list-items']">
      <header
        v-sticky="isSelectBarVisible ? 120 : 60"
        :class="[$style.header, isSelectBarVisible ? 'no-border' : '']"
      >
        <g-checkbox
          v-if="isSelectable"
          :checked="isSomePageChecked"
          :indeterminate="isSomePageChecked && !isAllPageChecked"
          @change="onSelectPage()"
        />
        <div :class="$style['header-grid']" class="flex-1 grid">
          <slot name="list-header">
          </slot>
        </div>
      </header>

      <LoadingManager :loading="loading" :results="paginated">
        <slot
          name="list-items"
          :clear-all="clearAll"
          :display-items="results"
          :results="paginated"
          :on-select="onSelectItem"
          :selected-items="selectedItems"
        >
        </slot>
      </LoadingManager>
    </div>

    <slot
      :currentPage="currentPage"
      :display-items="results"
      :filters="filters"
      :results="paginated"
      :total="results.length"
    ></slot>

    <Paginate
      v-if="results.length > pageSize"
      :current-page="currentPage"
      :list-length="results.length"
      :page-size="pageSize"
      @set-page="setPage($event), scrollToTop()"
    />
  </div>
</template>


<script>
  import { debounce, flow } from 'lodash';
  import { sortItems, filterItems, searchItems, searchableFields } from '@/utils/helpers';
  import { get, set } from '@/storage';
  import { DEBOUNCE } from '@/constants';
  import Filters from '@/components/Filters';
  import Paginate from '@/components/Paginate';
  import Badge from '@/components/Badge';
  import LoadingManager from '@/components/ListView/components';

  const DEFAULT_SEARCH_SCHEMA = {
    isSearchable: true,
    placeholder: 'Search',
    searchBy: ['name'],
  };

  export default {
    name: 'g-list-view',

    components: {
      Filters,
      Paginate,
      LoadingManager,
      'g-badge': Badge,
    },

    created() {
      if (this.action && this.items.length) {
        throw new Error('you must pass either an action or items, not both.');
      }

      searchableFields(this.items, this.internalSearchSchema.searchBy);
    },

    props: {
      /**
       * API call. If provided, the component will call this function to get the data instead of using the `items` prop
       */
      action: {
        type: Function,
      },
      sorts: {
        type: Object,
        default: () => ({}),
      },
      filterSchema: {
        type: Array,
        default: () => [],
      },
      items: {
        type: Array,
        default: () => [],
      },
      pageSize: {
        type: Number,
        default: 50,
      },
      searchSchema: {
        type: Object,
        default: () => ({}),
      },
      sortOnLoad: Boolean,
      loading: Boolean,
      isSelectable: Boolean,
    },

    inject: {
      trackSearch: { default: () => () => {} },
      trackFilters: { default: () => () => {} },
      trackSort: { default: () => () => {} },
    },

    computed: {
      /**
       * Merges the searchSchema with the default value since all attributes are optional
       */
      internalSearchSchema() {
        return {
          ...DEFAULT_SEARCH_SCHEMA,
          ...this.searchSchema,
        };
      },

      /**
       * Start of page
       */
      startIndex() {
        return this.pageSize * (this.currentPage - 1);
      },

      /**
       * End of page
       */
      endIndex() {
        return this.startIndex + this.pageSize;
      },

      /**
       * Slices the results set into a paginated segment.
       * @returns One page in the paginated set of results
       */
      paginated() {
        const { results, startIndex, endIndex } = this;
        const paginated = results.slice(startIndex, Math.min(endIndex, results.length));

        this.$emit('updateResults', paginated);

        return Object.freeze(paginated);
      },

      /**
       * Displays a visual indicationfor the number of results, or "working" if the
       * results are being determined.
       */
      total() {
        const { paginated, results } = this;

        return this.isSearching || this.isFiltering || this.isSorting ?
          this.$t('ll.list_view.calculating') :
          this.$t('common.showing_num_of_total_results', { num: paginated.length, total: results.length });
      },

      /**
       * Determines if both #list-header and #list-items slots are used.
       * @returns {boolean}
       */
      useDefinedSlots() {
        return !!this.$scopedSlots['list-header'] && !!this.$scopedSlots['list-items'];
      },

      /**
       * Determine when and where to display a `loading` icon
       */
      searchIcon() { return this.isSearching ? 'working' : 'search'; },
      filterIcon() { return this.isFiltering ? 'working' : 'filters'; },
      sortIcon() { return this.isSorting ? 'working' : 'caret-down'; },

      pages() {
        return Math.ceil(this.results.length / this.pageSize);
      },

      isAllPageChecked() {
        const selectedItemIds = this.selectedItems.map((item) => item.id);
        const paginatedIds = this.paginated.map((item) => item.id);

        return this.results.length ? paginatedIds.every((id) => selectedItemIds.includes(id)) : false;
      },

      isSomePageChecked() {
        const selectedItemIds = this.selectedItems.map((item) => item.id);
        const paginatedIds = this.paginated.map((item) => item.id);

        return this.results.length ? paginatedIds.some((id) => selectedItemIds.includes(id)) : false;
      },

      numberOfFilters() {
        return Object.keys(this.filters).reduce((acc, item) => {
          const filterBy = this.filters[item].filterBy;
          const isBoolean = typeof filterBy[0] == 'boolean';

          if (isBoolean || typeof filterBy[0] == 'string') {
            return acc + (filterBy[0] ? 1 : 0);  // Do not count Toggle filters with a false value;
          }

          return acc + (filterBy.length || 0);
        }, 0);
      },

      isSelectBarVisible() {
        return !!this.selectedItems.length;
      },
    },

    data() {
      const sortTerms = Object.keys(this.sorts);

      return {
        currentPage: 1,
        filters: {},
        searchTerm: '',
        sortTerm: (this.sortOnLoad && sortTerms.length) ? sortTerms[0] : '',
        isShowingFilters: get('showFilters'), // TODO move to -Expand
        isSearching: false,
        isFiltering: false,
        isSorting: false,
        results: [],
        selectedItems: [],
      };
    },

    watch: {
      searchTerm() { this.calculateResults(); },
      filters() { this.calculateResults(); },
      sortTerm() { this.calculateResults(); },

      isShowingFilters(value) {
        set('showFilters', value);
      },

      items() {
        searchableFields(this.items, this.internalSearchSchema.searchBy);
        this.calculateResults();
      },
    },

    methods: {
      /**
       * Searches, filters, and sorts the list of `items` for display
       */
      async calculateResults() {
        //   let results = [];
        //
        //   if ("useAPI") { // PLAT-779
        //     results = await API.call()....
        //   }
        //   else if ("useWorker") { // PLAT-886
        //     results = await worker.postmessage(...)
        //   }
        //   else {
        //     ..

        // help? any better way to allow vue to squeeze a render in, before this?  nextTick, rAF, promise dont work
        setTimeout(async () => {
          let results = [];

          if (this.action) {
            results = await this.action({ filters: this.filters, searchTerm: this.searchTerm, sortTerm: this.sorts[this.sortTerm] });
          } else {
            results = flow([
              this.search,
              this.filter,
              this.sort,
            ])(this.items);
          }

          this.results = results;

          this.isSearching = false;
          this.isFiltering = false;
          this.isSorting = false;
        }, 0);
      },

      /**
       * Searches one (or more) fields on an item for a particular search term.
       * @param {array} items A list of items to search through.
       * @returns list of items filtered by search terms
       */
      search(items) {
        return searchItems(items, this.searchTerm);
      },

      /**
       * Filters the list of `items` based on options selected in the `filters` object
       * @param {array} items A list of items to filter.
       * @returns list of items filtered by the applied filters
       */
      filter(items) {
        return filterItems(items, this.filters);
      },

      /**
       * Sorts a list of items based on options selected in the `sorts` object
       * @param {array} items A list of items to sort.
       * @returns list of items sorted according to the sort term.
       */
      sort(items) {
        return this.sortTerm
          ? sortItems(items, this.sorts[this.sortTerm])
          : items;
      },

      /**
       * Sets the current search term, resets to the pagination to
       * the first page, and fires trackers
       * @param {string} term The search term
       * @returns {function} A `debounced` function, limiting updates to 300ms
       */
      onSearch(term) {
        this.isSearching = true;
        this.onSearchDebounce(term);
      },
      onSearchDebounce: debounce(function(term) {
        this.searchTerm = term;
        this.trackSearch(term);
        this.setPage(1);
        this.clearAll();
      }, DEBOUNCE.FAST),

      /**
       * Sets selected filters and resets to page 1
       * @param {Object} filters Selected filters to set
       */
      onFilter(filters) {
        this.isFiltering = true;
        this.$set(this, 'filters', filters);
        this.$emit('update-filters', filters);
        this.trackFilters(filters);
        this.setPage(1);
        this.clearAll();
      },

      /**
       * Executes any side-effects when the sort `term` is changed
       * @param {string} term The updated sort term
       */
      onSort(term) {
        this.isSorting = true;
        this.sortTerm = term;
        this.trackSort(term);
        this.setPage(1);
        this.clearAll();
      },

      /**
       * Clears the search term.
       */
      clearSearch() {
        this.searchTerm = '';
      },

      /**
       * Sets current page for the Paginator.
       * @param {number} pageNumber The current page
       */
      setPage(pageNumber) {
        this.currentPage = pageNumber || 1;
      },

      /**
       * Set the scroll position to the top of the list view.
       */
      scrollToTop() {
        this.$refs.scrollTarget && this.$refs.scrollTarget.scrollIntoView({ behavior: 'smooth', block: 'center' });
      },

      /**
       * Selects or deselects all items on a page
       */
      onSelectPage() {
        const paginated = this.paginated;
        const paginatedIds = paginated.map((item) => item.id);
        const selectedItems = this.selectedItems;

        if (this.isSomePageChecked) {
          this.selectedItems = [...selectedItems.filter((item) => !paginatedIds.includes(item.id))];
        }
        else {
          this.selectedItems = [...selectedItems, ...paginated];
        }
      },

      /**
       * Selects all results
       */
      selectAll() {
        this.selectedItems = [...this.results];
      },

      /**
       * Selects one item
       */
      onSelectItem({ item, value }) {
        if (value) {
          this.selectedItems.push(item);
        }
        else {
          this.selectedItems = [...this.selectedItems.filter((selectedItem) => selectedItem.id !== item.id)];
        }
      },

      /**
       * Clears current selcted items
       */
      clearAll() {
        this.selectedItems = [];
      },
    },
  };
</script>


<style lang="scss" module>
  @import './list-items.module.scss';

  .select-bar {
    background: colors('shades', 'white');
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
    height: 60px;
    margin-bottom: space(2);
    z-index: 1;

    &:global(.is-sticky) {
      @include elevation(2);

      border-radius: 0;
      border-top: border('thin', colors('shades', 'light-grey'));
      z-index: z-index('control');

      @include breakpoint('lg') {
        box-shadow: none;
      }
    }

    @include breakpoint('lg') {
      margin-bottom: 1px;
    }
  }

  .select-ag-checkbox {
    left: space(2);
    position: absolute;
    top: space(1);
  }

  .filter-button {
    min-width: auto;
  }

  .badge-overlap {
    position: absolute;
    right: calc(var(--grid-gutter) / -2);
    transform: translateY(-50%);
  }
</style>
