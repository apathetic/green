---
title: "Accessibility"
description: "Accessibility guidelines."
---

# Accessibility

> AA accessibility (WCAG) guidelines, typography / contrast information, and interaction hit-sizes.

According to the WCAG, there are four categories of user impairment:

- [visual](#visual)
- [auditory](#auditory)
- [motor](#motor)
- [cognitive](#cognitive)

Each category requires its own set of considerations in both design and the technical implementation.

## Visual

- Designs should meet minimum contrast requirements
- typography should be a sufficient size
- alt text and visually hidden elements are provided as alternatives where relevant
- aria landmarks are provided
- aria roles on interactive UI elements

## Auditory

## Motor

Users with impaired motor skills will have no fun trying to click buttons or links that are too small or clustered
together. As such, we enforce the recommended minimum dimensions of an interactive UI elements (per the WCAG), which
can be summarized as:

- UI elements maintain a target hit size of at least 44px x 44px (currently, we have 48px set as a default)
  - note: this does not apply to inline links, while for rows of buttons or navigation (for example), there are guidelines for maintaining sufficient space above and below according to the above values -- even if the UI itself is not of sufficient height. See the WCAG reference below for details.
  - note: the key is the _spacing_ between adjacent UI elements. For example, the target size may be circular or square so long as it is sufficiently distanced from neigboring UI and meets minimum size criteria.

References:
[https://www.w3.org/WAI/WCAG21/Understanding/target-size.html](WCAG target size)
[https://www.w3.org/WAI/WCAG22/Understanding/pointer-target-spacing](WCAG target spacing)

## Coginitive

This last category is usually the most difficult to define or make allowances for. In general though, we should assume that our UX, or particular aspects of it, may not be immediately understood.

For example, the function of a particular button or the consequences of a particular action may not be obvious. While the result of clicking a 📄 icon might be understood by some users, consider that for others it may not be immediately obvious. Users will have different contexts and experiences from which to draw. The more context and "hints" around intent that we can provide, the better. What does a thing or action do? Will my data be safe? Did I mean to do that? Is it okay to click?

To address the example above, we should ensure that all icon buttons provide help text on hover.

<figure>
  <img src="" />
  <figcaption>An icon button providing additional hints to a user</figcaption>
</figure>
