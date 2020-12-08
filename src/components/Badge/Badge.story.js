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
  components: { 'g-badge': Badge },
  template: `
    <span>Hello World <g-badge :content="content" /></span>
  `,
});


export const OverButton = () => ({
  props: ['content'],
  components: { 'g-badge': Badge },
  template: `
    <g-button secondary>
      Hello World
      <g-badge :content="content" />
    </g-button>
  `,
});
