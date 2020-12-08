import { shallowMount } from '@vue/test-utils';
import Chip from '@/components/Chip';

describe.skip('Chip.vue', () => {
  it('should render an Chip component with the correct color', () => {
    const wrapper = shallowMount(Chip, {
      context: {
        props: {
          license: 'medical',
        },
      },
    });

    expect(wrapper.isFunctionalComponent).toBe(true);
    expect(wrapper.attributes().class).toBe('badge bg-teal');
    expect(wrapper.text()).toContain('MED');
  });

  it('should render an Chip component with the fallback color', () => {
    const wrapper = shallowMount(Chip, {
      context: {
        props: {
          license: 'something-random',
        },
      },
    });

    expect(wrapper.isFunctionalComponent).toBe(true);
    expect(wrapper.attributes().class).toBe('badge bg-grey');
    expect(wrapper.text()).toContain('SOM');
  });

  it('should render a title attribute', () => {
    const titleProp = 'MZ00182361';
    const wrapper = shallowMount(Chip, {
      context: {
        props: {
          license: 'recreational',
          title: titleProp,
        },
      },
    });

    expect(wrapper.attributes().class).toBe('badge bg-blue');
    expect(wrapper.attributes().title).toBe(titleProp);
    expect(wrapper.text()).toContain('REC');
  });

  it('should render plain text without', () => {
    const textProp = 'Trust Seller';
    const wrapper = shallowMount(Chip, {
      context: {
        props: {
          text: textProp,
        },
      },
    });

    expect(wrapper.attributes().class).toBe('badge');
    expect(wrapper.text()).toContain(textProp);
  });
});