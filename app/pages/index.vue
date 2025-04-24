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
    <MapSection address="Pałac Radomiłów, Radomiłów 23, 59-305" />
    <ContactSection />
  </div>
</template>
