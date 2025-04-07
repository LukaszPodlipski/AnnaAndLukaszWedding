<script setup lang="ts">
  import HeroTiles from '~/components/HeroTiles.vue';

  const { t } = useI18n();
  const { isWebWidth } = useWebScreenSize();
</script>

<template>
  <div
    id="hero-section"
    class="content-wrapper-wide hero-section flex flex-col items-center justify-center gap-[120px] overflow-auto !px-0"
  >
    <div
      class="mt-12 flex w-full flex-col items-center justify-between gap-16 overflow-hidden text-wrap xl:mt-[100px] xl:flex-row xl:items-start xl:gap-4"
    >
      <p
        class="text-h-extra max-w-none px-6 text-center leading-[1] uppercase xl:max-w-[350px] xl:text-left"
        :class="isWebWidth ? 'text-h-extra' : 'text-h1'"
      >
        {{ $t('heroContent.saveTheDate') }}
      </p>
      <div class="flex items-center justify-center gap-4">
        <HeroTiles class="xl:pr-12" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .hero-section {
    min-height: min(100vh, 1200px);
  }
  .text-h-extra {
    background: linear-gradient(
      90deg,
      var(--color-neutral-1000) 40%,
      var(--color-neutral-200) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
