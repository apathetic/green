# Checkbox

Core checkbox component.

## Usage

This component is registered globally as `<g-checkbox>`.

It has a required `id` prop, used for making the input accessible when clicking on it's label

#### With single boolean value

```js
  {
    template: \`
      <div>
        <g-checkbox label="Single checkbox" id="checkbox-1" name="checkbox-1" v-model="checked" />
        <br/> Checked: {{ checked }}
      </div>
    \`,
    data() {
      return {
        checked: true
      };
    }
  }
```

#### With an array of values

```js
  {
    template: \`
      <div>
        <g-checkbox label="Checkbox 1" id="checkbox-1" name="checkbox-1" value="1" v-model="checked" />
        <g-checkbox label="Checkbox 2" id="checkbox-2" name="checkbox-2" value="2" v-model="checked" />
        <g-checkbox label="Checkbox 3" id="checkbox-3" name="checkbox-3" value="3" v-model="checked" />
        <br/> Checked: {{ checked }}
      </div>
    \`,
    data() {
      return {
        checked: ['1']
      };
    }
  }
```