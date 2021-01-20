import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import README from '@/components/Input/README.md';
import Input from '@/components/Input';

storiesOf('Components/-Input', module)
  .addParameters({
    info: {
      summary: README,
      components: {
        'z-input': Input,
      },
    },
  })

  .add('base component', () => ({
    template: '<z-input value="input value"></z-input>',
  }))

  .add('with a label', () => ({
    template:'<z-input label="Hello Label"></z-input>',
  }))

  .add('with a placeholder', () => ({
    template:'<z-input placeholder="Enter your credit card and SSN"></z-input>',
  }))

  .add('with hint text', () => ({
    template: '<z-input hintText="Try entering some text here"></z-input>',
  }))

  .add('label, placeholder, and hint', () => ({
    template: '<z-input label="Customer Info" placeholder="something about a customer" hintText="Try entering some text here"></z-input>',
  }))

  .add('with a default value', () => ({
    template: '<z-input value="A default value"></z-input>',
  }))

  .add('with error text', () => ({
    template: '<z-input errorText="There is error"></z-input>',
  }))

  .add('is disabled', () => ({
    template: '<z-input :disabled="true"></z-input>',
  }))

  .add('is readonly', () => ({
    template: '<z-input :readonly="true"></z-input>',
  }))

  .add('with (localized) number formatting', () => ({
    template: '<z-input type="number"></z-input>',
  }))

  .add('with "children"', () => ({
    template: '<z-input>this should not render</z-input>',
  }))

  // what... what other types could it be, in this context?
  .add('as type text', () => ({
    template: '<z-input type="text"></z-input>',
  }))

  .add('with prepended symbol', () => ({
    template: '<z-input type="text"><template slot="prepend">$</template></z-input>',
  }))

  .add('with appended symbol', () => ({
    template: '<z-input type="text"><template slot="append">lb</template></z-input>',
  }));

