<template>
  <Sidebar>
    <SidebarHeader>
      <Button
        class="w-full justify-between border shadow-none"
        variant="secondary"
      >
        <div class="flex items-center text-muted-foreground gap-2">
          <SearchIcon />
          Search
        </div>
        <div class="flex items-center gap-1">
          <Kdb>
            <span class="text-xs">⌘</span>
          </Kdb>
          <Kdb>
            K
          </Kdb>
        </div>
      </Button>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Platform</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in items" :key="item.title">
              <SidebarMenuButton asChild>
                <a :href="item.url">
                  <component :is="item.icon" />
                  <span>{{ item.title }}</span>
                </a>
              </SidebarMenuButton>
              <SidebarMenuBadge v-if="item.badge">
                <Badge variant="default">{{ item.badge }}</Badge>
              </SidebarMenuBadge>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>Projects</SidebarGroupLabel>
        <!-- <SidebarGroupAction>
          <PlusIcon />
        </SidebarGroupAction> -->
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="project in projects" :key="project.id">
              <SidebarMenuButton
                asChild
                :isActive="project.id === $route.params.id"
              >
                <NuxtLink :to="`/projects/${project.id}`">
                  <BookIcon />
                  <span>{{ project.title }}</span>
                </NuxtLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                class="border border-dashed flex justify-center"
                asChild
              >
                <button>
                  <PlusIcon />
                  <span>Add project</span>
                </button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu v-slot="{ open }">
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                :class="[open && 'bg-sidebar-accent']"
                size="lg"
              >
                <div class="flex items-center gap-2">
                  <Avatar shape="square" size="sm"
                    ><AvatarImage
                      src="https://images.unsplash.com/photo-1739130524827-5fa364835c41?q=80&w=2304&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  /></Avatar>
                  <div class="flex flex-col">
                    <span>Mikhail Barulin</span>
                    <span>test@test.com</span>
                  </div>
                </div>
                <ChevronUpIcon
                  :class="[
                    'ml-auto transition-transform',
                    open && 'rotate-180',
                  ]"
                />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="right"
              class="w-[var(--reka-popper-anchor-width)]"
            >
              <DropdownMenuItem>
                <div class="flex items-center gap-2">
                  <Avatar shape="square" size="sm"
                    ><AvatarImage
                      src="https://images.unsplash.com/photo-1739130524827-5fa364835c41?q=80&w=2304&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  /></Avatar>
                  <div class="flex flex-col">
                    <span>Mikhail Barulin</span>
                    <span>test@test.com</span>
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span>Account</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  </Sidebar>
</template>

<script setup lang="ts">
import {
  BookIcon,
  RocketIcon,
  ChevronUpIcon,
  HomeIcon,
  PlusIcon,
  Settings,
  LifeBuoyIcon,
  SearchIcon,
} from "lucide-vue-next";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import DropdownMenu from "./ui/dropdown-menu/DropdownMenu.vue";
import Avatar from "./ui/avatar/Avatar.vue";
import SidebarGroupAction from "./ui/sidebar/SidebarGroupAction.vue";
import Badge from "./ui/badge/Badge.vue";
import DropdownMenuSeparator from "./ui/dropdown-menu/DropdownMenuSeparator.vue";
import SidebarHeader from "./ui/sidebar/SidebarHeader.vue";
import { NuxtLink } from "#components";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: HomeIcon,
  },
  {
    title: "AI Agent",
    url: "#",
    icon: RocketIcon,
    badge: "new",
  },
  {
    title: "Support",
    url: "#",
    icon: LifeBuoyIcon,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const projects = [
  {
    id: "abc",
    title: "Medicine",
  },
  {
    id: "def",
    title: "Economics",
  },
  {
    id: "ghi",
    title: "AI",
  },
];
</script>
