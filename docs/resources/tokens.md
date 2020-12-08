---
title: "Design Tokens"
description: "Functions, mixins, and utilities."
features:
  responsive: true
  customizable: true
  hover: false
  focus: false
---

# Design Tokens

## Color

> Classes and helpers for setting an element's background color, or text color.

There are a number of color classes, as well as helper utilities to set the color of an element. You should (almost) never need to add CSS to change color; instead, prefer to use one of the utility classes listed herein.


::: tip 

colors(`<token>`, `<value>`)

:::

### Brand
$purple: #1e164b !default;
$royal: #303ab2 !default;
$blue: #0072f0 !default;
$seafoam: #3cdbc0 !default;
$teal: #01bbc8 !default;
$green: #00816d !default;
$yellow: #ffd400 !default;
$orange: #ff9425 !default;
$watermelon: #e5554f !default;

### Text

$text-colors: (
  'light': #c5c9d4,
  'medium': #676a6c,
  'dark': #262626,
  'white': #fff,
  'inverted': #fff,
  'disabled': rgba(#000, 0.38),
  'link': $blue,
  'hover': $hover
);


### UI

>  Buttons

$theme-button-primary: $blue !default;
$theme-button-hover: $hover !default;
$theme-button-active: $royal !default;

$button-colors: (
  'primary': $theme-button-primary,
  'hover': $theme-button-hover,
  'active': rgba(#999, 0.4),
  'secondary': transparent,
  'secondary-hover': rgba(103, 106, 108, 0.08),
  'tertiary': transparent,
  'tertiary-hover': rgba(#fff, 0.15),
  'tertiary-active': $theme-button-active,
  'disabled': rgba(#000, 0.26)
);

### Alerts 
$alert-colors: (
  'error': #e4002b,
  'warning': #ff9425,
  'success': $teal,
  'info': $teal,  // TODO should be different? maybe blue
);


### Shades 
// NOTE: for typography, use text-colors, above.
$shades: (
  'white': #fff,
  'light-grey': #eef2f4,
  'grey': #c5c9d4,
  'dark-grey': #676a6c,
  'black': #262626
);




## Layout



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



@mixin cover($scope: absolute) {
  bottom: 0;
  left: 0;
  opacity: 0;
  position: $scope; // absolute | fixed
  right: 0;
  top: 0;
}


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




@mixin sticky {
  $sticky-offset: $top-nav-height + space(3);

  max-height: calc(100vh - #{$sticky-offset + space(3)});
  position: sticky; // note: no effect IE11
  top: $sticky-offset;
}




@mixin span($cols) {
  grid-column: span #{$cols};
}

@mixin column($cols:1, $offset:null) {
  @if $offset != null {
    grid-column: #{$offset+1} / span #{$cols};
  }
  @else {
    @include span($cols);
  }
}






# Misc



::: tip Mixin
``` css
 @include screenreader-only 
```
:::



::: tip Mixin

There is also a sass function to access preset border values:
``` css
border($size, $color)
```
* **$size**: can be `thin`, `medium`, or `thick
* **$color**: can be any hexcode, but prefer using default values / colors in the settings file.

example: `border('thin')`, `border('thin', colors('brand', 'blue') )`

:::



@function z-index($key) {


@include elevation($z)
The `elevation` mixin accepts one of the following `$z` values:

| z     |   usage            |
|:----- | ------------------ |
| 0     | "hard" elevation, for input focus states |
| 1     | "sm", used with product cards, e.g.      |
| 2     | "md", used with modals, e.g.             |
| 3     | "lg", content boxes, e.g.                |
:::







# Display

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

@function space($key) {
  @if not map-has-key($spacers, $key) {
    @warn 'No spacer found for `#{$key}`.';

    @return map-get($spacers, 3);
  }

  @return map-get($spacers, $key);
}



# TYPO

@function font-weight($weight: regular) {
@function typo($keys...) {
@mixin clamp($rows: 3) {
@function icon($keys...) {
 @mixin heading($level) {

