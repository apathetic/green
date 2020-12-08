import Vue from 'vue';
import { statuses } from '@fixtures';
import SelectStatus from '@/components/SelectStatus';
import README from '@/components/SelectStatus/README.md';

Vue.component('g-select-status', SelectStatus);

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
        'g-select-status': SelectStatus,
      },
    },
  },
};

export const Basic = () => ({
  template: '<g-select-status :statusOptions="options" v-model="value"/>',
  ...defaults,
});

Basic.story = {
  name: 'basic',
};

export const BasicWithCustomLabelAndPlaceholder = () => ({
  template:
    '<g-select-status :statusOptions="options" v-model="value" label="Status" placeholder="Select status" />',
  ...defaults,
});

BasicWithCustomLabelAndPlaceholder.story = {
  name: 'basic with custom label and placeholder',
};

export const Disabled = () => ({
  template: '<g-select-status :disabled="true" :statusOptions="options" v-model="value" />',
  ...defaults,
});

Disabled.story = {
  name: 'disabled',
};
