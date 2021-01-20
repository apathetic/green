import { storiesOf } from '@storybook/vue';
import { tooltip } from '@/directives/tooltip';

const story = {
  directives: { tooltip },

  data() {
    return {
      text: 'Tooltip text!',
    };
  },
};

storiesOf('Directives/v-tooltip', module)
  .add('basic', () => ({
    ...story,
    template: `
      <div class="grid align-bottom">
        <z-input label="text" class="span-3" v-model="text" />

        <z-button v-tooltip.top="text">
          Top
        </z-button>

        <z-button v-tooltip.right="text">
          Right
        </z-button>

        <z-button v-tooltip.bottom="text">
          Bottom
        </z-button>

        <z-button v-tooltip.left="text">
          Left
        </z-button>
      </div>
    `,
  }))
  .add('on icons', () => ({
    ...story,
    template: `
      <div class="grid align-middle">
        <div>
          <z-button icon secondary href="#" v-tooltip.right="'I’m a secondary icon button'">
            <z-icon name="seedtosale" />
          </z-button>
        </div>

        <div>
          <a href="#" v-tooltip.top="'I’m a regular link with a longer label'">
            <z-icon name="edit" />
          </a>
        </div>

        <div>
          <span v-tooltip.bottom="'I’m just a simple span element with a tooltip'">
            <z-icon name="ship" />
          </span>
        </div>
      </div>
    `,
  }));
