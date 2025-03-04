<script setup lang="ts">
import { ChevronDown } from "lucide-vue-next";
import AnimatedHeight from "./AnimatedHeight.vue";
defineProps<{
  title: string;
  subtitle: string;
  subThemes: { title: string; subtitle: string }[];
}>();

const opened = ref(false);
</script>

<template>
  <div class="mt-2 gap-2 items-stretch bg-section-separator rounded-lg">
    <button
      v-on:click="opened = !opened"
      class="p-2 text-left cursor-pointer w-full flex items-center justify-between"
    >
      <div class="flex items-stretch gap-2">
        <div class="shrink-0 w-1 rounded-sm bg-button" />
        <div>
          {{ title }}
          <div class="text-subtitle-text text-sm opacity-75">
            {{ subtitle }}
          </div>
        </div>
      </div>
      <div :class="['shrink-0 transition-transform', opened && 'rotate-180']">
        <ChevronDown />
      </div>
    </button>
    <AnimatedHeight>
      <div v-if="opened">
        <div class="p-2 pl-6">
          <div
            v-if="subThemes && subThemes.length > 0"
            v-for="(subtheme, index) in subThemes"
            :key="subtheme.title"
            class="mb-2 first:mt-0"
          >
            {{ index + 1 }}. {{ subtheme.title }}
            <div class="text-subtitle-text text-sm opacity-75">
              {{ subtheme.subtitle }}
            </div>
          </div>
          <div class="flex gap-2">
            <Button>Читать</Button>
            <Button>Проверить знания</Button>
          </div>
        </div>
      </div>
    </AnimatedHeight>
  </div>
</template>
