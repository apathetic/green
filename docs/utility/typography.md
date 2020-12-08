---
title: "Typography"
description: "Utilities, classes for typography"
---

# Typography

> Classes and helpers for controlling font size and style.


## Base styles

Our typographic scale is pretty straightforward. For the most part, you should be able to use `h1 - h4` for heading tags. We're not currently using `h5` or `h6` tags.
There are `heading` classes that correspond to each of these type hierarcies:

| Class          | Properties                                                                     | Mixin              |
|:-------------- | ------------------------------------------------------------------------------ | ------------------ |
| <span class="color-link">.heading-jumbo</span> | `size: 48px / 3.42rem`<br>`line-height: 32px / 0.6666`<br>`weight: 500 / Medium`  |                    |
| <span class="color-link">.heading-1    </span> | `size: 24px / 1.71rem`<br>`line-height: 32px / 1.3333`<br>`weight: 500 / Medium`  | @include heading-1 |                   
| <span class="color-link">.heading-2    </span> | `size: 20px / 1.43rem`<br>`line-height: 28px / 1.4   `<br>`weight: 400 / Regular` | @include heading-2 |                   
| <span class="color-link">.heading-3    </span> | `size: 16px / 1.14rem`<br>`line-height: 24px / 1.5   `<br>`weight: 400 / Regular` | @include heading-3 |                   
| <span class="color-link">.heading-4    </span> | `size: 14px / 1.00rem`<br>`line-height: 20px / 1.43  `<br>`weight: 500 / Medium`  | @include heading-4 |                   
| <span class="color-link">.text-small   </span> | `size: 12px / 0.857em`                                                            |                    |
| p                                              | `size: 14px / 1em`<br>`line-height: 21px / 1.5`                                   |                    |

<!-- ...or heading(1) / heading(3) /  etc..?? -->


::: tip
  You may also prefer to only use a particular size or weight from the above heading settings. There is a helper function for this:
  ```css
  typo(element, attribute)
  ```

  ...where `element` is one of: `h1` `h2` `h3` `h4` `body`, `small`, `button`<br>
  ...and `attribute` is one of: `line-height`, `size`, or `weight`

  #### Example:
  ```css
  typo('h1', 'size')           // 24px;
  typo('small', 'size')        // 22px;
  typo('h3', 'weight')         // 400
  typo('body', 'line-height')  // 1.5
  ```
:::

### Usage

::: warning EXAMPLE
  <div class="mb-4">
    <span class="text-small color-medium">.heading-jumbo</span>
    <p class="heading-jumbo text-truncate color-dark">The quick brown fox jumped over the lazy dog.</p>
  </div>
  <div class="mb-4">
    <span class="text-small color-medium">.heading-1</span>
    <p class="heading-1 text-truncate color-dark">The quick brown fox jumped over the lazy dog.</p>
  </div>
  <div class="mb-4">
    <span class="text-small color-medium">.heading-2</span>
    <p class="heading-2 text-truncate color-dark">The quick brown fox jumped over the lazy dog.</p>
  </div>
  <div class="mb-4">
    <span class="text-small color-medium">.heading-3</span>
    <p class="heading-3 text-truncate color-dark">The quick brown fox jumped over the lazy dog.</p>
  </div>
  <div class="mb-4">
    <span class="text-small color-medium">.heading-4</span>
    <p class="heading-4 text-truncate color-dark">The quick brown fox jumped over the lazy dog.</p>
  </div>
  <div class="mb-4">
    <span class="text-small color-medium">p</span>
    <p class="text-truncate color-dark">The quick brown fox jumped over the lazy dog.</p>
  </div>
  <div class="mb-4">
    <span class="text-small color-medium">.text-small</span>
    <p class="text-small text-truncate color-dark">The quick brown fox jumped over the lazy dog.</p>
  </div>

  ```html
  <p class="heading-jumbo ...">The quick brown fox ...</p>
  <p class="heading-1 ...">The quick brown fox ...</p>
  <p class="heading-2 ...">The quick brown fox ...</p>
  <p class="heading-3 ...">The quick brown fox ...</p>
  <p class="heading-4 ...">The quick brown fox ...</p>
  <p>The quick brown fox ...</p>
  <p class="text-small ...">The quick brown fox ...</p>
  ```
:::

## Text modifiers

| Class                                                | Properties |
|:---------------------------------------------------- |:---------- |
| <span class="color-link">.text-capitalize</span>     | `text-transform: capitalize;` |
| <span class="color-link">.text-lowercase</span>      | `text-transform: lowercase; ` |
| <span class="color-link">.text-uppercase</span>      | `text-transform: uppercase; ` |
| <span class="color-link">.text-no-wrap</span>        | `white-space: nowrap`         |
| <span class="color-link">.text-truncate</span>       | `overflow: hidden;`<br>`text-overflow: ellipsis;`<br>`white-space: nowrap` |
| <span class="color-link">.text-left</span>           | `text-align: left;`           |
| <span class="color-link">.text-center</span>         | `text-align: center;`         |
| <span class="color-link">.text-right</span>          | `text-align: right;`          |
| <span class="color-link">.text-justify</span>        | `text-align: justify;`        |
| <span class="color-link">.text-underline</span>      | `text-decoration: underline;` |
| <span class="color-link">.text-strike-through</span> | `text-decoration: line-through;` |


