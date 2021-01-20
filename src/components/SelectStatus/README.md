# SelectStatus

Status selector component. Used for displaying/changing statuses of orders, price schedules etc.

## Usage

This component is registered globally as `<z-select-status>`. Array of `options` has to be passed as listed in example below.

```html
  <template>
    <div>
      <z-select-status
        :disabled="true"
        :statusOptions="options"
        v-model="value"
      />
    </div>
  </template>

<script>
  export default {
    data() {
      return {
        value: 1,
        options: [
          {
            id: 1,
            name: 'Active',
            color: 'green'
          },
          {
            id: 2,
            name: 'Inactive',
            color: 'red'
          }
        ]
      };
    }
  }
</script>
```

## Avaliable colors

<div style="display: flex; align-items: center; justify-content: flex-start; margin-bottom: 20px;">
  <div>color: 'green'</div>
  <div style="background-color: #1ab394; height: 20px; width: 20px; border-radius: 10px; margin-left: 10px;"></div>
</div>

<div style="display: flex; align-items: center; justify-content: flex-start; margin-bottom: 20px;">
  <div>color: 'red'</div>
  <div style="background-color: #ed5565; height: 20px; width: 20px; border-radius: 10px; margin-left: 10px;"></div>
</div>

<div style="display: flex; align-items: center; justify-content: flex-start; margin-bottom: 20px;">
  <div>color: 'grey'</div>
  <div style="background-color: #c5c9d4; height: 20px; width: 20px; border-radius: 10px; margin-left: 10px;"></div>
</div>

<div style="display: flex; align-items: center; justify-content: flex-start; margin-bottom: 20px;">
  <div>color: 'dark-grey'</div>
  <div style="background-color: #676a6c; height: 20px; width: 20px; border-radius: 10px; margin-left: 10px;"></div>
</div>

<div style="display: flex; align-items: center; justify-content: flex-start; margin-bottom: 20px;">
  <div>color: 'light-grey'</div>
  <div style="background-color: #eef2f4; height: 20px; width: 20px; border-radius: 10px; margin-left: 10px;"></div>
</div>

<div style="display: flex; align-items: center; justify-content: flex-start; margin-bottom: 20px;">
  <div>color: 'blue'</div>
  <div style="background-color: #0072f0; height: 20px; width: 20px; border-radius: 10px; margin-left: 10px;"></div>
</div>

<div style="display: flex; align-items: center; justify-content: flex-start; margin-bottom: 20px;">
  <div>color: 'dark-blue'</div>
  <div style="background-color: #0022ac; height: 20px; width: 20px; border-radius: 10px; margin-left: 10px;"></div>
</div>

<div style="display: flex; align-items: center; justify-content: flex-start; margin-bottom: 20px;">
  <div>color: 'yellow'</div>
  <div style="background-color: #f8ac59; height: 20px; width: 20px; border-radius: 10px; margin-left: 10px;"></div>
</div>
