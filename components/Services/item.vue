<template>
    <div class="service border rounded px-8 leading-relaxed grid grid-cols-1 pt-8">
        <h3 class="text-2xl font-title text-primary mb-8">{{ service.title }}</h3>
        <ContentRendererMarkdown :value="service.excerpt" />
        <NuxtLink :to="service._path" class="text-right self-end mb-4">En savoir plus</NuxtLink>
    </div>
</template>

<script setup lang="ts">
defineProps<{service: any}>()
</script>

<style lang="css">
.service p {
    margin-bottom: 2em;
}
</style>