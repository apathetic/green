import Vue from 'vue';
import { statuses } from '@fixtures';
import SelectStatus from '@/components/SelectStatus';
import README from '@/components/SelectStatus/README.md';

Vue.component('z-select-status', SelectStatus);

const defaults = {
  data() {
    return {
      value: 1,
      options: statuses,
    };
  },
};

export default {
  title: 'Components/SelectStatus',

  parameters: {
    info: {
      summary: README,
      components: {
        'z-select-status': SelectStatus,
      },
    },
  },
};

export const Basic = () => ({
  template: '<z-select-status :statusOptions="options" v-model="value"/>',
  ...defaults,
});

Basic.story = {
  name: 'basic',
};

export const BasicWithCustomLabelAndPlaceholder = () => ({
  template:
    '<z-select-status :statusOptions="options" v-model="value" label="Status" placeholder="Select status" />',
  ...defaults,
});

BasicWithCustomLabelAndPlaceholder.story = {
  name: 'basic with custom label and placeholder',
};

export const Disabled = () => ({
  template: '<z-select-status :disabled="true" :statusOptions="options" v-model="value" />',
  ...defaults,
});

Disabled.story = {
  name: 'disabled',
};
