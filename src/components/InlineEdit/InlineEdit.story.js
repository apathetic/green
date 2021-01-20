import { storiesOf } from '@storybook/vue';
import README from '@/components/InlineEdit/README.md';
import InlineEdit from '@/components/InlineEdit';

storiesOf('Components/-Inline-Edit', module)
  .addParameters({
    info: {
      summary: README,
      components: {
        'z-inline-edit': InlineEdit,
      },
    },
  })

  .add('with initial value', () => ({
    template: '<z-inline-edit v-model="value"></z-inline-edit>',
    data() {
      return {
        value: 'Hello Friend',
      };
    },
  }))

  .add('with new and old localized values provided', () => ({
    template: '<z-inline-edit v-model="value" :old-value="25.5" type="number"></z-inline-edit>',
    data() {
      return {
        value: 20.5,
      };
    },
  }))

  .add('with currency format', () => ({
    template: '<z-inline-edit v-model="value" format="currency" type="number"></z-inline-edit>',
    data() {
      return {
        value: '20',
      };
    },
  }))

  .add('with percent format', () => ({
    template: '<z-inline-edit v-model="value" format="percent" type="number"></z-inline-edit>',
    data() {
      return {
        value: '20',
      };
    },
  }))

  .add('disabled', () => ({
    template: `
      <div>
        <z-inline-edit v-model="value" :old-value="oldValue" format="currency" type="number" :disabled="true"></z-inline-edit>
        <z-inline-edit v-model="value" format="currency" type="number" :disabled="true"></z-inline-edit>
      </div>
    `,
    data() {
      return {
        value: '20',
        oldValue: 25,
      };
    },
  }));
