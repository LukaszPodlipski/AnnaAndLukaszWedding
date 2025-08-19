<template>
  <div
    id="photo-album-section"
    class="photo-album-section content-wrapper-middle-wide flex flex-col items-center gap-4 !pb-20"
  >
    <div class="flex flex-col items-center gap-16">
      <div class="flex flex-col items-center gap-2 text-green-900">
        <h2 class="text-h2 text-center">Album zdjęciowy</h2>
        <span class="text-body-l text-center">
          współtworzony przez naszych Gości
        </span>
      </div>
    </div>
    <div class="mt-2 flex flex-wrap justify-center gap-10">
      <div class="flex flex-col items-center gap-4">
        <NuxtImg
          src="/album-qr-code.svg"
          alt="Album zdjęciowy"
          class="max-w-[300px] rounded-2xl"
        />
        <span class="text-body-m mt-2 w-full max-w-[800px] text-center">
          Zachęcamy do wrzucania własnych zdjęć do albumu.
        </span>
      </div>
    </div>
  </div>
</template>
