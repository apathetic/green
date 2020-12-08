import { shallowMount } from '@vue/test-utils';
import sticky from '.';

const defaultObserverOptions = {
  root: null,
  rootMargin: '-1px 0px 0px 0px',
  threshold: 1.0,
};

describe('v-sticky directive', () => {
  beforeEach(() => {
    window.IntersectionObserver = function(cb, options) {
      let target = null;

      const onScroll = ({ detail }) => {
        cb([{ isIntersecting: detail.isIntersecting, target }]);
      };

      window.addEventListener('scroll', onScroll);

      return {
        ...defaultObserverOptions,
        ...options,
        observe: jest.fn((element) => {target = element;}),
        unobserve: jest.fn(() => {target = null; window.removeEventListener('scroll', onScroll);}),
        disconnect: jest.fn(() => {if (target) {target._stickyObserver = undefined;}}),
      };
    };
  });

  it('Should set position to "sticky" and top/right/bottom/left style on the element because it is required for "position: sticky"', () => {
    const wrapper = shallowMount({
      template: `
      <div>
        <nav>Navbar</nav>
        <p id="sticky" v-sticky="60">foo</p>
        <p style="height: 1000px">big element</p>
      </div>
      `,
      directives: { sticky },
    });

    const el = wrapper.find('#sticky');

    expect(el.exists()).toBe(true);
    expect(el.element.style.position).toBe('sticky');
    expect(el.element.style.top).toBe('60px');

    wrapper.destroy();
  });

  it('Should create an IntersectionObserver instance and save it on the element for reference later', () => {
    const wrapper = shallowMount({
      template: `
      <div>
        <nav>Navbar</nav>
        <p id="sticky" v-sticky>foo</p>
        <p style="height: 1000px">big element</p>
      </div>
      `,
      directives: { sticky },
    });

    const el = wrapper.find('#sticky');

    expect(el.exists()).toBe(true);
    expect(el.element._stickyObserver).toEqual(expect.objectContaining(defaultObserverOptions));

    wrapper.destroy();
  });

  it('Should toggle the is-sticky class based on element position in the window', () => {
    const wrapper = shallowMount({
      template: `
      <div>
        <nav style="position: sticky; height: 60px; top: 0;">Navbar</nav>
        <p id="sticky" v-sticky>foo</p>
        <p style="height: 1000px">big element</p>
      </div>
      `,
      directives: { sticky },
    });

    const el = wrapper.find('#sticky');

    expect(el.exists()).toBe(true);
    expect(el.classes()).not.toContain('is-sticky');

    window.dispatchEvent(new CustomEvent('scroll', { detail: { isIntersecting: false } }));
    expect(el.classes()).toContain('is-sticky');

    window.dispatchEvent(new CustomEvent('scroll', { detail: { isIntersecting: true } }));
    expect(el.classes()).not.toContain('is-sticky');

    wrapper.destroy();
  });
});
