import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import llTextarea from '@/components/Textarea';

storiesOf('Components/-Textarea', module)
  .add('base component', () => ({
    components: { llTextarea },
    template: '<g-textarea></g-textarea>',
  }))

  .add('with a label', () => ({
    components: { llTextarea },
    template:'<g-textarea label="Hello Label"></g-textarea>',
  }))

  .add('with a placeholder', () => ({
    components: { llTextarea },
    template:'<g-textarea placeholder="One does not simply walk into Mordor"></g-textarea>',
  }))

  .add('with hint text', () => ({
    components: { llTextarea },
    template: '<g-textarea hintText="Try entering some text here"></g-textarea>',
  }))

  .add('label, placeholder, and hint', () => ({
    components: { llTextarea },
    template: '<g-textarea label="Customer Info" placeholder="something about a customer" hintText="Try entering some text here"></g-textarea>',
  }))

  .add('with a default value', () => ({
    components: { llTextarea },
    template: '<g-textarea value="A default value"></g-textarea>',
  }))

  .add('with error text', () => ({
    components: { llTextarea },
    template: '<g-textarea errorText="There is error"></g-textarea>',
  }))

  .add('is disabled', () => ({
    components: { llTextarea },
    template: '<g-textarea :disabled="true"></g-textarea>',
  }))

  .add('is readonly', () => ({
    components: { llTextarea },
    template: '<g-textarea :readonly="true"></g-textarea>',
  }));
