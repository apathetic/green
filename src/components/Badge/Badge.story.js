import Badge from './Badge.vue';

export default {
  title: 'Components/Badge',
  component: Badge,
  args: {
    content: 99,
  },
  argTypes: {
    content: { control: 'text' },
  },
};

export const OverText = () => ({
  props: ['content'],
  components: { 'z-badge': Badge },
  template: `
    <span>Hello World <z-badge :content="content" /></span>
  `,
});


export const OverButton = () => ({
  props: ['content'],
  components: { 'z-badge': Badge },
  template: `
    <z-button secondary>
      Hello World
      <z-badge :content="content" />
    </z-button>
  `,
});
