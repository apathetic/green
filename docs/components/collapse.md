# Collapse

Dynamically hide or show content.

<z-collapse :open="isOpen">
  <p>Hello world!</p>
</z-collapse>

<z-button secondary @click="isOpen = !isOpen">Toggle</z-button>


``` html
<z-collapse :open="isOpen">
  <p>Hello world!</p>
</z-collapse>

<z-button secondary @click="isOpen = !isOpen" />
```


<script>
  export default {
    data() {
      return {
        isOpen: false
      }
    },
  }
</script>
