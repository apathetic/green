# Field

Core "generic form element" component. Why? Well, simply to provide a label on "a thing" -- which is a very common pattern in our forms and List-Item components.  We will maybe, possibly, eventually use this to wrap Select, Input, Textarea, etc.

## Usage

This component is registered globally as `<z-field>`
It takes a single `label` prop.

```html
 <z-field>text text</z-field>
```

```html
 <z-field label="Address">123 Smith st.</z-field>
```
