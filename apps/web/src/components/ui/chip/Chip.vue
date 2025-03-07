<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    :class="
      cn(
        'w-fit px-3 text-sm py-1 rounded-full border bg-card text-card-foreground',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>
