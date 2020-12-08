---
title: "Display"
description: "general display helpers."
---


# Display

> All the things that will affect the _display_ of your content. This includes breakpont helpers, visibility, overflow, and `display` classes, z-index helpers, elevation, and borders.

## Breakpoints

In general, practice mobile-first design. That is, prefer to use breakpoints only to manage _medium_ and _large_
screens, while default CSS attributes are used for smaller devices.

::: tip Mixin
``` css
 @include breakpoint($value)
```

The `breakpoint` mixin accepts one of the following `$values`:

|                 | small     |   medium      | large         | x-large  |
|:--------------- | --------- | ------------- | ------------- | ---------|
| only            | `sm-only` | `md-only`     | `lg-only`     | -        |
| here and up     | -         | `md`          | `lg`          | `xl`     |
| here _and down_ | -         | `md-and-down` | `lg-and-down` | -        |


_(note the inutility of `sm-and-down`, or `xl-only`, etc.)_
:::
 

Examples:
```
@include breakpoint('md') {
  // some stuff
}

@include breakpoint('sm-only') {
  // only small stuff
}

```


## Display

| Class                                         | Properties               |
|:--------------------------------------------- | ------------------------ |
| <span class="color-link">.block   </span>     | `display: block;`        |
| <span class="color-link">.inline-block</span> | `display: inline-block;` |

**Screen-readers**

To visually hide an element, use the `screenreader-only` mixin:

::: tip Mixin
``` css
 @include screenreader-only 
```
:::


## Overflow

| Class                                              | Properties            |
|:-------------------------------------------------- | --------------------- |
| <span class="color-link">.overflow-hidden</span>   | `overflow: hidden;`   |
| <span class="color-link">.overflow-x-hidden</span> | `overflow-x: hidden;` |
| <span class="color-link">.overflow-y-hidden</span> | `overflow-y: hidden;` |



## Hidden

| Class                                               | Properties            |
|:--------------------------------------------------- | --------------------- |
| <span class="color-link">.hidden   </span>          | `display: none !important;` |
| <span class="color-link">.hidden-md</span>          | `display: none !important;` |
| <span class="color-link">.hidden-lg</span>          | `display: none !important;` |
| <span class="color-link">.hidden-xl</span>          | `display: none !important;` |
| <span class="color-link">.hidden-sm-only</span>     | `display: none !important;` |
| <span class="color-link">.hidden-md-only</span>     | `display: none !important;` |
| <span class="color-link">.hidden-lg-only</span>     | `display: none !important;` |
| <span class="color-link">.hidden-md-and-down</span> | `display: none !important;` |
| <span class="color-link">.hidden-lg-and-down</span> | `display: none !important;` |



## Width

| Class                                     | Properties      |
|:----------------------------------------- | --------------- |
| <span class="color-link">.w-full</span>   | `width: 100%;`  |
| <span class="color-link">.w-screen</span> | `width: 100vw;` |



## Borders

There are several border utility classes, as well as a `border()` sass function for more fine-grained control over a border.

| Class                                         | Properties            |
|:--------------------------------------------- | --------------------- |
| <span class="color-link">.no-border</span>    | `border-width: 0;` |
| <span class="color-link">.rounded</span>      | `border-radius: 4px;` |
| <span class="color-link">.rounded-full</span> | `border-radius: 50%;` |
| <span class="color-link">.border</span>       | `border-width: 1px;` |
| <span class="color-link">.border-t</span>     | `border-top-width: 1px;` |
| <span class="color-link">.border-r</span>     | `border-right-width: 1px;` |
| <span class="color-link">.border-b</span>     | `border-bottom-width: 1px;` |
| <span class="color-link">.border-l</span>     | `border-left-width: 1px;` |
| <span class="color-link">.border-white</span> | `border-color: #ffffff;` |
| <span class="color-link">.border-blue</span>  | `border-color: #0072f0;` |
| <span class="color-link">.border-error</span> | `border-color: #e4002b;` |


::: tip Mixin

There is also a sass function to access preset border values:
``` css
border($size, $color)
```
* **$size**: can be `thin`, `medium`, or `thick
* **$color**: can be any hexcode, but prefer using default values / colors in the settings file.

example: `border('thin')`, `border('thin', colors('brand', 'blue') )`

:::


## Elevation

#### Mixin
``` css
@include elevation($z)
```

The `elevation` mixin accepts one of the following `$z` values:
| z     |   usage            |
|:----- | ------------------ |
| 0     | "hard" elevation, for input focus states |
| 1     | "sm", used with product cards, e.g.      |
| 2     | "md", used with modals, e.g.             |
| 3     | "lg", content boxes, e.g.                |



#### Classes
A set of classes for controlling an element's _elevation_.

There are currently three levels, corresponding to an increasing amount of depth. They are described by `elevation` classes as fallows:

| class                                         |   usage                                  |
|:--------------------------------------------- | ---------------------------------------- |
| <span class="color-link">.elevation-0</span>  | "hard" elevation, for input focus states |
| <span class="color-link">.elevation-1</span>  | "sm", used with product cards, e.g.      |
| <span class="color-link">.elevation-2</span>  | "md", used with modals, e.g.             |
| <span class="color-link">.elevation-3</span>  | "lg", content boxes, e.g.                |

## Layout helpers

**Cover**

::: tip Mixin
``` css
 @include cover($scope: 'absolute')
```
:::


**clearfix**

Hopefully you'll never need this.

::: tip Mixin
``` css
 @include clearfix
```
:::
