import { storiesOf } from '@storybook/vue';
import Modal from '@/components/Modal';
import README from '@/components/Modal/README.md';

const ShortContent = {
  template: `
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae eros id nulla fringilla pellentesque vestibulum id sem.
      Phasellus rhoncus aliquet tincidunt. Suspendisse suscipit enim sit amet varius consequat. Morbi rutrum ut ipsum ultricies
      vulputate. Donec rhoncus viverra lacus ut fringilla. Nullam viverra eget mi eu volutpat. Aenean consequat tellus in ex
      vehicula, in dapibus tortor vestibulum. Suspendisse ac ullamcorper magna, non posuere ante. Vestibulum augue risus
      , gravida eget eros id, dapibus dictum dui. Proin laoreet mollis tellus sed condimentum.
    </p>
  `,
};

const LongContent = {
  components: { ShortContent },
  template: `
    <div>
      <ShortContent />
      <ShortContent />
      <ShortContent />
      <ShortContent />
      <ShortContent />
    </div>
  `,
};

const FormGrid = {
  template: `
    <div class="grid">
      <g-input label="Input 1" class="span-6" />
      <g-input label="Input 2" class="span-6" />
      <g-select label="Input 3" class="span-6" />
      <g-input label="Input 4" class="span-6" />
    </div class="grid">
  `,
};

const ModalBase = {
  components: { ShortContent, LongContent, FormGrid },

  data() {
    return {
      open: true,
    };
  },

  methods: {
    dismiss() {
      this.open = false;
    },
    submit() {
      this.dismiss();
      alert('success');
    },
  },
};

storiesOf('Components/-Modal', module)
  .addParameters({
    info: {
      summary: README,
      components: {
        'g-modal': Modal,
      },
    },
  })
  .add('standard', () => ({
    mixins: [ ModalBase ],
    template: `
      <div>
        <g-button @click="open = true">Open</g-button>

        <g-modal @dismiss="dismiss" :open="open" title="Modal Header">
          <ShortContent />
        </g-modal>
      </div>
    `,
  }))
  .add('using v-model', () => ({
    mixins: [ ModalBase ],
    template: `
      <div>
        <p>As a convenience, you can use v-model to bind the open property automatically.</p>
        <g-button @click="open = true">Open</g-button>

        <g-modal v-model="open" title="Modal Header">
          <ShortContent />
        </g-modal>
      </div>
    `,
  }))
  .add('with actions', () => ({
    mixins: [ ModalBase ],
    template: `
    <div>
      <g-button @click="open = true">Open</g-button>

      <g-modal v-model="open" title="Modal Header">
        <ShortContent />

        <template slot="actions">
          <g-button secondary @click="dismiss">Cancel</g-button>
          <g-button @click="submit">Continue</g-button>
        </template>
      </g-modal>
    </div>
    `,
  }))
  .add('overflowing content', () => ({
    mixins: [ ModalBase ],
    template: `
      <div>
        <g-button @click="open = true">Open</g-button>

        <g-modal @dismiss="dismiss" :open="open" title="Modal Header">
          <LongContent />

          <template slot="actions">
            <g-button secondary @click="dismiss">Cancel</g-button>
            <g-button @click="submit">Continue</g-button>
          </template>
        </g-modal>
      </div>
    `,
  }))
  .add('with custom footer area', () => ({
    mixins: [ ModalBase ],
    template: `
      <div>
        <g-button @click="open = true">Open</g-button>

        <g-modal v-model="open" title="Modal Header">
          <FormGrid />

          <template slot="footer">
            <div class="grid">
              <div class="span-4">
                <a href="#"><g-icon name="add" />Custom Action</a>
              </div>

              <div class="span-8 text-right">
                <div class="button-grid">
                  <g-button secondary @click="dismiss">Cancel</g-button>
                  <g-button @click="submit">Continue</g-button>
                </div>
              </div>
            </div>
          </template>
        </g-modal>
      </div>
    `,
  }))
  .add('accessibility', () => ({
    mixins: [ ModalBase ],
    template: `
      <div>
        <p>Navigate using the keyboard, when open the focus will be moved to the modal (instead of this input).</p>
        <g-button @click="open = true">Open</g-button>

        <g-input label="Input" />

        <g-modal @dismiss="dismiss" :open="open" title="Modal Header">
          <ShortContent />

          <template slot="actions">
            <g-button secondary @click="dismiss">Cancel</g-button>
            <g-button @click="submit">Continue</g-button>
          </template>
        </g-modal>
      </div>
    `,
    data() {
      return {
        open: false,
      };
    },
  }));
