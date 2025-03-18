<template>
  <CommandDialog
    :open="commandDialogProvider?.open"
    @update:open="commandDialogProvider?.changeOpen"
  >
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Projects">
        <CommandItem value="calendar"><BookIcon /> Medicine</CommandItem>
        <CommandItem value="search-emoji"><BookIcon /> Economics</CommandItem>
        <CommandItem value="calculator"><BookIcon /> AI</CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Settings">
        <CommandItem value="profile"><UserIcon /> Profile </CommandItem>
        <CommandItem value="billing"><CreditCardIcon /> Billing</CommandItem>
        <CommandItem value="settings"><SettingsIcon /> Settings</CommandItem>
      </CommandGroup>
    </CommandList>
  </CommandDialog>
</template>

<script setup lang="ts">
import { useMagicKeys } from "@vueuse/core";
import {
  CreditCardIcon,
  SettingsIcon,
  UserIcon,
  BookIcon,
} from "lucide-vue-next";

import { watch } from "vue";

const commandDialogProvider = inject<{
  open: boolean;
  changeOpen: (value: boolean) => void;
} | null>("commands-dialog", null);

const keys = useMagicKeys();
const shortcut = keys["Cmd+K"];

watch(shortcut, (v) => {
  if (v) commandDialogProvider?.changeOpen(true);
});
</script>
