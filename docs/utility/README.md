---
title: "CSS utilities"
description: "CSS Utility library for the ZigZagUI library"
items:
- title: Colors
  link: colors.html
  details: All the colors.
- title: Display
  link: display.html
  details: Helpers for breakpoints, overflow, display, z-index, elevation, borders
- title: Layout
  link: layout.html
  details: CSS grids and flex things
- title: Spacing
  link: spacing.html
  details: Spacing things
- title: Typography
  link: typography.html
  details: Typography things
- title: Motion
  link: motion.html
  details: Motion things

---

<div class="features">
  <div
    v-for="(feature, index) in $page.frontmatter.items"
    :key="index"
    class="feature bg-light-grey ma-2 pa-3 rounded"
  >
    <RouterLink :to="feature.link || ''">
      <h2>{{ feature.title }}</h2>
      <p>{{ feature.details }}</p>
    </RouterLink>
  </div>
</div>

