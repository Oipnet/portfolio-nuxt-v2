<script setup lang="ts">
defineProps<{services: any}>()
</script>

<template>
  <BaseTitle title="A votre service" sub-title="Mes compétences à votre disposition"/>
  <div class="grid grid-cols-1 xl:grid-cols-3 gap-8">
    <services-item v-for="service in services.value" :service="service"/>
  </div>
</template>

<style scoped>

</style>