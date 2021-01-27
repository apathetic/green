# Dropdown

Dropdowns are used to display a number of action buttons, or a list of options, within a single container. Dropdowns can be opened by clicking a text label, an action ellipsis, or an icon. While the dropdown and select components look similar, they have different functions. Use the dropdown when the list options are mutually exclusive. When sorting, filtering, or listing actions of the same priority, use the select.


### Standard Dropdown

The standard dropdown will use a kebab button to toggle its contents.

<template>
  <div>
    <z-dropdown>
      <ul class="pa-3">
        <li>This</li>
        <li>That</li>
        <li>The other</li>
      </ul>
    </z-dropdown>
  </div>
</template>



``` html
  <z-dropdown>
    <ul class="pa-3">
      <li>This</li>
      <li>That</li>
      <li>The other</li>
    </ul>
  </z-dropdown>
```

### Custom Toggle Dropdown

There are several slots from which you may alter the look and behaviour of the component.

<template>
  <z-dropdown>
    <template slot="toggle" slot-scope="{ toggle }">
      <button
        class="button button--primary"
        @click="toggle"
      >
        Click Here
      </button>
    </template>

    <ul class="pa-3">
      <li>This</li>
      <li>That</li>
      <li>The other</li>
    </ul>
  </z-dropdown>
</template>

``` html
  <z-dropdown>
    <template slot="toggle" slot-scope="{ toggle }">
      <button
        class="button button--primary"
        @click="toggle"
      >
        Click Here
      </button>
    </template>

    <ul class="pa-3">
      <li>This</li>
      <li>That</li>
      <li>The other</li>
    </ul>
  </z-dropdown>
```


