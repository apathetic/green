import Select from './Select';

const basicOptions = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];

const options = [
  { name: 'First', id: 1, quantity: 100 },
  { name: 'Second', id: 2, quantity: 200 },
  { name: 'Third', id: 3, quantity: 300 },
  { name: 'Fourth', id: 4, quantity: 400 },
  { name: 'Fifth', id: 5, quantity: 500 },
  { name: 'Johnathon Longnamestonson', id: 6 },
];

const defaults = {
  components: {
    'g-select': Select,
  },
  data() {
    return {
      options,
      basicValue: [],
      value: [options[1], options[4]],
    };
  },
};

export default {
  title: 'Components/Select (new)',
};

export const Single = () => ({
  template: `
      <div style="width:360px">
        <g-select label="Single" :single="true" :options="options" v-model="basicValue" />
        <br/> value: {{ value }}
      </div>`,
  ...defaults,
});

export const Multiple = () => ({
  template: `
      <div>
        <div style="width:360px">
          <g-select label="Multiple" hint="Notice 'overflow' treatment when 5+ are selected" :options="options" v-model="value" />
        </div>
        <br/> value: {{ value }}
      </div>`,
  ...defaults,
});

export const Small = () => ({
  template: `
      <div>
        <h3 class="mb-3">Min width is 144px. How to accommodate info at this size?</h3>
        <div class="flex">
          <div style="width:144px">
            <g-select label="Multiple" :options="options" v-model="value" />
          </div>
          <div class="flex-1 ml-2">
            <g-input label="First/Last Name" placeholder="I am another thing in the layout" />
          </div>
        </div>
      </div>`,
  ...defaults,
});

export const Searchable = () => ({
  template: `
      <div style="width:360px">
        <p></p>
        <g-select :searchable="true" :searchBy="['name', 'id']" :options="options" hint="Search by 'name' or 'id'" />
      </div>
    `,
  ...defaults,
});

export const Accessible = () => ({
  template: `
      <div>
        <p>Tab through the fields. Hit enter / space to toggle, use the keyboard navigation. ESC to dismiss.</p>
        <div class="grid grid--2cols">
          <g-input label="Name" placeholder="nuthin" />
          <g-input label="SSN" placeholder="empty" />
          <g-select label="Credit Card" :options="options" />
          <div class="input"><label>button</label> <g-button>clicky</g-button> </div>
        </div>
      </div>
    `,
  ...defaults,
});

export const Disabled = () => ({
  template: '<g-select :disabled="true" :value="value" />',
  ...defaults,
});

export const Errors = () => ({
  template: '<g-select :options="options" v-model="value" error="Please enter a valid email" />',
  ...defaults,
});

export const CustomIcons = () => ({
  template: `
      <div style="width:360px">
        <g-select icon="add"  label="Add"  :options="options" class="mb-2" />
        <g-select icon="edit" label="Edit" :options="options" class="mb-2" />
        <g-select icon="view" label="View" :options="options" class="mb-2" />
      </div>
    `,
  ...defaults,
});

export const CustomOption = () => ({
  template: `
      <g-select :options="options">
        <div class="flex align-justify" slot="option" slot-scope="props">
          <span class="text-truncate">{{ props.option.name }}</span>
          <small>({{ props.option.quantity }} Available)</small>
        </div>
      </g-select>
    `,
  ...defaults,

  // .add('custom `selected` display', () => ({
  //   template: `
  //     <g-select :options="options">
  //       <div class="flex align-left align-middle" slot="selected-option" slot-scope="props">
  //         <span>{{ props.option.name }} ({{ props.option.quantity }} Available)</span>
  //       </div>
  //     </g-select>
  //   `,
  //   ...defaults,
});
