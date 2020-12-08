import { mount } from '@vue/test-utils';
import { tooltip } from '.';

describe('v-tooltip directive', () => {
  it('appends new tooltip elements with correct positioning', () => {
    const wrapper = mount({
      template: `
        <div>
          <span class="top" v-tooltip.top="'tooltip text'">element</span>
          <span class="left" v-tooltip.left="'tooltip text'">element</span>
          <span class="bottom" v-tooltip.bottom="'tooltip text'">element</span>
          <span class="right" v-tooltip.right="'tooltip text'">element</span>
        </div>
      `,
      directives: { tooltip },
    });

    expect(wrapper.find('.top .tooltip--top').exists()).toBe(true);
    expect(wrapper.find('.left .tooltip--left').exists()).toBe(true);
    expect(wrapper.find('.bottom .tooltip--bottom').exists()).toBe(true);
    expect(wrapper.find('.right .tooltip--right').exists()).toBe(true);
  });
});