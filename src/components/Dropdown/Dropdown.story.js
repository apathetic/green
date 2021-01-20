import { storiesOf } from '@storybook/vue';
import Dropdown from '@/components/Dropdown';
import README from '@/components/Dropdown/README.md';

storiesOf('Components/-Dropdown', module)
  .addParameters({
    info: {
      summary: README,
      components: {
        'z-dropdown': Dropdown,
      },
    },
  })
  .add(
    'base component',
    () => ({
      template: `
        <z-dropdown>
          <ul class="pa-3">
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </z-dropdown>`,
    }),
  )

  .add('with a custom button', () => ({
    template:`
      <z-dropdown>
        <template slot="toggle" slot-scope="{ toggle }">
          <button
            class="button button--primary"
            @click="toggle"
          >
            Love this <z-icon name="heart" />
          </button>
        </template>

        <template slot="default">
          <ul class="pa-3">
            <li>This</li>
            <li>That</li>
            <li>The other</li>
          </ul>
        </template>
      </z-dropdown>`,
  }))


  .add('with random dropdown contents', () => ({
    template:`
        <z-dropdown>
          <img style="display:block" src="https://placekitten.com/200/160" alt="cat" />
        </z-dropdown>`,
  }))


  .add('with keyable items', () => ({
    // Here, you "should" be able to navigate items in the list with your arrow keys
    template:`
        <z-dropdown>
          <ul>
            <li>
              <a class="button button--secondary dropdown__item" href="#">Edit</a>
            </li>
            <li>
              <a class="button button--secondary dropdown__item" href="">Delete</a>
            </li>
          </ul>
        </z-dropdown>`,
  }))


  .add('Keep open when content is clicked', () => ({
    template:`
        <z-dropdown close-manually>
          <template slot-scope="{ dismiss }">
            <z-button @click="dismiss">close</z-button>
            <p>Here is some content that will not close the Dropdown when clicked.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <img style="display:block" src="https://placekitten.com/200/160" alt="cat" />
          </template>
        </z-dropdown>`,
  }));

