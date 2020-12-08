import { storiesOf } from '@storybook/vue';
import Expand from '@/components/Expand';

storiesOf('Components/-Expand', module)
  .add('basic', () => ({
    components: { Expand },

    data() {
      return {
        open: true,
      };
    },

    template: `
      <div>
        <g-button class="mb-3" @click="open = !open">{{ open ? 'Collapse' : 'Expand' }}</g-button>

        <Expand :open="open">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar eget risus nec suscipit. Quisque ac metus nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi mattis massa vitae quam ornare placerat. Mauris non velit quis nunc lobortis sollicitudin. Donec sollicitudin mattis dolor sit amet euismod. Curabitur laoreet, purus in elementum tincidunt, enim leo semper nisi, at lacinia quam ante eu purus. Aenean et nulla ornare leo pellentesque blandit. Vestibulum sit amet enim luctus, viverra ex vitae, aliquet purus. Aliquam erat volutpat. Morbi interdum, mauris ut semper fermentum, tellus felis euismod lacus, vel maximus tortor arcu at dui. Praesent fringilla nulla sed pretium euismod. Nam tincidunt ipsum vel erat tristique, vitae pellentesque ante dapibus.
          </p>
          <p>
            Nullam luctus tincidunt varius. Vestibulum et odio vitae sem euismod dapibus vel sit amet nibh. Nullam dui ipsum, imperdiet nec placerat non, dapibus pulvinar magna. Etiam egestas condimentum maximus. Nunc feugiat molestie enim sed ullamcorper. Morbi ut leo id orci aliquet tincidunt. Duis ut leo a est interdum sodales at nec sapien. Nulla feugiat ex non lacus ultrices aliquet. Morbi tempus vestibulum arcu vitae condimentum. Praesent accumsan mi ut lacinia pharetra. Nunc augue elit, aliquam vel dignissim ac, sodales pretium nisi. Nam tempus mauris mauris, eu condimentum magna mattis ac. Donec eget diam scelerisque, eleifend nisi sed, pretium tortor. Nullam elementum ornare velit quis luctus.
          </p>
        </Expand>
      </div>
    `,
  }));
