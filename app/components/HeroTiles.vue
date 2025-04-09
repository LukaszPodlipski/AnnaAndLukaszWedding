<script setup lang="ts">
  const { isWebWidth } = useWebScreenSize();

  const tiles = [
    {
      dateNumber: '30',
      date: '01 MARZEC 2019',
      description: 'DZIEŃ W KTÓRYM SIĘ POZNALIŚMY',
      imagePath: 'hero-left-image.jpg',
    },
    {
      dateNumber: '08',
      date: '29 CZERWCA 2019',
      description: 'DZIEŃ W KTÓRYM SIĘ ZARĘCZYLIŚMY',
      imagePath: 'hero-center-image.jpg',
    },
    {
      dateNumber: '25',
      date: '25 LISTOPAD 2025',
      description: 'DZIEŃ W KTÓRYM SIĘ POBIERZAMY',
      imagePath: 'hero-right-image.jpg',
    },
  ];
</script>

<template>
  <div
    class="relative ml-[60px] flex items-center gap-4 md:m-auto md:gap-8 xl:gap-16"
  >
    <div
      v-for="tile in tiles"
      :key="tile.dateNumber"
      class="relative ml-[-64px] flex flex-col items-center gap-4 md:m-auto"
    >
      <div
        class="tile-image shadow-xl"
        :style="{
          backgroundImage: `url(./${tile.imagePath})`,
        }"
      ></div>
      <span v-if="isWebWidth" class="text-h1 date-number">
        {{ tile.dateNumber }}.
      </span>
      <template v-if="isWebWidth">
        <div class="vertical-line"></div>
        <div class="flex flex-col items-center gap-2">
          <span class="text-body-s text-center">{{ tile.date }}</span>
          <span class="text-body-m max-w-[150px] text-center">
            {{ tile.description }}
          </span>
        </div>
      </template>
    </div>
    <span
      class="text-h1 text-h1--keep-size right-0px absolute bottom-[-10px] left-[-15px] mx-auto block text-center text-white sm:left-[60px] md:bottom-[-120px] md:text-green-900 lg:left-0 lg:hidden"
    >
      30.08.25
    </span>
  </div>
</template>

<style scoped lang="scss">
  .tile-image {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 224px;
    min-width: 224px;
    min-height: 420px;
    height: 420px;
    border-radius: 200px;
    position: relative;
    overflow: hidden;
    filter: grayscale(100%);

    &::before {
      content: '';
      position: absolute;
      top: -10px;
      left: -10px;
      right: -10px;
      bottom: -10px;
      background-image: inherit;
      background-size: cover;
      background-position: center;
      animation: slowMove 30s ease-in-out infinite alternate;
    }

    @media (max-width: 600px) {
      width: 180px;
      min-width: 180px;
      min-height: 350px;
      height: 350px;
    }
  }
  .date-number {
    position: absolute;
    bottom: 240px;
    right: -50px;
    background: linear-gradient(
      90deg,
      var(--color-neutral-1000) 40%,
      var(--color-neutral-200) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 10;
  }

  .vertical-line {
    width: 1px;
    height: 140px;
    background-color: var(--color-neutral-200);
  }

  @keyframes slowMove {
    0% {
      transform: scale(1.1) translate(0, 0);
    }
    50% {
      transform: scale(1.1) translate(-5%, -5%);
    }
    100% {
      transform: scale(1.1) translate(1%, 1%);
    }
  }
</style>
