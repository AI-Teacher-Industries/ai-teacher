<script setup lang="ts">
const onEnter = (element: HTMLElement) => {
  const width = getComputedStyle(element).width;

  element.style.width = width;
  element.style.position = "absolute";
  element.style.visibility = "hidden";
  element.style.height = "auto";

  const height = getComputedStyle(element).height;

  element.style.removeProperty("width");
  element.style.removeProperty("position");
  element.style.removeProperty("visibility");

  element.style.height = "0";

  // Force repaint to make sure the
  // animation is triggered correctly.
  getComputedStyle(element).height;

  // Trigger the animation.
  // We use `requestAnimationFrame` because we need
  // to make sure the browser has finished
  // painting after setting the `height`
  // to `0` in the line above.
  requestAnimationFrame(() => {
    element.style.height = height;
  });
};

const onAfterEnter = (element: HTMLElement) => {
  element.style.height = "auto";
};
const onLeave = (element: HTMLElement) => {
  const height = getComputedStyle(element).height;

  element.style.height = height;

  // Force repaint to make sure the
  // animation is triggered correctly.
  getComputedStyle(element).height;

  requestAnimationFrame(() => {
    element.style.height = "0";
  });
};
</script>

<template>
  <!--TODO: fix type-->
  <!-- @vue-ignore -->
  <transition
    name="expand"
    @enter="onEnter"
    @after-enter="onAfterEnter"
    @leave="onLeave"
  >
    <slot />
  </transition>
</template>

<style scoped>
* {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

.expand-enter-active,
.expand-leave-active {
  transition: height 300ms linear;
  overflow: hidden;
}

.expand-enter,
.expand-leave-to {
  height: 0;
}
</style>
