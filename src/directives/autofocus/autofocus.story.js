import { storiesOf } from '@storybook/vue';
import { autofocus } from '@/directives';

const story = {
  directives: { autofocus },

  data() {
    return {
      one: false,
      two: false,
      three: false,
    };
  },
};

storiesOf('Directives/v-autofocus', module)
  .add('example', () => ({
    ...story,
    template: `
      <div class="grid">
        <div class="span-3">
          <z-button @click="one = !one">Toggle input</z-button>
          <z-input class="mt-2" v-autofocus v-if="one" />
        </div>
        <div class="span-3">
          <z-button @click="two = !two">Toggle textarea</z-button>
          <z-textarea class="mt-2" v-autofocus v-if="two" />
        </div>
        <div class="span-3">
          <z-button @click="three = !three">Toggle select</z-button>
          <z-select class="mt-2" v-autofocus v-if="three" />
        </div>
      </div>
    `,
  }));
