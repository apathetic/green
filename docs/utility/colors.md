---
title: "Colors"
description: "Color classes and utilities."
features:
  responsive: true
  customizable: true
  hover: false
  focus: false
---

# Color

> Classes and helpers for setting an element's background color, or text color.

There are a number of color classes, as well as helper utilities to set the color of an element. You should (almost) never need to add CSS to change color; instead, prefer to use one of the utility classes listed herein.

::: tip
All colors are defined in the settings file: `styles/settings/colors.scss`. This includes backgrounds, text colors, and more.
:::


## Background colors

### Brand

| Class                                         | Properties                                           |                    |
|:--------------------------------------------- | ---------------------------------------------------- | ------------------ |
| <span class="color-link">.bg-teal</span>      | `background-color:#01bbb4`<br>`border-color:#01bbb4` | <div class="bg-teal pa-3 inline-block"></div> |
| <span class="color-link">.bg-seafoam</span>   | `background-color:#3cdbc0`<br>`border-color:#3cdbc0` | <div class="bg-seafoam pa-3 inline-block"></div> |
| <span class="color-link">.bg-blue</span>      | `background-color:#0072f0`<br>`border-color:#0072f0` | <div class="bg-blue pa-3 inline-block"></div> |
| <span class="color-link">.bg-purple</span>    | `background-color:#1b1443`<br>`border-color:#1b1443` | <div class="bg-purple pa-3 inline-block"></div> |
| <span class="color-link">.bg-royal</span>     | `background-color:#303ab2`<br>`border-color:#303ab2` | <div class="bg-royal pa-3 inline-block"></div> |
| <span class="color-link">.bg-green</span>     | `background-color:#00816d`<br>`border-color:#00816d` | <div class="bg-green pa-3 inline-block"></div> |

### Alerts

| Class                                         | Properties                                           |                    |
|:--------------------------------------------- | ---------------------------------------------------- | ------------------ |
| <span class="color-link">.bg-error</span>     | `background-color:#ed5565`<br>`border-color:#ed5565` | <div class="bg-error pa-3 inline-block"></div> |
| <span class="color-link">.bg-warning</span>   | `background-color:#f8ac59`<br>`border-color:#f8ac59` | <div class="bg-warning pa-3 inline-block"></div> |
| <span class="color-link">.bg-success</span>   | `background-color:#01bbb4`<br>`border-color:#01bbb4` | <div class="bg-success pa-3 inline-block"></div> |
| <span class="color-link">.bg-info</span>      | `background-color:#01bbb4`<br>`border-color:#01bbb4` | <div class="bg-info pa-3 inline-block"></div> |

### Shades

| Class                                         | Properties                                           |                    |
|:--------------------------------------------- | ---------------------------------------------------- | ------------------ |
| <span class="color-link">.bg-white</span>     | `background-color:#fff`<br>`border-color:#fff`       | <div class="bg-white pa-3 inline-block"></div> |
| <span class="color-link">.bg-light-grey</span>| `background-color:#eef2f4`<br>`border-color:#eef2f4` | <div class="bg-light-grey pa-3 inline-block"></div> |
| <span class="color-link">.bg-grey</span>      | `background-color:#c5c9d4`<br>`border-color:#c5c9d4` | <div class="bg-grey pa-3 inline-block"></div> |
| <span class="color-link">.bg-dark-grey</span> | `background-color:#676a6c`<br>`border-color:#676a6c` | <div class="bg-dark-grey pa-3 inline-block"></div> |
| <span class="color-link">.bg-black</span>     | `background-color:#262626`<br>`border-color:#262626` | <div class="bg-black pa-3 inline-block"></div> |




## Text colors

### Default

| Class                                           | Properties      |                    |
|:----------------------------------------------- | --------------- | ------------------ |
| <span class="color-link">.color-light</span>    | `color:#c5c9d4` | <span class="color-light">The quick brown fox</span> |
| <span class="color-link">.color-medium</span>   | `color:#676a6c` | <span class="color-medium">The quick brown fox</span> |
| <span class="color-link">.color-dark</span>     | `color:#262626` | <span class="color-dark">The quick brown fox</span> |
| <span class="color-link">.color-inverted</span> | `color:#fff`    | <span class="color-inverted bg-dark-grey">The quick brown fox</span> |
| <span class="color-link">.color-disabled</span> | `color:#rgba(#000, 0.38)` | <span class="color-disabled">The quick brown fox</span> |
| <span class="color-link">.color-link</span>     | `color:#0072f0` | <span class="color-link">The quick brown fox</span> |
| <span class="color-link">.color-hover</span>    | `color:#338ff3` | <span class="color-hover">The quick brown fox</span> |

### Brand

| Class                                            | Properties      |                    |
|:------------------------------------------------ | ----------------| ------------------ |
| <span class="color-link">.color-teal</span>      | `color:#01bbb4` | <div class="color-teal">The quick brown fox</div> |
| <span class="color-link">.color-seafoam</span>   | `color:#3cdbc0` | <div class="color-seafoam">The quick brown fox</div> |
| <span class="color-link">.color-blue</span>      | `color:#0072f0` | <div class="color-blue">The quick brown fox</div> |
| <span class="color-link">.color-royal</span>     | `color:#0022ac` | <div class="color-royal">The quick brown fox</div> |
| <span class="color-link">.color-purple</span>    | `color:#1b1443` | <div class="color-purple">The quick brown fox</div> |

### Alerts

| Class                                           | Properties      |                    |
|:----------------------------------------------- | --------------- | ------------------ |
| <span class="color-link">.color-error</span>    | `color:#e4002b` | <div class="color-error">The quick brown fox</div> |
| <span class="color-link">.color-warning</span>  | `color:#ff9425` | <div class="color-warning">The quick brown fox</div> |
| <span class="color-link">.color-success</span>  | `color:#01bbc8` | <div class="color-success">The quick brown fox</div> |
| <span class="color-link">.color-info</span>     | `color:#01bbc8` | <div class="color-info">The quick brown fox</div> |
