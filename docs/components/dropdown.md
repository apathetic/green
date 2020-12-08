# Dropdown

Dropdowns are used to display a number of action buttons, or a list of options, within a single container. Dropdowns can be opened by clicking a text label, an action ellipsis, or an icon. While the dropdown and select components look similar, they have different functions. Use the dropdown when the list options are mutually exclusive. When sorting, filtering, or listing actions of the same priority, use the select.



## Variations

<div class="list-items bg-light-grey mb-4 mt-2">
  <header class="header">
    <span class="col-span-4">Type</span>
    <span class="col-span-8">Purpose</span>
  </header>

  <li class="list-item">
    <div class="col-span-4">
      Standard Dropdown
    </div>
    <div class="col-span-8">
      Dropdowns are used to display a number of action buttons, or a list of options, within a single container.
    </div>
  </li>
  <li class="list-item">
    <div class="col-span-4">
      Custom Toggle Dropdown
    </div>
    <div class="col-span-8">
      A slot can be used to display a custom toggle button.
    </div>
  </li>
</div>


## Standard Dropdown

Dropdowns are used to display a number of action buttons, or a list of options, within a single container.

<template>
  <div>
    <g-dropdown>
      <ul class="pa-3">
        <li>This</li>
        <li>That</li>
        <li>The other</li>
      </ul>
    </g-dropdown>
  </div>
</template>

``` html
  <g-dropdown>
    <ul class="pa-3">
      <li>This</li>
      <li>That</li>
      <li>The other</li>
    </ul>
  </g-dropdown>
```

## Custom Toggle Dropdown

Dropdowns are used to display a number of action buttons, or a list of options, within a single container.

<template>
  <g-dropdown>
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
  </g-dropdown>
</template>

``` html
  <g-dropdown>
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
  </g-dropdown>
```