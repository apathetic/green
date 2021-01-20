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
    'z-select': Select,
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
        <z-select label="Single" :single="true" :options="options" v-model="basicValue" />
        <br/> value: {{ value }}
      </div>`,
  ...defaults,
});

export const Multiple = () => ({
  template: `
      <div>
        <div style="width:360px">
          <z-select label="Multiple" hint="Notice 'overflow' treatment when 5+ are selected" :options="options" v-model="value" />
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
            <z-select label="Multiple" :options="options" v-model="value" />
          </div>
          <div class="flex-1 ml-2">
            <z-input label="First/Last Name" placeholder="I am another thing in the layout" />
          </div>
        </div>
      </div>`,
  ...defaults,
});

export const Searchable = () => ({
  template: `
      <div style="width:360px">
        <p></p>
        <z-select :searchable="true" :searchBy="['name', 'id']" :options="options" hint="Search by 'name' or 'id'" />
      </div>
    `,
  ...defaults,
});

export const Accessible = () => ({
  template: `
      <div>
        <p>Tab through the fields. Hit enter / space to toggle, use the keyboard navigation. ESC to dismiss.</p>
        <div class="grid grid--2cols">
          <z-input label="Name" placeholder="nuthin" />
          <z-input label="SSN" placeholder="empty" />
          <z-select label="Credit Card" :options="options" />
          <div class="input"><label>button</label> <z-button>clicky</z-button> </div>
        </div>
      </div>
    `,
  ...defaults,
});

export const Disabled = () => ({
  template: '<z-select :disabled="true" :value="value" />',
  ...defaults,
});

export const Errors = () => ({
  template: '<z-select :options="options" v-model="value" error="Please enter a valid email" />',
  ...defaults,
});

export const CustomIcons = () => ({
  template: `
      <div style="width:360px">
        <z-select icon="add"  label="Add"  :options="options" class="mb-2" />
        <z-select icon="edit" label="Edit" :options="options" class="mb-2" />
        <z-select icon="view" label="View" :options="options" class="mb-2" />
      </div>
    `,
  ...defaults,
});

export const CustomOption = () => ({
  template: `
      <z-select :options="options">
        <div class="flex align-justify" slot="option" slot-scope="props">
          <span class="text-truncate">{{ props.option.name }}</span>
          <small>({{ props.option.quantity }} Available)</small>
        </div>
      </z-select>
    `,
  ...defaults,

  // .add('custom `selected` display', () => ({
  //   template: `
  //     <z-select :options="options">
  //       <div class="flex align-left align-middle" slot="selected-option" slot-scope="props">
  //         <span>{{ props.option.name }} ({{ props.option.quantity }} Available)</span>
  //       </div>
  //     </z-select>
  //   `,
  //   ...defaults,
});
