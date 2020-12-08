import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import TextEditor from '@/components/TextEditor';
import Quill from 'quill';

describe('TextEditor.vue', () => {
  // mock Mutation Observer object
  global.MutationObserver = class {
    constructor(callback) {}

    disconnect() {}

    observe(element, initObject) {
      return [];
    }

    takeRecords() {
      return [];
    }
  };

  // mock document.getSelection method
  global.document.getSelection = function() {
    return {
      getRangeAt: function() {},
    };
  };

  it('can create a quill object', () => {
    const div = document.createElement('div');
    const quill = new Quill(div);

    expect(quill).toBeTruthy();
  });

  // TODO: how to avoid error: Cannot read property 'insertBefore' of null
  // when creating the wrapper component
  /*
  it('can render as vue component', () => {
    const wrapper = shallowMount(TextEditor);
    expect(wrapper).toBeTruthy();
  });
  */
});
