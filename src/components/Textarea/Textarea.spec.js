import { shallowMount } from '@vue/test-utils';
import Textarea from '@/components/Textarea';

describe('Textarea.vue', () => {
  const label = 'Test Label';
  const value = '';
  const placeholder = 'I\'m a teapot!';
  const errorText = 'Square peg round hole, buddy';
  const hintText = 'pssst!';

  it('renders props when passed', () => {
    const wrapper = shallowMount(Textarea, {
      propsData: {
        label,
        value,
        placeholder,
      },
    });

    const labelNode = wrapper.find('label');
    const textarea = wrapper.find('textarea');

    expect(labelNode.text()).toBe(label);
    expect(textarea.attributes('placeholder')).toBe(placeholder);
  });

  it('emits an input event @input', () => {
    const wrapper = shallowMount(Textarea, {
      propsData: {
        value: 'abcd',
      },
    });

    const textarea = wrapper.find('textarea');

    const textareaElement = textarea.element;
    const newVal = 'wxyz';

    textarea.setValue(newVal);

    expect(wrapper.emitted('input')).toBeTruthy();
    expect(wrapper.emitted('input')[0]).toEqual([newVal]);
    expect(textareaElement.value).toBe(newVal);
  });

  it('renders a hint', () => {
    const wrapper = shallowMount(Textarea, {
      propsData: {
        label,
        value,
        hintText,
      },
    });

    const feedbackTextNode = wrapper.find('span');

    expect(feedbackTextNode.text()).toBe(hintText);
  });

  it('renders an error', () => {
    const wrapper = shallowMount(Textarea, {
      propsData: {
        label,
        value,
        errorText,
      },
    });

    const feedbackTextNode = wrapper.find('span');

    expect(feedbackTextNode.text()).toBe(errorText);
  });
});
