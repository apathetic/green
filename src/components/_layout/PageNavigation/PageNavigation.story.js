import { storiesOf } from '@storybook/vue';
import StoryRouter from 'storybook-vue-router';
import PageNavigation from '@/components/layout/PageNavigation';
import README from '@/components/layout/PageNavigation/README.md';

function centered() {
  return {
    template: '<div style="height:100vh;display:flex;align-items:center;justify-content:center"><story/></div>',
  };
}

const linkItems = [
  {
    label: 'One',
    href: '#',
  },
  {
    label: 'Two',
    href: '#',
  },
  {
    label: 'Three',
    href: '#',
  },
  {
    label: 'Four',
    href: '#',
  },
  {
    label: 'Five',
    href: '#',
  },
  {
    label: 'Six',
    href: '#',
  },
  {
    label: 'Seven',
    href: '#',
  },
  {
    label: 'Eight',
    href: '#',
  },
];

const routerItems = [
  {
    label: 'One',
    to: '/',
  },
  {
    label: 'Two',
    to: '/two',
  },
  {
    label: 'Three',
    to: '/three',
  },
];

const One = {
  template: '<div>Tab One content</div>',
};

const Two = {
  template: '<div>Tab Two content</div>',
};

const Three = {
  template: '<div>Tab Three content</div>',
};

const Output = {
  template: `
    <div class="mt-2">
      <pre class="text-small">Active index: {{ activeIndex }}</pre>
    </div>
  `,
  props: {
    activeIndex: Number,
  },
};

const StoryBaseLinks = {
  components: {
    PageNavigation,
    Output,
  },
  data() {
    return {
      activeIndex: 0,
      items: linkItems,
    };
  },
  methods: {
    change(index) {
      console.log(`Target tab index: ${index}`);
    },
  },
};

const StoryBaseRouter = {
  components: {
    PageNavigation,
    Output,
  },
  data() {
    return {
      activeIndex: 0,
      items: routerItems,
    };
  },
  methods: {
    change(index) {
      console.log(`Target tab index: ${index}`);
    },
  },
};

storiesOf('Layout/PageNavigation', module)
  .addDecorator(StoryRouter({}, {
    routes: [
      { path: '/', component: One },
      { path: '/two', component: Two },
      { path: '/three', component: Three },
    ],
  }))
  .addDecorator(centered)

  .addParameters({
    info: {
      summary: README,
      components: {
        PageNavigation,
      },
    },
  })

  .add('with static links & active tab', () => ({
    template: `
      <div class="tabs">
        <PageNavigation
          @change="change"
          :activeIndex="activeIndex"
          :items="items"
        />

        <Output :activeIndex="activeIndex" />
      </div>
    `,
    ...StoryBaseLinks,
  }))

  .add('with static links & dynamic active tab', () => ({
    template: `
      <div>
        <PageNavigation
          v-model="activeIndex"
          :items="items"
          @change="change"
        />

        <Output :activeIndex="activeIndex" />
      </div>
    `,
    ...StoryBaseLinks,
  }))

  .add('with router-link', () => ({
    template: `
      <div>
        <PageNavigation
          :items="items"
          @change="change"
        />
      </div>
    `,
    ...StoryBaseRouter,
  }));
