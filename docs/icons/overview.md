---
title: "Overview"
description: "GreenUI SVG icons and usage"
---

# Icons

> The GreenUI library uses an svg-based icon system, with a generated `spritesheet.svg`.

## Format

All icons must be on a `24 x 24` artboard, with no color information encoded (prefer to use `currentColor` in the svg source code).

* Remove the `width` and `height` properties
* Make sure its `viewBox` is `0 0 24 24`
* Replace `fill` color on the paths from a hexcode to `currentColor`

The final SVG should look similar to the following

```html
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <g fill="currentColor">
    <path d="M0 0h24v24H0z"/>
    ...
```

## Optimization

SVGO is a useful tool that can be used to cleanup icons post-export from Figma

* [SVGO](https://jakearchibald.github.io/svgomg/)
