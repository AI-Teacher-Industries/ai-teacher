<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: "dark",
  },
});
</script>

<template>
  <aside class="bg-section-bg"></aside>

  <main class="mt-10 mx-auto max-w-7xl w-[calc(100%-24px)]">
    <slot />
  </main>
</template>
