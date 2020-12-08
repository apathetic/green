import { shallowMount } from '@vue/test-utils';
import { clickoutside } from '.';

// ensure the structure we're testing is in the document (which
// is ordinarily not the case in JSDOM)
document.body.innerHTML = '<div id="app"></div>';

const template = `
  <div>
    <div v-clickoutside="onClickDismiss">
      <p>Text</p>
      <button id="button-1">Click Me</button>
    </div>
    <div>
      <p>Other Text</p>
      <button id="button-2">Click Me</button>
    </div>
  </div>
`;


describe('v-clickoutside directive', () => {
  it('handler called only if click outside of element', () => {
    const mockFn = jest.fn();
    const Component = {
      template,
      directives: { clickoutside },
      methods: { onClickDismiss: mockFn },
    };

    const wrapper = shallowMount(Component, {
      attachTo: document.getElementById('app'),
    });

    wrapper.find('#button-1').trigger('click');
    expect(mockFn).toHaveBeenCalledTimes(0);

    wrapper.find('#button-2').trigger('click');
    expect(mockFn).toHaveBeenCalledTimes(1);

    wrapper.destroy();
  });
});
