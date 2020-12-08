import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Loading from '@/components/Loading';

storiesOf('Components/-Loading', module)
  .add('render', () => ({
    components: { Loading },
    template: '<Loading />',
  }));



