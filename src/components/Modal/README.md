# Modal

Modal overlay component. Used for popup content & dialogs.

## Usage

This component is registered globally as `<g-modal>`.

```html
  <template>
    <div>
      <g-button @click="show">Open</g-button>
      <g-modal @dismiss="dismiss" :open="open" title="Modal Header">
        Modal content
        <template slot="actions">
          <g-button secondary @click="dismiss">Cancel</g-button>
          <g-button @click="submit">Continue</g-button>
        </template>
      </g-modal>
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