### Usage

::: warning EXAMPLE
  <div class="mb-4">
    <span class="text-small color-medium">.text-capitalize</span>
    <p class="text-capitalize text-truncate color-dark">The quick brown fox jumped over the lazy dog.</p>
  </div>
  <div class="mb-4">
    <span class="text-small color-medium">.text-lowercase</span>
    <p class="text-lowercase text-truncate color-dark">The quick brown fox jumped over the lazy dog.</p>
  </div>
  <div class="mb-4">
    <span class="text-small color-medium">.text-uppercase</span>
    <p class="text-uppercase text-truncate color-dark">The quick brown fox jumped over the lazy dog.</p>
  </div>
  <div class="mb-4">
    <span class="text-small color-medium">.text-no-wrap</span>
    <p class="text-no-wrap text-truncate color-dark">The quick brown fox jumped over the lazy dog.</p>
  </div>
  <div class="mb-4">
    <span class="text-small color-medium">.text-truncate</span>
    <p class="text-truncate color-dark">The quick brown fox jumped over the lazy dog.</p>
  </div>
  <div class="mb-4">
    <span class="text-small color-medium">.text-left</span>
    <p class="text-left text-truncate color-dark">The quick brown fox jumped over the lazy dog.</p>
  </div>
  <div class="mb-4">
    <span class="text-small color-medium">.text-center</span>
    <p class="text-center text-truncate color-dark">The quick brown fox jumped over the lazy dog.</p>
  </div>
  <div class="mb-4">
    <span class="text-small color-medium">.text-right</span>
    <p class="text-right text-truncate color-dark">The quick brown fox jumped over the lazy dog.</p>
  </div>
  <div class="mb-4">
    <span class="text-small color-medium">.text-justify</span>
    <p class="text-justify text-truncate color-dark">The quick brown fox jumped over the lazy dog.</p>
  </div>
  <div class="mb-4">
    <span class="text-small color-medium">.text-underline</span>
    <p class="text-underline text-truncate color-dark">The quick brown fox jumped over the lazy dog.</p>
  </div>
  <div class="mb-4">
    <span class="text-small color-medium">.text-strike-through</span>
    <p class="text-strike-through text-truncate color-dark">The quick brown fox jumped over the lazy dog.</p>
  </div>

  ```html
  <p class="text-capitalize ...">The quick brown fox ...</p>
  <p class="text-lowercase ...">The quick brown fox ...</p>
  <p class="text-uppercase ...">The quick brown fox ...</p>
  <p class="text-no-wrap ...">The quick brown fox ...</p>
  <p class="text-truncate ...">The quick brown fox ...</p>
  <p class="text-left ...">The quick brown fox ...</p>
  <p class="text-center ...">The quick brown fox ...</p>
  <p class="text-right ...">The quick brown fox ...</p>
  <p class="text-justify ...">The quick brown fox ...</p>
  <p class="text-underline ...">The quick brown fox ...</p>
  <p class="text-strike-through ...">The quick brown fox ...</p>
  ```
:::

## Font weights

| Class            | Properties |
|:---------------- |:---------- |
| <span class="color-link">.font-weight-regular</span> | <code>font-weight: 400;</code> |
| <span class="color-link">.font-weight-medium</span>  | <code>font-weight: 500;</code> |
| <span class="color-link">.font-weight-bold</span> (or &lt;strong&gt;)   | <code>font-weight: 600;</code> |

### Usage

::: warning EXAMPLE
  <div class="mb-4">
    <span class="text-small color-medium">.font-weight-regular</span>
    <p class="font-weight-regular text-truncate color-dark">The quick brown fox jumped over the lazy dog.</p>
  </div>
  <div class="mb-4">
    <span class="text-small color-medium">.font-weight-medium</span>
    <p class="font-weight-medium text-truncate color-dark">The quick brown fox jumped over the lazy dog.</p>
  </div>
  <div class="mb-4">
    <span class="text-small color-medium">.font-weight-bold</span>
    <p class="font-weight-bold text-truncate color-dark">The quick brown fox jumped over the lazy dog.</p>
  </div>

  ```html
  <p class="font-weight-regular ...">The quick brown fox ...</p>
  <p class="font-weight-medium ...">The quick brown fox ...</p>
  <p class="font-weight-bold ...">The quick brown fox ...</p>
  ```
:::

<!--
.font-italic

@function font-weight($weight: regular) {
@function icon($keys...) {
-->
