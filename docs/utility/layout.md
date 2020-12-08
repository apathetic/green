---
title: "Layout"
description: "CSS Grid and flexbox helpers."
---

# Layout

> Grid and flex classes to help you implement any layout

In general, we leverage CSS grids for layout, and provide a number of flexbox utility classes for aligning / controlling the display of things.

## CSS Grids

We generally use a `12 column` grid for most things, but there are also classes for setting up 2, 4, and 8 column grids. 

All grids are responsive, following a mobile-first methodology. This means that a particular grid class will be applied for its breakpoint, _and up_.

### Grid utilities for all breakpoints

#### Grids
| Class                                        | Properties             | Note
|:-------------------------------------------- | ---------------------- | ---------------
| <span class="color-link">.grid</span>        | `display: grid;`<br>`grid-template-columns: repeat(12, 1fr);`<br>`column-gap: var(--grid-gutter);`<br>`row-gap: space(3);` | You will need this to set up a grid |
| <span class="color-link">.grid-cols-2</span> | `grid-template-columns: repeat(2, 1fr);` | Add as a modifier, in addition to `.grid` |
| <span class="color-link">.grid-cols-4</span> | `grid-template-columns: repeat(4, 1fr);` |
| <span class="color-link">.grid-cols-8</span> | `grid-template-columns: repeat(8, 1fr);` |

#### Column Spans
| Class                                   | Properties             |
|:--------------------------------------- | ---------------------- |
| <span class="color-link">.col-span-1</span> | `grid-column: span 1;` |
| <span class="color-link">.col-span-2</span> | `grid-column: span 2;` |
| <span class="color-link">.col-span-3</span> | `grid-column: span 3;` |
| <span class="color-link">.col-span-4</span> | `grid-column: span 4;` |
| <span class="color-link">.col-span-5</span> | `grid-column: span 5;` |
| <span class="color-link">.col-span-6</span> | `grid-column: span 6;` |
| <span class="color-link">.col-span-7</span> | `grid-column: span 7;` |
| <span class="color-link">.col-span-8</span> | `grid-column: span 8;` |
| <span class="color-link">.col-span-9</span> | `grid-column: span 9;` |
| <span class="color-link">.col-span-10</span> | `grid-column: span 10;` |
| <span class="color-link">.col-span-11</span> | `grid-column: span 11;` |
| <span class="color-link">.col-span-12</span> | `grid-column: span 12;` |



