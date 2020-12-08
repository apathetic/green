---
title: "Spacing"
description: "Padding and margin classes and utilities."
---

# Spacing

> A custom spacing scale, with padding and margin utility classes.

Basic spacing units are defined in `/styles/settings/spacing.scss`. These units are based on a _base of 12px_.

```scss
$spacer: 12px;        // base spacing unit
$spacers: (
  0: 0,               // 0
  1: $spacer * 0.5,   // 6px
  2: $spacer,         // 12px
  3: $spacer * 2,     // 24px
  4: $spacer * 3,     // 36px
  5: $spacer * 4,     // 48px
  6: $spacer * 5      // 60px
);
```

## Units

| Step    | Size   | Helper                                   |                                    |
|:------- | ------ | ---------------------------------------- | ---------------------------------- |
| 0       | `0`    | <span class="color-dark">space(0)</span> |                                    |
| 1       | `6px`  | <span class="color-dark">space(1)</span> | <span class="bg-grey pr-1"></span> |
| 2       | `12px` | <span class="color-dark">space(2)</span> | <span class="bg-grey pr-2"></span> |
| 3       | `24px` | <span class="color-dark">space(3)</span> | <span class="bg-grey pr-3"></span> |
| 4       | `36px` | <span class="color-dark">space(4)</span> | <span class="bg-grey pr-4"></span> |
| 5       | `48px` | <span class="color-dark">space(5)</span> | <span class="bg-grey pr-5"></span> |
| 6       | `60px` | <span class="color-dark">space(6)</span> | <span class="bg-grey pr-6"></span> |

