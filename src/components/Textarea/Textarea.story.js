import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import llTextarea from '@/components/Textarea';

storiesOf('Components/-Textarea', module)
  .add('base component', () => ({
    components: { llTextarea },
    template: '<z-textarea></z-textarea>',
  }))

  .add('with a label', () => ({
    components: { llTextarea },
    template:'<z-textarea label="Hello Label"></z-textarea>',
  }))

  .add('with a placeholder', () => ({
    components: { llTextarea },
    template:'<z-textarea placeholder="One does not simply walk into Mordor"></z-textarea>',
  }))

  .add('with hint text', () => ({
    components: { llTextarea },
    template: '<z-textarea hintText="Try entering some text here"></z-textarea>',
  }))

  .add('label, placeholder, and hint', () => ({
    components: { llTextarea },
    template: '<z-textarea label="Customer Info" placeholder="something about a customer" hintText="Try entering some text here"></z-textarea>',
  }))

  .add('with a default value', () => ({
    components: { llTextarea },
    template: '<z-textarea value="A default value"></z-textarea>',
  }))

  .add('with error text', () => ({
    components: { llTextarea },
    template: '<z-textarea errorText="There is error"></z-textarea>',
  }))

  .add('is disabled', () => ({
    components: { llTextarea },
    template: '<z-textarea :disabled="true"></z-textarea>',
  }))

  .add('is readonly', () => ({
    components: { llTextarea },
    template: '<z-textarea :readonly="true"></z-textarea>',
  }));
