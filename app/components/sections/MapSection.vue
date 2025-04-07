<script setup lang="ts">
  defineProps<{
    address: string;
    maptype?: 'roadmap' | 'satellite' | 'hybrid' | 'terrain';
  }>();
  const config = useRuntimeConfig();
  const googleMapsApiKey = config.public.googleMapsApiKey;
</script>

<template>
  <section class="map-section">
    <iframe
      :src="`https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${encodeURIComponent(address)}&maptype=${maptype || 'satellite'}&zoom=19`"
      width="100%"
      height="450"
      style="border: 0"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </section>
</template>

<style scoped>
  .map-section {
    width: 100%;
  }
</style>
