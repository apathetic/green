import sticky from '.';

const story = {
  directives: { sticky },

  data() {
    return {
      useSticky: {
        buttonA: true,
        buttonC: false,
      },
    };
  },
};

export default {
  title: 'Directives/v-sticky',
};

export const Example = () => ({
  ...story,
  template: `
      <div
        style="
          height: 400px;
          overflow-y: auto;
          border: 1px solid #888;
        "
      >
        <nav
          style="
            background-color: #ddd;
            box-shadow: 0 2px 8px rgba(0, 15, 35, 0.3);
            height: 60px;
            padding: 12px;
            top: 0; position: sticky;
            width: 100%;
            z-index: 10;
          "
        >
          <h2 style="font-size: 24px; line-height: 36px;">Navbar</h2>
        </nav>

        <main style="padding: 12px;">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed urna sit amet purus porttitor elementum a eget ex. Morbi commodo, erat in imperdiet vulputate, est tellus scelerisque odio, in consectetur justo orci in purus. In venenatis, elit nec porta placerat, sapien dui malesuada lectus, non iaculis dolor quam id augue.</p>

          <div>
            <g-button v-sticky="useSticky.buttonA" style="z-index: 11;">
              Button A
            </g-button>
          </div>

          <div style="margin-top: 16px;">
            <g-button v-sticky style="z-index: 11;">
              Button B
            </g-button>

            <g-button v-sticky="useSticky.buttonC" style="z-index: 11;">
              Button C
            </g-button>

            <g-button>
              Button D
            </g-button>
          </div>

          <p>Curabitur posuere odio non justo rhoncus, non lacinia orci vulputate. Aliquam placerat turpis eget nisi malesuada aliquam. Sed eleifend risus ligula, ut semper eros fringilla id. Praesent lobortis viverra lectus tempus lobortis. Pellentesque libero nunc, malesuada et scelerisque ut, tempor quis purus. Praesent elementum leo at orci rhoncus varius. Aenean quis mauris malesuada, venenatis turpis sed, euismod ligula.</p>
          <p>Suspendisse pellentesque laoreet imperdiet. Mauris dignissim varius augue porta blandit. Mauris mattis dapibus magna, nec mollis massa tempor vitae. Aenean in purus eget nisi sagittis interdum. Donec sodales malesuada consequat. Nam finibus, leo quis venenatis aliquam, lectus augue feugiat lorem, eget ullamcorper mi odio ut tortor. Donec aliquam neque eu sem iaculis blandit. Nunc porta, mauris in rhoncus volutpat, neque tellus bibendum metus, in ultrices neque ex tempor ipsum. Proin enim risus, iaculis et auctor quis, mollis nec dolor. Nam volutpat vitae justo sit amet ullamcorper. Aliquam nulla massa, rutrum a sollicitudin non, congue in massa. Maecenas pellentesque, elit sit amet commodo commodo, felis justo sagittis lectus, sit amet fermentum nisl lorem ac nulla. Mauris bibendum, dui ut luctus viverra, elit nisl vestibulum leo, non mattis velit tortor vitae ligula. Ut non nisl leo. Nam facilisis accumsan felis a malesuada.</p>
          <p>Nunc ut lectus at sapien aliquam sollicitudin. Vestibulum vulputate egestas condimentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur convallis non nibh eget fringilla. Pellentesque eu eros malesuada, bibendum risus et, fringilla nulla. Duis convallis, mauris at aliquet bibendum, nisl dui vestibulum leo, sit amet fringilla justo nisi at elit. Duis consequat, dolor quis pulvinar porta, leo magna tempus dui, in ultricies sem lacus eget sapien. Nam tortor nisi, feugiat at lorem at, feugiat rhoncus lectus.</p>
          <p>Nam at vestibulum enim, in fermentum eros. Nam condimentum suscipit nibh. Curabitur finibus magna at metus tincidunt ultrices. Curabitur sodales gravida mauris, facilisis vehicula justo. Proin a iaculis nisi, ut convallis ante. Nulla elementum turpis et congue convallis. Vestibulum tempor eros ut consectetur tempus. Vivamus sodales tincidunt erat in imperdiet. Pellentesque mollis, sem sed posuere gravida, mauris augue sollicitudin lorem, ut laoreet nulla ipsum eu justo. Nulla id ullamcorper magna, eget rutrum odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque hendrerit ornare nisl. Aenean maximus quam eget pretium efficitur. Sed ac lacinia enim. Proin sed vehicula diam. Nulla feugiat, lectus sit amet mollis hendrerit, erat justo vestibulum justo, vel mollis enim justo sit amet elit.</p>
        </main>
      </div>
    `,
});
