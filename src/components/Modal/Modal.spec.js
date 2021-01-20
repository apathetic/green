import { mount, shallowMount } from '@vue/test-utils';
import Modal from '@/components/Modal';

const ModalWithToggle = {
  components: { 'z-modal': Modal },
  template: `
    <div>
      <button></button>
      <z-modal />
    </div>
  `,
};


describe('Modal.vue', () => {
  it('Moves focus to modal after opening', async (done) => {
    const wrapper = mount(ModalWithToggle);
    const modal = wrapper.findComponent(Modal);

    // Focus on element outside of modal
    wrapper.find('button').element.focus();

    // Open up modal
    modal.setProps({ open: true });

    await wrapper.vm.$nextTick();

    // Focus should be on modal now
    expect(document.activeElement).toEqual(modal.vm.$refs.root);
    done();
  });

  it('If open, listens for esc key & emits dismiss event when triggered', async () => {
    // https://vue-test-utils.vuejs.org/guides/common-tips.html#mocking-transitions
    // https://webdevetc.com/blog/vue-test-utils-advanced-features
    const wrapper = mount(Modal, {
      stubs: {
        transition: {
          render(h) {
            return this.$options._renderChildren;
          },
        },
      },
    });


    // Shouldn't exist when it's closed
    await wrapper.setProps({ open: false });
    expect(wrapper.vm.$refs.root).not.toBeDefined();

    // Should fire only after it has opened
    await wrapper.setProps({ open: true });
    wrapper.trigger('keydown.esc');
    expect(wrapper.emitted('dismiss')).toHaveLength(1);

    // Shouldn't fire again after closing
    await wrapper.setProps({ open: false });
    expect(wrapper.emitted('dismiss')).toHaveLength(1);
  });

  it('Hides footer element if it has no content', () => {
    const getFooter = (wrapper) => wrapper.find('footer').element;

    const withActions = shallowMount(Modal, {
      propsData: { open: true },
      slots: {
        actions: '<button>a button</button>',
      },
    });
    const withFooter = shallowMount(Modal, {
      propsData: { open: true },
      slots: {
        footer: '<div>custom content in footer</div>',
      },
    });
    const empty = shallowMount(Modal, { propsData: { open: true } });

    expect(getFooter(withActions)).toBeDefined();
    expect(getFooter(withFooter)).toBeDefined();
    expect(getFooter(empty)).not.toBeDefined();
  });

  it('Can hide the close button ', () => {
    const wrapper = shallowMount(Modal,{
      propsData: {
        hideClose: true,
      },
    });

    expect(wrapper.find('header > button').exists()).toBe(false);
  });

  it('Emits `dismiss` when clicking on overlay or close button', () => {
    const wrapper = mount(Modal, { propsData: { open: true } });

    wrapper.findComponent({ ref: 'root' }).trigger('mousedown');
    expect(wrapper.emitted('dismiss')).toHaveLength(1);

    wrapper.find('header > button').trigger('click'); // TODO revisit once fixes to CSS module classes land in vue-test-utils
    expect(wrapper.emitted('dismiss')).toHaveLength(2);
  });

  it('Will not emit `dismiss` when clicking other elements inside', () => {
    const wrapper = mount(Modal, { propsData: { open: true } });

    wrapper.find('header').trigger('click');
    wrapper.find('header ~ div').trigger('click'); // TODO revisit once fixes to CSS module classes land in vue-test-utils

    expect(wrapper.emitted('dismiss')).not.toBeDefined();
  });
});
