<template>
    <container>
        <ContentDoc v-slot="{ doc }">
            <article class="service-detail">
                <h1>{{ doc.title }}</h1>
                <NuxtPicture v-if="doc.cover" format="webp" :src="doc.cover" alt="Forelse" class="float-right h-[350px] mb-2"
                    :img-attrs="{ class: 'object-cover h-[350px] ml-8 rounded-xl'}"/>
                <ContentRenderer :value="doc" />
            </article>
        </ContentDoc>
    </container>
    <me-contacter />
    <NuxtPicture format="webp" src="/img/logo-800.png" alt="Forelse" class="header--logo mr-8 col-span-1 w-full"
               :img-attrs="{ class: 'h-[350px] mx-auto mt-8'}"/>
</template>
<script setup lang="ts">
const fullCoverPath = computed((doc) => {
    return doc.cover
})
</script>

<style>
.service-detail h1 {
    @apply mt-12 mb-8 font-title text-primary text-2xl;
}

.service-detail {
    @apply max-w-[800px] mx-auto leading-relaxed mb-12;
}

.service-detail p {
    @apply mb-4;
}
</style>