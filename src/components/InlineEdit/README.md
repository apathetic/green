# InlineEdit

Editable input component.

On click, it toggles it's editable state. Users can update the value & click on check to "save" it, after saving the new value gets emitted.
Alternatively, users may click away to "cancel" and have no new value get emitted.

Supports currency & percentage formatting out of the box.

## Usage

This component is registered globally as `<z-inline-edit>`.

```
  {
    template: \`
      <z-inline-edit v-model="value"></z-inline-edit>
    \`,
    data() {
      return {
        value: 'Hello Friend'
      };
    }
  }
```

## Formatting

You may use the `format` prop to display the value as either currecy or percentage.

```
  {
    template: \`
      <z-inline-edit v-model="value" format="currency" type="number"></z-inline-edit>
    \`,
    data() {
      return {
        value: '20'
      };
    }
  }
```

## Values
You may notice that there is an complex system of managing the different values in this component. To the user, there is only the notion of the "old" value, and the "updated" value.  However, internally we have:

### Value
The value passed in to the component. This sets the displayed value.

### Internal value
A temporary value used to hold the value of `value` during editing. Useful if the user cancels the edit, and we wish to restore the value of `value` as it was immediately prior to editing. Not to be confused with the `original value`.

### Original value
Looks to serve the same purpose as `old value`. In any case, gets set once (with `old` || `value`) and doesn't change.

### Formatted value
A value formatted for display, taking `currency` and `percent` in to account.

### Formatted original value
The `original` value formatted for display, taking `currency` and `percent` in to account.

### Old value
Use the `:old-value` prop to display a crossed out value below the component's input. It will only display when the `:value` passed in doesn't match `:old-value`.

_If this prop is not provided, the value will simply be updated inline._

If you want to have the "original value" appear only once an edited value is entered, the `:old-value` prop needs to be defined and equal to `:value` when the component is instantiated.


```
  {
    template: \`
      <z-inline-edit v-model="value" :old-value="25.00" type="number"></z-inline-edit>
    \`,
    data() {
      return {
        value: 20
      };
    }
  }
```


## Input Considerations

### Text

For the user
* can enter any text a-zA-Z0-9, etc
* on mobile, text entry pad is displayed

For a dev:
* no considerations, here...



### Number

For the user:
* can enter 0-9, as well as `.` and `,` (for all locales. ie let the user do what they prefer; we'll format it accordingly in any case)
* during entry, decimal separator is considered according to the locale
* on mobile, number pad entry is brought up


For the dev:
* `type="number"`
* all `values` are unformatted (ie. those that are saved). No `currency` symbol, decimal separator, etc


For the UI:
* if `format="currency"` is specified, the display will be updated according to the locale, ie. `$` or `XX` (Use with `type="number"`)

