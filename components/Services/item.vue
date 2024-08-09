<template>
    <div class="service border rounded p-8 leading-relaxed">
        <h3 class="text-2xl font-title text-primary mb-8">{{ service.title }}</h3>
        <ContentRendererMarkdown :value="service.excerpt" />
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