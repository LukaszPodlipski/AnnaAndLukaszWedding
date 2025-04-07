<script setup lang="ts">
  import Timeline from 'primevue/timeline';

  const events = ref([
    {
      description: 'Wyjazd Pana Młodego wraz z rodziną do domu Pani Młodej.',
      hour: '12:15',
      icon: 'local:bowtie',
      class: 'pb-8',
    },
    {
      description:
        'Przyjazd Pana Młodego i gości weselnych do domu Pani Młodej. Błogosławieństwo Młodej Pary.',
      hour: '12:45',
      icon: 'local:heart-home',
      class: 'pb-10',
    },
    {
      description:
        'Uroczystość ślubna w Katedrze pw. św. apostołów Piotra i Pawła w Legnicy',
      hour: '14:00',
      icon: 'local:church',
      class: 'pb-12',
    },
    {
      description: 'Przyjazd do Pałacu Radomiłów, powitanie gości, życzenia',
      hour: '16:00',
      icon: 'local:building',
      class: 'pb-10',
    },
    {
      description: 'Obiad',
      hour: '17:00',
      icon: 'local:dinner',
      class: 'pb-10',
    },
    {
      description: 'Pierwszy taniec',
      hour: '17:30',
      icon: 'local:dance',
      class: 'pb-12',
    },
    {
      description: 'Pokaz tańców ludowych',
      hour: '21:00',
      icon: 'local:folk-dance',
      class: 'pb-12',
    },
    {
      description: 'Tort',
      hour: '22:00',
      icon: 'local:cake',
      class: 'pb-12',
    },
    {
      description: 'Oczepiny',
      hour: '24:00',
      icon: 'local:party',
      class: 'pb-8',
    },
  ]);

  const { isMobileWidth } = useWebScreenSize();
</script>

<template>
  <div
    id="day-schedule-section"
    class="day-schedule-section scroll-m-16 md:mt-0 md:pt-0"
  >
    <div
      class="content-wrapper-narrow flex flex-col items-center gap-16 !px-2 !pb-16"
    >
      <div class="flex flex-col items-center gap-2 text-white">
        <h2 class="text-h2 text-center">Plan dnia</h2>
        <span class="text-body-l px-4 text-center">
          Godziny kluczowych momentów dnia ślubnego
        </span>
      </div>
      <div class="flex flex-wrap items-center justify-center gap-16">
        <Timeline :value="events" align="alternate" class="w-full md:w-80">
          <template #content="slotProps">
            <div class="flex flex-col" :class="slotProps.item.class">
              <span :class="isMobileWidth ? 'text-body-s' : 'text-body-m'">
                {{ slotProps.item.hour }}
              </span>
              <span :class="isMobileWidth ? 'text-body-s' : 'text-body-l'">
                {{ slotProps.item.description }}
              </span>
            </div>
          </template>
          <template #marker="slotProps">
            <div
              class="flex h-[32px] w-[32px] items-center justify-center rounded-full border-[2px] border-white"
            >
              <Icon :name="slotProps.item.icon" class="text-white" />
            </div>
          </template>
        </Timeline>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .day-schedule-section {
    background-color: var(--color-green-900);
    background-image: url('~/assets/images/background-royal.svg');
  }
</style>
