<script setup lang="ts">
import { Plus } from 'lucide-vue-next';
import Avatar from "vue-boring-avatars";

const projects = [
    {
        id: '1',
        title: 'Маркетинг'
    },
    {
        id: '2',
        title: 'Высшая математика'
    },
    {
        id: '3',
        title: 'Экономика'
    }
];
</script>

<template>
    <div class="w-full grow">
        <h1 class="text-2xl">Your Projects</h1>
        <div class="mt-10 grid grid-cols-6 gap-4">
            <NuxtLink
                v-for="project in projects"
                :key="project.id"
                :to="`/projects/${project.id}`"
                class="w-full flex flex-col justify-between text-lg aspect-square bg-section-bg hover:bg-section-separator rounded-xl p-4 transition active:scale-[0.98]"
            >
                <Avatar :name="project.title" :size="48" variant="bauhaus" :colors='["#f3d915", "#e9e4bb", "#bfd4b7", "#a89907", "#1a1c27"]' class="size-12" />
                {{ project.title }}
            </NuxtLink>
            <NuxtLink
                href="/projects/create"
                class="w-full text-lg aspect-square border-4 cursor-pointer border-section-bg border-dashed group hover:bg-section-separator hover:border-none rounded-xl p-4 transition active:scale-[0.98] flex items-center justify-center"
            >
                <Plus class="text-section-separator group-hover:text-section-bg size-12" :size="24" />
            </NuxtLink>
        </div>
    </div>
</template>
