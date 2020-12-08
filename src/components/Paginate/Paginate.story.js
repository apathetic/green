import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Paginate from '@/components/Paginate';

storiesOf('Components/-Paginate', module)
  .add('one page', () => ({
    components: { Paginate },
    template: '<Paginate :list-length="40"/>',
  }))
  .add('less than 9 pages', () => ({
    components: { Paginate },
    template: '<Paginate :list-length="320"/>',
  }))
  .add('9 pages', () => ({
    components: { Paginate },
    template: '<Paginate :list-length="450"/>',
  }))
  .add('more than 9 pages, on first page', () => ({
    components: { Paginate },
    template: '<Paginate :list-length="1050"/>',
  }))
  .add('more than 9 pages, on middle page', () => ({
    components: { Paginate },
    template: '<Paginate :list-length="1050" :current-page="12"/>',
  }))
  .add('more than 9 pages, on last page', () => ({
    components: { Paginate },
    template: '<Paginate :list-length="1050" :current-page="21"/>',
  }));



