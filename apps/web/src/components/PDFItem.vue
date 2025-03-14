<script setup>
import "@tato30/vue-pdf/style.css";
import { DialogOverlay } from "reka-ui";

const showPDFPreview = ref(false);

const { text, rects } = useTextSelection();

const rectPosition = computed(() => {
  if (!rects.value[0]) return null;
  const { x, y } = rects.value[0];

  return { x, y: y - 12 };
});

watch([text, rectPosition], ([_, rectPosition]) => {
  console.log("text", rectPosition);
});
</script>

<template>
  <div
    class="rounded-md border px-4 py-2 text-sm shadow-sm"
    @click="showPDFPreview = true"
  >
    my-book.pdf
  </div>
  <Teleport to="body">
    <div
      v-if="rectPosition !== null && text !== ''"
      :style="{
        left: rectPosition.x + 'px',
        top: rectPosition.y + 'px',
      }"
      class="fixed left-0 top-0 z-[100] flex gap-1 h-11 items-center in-checked: rounded-lg border bg-card text-card-foreground shadow p-1 -translate-y-full"
    >
        <Button size="sm" variant="ghost" @click="console.log('click')">AI Assist</Button>
        <Separator orientation="vertical" />
        <Button size="sm" variant="ghost">Note</Button>
    </div>
  </Teleport>
  <Dialog :open="showPDFPreview" @update:open="showPDFPreview = $event">
    <DialogOverlay />
    <DialogContent
      class="h-screen max-w-[unset] border-0 w-full rounded-none! overflow-y-auto py-0"
    >
      <ClientOnly fallback="Loading...">
        <div
          class="flex items-center justify-center w-full h-full overflow-y-auto"
        >
          <div class="max-w-[800px] relative w-full flex flex-col h-full">
            <PDFPreview
              pdf-url="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf"
            />
          </div>
        </div>
      </ClientOnly>
    </DialogContent>
  </Dialog>
</template>
