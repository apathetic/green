<template>
  <div class="flex align-center align-middle py-6" key="empty">
    {{ text || t('ll.emptyState.noResults') }}
  </div>
</template>

<script>
  import { t } from '@/locale';

  export default {
    name: 'z-empty-state',

    props: {
      text: {
        type: String,
        default: '',
      },
    },

    methods: {
      t,
    },
  };
</script>
