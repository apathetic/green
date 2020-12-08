import { shallowMount } from '@vue/test-utils';
import Dropdown from '@/components/Dropdown';
import Icon from '@/components/Icon';

describe('Dropdown.vue', () => {
  it('renders a Dropdown component', () => {
    const wrapper = shallowMount(Dropdown);

    expect(wrapper.findComponent(Dropdown).exists()).toBe(true);
  });

  it('recieves props correctly', () => {
    const align = 'left';
    const closeManually = true;
    const offset = {
      'x': -6,
      'y': -12,
    };
    const reattach = false;
    const wrapper = shallowMount(Dropdown, {
      propsData: {
        align,
        closeManually,
        offset,
        reattach,
      },
    });

    expect(wrapper.findComponent(Dropdown).exists()).toBe(true);
    expect(wrapper.findComponent(Dropdown).props('align')).toBe(align);
    expect(wrapper.findComponent(Dropdown).props('closeManually')).toBe(closeManually);
    expect(wrapper.findComponent(Dropdown).props('offset')).toBe(offset);
    expect(wrapper.findComponent(Dropdown).props('reattach')).toBe(reattach);
  });

  it('displays the dropdown content', async () => {
    const wrapper = shallowMount(Dropdown);

    await wrapper.vm.toggle();

    expect(wrapper.find('.dropdown__content').element).toBeVisible();
  });

  it('aligns the dropdown content correctly', () => {
    const align = 'left';
    const wrapper = shallowMount(Dropdown, {
      propsData: {
        align,
      },
    });

    wrapper.vm.toggle();

    expect(wrapper.find('.dropdown__content').classes('dropdown__content--left')).toBe(true);
  });

  it('keeps the dropdown content open after getting clicked', async () => {
    const closeManually = true;
    const wrapper = shallowMount(Dropdown, {
      propsData: {
        closeManually,
      },
    });

    await wrapper.vm.toggle();
    wrapper.find('.dropdown__content').trigger('click');

    expect(wrapper.find('.dropdown__content').element).toBeVisible();
  });

  it('closes the dropdown content manually', async () => {
    const closeManually = true;
    const wrapper = shallowMount(Dropdown, {
      propsData: {
        closeManually,
      },
    });

    await wrapper.vm.toggle();
    await wrapper.vm.dismiss();

    expect(wrapper.find('.dropdown__content').element).not.toBeVisible();
  });
});