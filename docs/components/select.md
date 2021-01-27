# Select

The select component is a type of input where a user can choose one or multiple options from a list. It is used in forms, where a user is submitting data.


### Single Select

A single select should be used when all of the options within the list are mutually exclusive.

<z-select
  single
  placeholder="Select one value"
  :options="[1,2,3]"
></z-select>

``` html
<z-select
  single
  placeholder="Select one value"
  :options="[1,2,3]"
></z-select>
```

### Multi Select

A multi select should be used when the options within the list can be mutually inclusive.

<template>
  <z-select
    placeholder="Select multiple values"
    :options="[1,2,3]"
></z-select>
</template>

``` html
<z-select
  placeholder="Select multiple values"
  :options="[1,2,3]"
></z-select>
```



<style>
.z-select p,
.z-select ul,
.z-select ol {
  list-style-type: none;
  line-height: 1.2;
  padding: 0;
}
.z-select .input-field > ul { padding: 3px; }

</style>