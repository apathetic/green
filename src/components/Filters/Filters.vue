<template>
  <div class="grid">
    <component
      v-for="(filter, filterIndex) in schema"
      v-model="filterValues[filterIndex]"
      v-bind="filter.attributes"
      class="span-3"
      :class="filter.type === 'g-checkbox' && 'flex align-bottom'"
      :key="`${filterIndex} ${reset}`"
      :label="filter.label"
      :selected="filterValues[filterIndex]"
      :is="filter.type"
    />
    <div class="flex align-right align-bottom button-grid span-3">
      <g-button secondary @click="resetFilters">
        {{ $t('common.reset_filters') }}
      </g-button>
    </div>
  </div>
</template>

<script>
  import { get, set } from '@/storage';
  export default {
    name: 'g-filters',

    props: {
      schema: {
        type: Array,
        default: () => [],
      },
    },

    data() {
      return {
        filterValues: get('filters') || this.getDefaultFilters(),
        reset: 0,
      };
    },

    methods: {
      resetFilters() {
        this.$emit('reset');
        this.filterValues = this.getDefaultFilters();
        this.reset++;

        set('filters', this.filterValues);
      },

      /**
       * Returns default empty filters
       */
      getDefaultFilters() {
        return this.schema.reduce((acc, item, key) => {
          if (item.type === 'g-checkbox') {
            acc[key] = item.attributes.checked || false;
          }

          return acc;
        }, {});
      },
    },

    watch: {
      filterValues: {
        /**
         * Maps filters to a partcular object structure:
         * @param {IFilterSchemaItem} newFilterValues all selected filters
         * @returns {IFilter}
         */
        handler: function(newFilterValues) {
          const filters = Object.keys(newFilterValues).reduce((acc, i) => {
            const schema = this.schema[i];
            const item = newFilterValues[i];
            const trackBy = schema.attributes.trackBy || 'id';
            const isObject = item.length && typeof item[0] === 'object';
            const filterBy = schema.attributes.multiple ? item.map((v) => v[trackBy])
              : isObject ? [item.trackBy] : [item];
            const groupedWith = schema.groupedWith;

            if (groupedWith) {
              filterBy.push(newFilterValues[groupedWith]);
            }

            filterBy.length && (acc[schema.fieldToFilter] = { // don't add to `filters` if no filterBy
              filterBy,
              ...('fn' in schema) && { customFilter: schema.fn },
            });

            return acc;
          }, {});

          this.$emit('change', filters);
          set('filters', newFilterValues);
        },
        deep: true,
        immediate: true,
      },
    },
  };
</script>
