import Radio from './Radio';

export default {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export const Basic = () => ({
  props: ['disabled'],
  data() {
    return {
      checked: 2,
    };
  },
  template: `
    <div>
      <z-radio
        v-model="checked"
        :disabled="disabled"
        id="radio-1"
        label="radio 1"
        name="radio-1"
        value="1"
      />
      <z-radio
        v-model="checked"
        :disabled="disabled"
        id="radio-2"
        label="radio 2"
        name="radio-2"
        value="2"
      />
      <z-radio
        v-model="checked"
        :disabled="disabled"
        id="radio-3"
        label="radio 3"
        name="radio-3"
        value="3"
      />
      <br/> Checked: {{ checked }}
    </div>
  `,
});
Basic.args = {
  disabled: false,
};
