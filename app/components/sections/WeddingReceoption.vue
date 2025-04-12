<script setup lang="ts">
  const { isWebWidth } = useWebScreenSize();
</script>

<template>
  <div
    id="wedding-reception-section"
    class="wedding-reception bg-green-900 !pb-12"
  >
    <div class="content-wrapper-wide">
      <div class="flex flex-col items-start gap-8 text-left text-white">
        <h1 class="text-h1">Wesele</h1>
        <h2 class="text-h2 -mt-8">Pałac Radomiłów</h2>
        <a
          target="_blank"
          href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x470f7de2832a461f:0x3a0807dcc101e63a?sa=X&ved=1t:8290&ictx=111"
        >
          <span class="text-body-l underline">Radomiłów 23, 59-305</span>
        </a>
        <p class="text-body-m max-w-[780px]">
          Pałac w Radomiłowie to neobarokowa rezydencja z początku XX wieku,
          otoczona malowniczym parkiem. Zachwyca eleganckimi detalami
          architektonicznymi, takimi jak herb dawnych właścicieli i ganek
          frontowy. W swojej historii pełnił różne funkcje, m.in. lazaretu
          podczas II wojny światowej, a dziś odrestaurowany przypomina o swojej
          arystokratycznej przeszłości.
        </p>
        <div class="flex max-w-[780px] flex-col gap-7">
          <span class="text-body-l">Ciekawostki</span>
          <div
            class="flex items-center gap-8"
            :class="{ 'flex-col': !isWebWidth }"
          >
            <span class="text-body-m">
              Pałac wzniesiono w 1905 roku w stylu neobarokowym z elementami
              secesji.
            </span>
            <div
              class="bg-white opacity-50"
              :class="isWebWidth ? 'h-[80px] w-[1px]' : 'h-[1px] w-full'"
            ></div>
            <span class="text-body-m">
              W czasie II wojny światowej służył jako szpital wojskowy dla armii
              niemieckiej.
            </span>
            <div
              class="bg-white opacity-50"
              :class="isWebWidth ? 'h-[80px] w-[1px]' : 'h-[1px] w-full'"
            ></div>

            <span class="text-body-m">
              Jego herb i dewiza „Nulla me terrent” oznaczają „Niczego się nie
              boję”.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .wedding-reception {
    background-image: url('../../assets/images/radomilow-map-bg.svg');
    background-size: 1200px;
    background-position: right;
    background-repeat: no-repeat;

    @media (max-width: 640px) {
      background-position: -100px;
      background-size: 1000px;
    }
  }
</style>
