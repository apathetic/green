---
title: "Patterns"
description: "UX best practices and common user flows"
items:

# - title: Actions
#   link: actions.html
#   details: ..
# - title: Cards
#   link: cards.html
#   details: .
- title: Images
  link: imagery.html
  details: Guidelines for user-generated images on the platform
- title: Layout
  link: layout.html
  details: Page layouts and page sections
- title: List Items
  link: list-items.html
  details: Core UX patterns for "records" in a list
- title: Notifications
  link: notifications.html
  details: Surfacing feedback to the user
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
