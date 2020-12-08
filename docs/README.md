---
home: true
heroImage: https://png.pngtree.com/thumb_back/fw800/background/20190925/pngtree-blue-colour-background-image_314361.jpg
heroText: GreenUI Design System
tagline: All the things
actionText: Get Started →
actionLink: developer/overview
items:
- title: Components
  link: components/
  details: Components in the GreenUI Design System.

- title: Patterns
  link: patterns/
  details: Core UX and design patterns

- title: Utility
  link: utility/
  details: CSS classes and tools that power the experience

- title: Icons
  link: icons/
  details: A list of our svg icons, and how manage them

- title: Accessibility
  link: accessibility/
  details: New accessibility guidelines and best practices

footer: MIT Licensed | Copyright © 2021 Wes Hatch
---

<div class="features">
  <div
    v-for="(feature, index) in $page.frontmatter.items"
    :key="index"
    class="feature pa-2"
  >
    <RouterLink :to="feature.link || ''" class="bg-light-grey block pa-2 rounded">
      <h2>{{ feature.title }}</h2>
      <p>{{ feature.details }}</p>
    </RouterLink>
  </div>
</div>
