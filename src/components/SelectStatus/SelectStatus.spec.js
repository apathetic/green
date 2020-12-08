import { mount } from '@vue/test-utils';
import SelectStatus from '@/components/SelectStatus';

const getStatusOptions = () => [
  {
    id: 1,
    name: 'Active',
    color: 'green',
  },
  {
    id: '2nd',
    name: 'Inactive',
    color: 'red',
  },
];

const selectedOption = 1;

describe('SelectStatus.vue', () => {
  it('renders an optional label', () => {
    const label = 'Foo';
    const statusOptions = getStatusOptions();
    const value = selectedOption;
    const wrapper = mount(SelectStatus, {
      propsData: { label, statusOptions, value },
      sync: false,
    });
    const labelNode = wrapper.find('label');

    expect(labelNode.text()).toMatch(label);
  });

  it('renders valid color class', () => {
    const statusOptions = [
      {
        id: 1,
        name: 'Active',
        color: 'green',
      },
    ];
    const value = selectedOption;
    const wrapper = mount(SelectStatus, {
      propsData: { statusOptions, value },
      sync: false,
    });
    const statusNode = wrapper.findComponent({ ref: 'status' });

    expect(statusNode.classes('bg-green')).toBe(true);
  });
});
