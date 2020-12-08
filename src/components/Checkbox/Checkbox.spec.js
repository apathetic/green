import { shallowMount } from '@vue/test-utils';
import Checkbox from '@/components/Checkbox';

describe('Checkbox.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Checkbox, {
      propsData: {
        id: 'checkbox-1',
        checked: false,
      },
    });
  });

  it('should be able to set boolean values', () => {
    wrapper.find('input').trigger('click');
    expect(wrapper.emitted('change')[0][0]).toEqual(true);
  });

  it.skip('should be able to set array values', () => {
    wrapper.setProps({
      checked: [1, 2],
      value: 1,
    });

    wrapper.find('input').trigger('click');
    expect(wrapper.emitted('change')[0][0]).toEqual([2]);
  });
});
