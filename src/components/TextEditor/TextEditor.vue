<template>
  <div class="input" data-test="g-text-editor">
    <label v-if="label" class="input-label">
      {{ label }}
    </label>

    <div
      ref="editor"
      v-html="value"
    ></div>

    <span
      v-if="hint"
      class="mt-1 text-small flex"
    >
      {{ hint }}
    </span>
  </div>
</template>

<script>
  import Quill from 'quill';

  /**
   * Vue Wrapper Component for the vanillaJS WYSIWYG editor
   */
  export default {
    name: 'g-text-editor',

    props: {
      /**
       * Value for Text Editor
       */
      value: {
        type: String,
        default: '',
      },
      /**
       * Placeholder text
       */
      placeholder: {
        type: String,
        default: '',
      },
      /**
       * Read Only option for Text Editor
       */
      readOnly: {
        type: Boolean,
        default: false,
      },
      /**
       * Label to render on top of Text Editor.
       * Render a space for respecting vertical alignment
       * relative to other inputs.
       */
      label: {
        type: [Boolean, String],
        default: ' ',
      },
      /**
       * Error text to display. Replaces `hintText` (if provided) & adds error styling.
       */
      errorText: {
        type: String,
        default: '',
      },
      /**
       * Hint text to display below the Text Editor
       */
      hintText: {
        type: String,
        default: '',
      },
    },

    data() {
      return {
        editor: null,
        text: this.value,
      };
    },

    computed: {
      /**
       * @returns {string} - Hint/Error text
       */
      hint() {
        return (this.errorText ? this.errorText : this.hintText) || '';
      },
    },

    mounted() {
      this.editor = new Quill(this.$refs.editor, {
        modules: {
          toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'align': [] }],
            ['clean'],
          ],
        },
        theme: 'snow',
        placeholder: this.placeholder,
        readOnly: this.readOnly,
      });

      this.editor.root.innerHTML = this.value;
      this.editor.on('text-change', this.update);
    },

    methods: {
      update() {
        const { editor } = this;

        if (editor.getLength() > 1) {
          this.text = editor.root.innerHTML;
          this.$emit('input', editor.root.innerHTML);
        } else {
          this.text = '';
          this.$emit('input', '');
        }
      },
    },
  };
</script>


<style lang="scss">
  .ql-editor {
    min-height: 120px;
  }
</style>