From this, we create (Tachyon/Tailwind-inspired) [padding](#padding) and [margin](#margin) classes, which may be applied to any element to easily add a prescribed amount (ie. defined and derived from our settings) of space around an element.


  <!-- Base:
    p = padding
    m = margin

  Modifiers:
    a = all
    x = x-axis (left, right)
    y = y-axis (top, bottom)
    t = top
    r = right
    b = bottom
    l = left


  Examples:
    .mr-1  = apply 1 unit of space to the right margin
    .pl-3  = apply 3 units of space to the left padding
    .mx-4  = apply 4 units of space to the left and right margin
    .pa-0  = no padding on all sides

 -->

## Padding

| Class                                 | Properties                                      |
|:------------------------------------- | ----------------------------------------------- |
| <span class="color-link">.pa-0</span> | `padding: 0;`                                   |
| <span class="color-link">.pa-1</span> | `padding: 6px;`                                 |
| <span class="color-link">.pa-2</span> | `padding: 12px;`                                |
| <span class="color-link">.pa-3</span> | `padding: 24px;`                                |
| <span class="color-link">.pa-4</span> | `padding: 36px;`                                |
| <span class="color-link">.pa-5</span> | `padding: 48px;`                                |
| <span class="color-link">.pa-6</span> | `padding: 60px;`                                |
| <span class="color-link">.py-1</span> | `padding-top: 6px;`<br>`padding-bottom: 6px;`   |
| <span class="color-link">.py-2</span> | `padding-top: 12px;`<br>`padding-bottom: 12px;` |
| <span class="color-link">.py-3</span> | `padding-top: 24px;`<br>`padding-bottom: 24px;` |
| <span class="color-link">.py-4</span> | `padding-top: 36px;`<br>`padding-bottom: 36px;` |
| <span class="color-link">.py-5</span> | `padding-top: 48px;`<br>`padding-bottom: 48px;` |
| <span class="color-link">.py-6</span> | `padding-top: 60px;`<br>`padding-bottom: 60px;` |
| <span class="color-link">.px-0</span> | `padding-right: 0;`<br>`padding-left: 0;`       |
| <span class="color-link">.px-1</span> | `padding-right: 6px;`<br>`padding-left: 6px;`   |
| <span class="color-link">.px-2</span> | `padding-right: 12px;`<br>`padding-left: 12px;` |
| <span class="color-link">.px-3</span> | `padding-right: 24px;`<br>`padding-left: 24px;` |
| <span class="color-link">.px-4</span> | `padding-right: 36px;`<br>`padding-left: 36px;` |
| <span class="color-link">.px-5</span> | `padding-right: 48px;`<br>`padding-left: 48px;` |
| <span class="color-link">.px-6</span> | `padding-right: 60px;`<br>`padding-left: 60px;` |
| <span class="color-link">.pt-0</span> | `padding-top: 0;` |
| <span class="color-link">.pt-1</span> | `padding-top: 6px;` |
| <span class="color-link">.pt-2</span> | `padding-top: 12px;` |
| <span class="color-link">.pt-3</span> | `padding-top: 24px;` |
| <span class="color-link">.pt-4</span> | `padding-top: 36px;` |
| <span class="color-link">.pt-5</span> | `padding-top: 48px;` |
| <span class="color-link">.pt-6</span> | `padding-top: 60px;` |
| <span class="color-link">.pr-0</span> | `padding-right: 0;` |
| <span class="color-link">.pr-1</span> | `padding-right: 6px;` |
| <span class="color-link">.pr-2</span> | `padding-right: 12px;` |
| <span class="color-link">.pr-3</span> | `padding-right: 24px;` |
| <span class="color-link">.pr-4</span> | `padding-right: 36px;` |
| <span class="color-link">.pr-5</span> | `padding-right: 48px;` |
| <span class="color-link">.pr-6</span> | `padding-right: 60px;` |
| <span class="color-link">.pb-0</span> | `padding-bottom: 0;` |
| <span class="color-link">.pb-1</span> | `padding-bottom: 6px;` |
| <span class="color-link">.pb-2</span> | `padding-bottom: 12px;` |
| <span class="color-link">.pb-3</span> | `padding-bottom: 24px;` |
| <span class="color-link">.pb-4</span> | `padding-bottom: 36px;` |
| <span class="color-link">.pb-5</span> | `padding-bottom: 48px;` |
| <span class="color-link">.pb-6</span> | `padding-bottom: 60px;` |
| <span class="color-link">.pl-0</span> | `padding-left: 0;` |
| <span class="color-link">.pl-1</span> | `padding-left: 6px;` |
| <span class="color-link">.pl-2</span> | `padding-left: 12px;` |
| <span class="color-link">.pl-3</span> | `padding-left: 24px;` |
| <span class="color-link">.pl-4</span> | `padding-left: 36px;` |
| <span class="color-link">.pl-5</span> | `padding-left: 48px;` |
| <span class="color-link">.pl-6</span> | `padding-left: 60px;` |

### Usage

Control the padding on an element using a `p{a|x|y|t|r|b|l}-{size}` class.

::: tip Modifiers
```
  a = all
  x = x-axis (left, right)
  y = y-axis (top, bottom)
  t = top
  r = right
  b = bottom
  l = left
```
:::

::: warning EXAMPLE
  <div class="grid grid--4cols">
    <div>
      <div class="pa-3 bg-light-grey inline-block"><span class="pa-2 bg-teal color-inverted inline-block">.pa-3</span></div>
    </div>
    <div>
      <div class="pt-5 bg-light-grey inline-block"><span class="pa-2 bg-teal color-inverted inline-block">.pt-5</span></div>
    </div>
    <div>
      <div class="py-4 bg-light-grey inline-block"><span class="pa-2 bg-teal color-inverted inline-block">.py-4</span></div>
    </div>
    <div>
      <div class="px-2 bg-light-grey inline-block"><span class="pa-2 bg-teal color-inverted inline-block">.px-2</span></div>
    </div>
  </div>

  ```html
  <div class="bg-light-grey pa-3"><span class="...">.pa-3</span></div>
  <div class="bg-light-grey pt-5"><span class="...">.pt-5</span></div>
  <div class="bg-light-grey py-4"><span class="...">.py-4</span></div>
  <div class="bg-light-grey px-2"><span class="...">.px-2</span></div>
  ```
:::


## Margin

| Class                                 | Properties                                    |
|:------------------------------------- | --------------------------------------------- |
| <span class="color-link">.ma-0</span> | `margin: 0;`                                  |
| <span class="color-link">.ma-1</span> | `margin: 6px;`                                |
| <span class="color-link">.ma-2</span> | `margin: 12px;`                               |
| <span class="color-link">.ma-3</span> | `margin: 24px;`                               |
| <span class="color-link">.ma-4</span> | `margin: 36px;`                               |
| <span class="color-link">.ma-5</span> | `margin: 48px;`                               |
| <span class="color-link">.ma-6</span> | `margin: 60px;`                               |
| <span class="color-link">.my-1</span> | `margin-top: 6px;`<br>`margin-bottom: 6px;`   |
| <span class="color-link">.my-2</span> | `margin-top: 12px;`<br>`margin-bottom: 12px;` |
| <span class="color-link">.my-3</span> | `margin-top: 24px;`<br>`margin-bottom: 24px;` |
| <span class="color-link">.my-4</span> | `margin-top: 36px;`<br>`margin-bottom: 36px;` |
| <span class="color-link">.my-5</span> | `margin-top: 48px;`<br>`margin-bottom: 48px;` |
| <span class="color-link">.my-6</span> | `margin-top: 60px;`<br>`margin-bottom: 60px;` |
| <span class="color-link">.mx-0</span> | `margin-right: 0;`<br>`margin-left: 0;`       |
| <span class="color-link">.mx-1</span> | `margin-right: 6px;`<br>`margin-left: 6px;`   |
| <span class="color-link">.mx-2</span> | `margin-right: 12px;`<br>`margin-left: 12px;` |
| <span class="color-link">.mx-3</span> | `margin-right: 24px;`<br>`margin-left: 24px;` |
| <span class="color-link">.mx-4</span> | `margin-right: 36px;`<br>`margin-left: 36px;` |
| <span class="color-link">.mx-5</span> | `margin-right: 48px;`<br>`margin-left: 48px;` |
| <span class="color-link">.mx-6</span> | `margin-right: 60px;`<br>`margin-left: 60px;` |
| <span class="color-link">.mt-0</span> | `margin-top: 0;` |
| <span class="color-link">.mt-1</span> | `margin-top: 6px;` |
| <span class="color-link">.mt-2</span> | `margin-top: 12px;` |
| <span class="color-link">.mt-3</span> | `margin-top: 24px;` |
| <span class="color-link">.mt-4</span> | `margin-top: 36px;` |
| <span class="color-link">.mt-5</span> | `margin-top: 48px;` |
| <span class="color-link">.mt-6</span> | `margin-top: 60px;` |
| <span class="color-link">.mr-0</span> | `margin-right: 0;` |
| <span class="color-link">.mr-1</span> | `margin-right: 6px;` |
| <span class="color-link">.mr-2</span> | `margin-right: 12px;` |
| <span class="color-link">.mr-3</span> | `margin-right: 24px;` |
| <span class="color-link">.mr-4</span> | `margin-right: 36px;` |
| <span class="color-link">.mr-5</span> | `margin-right: 48px;` |
| <span class="color-link">.mr-6</span> | `margin-right: 60px;` |
| <span class="color-link">.mb-0</span> | `margin-bottom: 0;` |
| <span class="color-link">.mb-1</span> | `margin-bottom: 6px;` |
| <span class="color-link">.mb-2</span> | `margin-bottom: 12px;` |
| <span class="color-link">.mb-3</span> | `margin-bottom: 24px;` |
| <span class="color-link">.mb-4</span> | `margin-bottom: 36px;` |
| <span class="color-link">.mb-5</span> | `margin-bottom: 48px;` |
| <span class="color-link">.mb-6</span> | `margin-bottom: 60px;` |
| <span class="color-link">.ml-0</span> | `margin-left: 0;` |
| <span class="color-link">.ml-1</span> | `margin-left: 6px;` |
| <span class="color-link">.ml-2</span> | `margin-left: 12px;` |
| <span class="color-link">.ml-3</span> | `margin-left: 24px;` |
| <span class="color-link">.ml-4</span> | `margin-left: 36px;` |
| <span class="color-link">.ml-5</span> | `margin-left: 48px;` |
| <span class="color-link">.ml-6</span> | `margin-left: 60px;` |

### Usage

Control the margin on an element using a `m{a|x|y|t|r|b|l}-{size}` class.

::: warning EXAMPLE
  <div class="grid grid--4cols">
    <div>
      <div class="bg-light-grey inline-block"><span class="ma-4 pa-2 bg-teal color-inverted inline-block text-no-wrap">.ma-4</span></div>
    </div>
    <div>
      <div class="bg-light-grey inline-block"><span class="ml-5 pa-2 bg-teal color-inverted inline-block">.ml-5</span></div>
    </div>
    <div>
      <div class="bg-light-grey inline-block"><span class="my-4 pa-2 bg-teal color-inverted inline-block">.my-4</span></div>
    </div>
    <div>
      <div class="bg-light-grey inline-block"><span class="mr-2 pa-2 bg-teal color-inverted inline-block">.mr-2</span></div>
    </div>
  </div>

  ```html
  <div class="bg-light-grey"><span class="ma-4 ...">.ma-4</span></div>
  <div class="bg-light-grey"><span class="ml-5 ...">.ml-5</span></div>
  <div class="bg-light-grey"><span class="my-4 ...">.my-4</span></div>
  <div class="bg-light-grey"><span class="mr-2 ...">.mr-2</span></div>
  ```
:::