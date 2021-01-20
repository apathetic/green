# Select

The select component is a type of input where a user can choose one or multiple options from a list. It is used in forms, where a user is submitting data.


## Variations

<div class="list-items bg-light-grey mb-4 mt-2">
  <header class="header">
    <span class="col-span-4">Type</span>
    <span class="col-span-8">Purpose</span>
  </header>

  <li class="list-item">
    <div class="col-span-4">
      Single Select
    </div>
    <div class="col-span-8">
      A single select should be used when all of the options within the list are mutually exclusive.
    </div>
  </li>
  <li class="list-item">
    <div class="col-span-4">
      Multi Select
    </div>
    <div class="col-span-8">
      A multi select should be used when the options within the list can be mutually inclusive.
    </div>
  </li>
</div>


## Single Select

A single select should be used when all of the options within the list are mutually exclusive.

<template>
  <z-select
    single
    placeholder="Select one value"
    :options="[1,2,3]"
  />
</template>

``` html
  <z-select
    single
    placeholder="Select one value"
    :options="[1,2,3]"
  />
```

## Multi Select

A multi select should be used when the options within the list can be mutually inclusive.

<template>
  <z-select
    placeholder="Select multiple values"
    :options="[1,2,3]"
  />
</template>

``` html
<z-select
  placeholder="Select multiple values"
  :options="[1,2,3]"
/>
```