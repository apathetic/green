import { mount } from '@vue/test-utils';
import Radio from '@/components/Radio';

const RadioGroup = {
  template: `
    <div>
      <Radio label="radio 1" id="radio-1" name="radio-1" :value="1" v-model="checked" />
      <Radio label="radio 2" id="radio-2" name="radio-2" :value="2" v-model="checked" />
      <Radio label="radio 3" id="radio-3" name="radio-3" :value="3" v-model="checked" />
    </div>
  `,
  components: { Radio },
  data() {
    return {
      checked: 1,
    };
  },
};

describe('Radio.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(RadioGroup);
  });

  it('should be able to set the value', () => {
    wrapper.findAll('input').at(2).trigger('click');
    expect(wrapper.vm.checked).toEqual(3);
  });
});
