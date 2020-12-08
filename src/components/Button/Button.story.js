import Button from './Button';

const defaultContent = 'Click here';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    content: undefined,
    href: 'http://example.com',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: `
    <g-button
      :disabled="disabled"
      :href="href"
      :icon="icon"
      :inline="inline"
      :primary="primary"
      :secondary="secondary"
      :tertiary="tertiary"
    >
      <g-icon v-if="icon" name="check"></g-icon>
      <template v-if="content">{{ content }}</template>
    </g-button>
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  content: defaultContent,
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  content: defaultContent,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  tertiary: true,
  content: defaultContent,
};
Tertiary.decorators = [() => ({
  template: `
    <div>
      <div class="pa-2" style="background-color: #01bbb4;">
        <story />
      </div>
      <div class="pa-2 mt-1" style="background-color: #1ab394;">
        <story />
      </div>
      <div class="pa-2 mt-1" style="background-color: #f8ac59;">
        <story />
      </div>
      <div class="pa-2 mt-1" style="background-color: #ed5565;">
        <story />
      </div>
    </div>
  `,
})];

export const Inline = Template.bind({});
Inline.args = {
  inline: true,
  content: defaultContent,
};

export const Icon = Template.bind({});
Icon.args = {
  icon: true,
};

[Primary, Secondary, Tertiary, Inline, Icon].forEach((story) => {
  story.argTypes = {
    primary: { control: { disable: true } },
    secondary: { control: { disable: true } },
    tertiary: { control: { disable: true } },
    inline: { control: { disable: true } },
    icon: { control: { disable: true } },
  };
});

export const ButtonGrid = () => ({
  components: { Button },
  template: `
    <div>
      <p>Use the <code>.button-grid</code> wrapper class to create a 2 column, responsive button grid. Used in most views for secondary + primary action buttons</p>

      <div class="button-grid">
        <g-button secondary>Cancel</g-button>
        <g-button>Save</g-button>
      </div>

      <p class="mt-3"><code>.button-grid</code> will display as an <code>inline-flex</code> element on desktop, which means you can align it like any other button. In most cases, they are presented right aligned.</p>

      <div class="text-right">
        <div class="button-grid">
          <g-button secondary>Cancel</g-button>
          <g-button>Save</g-button>
        </div>
      </div>
    </div>
  `,
});
