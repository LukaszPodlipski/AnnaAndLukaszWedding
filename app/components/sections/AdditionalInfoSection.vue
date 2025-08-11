<template>
  <div
    id="additional-info-section"
    class="additional-info-section scroll-m-16 md:mt-0 md:pt-0"
  >
    <div class="content-wrapper-narrow flex flex-col items-center gap-8 !pb-16">
      <div class="flex flex-col items-center gap-2 text-white">
        <h2 class="text-h2 text-center">Informacje dodatkowe</h2>
        <span class="text-body-l px-4 text-center">
          związane ze sprawami organizacyjnymi
        </span>
      </div>
      <div class="mt-8 flex flex-wrap justify-center gap-12">
        <div class="flex flex-col items-center gap-4">
          <div class="flex flex-col items-center gap-4">
            <Icon name="local:flowers" class="h-[60px] w-[60px]" />
            <span class="text-body-l">Składanie życzeń</span>
          </div>
          <div
            class="app-separator--flat max-w-[180px] !bg-white opacity-15"
          ></div>
          <span class="text-body-m w-full text-center lg:w-[320px]">
            Składanie życzeń Młodej Parze odbędzie się zaraz po przyjeździe z
            kościoła do sali weselnej, na tarasie pałacu. To idealna okazja, by
            wszyscy goście zdążyli przyjechać i osobiście złożyć swoje
            gratulacje oraz najlepsze życzenia nowożeńcom, zanim rozpoczniemy
            oficjalną część wesela.
          </span>
        </div>
        <div class="flex flex-col items-center gap-4">
          <div class="flex flex-col items-center gap-4">
            <Icon name="local:shutter" class="h-[60px] w-[60px]" />
            <span class="text-body-l">Zdjęcie grupowe</span>
          </div>
          <div
            class="app-separator--flat max-w-[180px] !bg-white opacity-15"
          ></div>
          <span class="text-body-m w-full text-center lg:w-[320px]">
            O godzinie 19:00 zapraszamy wszystkich Gości weselnych na wspólne
            zdjęcie grupowe, które zostanie wykonane na tarasie pałacu. Będzie
            to doskonała okazja, by upamiętnić ten wyjątkowy moment i stworzyć
            pamiątkę, która będzie towarzyszyć nam przez lata. Prosimy, aby
            wszyscy Goście byli obecni o wyznaczonej godzinie, aby zdjęcie
            wyszło jak najlepiej!
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .additional-info-section {
    background-color: var(--color-green-900);
    color: var(--color-white);
  }
</style>
