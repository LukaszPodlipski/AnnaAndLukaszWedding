<script setup lang="ts">
  const { isWebWidth } = useWebScreenSize();
</script>

<template>
  <div
    id="about-us-section"
    class="about-us-section content-wrapper-narrow mt-[-100px] flex scroll-m-16 flex-col items-center gap-12 md:mt-0 md:pt-0"
  >
    <div class="flex flex-col items-center gap-16">
      <div class="flex flex-col items-center gap-2 text-green-900">
        <h2 class="text-h2 text-center">Nasza historia</h2>
        <span class="text-body-l text-center">
          Jak się poznaliśmy, co przeżyliśmy
        </span>
      </div>
    </div>
    <div class="text-body-m flex flex-col items-center gap-6 text-green-900">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    <div class="flex items-center gap-2" :class="{ 'flex-col': !isWebWidth }">
      <div class="flex flex-col items-center gap-4">
        <div
          class="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-green-900"
        >
          <Icon name="local:hearts-chat" class="h-[25px] w-[34px] text-white" />
        </div>
        <div class="flex flex-col items-center gap-2">
          <span class="text-body-m">Poznanie się</span>
          <span class="text-body-s">01.03.2019</span>
        </div>
      </div>
      <div
        class="w h-[1px] w-[80px] bg-green-900"
        :class="{ 'h-[80px] !w-[1px]': !isWebWidth }"
      ></div>
      <div class="flex flex-col items-center gap-4">
        <div
          class="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-green-900"
        >
          <Icon name="local:cupid-chat" class="h-[25px] w-[34px] text-white" />
        </div>
        <div class="flex flex-col items-center gap-2">
          <span class="text-body-m">Para</span>
          <span class="text-body-s">21.04.2019</span>
        </div>
      </div>
      <div
        class="w h-[1px] w-[80px] bg-green-900"
        :class="{ 'h-[80px] !w-[1px]': !isWebWidth }"
      ></div>

      <div class="flex flex-col items-center gap-4">
        <div
          class="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-green-900"
        >
          <Icon name="local:ring" class="h-[30px] w-[34px] text-white" />
        </div>
        <div class="flex flex-col items-center gap-2">
          <span class="text-body-m">Narzeczeni</span>
          <span class="text-body-s">21.06.2019</span>
        </div>
      </div>
      <div
        class="w h-[1px] w-[80px] bg-green-900"
        :class="{ 'h-[80px] !w-[1px]': !isWebWidth }"
      ></div>

      <div class="flex flex-col items-center gap-4">
        <div
          class="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-green-900"
        >
          <Icon name="local:rings" class="h-[30px] w-[34px] text-white" />
        </div>
        <div class="flex flex-col items-center gap-2">
          <span class="text-body-m">Małżonkowie</span>
          <span class="text-body-s">30.08.2025</span>
        </div>
      </div>
    </div>
    <div
      class="flex w-full items-center justify-between gap-4 rounded-sm border border-green-900 p-2"
    >
      <Icon
        name="local:quote-symbols"
        class="min-h h-[30px] w-[34px] text-green-900"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing eli sed do eiusmod
        tempor
      </p>
      <Icon
        name="local:quote-symbols"
        class="h-[30px] w-[34px] rotate-180 text-green-900"
      />
    </div>
    <div class="flex flex-wrap justify-center gap-x-18 gap-y-12">
      <div class="flex flex-col items-center">
        <Icon
          name="local:calendar-heart"
          class="h-[52px] w-[50px] text-green-900"
        />
        <span class="text-body-l">2332</span>
        <div class="app-separator--flat !my-2 !w-[80px] !bg-black"></div>
        <span class="text-body-s text-black">dni będziemy razem</span>
        <span class="text-body-s text-neutral-950">w dniu naszego ślubu</span>
      </div>
      <div class="flex flex-col items-center">
        <Icon name="local:game-pad" class="h-[52px] w-[50px] text-green-900" />
        <span class="text-body-l">1628</span>
        <div class="app-separator--flat !my-2 !w-[80px] !bg-black"></div>
        <span class="text-body-s text-black">wspólnych godzin</span>
        <span class="text-body-s text-neutral-950">spędzonych w grach</span>
      </div>
      <div class="flex flex-col items-center">
        <Icon
          name="local:world-trip"
          class="h-[52px] w-[50px] text-green-900"
        />
        <span class="text-body-l">5</span>
        <div class="app-separator--flat !my-2 !w-[80px] !bg-black"></div>
        <span class="text-body-s text-black">podróży</span>
        <span class="text-body-s text-neutral-950">które odbyliśmy razem</span>
      </div>
    </div>
  </div>
</template>
