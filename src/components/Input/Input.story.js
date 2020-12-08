import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import README from '@/components/Input/README.md';
import Input from '@/components/Input';

storiesOf('Components/-Input', module)
  .addParameters({
    info: {
      summary: README,
      components: {
        'g-input': Input,
      },
    },
  })

  .add('base component', () => ({
    template: '<g-input value="input value"></g-input>',
  }))

  .add('with a label', () => ({
    template:'<g-input label="Hello Label"></g-input>',
  }))

  .add('with a placeholder', () => ({
    template:'<g-input placeholder="Enter your credit card and SSN"></g-input>',
  }))

  .add('with hint text', () => ({
    template: '<g-input hintText="Try entering some text here"></g-input>',
  }))

  .add('label, placeholder, and hint', () => ({
    template: '<g-input label="Customer Info" placeholder="something about a customer" hintText="Try entering some text here"></g-input>',
  }))

  .add('with a default value', () => ({
    template: '<g-input value="A default value"></g-input>',
  }))

  .add('with error text', () => ({
    template: '<g-input errorText="There is error"></g-input>',
  }))

  .add('is disabled', () => ({
    template: '<g-input :disabled="true"></g-input>',
  }))

  .add('is readonly', () => ({
    template: '<g-input :readonly="true"></g-input>',
  }))

  .add('with (localized) number formatting', () => ({
    template: '<g-input type="number"></g-input>',
  }))

  .add('with "children"', () => ({
    template: '<g-input>this should not render</g-input>',
  }))

  // what... what other types could it be, in this context?
  .add('as type text', () => ({
    template: '<g-input type="text"></g-input>',
  }))

  .add('with prepended symbol', () => ({
    template: '<g-input type="text"><template slot="prepend">$</template></g-input>',
  }))

  .add('with appended symbol', () => ({
    template: '<g-input type="text"><template slot="append">lb</template></g-input>',
  }));

