import { storiesOf } from '@storybook/vue';
import EmptyState from '@/components/EmptyState';

storiesOf('Components/-EmptyState', module)
  .add('default text', () => ({
    components: { EmptyState },
    template: '<EmptyState />',
  }))
  .add('custom text', () => ({
    components: { EmptyState },
    template: '<EmptyState text="Nothing matches your query." />',
  }));
