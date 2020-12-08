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
        <g-input label="text" class="span-3" v-model="text" />

        <g-button v-tooltip.top="text">
          Top
        </g-button>

        <g-button v-tooltip.right="text">
          Right
        </g-button>

        <g-button v-tooltip.bottom="text">
          Bottom
        </g-button>

        <g-button v-tooltip.left="text">
          Left
        </g-button>
      </div>
    `,
  }))
  .add('on icons', () => ({
    ...story,
    template: `
      <div class="grid align-middle">
        <div>
          <g-button icon secondary href="#" v-tooltip.right="'I’m a secondary icon button'">
            <g-icon name="seedtosale" />
          </g-button>
        </div>

        <div>
          <a href="#" v-tooltip.top="'I’m a regular link with a longer label'">
            <g-icon name="edit" />
          </a>
        </div>

        <div>
          <span v-tooltip.bottom="'I’m just a simple span element with a tooltip'">
            <g-icon name="ship" />
          </span>
        </div>
      </div>
    `,
  }));
