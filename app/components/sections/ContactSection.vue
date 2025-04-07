<template>
  <div
    id="contact-section"
    class="contact-section content-wrapper-narrow flex flex-col items-center gap-8"
  >
    <div class="flex flex-col items-center gap-16">
      <div class="flex flex-col items-center gap-2 text-green-900">
        <h2 class="text-h2 text-center">Kontakt</h2>
        <span class="text-body-l text-center">
          Chcesz potwierdzić swoje przybycie lub o coś zapytać?
        </span>
        <span class="text-body-l -mt-2 text-center">
          Zapraszamy do kontaktu.
        </span>
      </div>
    </div>
    <div class="mt-8 flex flex-wrap justify-center gap-24">
      <div class="flex flex-col items-center gap-2">
        <NuxtImg
          src="/women.jpg"
          class="h-[150px] w-[120px] rounded-[60px] object-cover"
        />
        <span class="text-body-l text-green-900">Ania Sipurzyńska</span>
        <span class="text-body-m text-center text-green-900">600-195-517</span>
        <span class="text-body-m text-center text-green-900">
          annasipurzynska@gmail.com
        </span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <NuxtImg
          src="/man.jpg"
          class="h-[150px] w-[120px] rounded-[60px] object-cover"
        />
        <span class="text-body-l text-green-900">Łukasz Podlipski</span>
        <span class="text-body-m text-center text-green-900">781-576-466</span>
        <span class="text-body-m text-center text-green-900">
          lukaszpodlipskikontakt@gmail.com
        </span>
      </div>
    </div>
    <p class="text-body-l mt-20 text-center text-green-900">Do zobaczenia!</p>
  </div>
</template>
