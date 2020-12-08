import { shallowMount } from '@vue/test-utils';
import InlineEdit from '@/components/InlineEdit';

describe('InlineEdit.vue', () => {
  it('edit button is rendered when passed "inline" prop', () => {
    const wrapper = shallowMount(InlineEdit, {
      propsData: {
        inline: true,
      },
    });

    expect(wrapper.findAll('.edit-button').length).toBe(1);
  });

  it('emits new value on save', () => {
    const value = 'foo';
    const newValue = 'bar';
    const wrapper = shallowMount(InlineEdit, {
      propsData: {
        value,
      },
    });

    wrapper.vm.blurInput = jest.fn();

    expect(wrapper.vm.originalValue).toBe(value);
    wrapper.vm.internalValue = newValue;
    wrapper.vm.save();
    expect(wrapper.emitted('input')[0]).toEqual([newValue]);
  });

  it('emits initial value if value is empty on save', () => {
    const value = 'foo';
    const newValue = '';
    const wrapper = shallowMount(InlineEdit, {
      propsData: {
        value,
      },
    });

    wrapper.vm.blurInput = jest.fn();

    expect(wrapper.vm.originalValue).toBe(value);
    wrapper.vm.internalValue = newValue;
    wrapper.vm.save();
    expect(wrapper.emitted('input')[0]).toEqual([value]);
  });

  it('allows user to enter 0', () => {
    const value = '123';
    const wrapper = shallowMount(InlineEdit, {
      propsData: {
        value,
      },
    });

    wrapper.vm.blurInput = jest.fn();
    wrapper.vm.focusInput = jest.fn();
    wrapper.vm.edit();
    wrapper.vm.internalValue = 0;
    wrapper.vm.save();

    expect(wrapper.vm.internalValue).toBe(0);
  });

  it('sets originalValue after mounting', () => {
    const value = 'foo';
    const oldValue = 'bar';
    const wrapper = shallowMount(InlineEdit, {
      propsData: {
        oldValue,
        value,
      },
    });

    expect(wrapper.vm.originalValue).toBe(oldValue);
  });

  it('can display the formatted original value as currency', () => {
    const value = 199.95;
    const oldValue = 1200;
    const wrapper = shallowMount(InlineEdit, {
      propsData: {
        format: 'currency',
        oldValue,
        value,
      },
    });

    expect(wrapper.vm.formattedOriginalValue).toBe('$1,200.00');
  });

  it('can format the original value as percent', () => {
    const value = 20;
    const oldValue = 75.555;
    const wrapper = shallowMount(InlineEdit, {
      propsData: {
        format: 'percent',
        oldValue,
        value,
      },
    });

    expect(wrapper.vm.formattedOriginalValue).toBe('75.56%');
  });

  it('disables edit button when passed "disabled" prop', () => {
    const wrapper = shallowMount(InlineEdit, {
      propsData: {
        disabled: true,
        inline: true,
        value: 10,
      },
    });

    expect(wrapper.findAll('.edit-button').length).toBe(0);
  });
});
