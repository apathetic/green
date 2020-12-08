import { storiesOf } from '@storybook/vue';
import README from '@/components/InlineEdit/README.md';
import InlineEdit from '@/components/InlineEdit';

storiesOf('Components/-Inline-Edit', module)
  .addParameters({
    info: {
      summary: README,
      components: {
        'g-inline-edit': InlineEdit,
      },
    },
  })

  .add('with initial value', () => ({
    template: '<g-inline-edit v-model="value"></g-inline-edit>',
    data() {
      return {
        value: 'Hello Friend',
      };
    },
  }))

  .add('with new and old localized values provided', () => ({
    template: '<g-inline-edit v-model="value" :old-value="25.5" type="number"></g-inline-edit>',
    data() {
      return {
        value: 20.5,
      };
    },
  }))

  .add('with currency format', () => ({
    template: '<g-inline-edit v-model="value" format="currency" type="number"></g-inline-edit>',
    data() {
      return {
        value: '20',
      };
    },
  }))

  .add('with percent format', () => ({
    template: '<g-inline-edit v-model="value" format="percent" type="number"></g-inline-edit>',
    data() {
      return {
        value: '20',
      };
    },
  }))

  .add('disabled', () => ({
    template: `
      <div>
        <g-inline-edit v-model="value" :old-value="oldValue" format="currency" type="number" :disabled="true"></g-inline-edit>
        <g-inline-edit v-model="value" format="currency" type="number" :disabled="true"></g-inline-edit>
      </div>
    `,
    data() {
      return {
        value: '20',
        oldValue: 25,
      };
    },
  }));
