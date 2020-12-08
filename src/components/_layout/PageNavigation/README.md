# PageNavigation

Secondary Navigation Tabs

## Usage

`<PageNavigation>` is a controlled component that has no internal state, meaning it's up to the consumer to dictate the active tab; the only caveat is when it's used with `<router-link>` via the `to` prop, where the active tab is controlled by Vue Router.

### Anchor Links

The current active tab is controlled using `activeIndex` when used with anchor links.
`<a>` tags are rendered internally when using the `href` prop.

```js
const items = [
  {
    label: 'One',
    href: '#',
  },
  {
    label: 'Two',
    href: '#',
  },
  {
    label: 'Three',
    href: '#',
  },
];
```
```html
 <PageNavigation
  :activeIndex="activeIndex"
  :items="items"
  @change="onChange">
/>
```

### Vue Router Links (`router-link`)

The current active tab is controlled by Vue Router's `<router-link>`, which
is rendered internally when using the `to` prop.

```js
const items = [
  {
    label: 'One',
    to: '/',
  },
  {
    label: 'Two',
    to: '/two',
  },
  {
    label: 'Three',
    to: '/three',
  },
];
```
```html
 <PageNavigation
  :items="items"
  @change="onChange">
/>
```