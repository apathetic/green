


# Checkbox

Checkboxes are used in instances of on and off and can be displayed individually, or as a list.


<z-checkbox label="Default"></z-checkbox>
<z-checkbox label="Checked" checked></z-checkbox>
<z-checkbox label="Indeterminate" indeterminate></z-checkbox>
<z-checkbox label="Disabled" disabled></z-checkbox>

``` html
<z-checkbox label="Default"></z-checkbox>
<z-checkbox label="Checked" checked></z-checkbox>
<z-checkbox label="Indeterminate" indeterminate></z-checkbox>
<z-checkbox disabled></z-checkbox>
```

## Props

| name      | type             | note          |
| --------- |:---------------- | :------------ |
| checked   | [Boolean, Array] | The current checked value(s). `default: false` |
| disabled  | Boolean |        |
| id        | [String, Number] | Unique ID (req'd for ally purposes).<br>`default: () => hashCode(Math.random().toString())` |
| label     | String           |     |
| name      | String           |     |
| value     | [String, Number] | Value associated with checkbox when it is `checked`.  This value is used to compare against `checked` property when passed as an array. |
| indeterminate | Boolean      |   |
