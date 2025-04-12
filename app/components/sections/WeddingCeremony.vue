<script setup lang="ts">
  const { isWebWidth } = useWebScreenSize();
</script>

<template>
  <div id="wedding-ceremony-section" class="wedding-ceremony !pb-12">
    <div class="content-wrapper-wide">
      <div class="flex flex-col items-end gap-8 text-right text-green-900">
        <h1 class="text-h1">Ceremonia Ślubu</h1>
        <h2 class="text-h2 -mt-8">
          Kadedra pw. św. apostołów
          <br />
          Piotra i Pawłą w Legnicy
        </h2>
        <a
          target="_blank"
          href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x470f129ac5d063df:0xaa5c170a12cdea1e?sa=X&ved=1t:8290&ictx=111"
        >
          <span class="text-body-l text-green-900 underline">
            plac Katedralny 6, 59-220 Legnica
          </span>
        </a>
        <p class="text-body-m max-w-[780px] text-right text-green-900">
          Katedra w Legnicy to gotycka perła z XIV wieku, której imponująca
          sylwetka i finezyjne zdobienia przenoszą w czasy legend. Zbudowana z
          czerwonej cegły, emanuje spokojem i mistyczną aurą, a rzeźbione
          portale i subtelne witraże zachwycają swoją unikalną urodą. Po
          wieloletnich pracach konserwacyjnych budynek zachował autentyczny
          charakter, stanowiąc żywe świadectwo duchowej historii miasta.
        </p>
        <div class="flex max-w-[780px] flex-col gap-7">
          <span class="text-body-l">Ciekawostki</span>
          <div
            class="flex items-center gap-8"
            :class="{ 'flex-col': !isWebWidth }"
          >
            <span class="text-body-m">
              Katedra wzniesiona w XIII wieku przeszła liczne przebudowy, w
              wyniku których łączy w sobie pierwotny gotyk z renesansowymi i
              barokowymi akcentami. Ta warstwowość świadczy o długiej, burzliwej
              historii budowli.
            </span>
            <div
              class="bg-green-900 opacity-50"
              :class="isWebWidth ? 'h-[80px] w-[1px]' : 'h-[1px] w-full'"
            ></div>
            <span class="text-body-m">
              Wnętrze katedry kryje jeden z najstarszych instrumentów tego typu
              w regionie. Historyczny organ, będący świadkiem wielu
              uroczystości, do dziś zachwyca wiernych i miłośników muzyki
              sakralnej swoim unikalnym brzmieniem.
            </span>
            <div
              class="bg-green-900 opacity-50"
              :class="isWebWidth ? 'h-[80px] w-[1px]' : 'h-[1px] w-full'"
            ></div>

            <span class="text-body-m">
              Katedra była areną ważnych uroczystości – które na trwałe wpisały
              ją w historię Legnicy jako symbol duchowego i kulturowego centrum
              miasta.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .wedding-ceremony {
    background-image: url('../../assets/images/legnica-map-bg.svg');
    background-size: cover;
    background-position: -600px 50px;
    background-repeat: no-repeat;

    @media (max-width: 640px) {
      background-position: -600px;
      background-size: 1000px;
    }
  }
</style>
