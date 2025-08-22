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
          Dodane zdjęcia będą widoczne w tym miejscu.
        </span>
      </div>
    </div>
    <iframe
      v-if="isWeddingDate"
      src="https://drive.google.com/embeddedfolderview?id=1TnKxE8LsT6NRfSUaH0VzwETUII_PV-c5#grid"
      style="width: 100%; height: 600px; border: 0"
    ></iframe>
  </div>
</template>

<style>
  .filter-blur {
    filter: blur(5px);
  }
</style>