::: warning EXAMPLE
  <span class="text-small color-medium">grid: 12 columns</span>
  <div class="grid grid-cols-12 mb-3">
    <div class="col-span-1 bg-teal pa-2 color-white">1</div>
    <div class="col-span-11 bg-teal pa-2 color-white">11</div>
    <div class="col-span-2 bg-teal pa-2 color-white">2</div>
    <div class="col-span-10 bg-teal pa-2 color-white">10</div>
    <div class="col-span-3 bg-teal pa-2 color-white">3</div>
    <div class="col-span-9 bg-teal pa-2 color-white">9</div>
    <div class="col-span-4 bg-teal pa-2 color-white">4</div>
    <div class="col-span-8 bg-teal pa-2 color-white">8</div>
    <div class="col-span-5 bg-teal pa-2 color-white">5</div>
    <div class="col-span-7 bg-teal pa-2 color-white">7</div>
    <div class="col-span-6 bg-teal pa-2 color-white">6</div>
    <div class="col-span-6 bg-teal pa-2 color-white">6</div>
  </div>
  <span class="text-small color-medium">grid: 4 columns</span>
  <div class="grid grid-cols-4 mb-3">
    <div class="col-span-1 bg-blue pa-2 color-white">1</div>
    <div class="col-span-1 bg-blue pa-2 color-white">1</div>
    <div class="col-span-1 bg-blue pa-2 color-white">1</div>
    <div class="col-span-1 bg-blue pa-2 color-white">1</div>
    <div class="col-span-2 bg-blue pa-2 color-white">2</div>
    <div class="col-span-2 bg-blue pa-2 color-white">2</div>
  </div>
  <span class="text-small color-medium">grid: 2 columns</span>
  <div class="grid grid-cols-2 mb-3">
    <div class="col-span-1 bg-warning pa-2 color-white">1</div>
    <div class="col-span-1 bg-warning pa-2 color-white">1</div>
  </div>

  ```html
  <div class="grid grid-cols-12 mb-3">
    <div class="col-span-1 bg-teal pa-2 color-white">1</div>
    <div class="col-span-11 bg-teal pa-2 color-white">11</div>
    <div class="col-span-2 bg-teal pa-2 color-white">2</div>
    <div class="col-span-10 bg-teal pa-2 color-white">10</div>
    <div class="col-span-3 bg-teal pa-2 color-white">3</div>
    <div class="col-span-9 bg-teal pa-2 color-white">9</div>
    <div class="col-span-4 bg-teal pa-2 color-white">4</div>
    <div class="col-span-8 bg-teal pa-2 color-white">8</div>
    <div class="col-span-5 bg-teal pa-2 color-white">5</div>
    <div class="col-span-7 bg-teal pa-2 color-white">7</div>
    <div class="col-span-6 bg-teal pa-2 color-white">6</div>
    <div class="col-span-6 bg-teal pa-2 color-white">6</div>
  </div>

  <div class="grid grid-cols-4 mb-3">
    <div class="col-span-1 bg-blue pa-2 color-white">1</div>
    <div class="col-span-1 bg-blue pa-2 color-white">1</div>
    <div class="col-span-1 bg-blue pa-2 color-white">1</div>
    <div class="col-span-1 bg-blue pa-2 color-white">1</div>
    <div class="col-span-2 bg-blue pa-2 color-white">2</div>
    <div class="col-span-2 bg-blue pa-2 color-white">2</div>
  </div>

  <div class="grid grid-cols-2 mb-3">
    <div class="col-span-1 bg-warning pa-2 color-white">1</div>
    <div class="col-span-1 bg-warning pa-2 color-white">1</div>
  </div>
  ```
:::

::: tip
There is an `offset($start, $end)` helper if you need to offset a grid column
:::



### Responsive grids utilities

Each grid or column-span class can target a particular breakpoint by prepending it with a breakpoint modifier: `md` or `lg`. For example, to generate an 8 column grid that is applied from medium _and up_, use: `md:grid-cols-8`. Note, `grid-cols-8` would already apply from _small and up_, so no need for the modifier.


#### Grids
| Class                                        | Properties             | Note
|:-------------------------------------------- | ---------------------- | ---------------
| <span class="color-link">.md:grid-cols-2</span> | `grid-template-columns: repeat(2, 1fr);` | Applies to `medium` breakpoint, and up |
| <span class="color-link">.md:grid-cols-4</span> | `grid-template-columns: repeat(4, 1fr);` |
| <span class="color-link">.md:grid-cols-8</span> | `grid-template-columns: repeat(8, 1fr);` |
| <span class="color-link">.lg:grid-cols-2</span> | `grid-template-columns: repeat(2, 1fr);` | Applies to `large` breakpoint, and up |
| <span class="color-link">.lg:grid-cols-4</span> | `grid-template-columns: repeat(4, 1fr);` |
| <span class="color-link">.lg:grid-cols-8</span> | `grid-template-columns: repeat(8, 1fr);` |

#### Column Spans (not an exhaustive selection)
| Class                                   | Properties             |
|:--------------------------------------- | ---------------------- |
| <span class="color-link">.md:col-span-2</span> | `grid-column: span 2;` |
| <span class="color-link">.md:col-span-3</span> | `grid-column: span 3;` |
| <span class="color-link">.md:col-span-4</span> | `grid-column: span 4;` |
| <span class="color-link">.lg:col-span-1</span> | `grid-column: span 1;` |
| <span class="color-link">.lg:col-span-3</span> | `grid-column: span 3;` |
| <span class="color-link">.lg:col-span-9</span> | `grid-column: span 9;` |


