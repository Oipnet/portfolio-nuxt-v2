<template>
    <container>
        <ContentDoc v-slot="{ doc }">
            <article class="service-detail">
                <h1>{{ doc.title }}</h1>
                <ContentRenderer :value="doc" />
            </article>
        </ContentDoc>
    </container>
    <me-contacter />
    <NuxtPicture format="webp" src="/img/logo-800.png" alt="Forelse" class="header--logo mr-8 col-span-1 w-full"
               :img-attrs="{ class: 'h-[350px] mx-auto mt-8'}"/>
</template>

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