<script setup lang="ts">
  import ProgressBar from 'primevue/progressbar';
</script>

<template>
  <div
    id="about-us-section"
    class="about-us-section mt-[-100px] scroll-m-16 md:mt-0 md:pt-0"
  >
    <div class="content-wrapper-narrow flex flex-col items-center gap-16">
      <div class="flex flex-col items-center gap-2 text-white">
        <h2 class="text-h2 text-center">Poznaj nas bliżej</h2>
        <span class="text-body-l text-center">
          Kilka słów na temat przyszlej Pary Młodej
        </span>
      </div>
      <div class="flex flex-wrap items-center justify-center gap-18">
        <div class="flex max-w-[310px] flex-col items-center gap-8">
          <div class="flex flex-col items-center gap-4">
            <NuxtImg
              src="/women.jpg"
              class="h-[150px] w-[120px] rounded-[60px]"
            />
            <span class="text-body-l text-white">Łukasz Podlipski</span>
            <p class="text-body-m text-center text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div class="flex w-full flex-col gap-6">
            <p class="text-body-m w-full text-left text-white">
              Co uwielbiam? Czym się pasjonuję?
            </p>
            <div class="flex w-full flex-col gap-4">
              <div class="flex w-full flex-col gap-2">
                <div class="flex w-full justify-between">
                  <span class="text-body-s text-white">Lorem ipsum</span>
                  <span class="text-body-s text-white">Lorem ipsum</span>
                </div>
                <ProgressBar :value="50"></ProgressBar>
              </div>
              <div class="flex w-full flex-col gap-2">
                <div class="flex w-full justify-between">
                  <span class="text-body-s text-white">Lorem ipsum</span>
                  <span class="text-body-s text-white">Lorem ipsum</span>
                </div>
                <ProgressBar :value="50"></ProgressBar>
              </div>
              <div class="flex w-full flex-col gap-2">
                <div class="flex w-full justify-between">
                  <span class="text-body-s text-white">Lorem ipsum</span>
                  <span class="text-body-s text-white">Lorem ipsum</span>
                </div>
                <ProgressBar :value="50"></ProgressBar>
              </div>
              <div class="flex w-full flex-col gap-2">
                <div class="flex w-full justify-between">
                  <span class="text-body-s text-white">Lorem ipsum</span>
                  <span class="text-body-s text-white">Lorem ipsum</span>
                </div>
                <ProgressBar :value="50"></ProgressBar>
              </div>
            </div>
          </div>
        </div>
        <div class="flex max-w-[310px] flex-col items-center gap-8">
          <div class="flex flex-col items-center gap-4">
            <NuxtImg
              src="/man.jpg"
              class="h-[150px] w-[120px] rounded-[60px]"
            />
            <span class="text-body-l text-white">Łukasz Podlipski</span>
            <p class="text-body-m text-center text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div class="flex w-full flex-col gap-6">
            <p class="text-body-m w-full text-left text-white">
              Co uwielbiam? Czym się pasjonuję?
            </p>
            <div class="flex w-full flex-col gap-4">
              <div class="flex w-full flex-col gap-2">
                <div class="flex w-full justify-between">
                  <span class="text-body-s text-white">Lorem ipsum</span>
                  <span class="text-body-s text-white">Lorem ipsum</span>
                </div>
                <ProgressBar :value="50"></ProgressBar>
              </div>
              <div class="flex w-full flex-col gap-2">
                <div class="flex w-full justify-between">
                  <span class="text-body-s text-white">Lorem ipsum</span>
                  <span class="text-body-s text-white">Lorem ipsum</span>
                </div>
                <ProgressBar :value="50"></ProgressBar>
              </div>
              <div class="flex w-full flex-col gap-2">
                <div class="flex w-full justify-between">
                  <span class="text-body-s text-white">Lorem ipsum</span>
                  <span class="text-body-s text-white">Lorem ipsum</span>
                </div>
                <ProgressBar :value="50"></ProgressBar>
              </div>
              <div class="flex w-full flex-col gap-2">
                <div class="flex w-full justify-between">
                  <span class="text-body-s text-white">Lorem ipsum</span>
                  <span class="text-body-s text-white">Lorem ipsum</span>
                </div>
                <ProgressBar :value="50"></ProgressBar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .about-us-section {
    background-color: var(--color-green-900);
    background-image: url('~/assets/images/background-flowers.svg');
  }
</style>
