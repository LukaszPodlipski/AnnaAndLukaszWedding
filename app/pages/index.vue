<script setup lang="ts">
  import AboutUsSection from '~/components/sections/AboutUsSection.vue';
  import AdditionalInfoSection from '~/components/sections/AdditionalInfoSection.vue';
  import AttractionsSection from '~/components/sections/AttractionsSection.vue';
  import ContactSection from '~/components/sections/ContactSection.vue';
  import DayScheduleSection from '~/components/sections/DayScheduleSection.vue';
  import HeroSection from '~/components/sections/HeroSection.vue';
  import MapSection from '~/components/sections/MapSection.vue';
  import OurStorySection from '~/components/sections/OurStorySection.vue';
  import WeddingCeremony from '~/components/sections/WeddingCeremony.vue';
  import WeddingReceoption from '~/components/sections/WeddingReceoption.vue';

  const config = useRuntimeConfig();
  const displayDayScheduleSection = config.public.displayDayScheduleSection;
  const displayAttractionsSection = config.public.displayAttractionsSection;

  const googleMapsApiKey = config.public.googleMapsApiKey;
</script>

<template>
  <div>
    <HeroMenu />
    <HeroSection />
    <AboutUsSection />
    <OurStorySection />
    <DayScheduleSection v-if="displayDayScheduleSection" />
    <AttractionsSection v-if="displayAttractionsSection" />
    <AdditionalInfoSection />
    <WeddingCeremony />
    <MapSection
      address="Katedra pw. św. Apostołów Piotra i Pawła Poewangelicka"
    />
    <WeddingReceoption />
    <iframe
      :src="`https://www.google.com/maps/d/u/0/embed?mid=1q8VyZdeLgfoG0BlXsEcMc_R-7juku1A&ehbc=2E312F?key=${googleMapsApiKey}`"
      width="100%"
      height="480"
      style="border: 0"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <ContactSection />
  </div>
</template>
