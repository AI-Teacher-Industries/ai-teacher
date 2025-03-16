<script setup lang="ts">
import AppSidebar from "~/components/AppSidebar.vue";
import SidebarProvider from "~/components/ui/sidebar/SidebarProvider.vue";

useHead({
  htmlAttrs: {
    class: "light",
  },
});
</script>

<template>
  <SidebarProvider>
    <AppSidebar />

    <div class="grow">
      <!-- <header class="h-14 border-b flex justify-center items-center">
        <div class="w-[calc(100%-24px)] flex items-center justify-between">
          <Input class="max-w-[400px]" placeholder="Search books, spaces, notes..." />
          <Avatar size="sm" />
        </div>
      </header> -->
      <div class="grow mt-4 mx-auto max-w-6xl w-[calc(100%-24px)]">
        <slot />
      </div>
    </div>
  </SidebarProvider>
</template>
