import { shallowMount, mount } from '@vue/test-utils';
import Select from '@/components/Select';

const getOptions = () => [
  { name: 'First', id: 1 },
  { name: 'Second', id: 2 },
  { name: 'Third', id: 3 },
  { name: 'Fourth', id: 4 },
  { name: 'Fifth', id: 5 },
  { name: 'Sixth', id: 6 },
];

describe('Select.vue', () => {
  it('renders an optional label', () => {
    const label = 'Foo';
    const wrapper = shallowMount(Select, {
      propsData: { label },
      sync: false,
    });
    const labelNode = wrapper.find('label');

    expect(labelNode.text()).toMatch(label);
  });

  it.skip('maintains "internalValue" when "value" or v-model are not defined', () => {
    const options = getOptions();
    const wrapper = shallowMount(Select, {
      propsData: { options },
      sync: false,
    });

    const { vm } = wrapper;

    vm.addSelection(options[2]);
    expect(vm.interalValue).toEqual(options[2]);
  });

  it.skip('should update "internalValue" if "value" prop changes', async (done) => {
    const options = getOptions();
    const wrapper = shallowMount(Select, {
      propsData: { options, selected: null },
      sync: false,
    });

    const { vm } = wrapper;

    await wrapper.vm.$nextTick();
    wrapper.setProps({ value: options[1] });
    await wrapper.vm.$nextTick();
    expect(vm.interalValue).toEqual(options[1]);
    await wrapper.vm.$nextTick();
    wrapper.setProps({ value: null });
    await wrapper.vm.$nextTick();
    expect(vm.interalValue).toEqual(null);
    expect(wrapper.emitted().input.length).toBe(2);
    done();
  });

  it.skip('renders with icon element when icon prop is passed', () => {
    const wrapper = mount(Select, {
      propsData: { icon: 'add' },
    });
    const selectIcon = wrapper.find('.icon--toggle');

    expect(selectIcon.html()).toBeDefined();
  });

  it('renders with custom "option" slot', () => {
    const options = [
      { foo: 'bar', id: 1 },
      { foo: 'baz', id: 2 },
      { foo: 'ban', id: 3 },
    ];
    const wrapper = mount(Select, {
      propsData: { options },
      scopedSlots: {
        'option': '<div class="option" slot-scope="props">{{ props.option.foo }}</div>',
      },
      sync: false,
    });

    expect(wrapper.findAll('.option').length).toEqual(3);
    expect(wrapper.find('.option').text()).toBe('bar');
  });
});
