<script setup lang="ts">
  const WEDDING_DATE = new Date('2025-08-30 15:00');

  const isWeddingDate = computed(() => {
    return new Date() > WEDDING_DATE;
  });
</script>

<template>
  <div
    id="photo-album-section"
    class="photo-album-section content-wrapper-middle-wide flex flex-col items-center gap-4 !pb-20"
  >
    <div class="flex flex-col items-center gap-16">
      <div class="flex flex-col items-center gap-2 text-green-900">
        <h2 class="text-h2 text-center">Wirtualna księga gości</h2>
        <span class="text-body-l text-center">współtworzona przez Was!</span>
      </div>
    </div>
    <div class="mt-2 flex flex-wrap justify-center gap-10">
      <div class="flex flex-col items-center gap-4">
        <NuxtImg
          :class="!isWeddingDate ? 'filter-blur' : ''"
          src="/album-qr-code.png"
          alt="Album zdjęciowy"
          class="max-w-[300px] rounded-2xl"
        />
        <span
          v-if="isWeddingDate"
          class="text-body-m mt-2 w-full max-w-[800px] text-center"
        >
          Zachęcamy do wrzucania własnych zdjęć do albumu.
        </span>

        <span v-else class="text-body-m mt-2 w-full max-w-[800px] text-center">
          Album zostanie aktywowany dniu wesela od godziny 15:00.
          <br />
        </span>
        <button
          v-if="isWeddingDate"
          class="rounded-full bg-green-900 px-4 py-2 text-white"
        >
          <a href="https://pov.camera/qr/534776A2-7036-4BE3-A4F7-6B812BDF7571">
            Otwórz album
          </a>
        </button>
      </div>
    </div>
  </div>
</template>

<style>
  .filter-blur {
    filter: blur(5px);
  }
</style>
