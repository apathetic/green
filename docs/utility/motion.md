---
title: "Motion"
description: "Utilities, classes for transitions and animations."
features:
  responsive: true
  customizable: true
  hover: false
  focus: false
---

# Motion

> Universal classes and helpers to manage transitions and animations.

All animations and transitions inherit (by default) from a core set of timings. There are two speeds, and several timing curves:

```scss
$transition: (
  fast-out-slow-in: cubic-bezier(0.4, 0, 0.2, 1),
  linear-out-slow-in: cubic-bezier(0, 0, 0.2, 1),
  fast-out-linear-in: cubic-bezier(0.4, 0, 1, 1),
  ease-in-out: cubic-bezier(0.4, 0, 0.6, 1),
  fast-in-fast-out: cubic-bezier(0.25, 0.8, 0.25, 1),
  swing: cubic-bezier(0.25, 0.8, 0.5, 1),
);

$transition-durations: (
  snap: .1s,
  fast: .165s,
  brisk: .333s,
  slow: .5s,
  sleepy: 1s,
);

$primary-transition: 0.165s map-get($transition, swing) !default;
$secondary-transition: 0.3s map-get($transition, ease-in-out) !default;
```

## Animations

Our animation classes are prefixed with `fx-` to denote them as such. They are grouped according to those that need the user's attention, and those that indicate system activity. See the [notifications](patterns/notifications.html#attention-getting-animations) documentation for additional details.


### Attention-getting

| Name    | Class      | Details                 |
|:------- | ---------- | ----------------------- |
| shake   | .fx-shake  |                         |
| pulse   | .fx-pulse  |                         |


### Loading

| Name      | Class        | Details                 |
|:--------- | ------------ | ----------------------- |
| spin      | .fx-spin     |                         |


## Transitions

### Global
(none, at present)

### Vue-specific

These classes are written such that they may be consumed by a Vue `<transition>`. Currently, there are:

* scale
* slide-{x|y}
* fade
