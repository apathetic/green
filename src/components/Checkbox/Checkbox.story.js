import Checkbox from './Checkbox';
import README from './README.md';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export const Single = () => ({
  props: ['disabled'],
  data() {
    return {
      checked: true,
    };
  },
  template: `
    <div>
      <g-checkbox label="Single checkbox" id="checkbox-1" name="checkbox-1" v-model="checked" :disabled="disabled" />
      <br/> Checked: {{ checked }}
    </div>
  `,
});

export const Multiple = () => ({
  props: ['disabled'],
  data() {
    return {
      checked: ['1'],
    };
  },
  template: `
    <div>
      <g-checkbox label="Checkbox 1" id="checkbox-1" name="checkbox-1" value="1" v-model="checked" :disabled="disabled" />
      <g-checkbox label="Checkbox 2" id="checkbox-2" name="checkbox-2" value="2" v-model="checked" :disabled="disabled" />
      <g-checkbox label="Checkbox 3" id="checkbox-3" name="checkbox-3" value="3" v-model="checked" :disabled="disabled" />
      <br/> Checked: {{ checked }}
    </div>
  `,
});

export const Indeterminate = () => ({
  props: ['disabled'],
  template: `
    <div>
      <g-checkbox abel="Indeterminate checkbox" id="checkbox-1" name="checkbox-1" :indeterminate="true" :disabled="disabled" />
    </div>
  `,
});

export const Standalone = () => ({
  template: `
    <div>
      <div class="item-list mt-2">
        <div class="item-list__header header-row grid">
          <span class="title span-4 align-middle flex">
            <g-checkbox id="checkbox-all" name="checkbox-all" value="all" />
            Title
          </span>
          <span class="category span-4 align-middle flex">Category</span>
          <span class="action span-4 align-middle flex">Action</span>
        </div>
        <div class="item-list__content">
          <div class="item grid" style="padding: 6px 12px; border-bottom: 1px solid #c5c9d4;">
            <div class="title span-4 align-middle flex">
              <g-checkbox id="checkbox-1" name="checkbox-1" value="1" />
              <div>
                <h4>
                  Test name 1
                </h4>
                <div>
                  Test description 1
                </div>
              </div>
            </div>
            <div class="category span-4 align-middle flex">Category 1</div>
            <div class="action span-4 align-middle flex">Action 1</div>
          </div>
          <div class="item grid" style="padding: 6px 12px;">
            <div class="title span-4 align-middle flex">
              <g-checkbox id="checkbox-2" name="checkbox-2" value="2" />
              <div>
                <h4>
                  Test name 2
                </h4>
                <div>
                  Test description 2
                </div>
              </div>
            </div>
            <div class="category span-4 align-middle flex">Category 2</div>
            <div class="action span-4 align-middle flex">Action 2</div>
          </div>
        </div>
      </div>
    </div>
  `,
});
