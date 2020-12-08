# Field

Core "generic form element" component. Why? Well, simply to provide a label on "a thing" -- which is a very common pattern in our forms and List-Item components.  We will maybe, possibly, eventually use this to wrap Select, Input, Textarea, etc.

## Usage

This component is registered globally as `<g-field>`
It takes a single `label` prop.

```html
 <g-field>text text</g-field>
```

```html
 <g-field label="Address">123 Smith st.</g-field>
```
