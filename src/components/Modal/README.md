# Modal

Modal overlay component. Used for popup content & dialogs.

## Usage

This component is registered globally as `<z-modal>`.

```html
  <template>
    <div>
      <z-button @click="show">Open</z-button>
      <z-modal @dismiss="dismiss" :open="open" title="Modal Header">
        Modal content
        <template slot="actions">
          <z-button secondary @click="dismiss">Cancel</z-button>
          <z-button @click="submit">Continue</z-button>
        </template>
      </z-modal>
    </div>
  </template>

<script>
  export default {
    data() {
      return {
        open: false
      };
    },
    methods: {
      show() {
        this.open = true;
      },
      dismiss() {
        this.open = false;
      },
      submit() {
        this.open = false;
        // ... Some action to persist data
      }
    }
  }
</script>
```
