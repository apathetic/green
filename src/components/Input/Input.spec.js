import { shallowMount } from '@vue/test-utils';
import Input from '@/components/Input';

describe('Input.vue', () => {
  const label = 'Test Label';
  const value = '';
  const placeholder = 'I\'m a teapot!';
  const errorText = 'Square peg round hole, buddy';
  const hintText = 'pssst!';

  it('renders props when passed', () => {
    const type = 'text';
    const wrapper = shallowMount(Input, {
      propsData: {
        label,
        value,
        placeholder,
        type,
      },
    });

    const labelNode = wrapper.find('label');
    const input = wrapper.find('input');

    expect(labelNode.text()).toBe(label);
    expect(input.attributes('placeholder')).toBe(placeholder);
    expect(input.attributes('type')).toBe(type);
  });

  it('emits an input event @input', () => {
    const wrapper = shallowMount(Input, {
      propsData: {
        value: 'abcd',
      },
    });

    const input = wrapper.find('input');

    const inputElement = input.element;
    const newVal = 'wxyz';

    input.setValue(newVal);

    expect(wrapper.emitted('input')).toBeTruthy();
    expect(wrapper.emitted('input')[0]).toEqual([newVal]);
    expect(inputElement.value).toBe(newVal);
  });

  it('renders a hint', () => {
    const wrapper = shallowMount(Input, {
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
    const wrapper = shallowMount(Input, {
      propsData: {
        label,
        value,
        errorText,
      },
    });

    const feedbackTextNode = wrapper.find('span');

    expect(feedbackTextNode.text()).toBe(errorText);
  });

  it('restricts input to numbers when type=number', async () => {
    const wrapper = shallowMount(Input, {
      propsData: {
        type: 'number',
        label,
        value,
      },
    });

    const input = wrapper.find('input');
    const inputElement = input.element;

    await input.setValue('12.3a');

    expect(wrapper.emitted('input')).toBeTruthy();
    expect(wrapper.emitted('input')[0]).toEqual([12.3]);
    expect(inputElement.value).toBe('12.3');
  });

  it('renders with prepend/append slot', () => {
    const wrapper = shallowMount(Input, {
      slots: {
        append: 'lb',
        prepend: '$',
      },
    });

    const prepend = wrapper.find('.input__symbol--prepend');
    const append = wrapper.find('.input__symbol--append');

    expect(prepend.text()).toBe('$');
    expect(append.text()).toBe('lb');
  });
});
