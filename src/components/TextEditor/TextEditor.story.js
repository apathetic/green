import { storiesOf } from '@storybook/vue';
import TextEditor from '@/components/TextEditor';

const Output = {
  template: `
    <div>
      <div class="mt-2">
        Output:
      </div>
      <div class="mt-2">
        <pre class="text-small">{{ data }}</pre>
      </div>
    </div>
  `,
  props: {
    data: String,
  },
};

const StoryBase = {
  components: {
    TextEditor,
    Output,
  },
  data() {
    return {
      text: '',
    };
  },
  computed: {
    predefined() {
      return '<p><span style="">This is a sample <strong>text</strong></span><br></p>';
    },
  },
  methods: {
    updateText(text) {
      this.text = text;
    },
  },
};

storiesOf('Components/-Text-Editor', module)
  .addParameters({
    info: {
      components: {
        'g-text-editor': TextEditor,
      },
    },
  })

  .add('default editor', () => ({
    template: `
    <div>
      <g-text-editor
        :placeholder="'write something'"
        @input="updateText"
      />
      <Output :data="text" />
    </div>
    `,
    ...StoryBase,
  }))

  .add('with predefined text', () => ({
    template: `
    <div>
      <g-text-editor
        :value="predefined"
        :placeholder="'write something'"
        @input="updateText"
      />
      <Output :data="text" />
    </div>
    `,
    ...StoryBase,
  }))

  .add('read only', () => ({
    template: `
    <div>
      <g-text-editor
        :read-only="true"
        :value="predefined"
        :placeholder="'write something'"
        @input="updateText"
      />
      <Output :data="text" />
    </div>
    `,
    ...StoryBase,
  }));
