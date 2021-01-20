---
title: "CSS utilities"
description: "Utility CSS for the ZigZagUI library"
items:
- title: List
  link: list.html
  details: All icons in the ZigZagUI design system.
- title: Overview
  link: overview.html
  details: Creating, optimizing, updating

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