::: warning EXAMPLE
  <p class="text-small color-medium">grid:  <span class="sm:bold">4 columns (small)</span> / <span class="md:bold">8 columns (medium)</span> / <span class="lg:bold">12 columns (large)</span></p>
  <div class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 mb-3">
    <div class="col-span-2 bg-teal pa-2 color-white">2</div>
    <div class="col-span-2 bg-teal pa-2 color-white">2</div>
    <div class="col-span-2 bg-teal pa-2 color-white">2</div>
    <div class="col-span-2 bg-teal pa-2 color-white">2</div>
    <div class="col-span-2 md:col-span-4 lg:col-span-6 bg-blue pa-2 color-white">2 / 4 / 6</div>
    <div class="col-span-2 md:col-span-4 lg:col-span-6 bg-blue pa-2 color-white">2 / 4 / 6</div>
    <div class="col-span-4 md:col-span-8 lg:col-span-12 bg-warning pa-2 color-white">4 / 8 / 12</div>
  </div>

  ```html
  <div class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 mb-3">
    <div class="col-span-2 bg-teal pa-2 color-white">2</div>
    <div class="col-span-2 bg-teal pa-2 color-white">2</div>
    <div class="col-span-2 bg-teal pa-2 color-white">2</div>
    <div class="col-span-2 bg-teal pa-2 color-white">2</div>
    <div class="col-span-2 md:col-span-4 lg:col-span-6 bg-blue pa-2 color-white">2 / 4 / 6</div>
    <div class="col-span-2 md:col-span-4 lg:col-span-6 bg-blue pa-2 color-white">2 / 4 / 6</div>
    <div class="col-span-4 md:col-span-8 lg:col-span-12 bg-warning pa-2 color-white">4 / 8 / 12</div>
  </div>
  ```
:::



## Flexbox

There are a number of utility classes for quick n' dirty flex layouts. 

::: tip
At present, all flexbox helpers presuppose a horizontal direction. For vertical flex, you'll need to author it yourself (or use CSS grid)
:::

### Base

| Class                                         | Properties         | Notes |
|:--------------------------------------------- | ------------------ | ----- |
| <span class="color-link">.flex</span>         | `display: flex;`   | Sets the context i.e. the parent      |
| <span class="color-link">.flex-wrap</span>    | `flex-wrap: wrap;` |       |
| <span class="color-link">.flex-1</span>       | `flex: 1 1 0%;`    | item will grow and shrink as needed, ignoring its initial size |
| <span class="color-link">.flex-initial</span> | `flex: 0 1 auto;`  | item will shrink but not grow, starting from its initial size |
| <span class="color-link">.flex-auto</span>    | `flex: 1 1 auto;`  | item will grow and shrink, starting from its initial size |
| <span class="color-link">.flex-none</span>    | `flex: none;`      | prevent a flex item from growing or shrinking |



### Horizontal alignment

Place any one of these classes on a `flexified` parent element, and its children will be positioned as shown:

| Class                                          | Properties                        |
|:---------------------------------------------- | --------------------------------- |
| <span class="color-link">.align-center</span>  | `justify-content: center;`        |
| <span class="color-link">.align-right</span>   | `justify-content: flex-end;`      |
| <span class="color-link">.align-spaced</span>  | `justify-content: space-around;`  |
| <span class="color-link">.align-justify</span> | `justify-content: space-between;` |


::: warning EXAMPLE
  <span class="text-small color-medium">align-center</span>
  <div class="flex align-center bg-light-grey mb-3">
    <div class="pa-2 ma-1 bg-teal color-white">1</div>
    <div class="pa-2 ma-1 bg-teal color-white">2</div>
    <div class="pa-2 ma-1 bg-teal color-white">3</div>
  </div>
  <span class="text-small color-medium">align-justify</span>
  <div class="flex align-justify bg-light-grey mb-3">
    <div class="pa-2 ma-1 bg-teal color-white">1</div>
    <div class="pa-2 ma-1 bg-teal color-white">2</div>
  </div>
  <span class="text-small color-medium">align-spaced</span>
  <div class="flex align-spaced bg-light-grey mb-3">
    <div class="pa-2 ma-1 bg-teal color-white">1</div>
    <div class="pa-2 ma-1 bg-teal color-white">2</div>
    <div class="pa-2 ma-1 bg-teal color-white">3</div>
  </div>

  ```html
  <div class="flex align-center ...">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
  </div>

  <div class="flex align-justify ...">
    <div class="...">1</div>
    <div class="...">2</div>
  </div>

  <div class="flex align-spaced ...">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
  </div>

  ```
