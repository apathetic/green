# Dropdown

A simple Dropdown component.

Agnostic about its contents; this component only provides a way to toggle
open / close its contents: open via click (or Enter when toggle is focused),
and close via clickoutside or Escape.

If elements in the Dropdown's contents have class "dropdown__item" on them,
they will be _keyable_; that is, navigatable with up / down arrows and
selectable with Enter.

## Usage

This component is registered globally as `<z-dropdown>`.

In it's current form it manages it's own internal `isActive` state, allowing the consuming application to control it via
it's slots

#### Basic usage

By default `<z-dropdown>` will render an ellipse icon button as it's toggle. Nested children will be rendered inside the dropdown itself.

```
<z-dropdown>
  <ul class="pa-3">
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</z-dropdown>
```

#### With custom toggle

You may use the `toggle` named slot to render a custom toggle button. It will be passed a `show` method into it's scope.

```
<z-dropdown>
  <template slot="toggle" slot-scope="{ show }">
    <button
      class="button button--primary"
      @click="show"
    >
      Love this <z-icon name="heart" />
    </button>
  </template>

  <template slot="default">
    <ul class="pa-3">
      <li>This</li>
      <li>That</li>
      <li>The other</li>
    </ul>
  </template>
</z-dropdown>
```

#### With keyable items

Any child inside `<z-dropdown>` that has the class `.dropdown__item` will become keyboard accessible with the up/down keys,

```
<z-dropdown>
  <ul>
    <li>
      <a class="button button--secondary dropdown__item" href="#">Edit</a>
    </li>
    <li>
      <a class="button button--secondary dropdown__item" href="">Delete</a>
    </li>
  </ul>
</z-dropdown>
```