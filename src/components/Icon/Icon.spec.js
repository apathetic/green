import { shallowMount } from '@vue/test-utils';
import Icon from '@/components/Icon';

describe('Icon.vue functional component', () => {
  it('renders the correct icon', () => {
    const name = 'search';
    const wrapper = shallowMount(Icon, {
      context: {
        props: { name },
      },
    });

    expect(wrapper.find('use').attributes().href).toContain(`#${name}`);
  });

  it('renders a cart icon with custom css classname', () => {
    const name= 'cart';
    const className = 'mini-cart-toggle__icon';
    const wrapper = shallowMount(Icon, {
      propsData: {
        name,
        class: className,
      },
    });

    expect(wrapper.classes()).toContain(className);
  });
});