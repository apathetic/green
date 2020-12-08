import { shallowMount } from '@vue/test-utils';
import Button from '@/components/Button';

describe('Button.vue', () => {
  it('can be rendered as a button', () => {
    const wrapper = shallowMount(Button);
    const component = wrapper.findComponent(Button); // this is the way to get a ref to a `functional` component

    expect(component.element.tagName.toLowerCase()).toBe('button');
  });

  it('can be rendered as an anchor', () => {
    const href = 'http://example.com/';
    const wrapper = shallowMount(Button, {
      context: {
        props: { href },
      },
    });
    const component = wrapper.findComponent(Button);

    expect(component.element.tagName.toLowerCase()).toBe('a');
    expect(component.attributes('href')).toMatch(href);
  });

  it('can be disabled', () => {
    const wrapper = shallowMount(Button, {
      context: {
        props: { disabled: true },
      },
    });

    expect(wrapper.attributes('disabled')).toBe('disabled');
  });

  it('accepts a button color', () => {
    const color = 'primary';
    const colorClass = `button--${color}`;
    const wrapper = shallowMount(Button, {
      context: {
        props: { primary: true },
      },
    });

    expect(wrapper.classes()).toContain(colorClass);
  });

  it('emits a click event as a button', () => {
    const click = jest.fn();
    const wrapper = shallowMount(Button, {
      listeners: {
        click,
      },
    });
    const button = wrapper.find('button');

    button.trigger('click');

    expect(click).toHaveBeenCalled();
  });

  it('renders a default slot', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: '<span class="fake-link">Perform an action.</span>',
      },
    });
    const defaultSlot = wrapper.find('button');

    expect(defaultSlot.findAll('.fake-link').length).toBe(1);
  });

  it('renders correct css classes', ()=> {
    const customCss = 'text-left';
    const propsCss = 'button--primary';
    const wrapper = shallowMount(Button, {
      propsData: { class: customCss },
      context: {
        props: { primary: true },
      },
    });

    expect(wrapper.classes()).toContain(customCss);
    expect(wrapper.classes()).toContain(propsCss);
  });
});
