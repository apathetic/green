import { shallowMount } from '@vue/test-utils';
import Field from '@/components/Field';

describe.skip('Field.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(Field);

    expect(wrapper.isFunctionalComponent).toBe(true);
  });
});