:::


### Vertical alignment

Place any one of these classes on a `flexified` parent element, and its children will be positioned as shown:

| Class                                         | Properties                 |
|:--------------------------------------------- | -------------------------- |
| <span class="color-link">.align-top</span>    | `align-items: flex-start;` |
| <span class="color-link">.align-bottom</span> | `align-items: flex-end;`   |
| <span class="color-link">.align-middle</span> | `align-items: center;`     |


::: warning EXAMPLE
  <span class="text-small color-medium">align-top</span>
  <div class="flex align-top bg-light-grey mb-3" style="height:120px">
    <div class="pa-2 ma-1 bg-teal color-white">1</div>
    <div class="pa-2 ma-1 bg-teal color-white">2</div>
    <div class="pa-2 ma-1 bg-teal color-white">3</div>
  </div>
  <span class="text-small color-medium">align-bottom</span>
  <div class="flex align-bottom bg-light-grey mb-3" style="height:120px">
    <div class="pa-2 ma-1 bg-teal color-white">1</div>
    <div class="pa-2 ma-1 bg-teal color-white">2</div>
    <div class="pa-2 ma-1 bg-teal color-white">3</div>
  </div>
  <span class="text-small color-medium">align-middle</span>
  <div class="flex align-middle bg-light-grey mb-3" style="height:120px">
    <div class="pa-2 ma-1 bg-teal color-white">1</div>
    <div class="pa-2 ma-1 bg-teal color-white">2</div>
    <div class="pa-2 ma-1 bg-teal color-white">3</div>
  </div>
  <span class="text-small color-medium">(also) align-middle</span>
  <div class="flex align-middle bg-light-grey mb-3" style="height:200px">
    <ul class="pa-4">
      <li>I am some text.</li>
      <li>Here is another bit of text.</li>
      <li>We are all centered.</li>
    </ul>
  </div>
  <span class="text-small color-medium">(also) align-middle</span>
  <div class="flex flex-wrap align-middle bg-light-grey mb-3  center-content" style="height:260px;">
    <span class="bg-yellow my-1">This uses a custom class</span>
    <span class="bg-yellow my-1">...with <code>.align-content: center</code> on the parent...</span>
    <span class="bg-yellow my-1">and <code>flex-basis: 100%</code> on each child</span>
  </div>

  ```html
  <div class="flex align-top ...">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
  </div>

  <div class="flex align-bottom ...">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
  </div>

  <div class="flex align-middle ...">
    <div class="...">1</div>
    <div class="...">2</div>
    <div class="...">3</div>
  </div>

  <div class="flex align-middle ...">
    <ul>
      <li>I am some text.</li>
      <li>Here is another bit of text.</li>
      <li>We are all centered.</li>
    </ul>
  </div>
  ```
:::

### Self alignment

Use those helper classes to specify the alignment for the selected item inside the flexible container.

| Class                                                | Properties                  |
|:---------------------------------------------------- | --------------------------- |
| <span class="color-link">.align-self-start</span>    | `align-self: flex-start;`   |
| <span class="color-link">.align-self-end</span>      | `align-self: flex-end;`     |
| <span class="color-link">.align-self-center</span>   | `align-self: center;`       |
| <span class="color-link">.align-self-baseline</span> | `align-self: baseline;`     |
| <span class="color-link">.align-self-auto</span>     | `align-self: auto;`         |
| <span class="color-link">.align-self-stretch</span>  | `align-self: stretch;`      |

## Container

This class simply centers content on the page, provides it with a nice gutter, and max-width to make sure it doesn't expand forever.

You should (almost) never need to use this class as it is baked into our Vue layout components.

```scss
.container {
  margin: 0 auto;
  max-width: $container-width;
  position: relative;
  width: 100%;
}
```
