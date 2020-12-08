<template>
  <section>
    <div class="container">
      <div class="box">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
  /**
   * Page content
   * Mounts a contained & boxed `section` element 
   */
  export default {
    name: 'PageContent',
  };
</script>