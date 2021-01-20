# Radio

Core radio component.

## Usage

This component is registered globally as `<z-radio>`.

It has a required `id` prop, used for making the input accessible when clicking on it's label

#### With an array of values

```js
  {
    template: \`
      <div>
        <z-radio label="radio 1" id="radio-1" name="radio-1" value="1" v-model="false" />
        <z-radio label="radio 2" id="radio-2" name="radio-2" value="2" v-model="false" />
        <z-radio label="radio 3" id="radio-3" name="radio-3" value="3" v-model="false" />
        <br/> Checked: {{ checked }}
      </div>
    \`,
    data() {
      return {
        checked: ['2']
      };
    }
  }
```
