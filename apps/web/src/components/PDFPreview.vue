<script setup lang="ts">
import "@tato30/vue-pdf/style.css";
import { VuePDF, usePDF } from "@tato30/vue-pdf";

const props = defineProps<{
  pdfUrl: string;
}>();

const { pdf, pages } = usePDF(props.pdfUrl);
</script>

<template>
  <VuePDF
    v-for="page in pages"
    :key="page"
    class="w-full"
    fit-parent
    text-layer
    :pdf="pdf"
    :page="page"
    :annotation-layer="false"
  />
</template>
