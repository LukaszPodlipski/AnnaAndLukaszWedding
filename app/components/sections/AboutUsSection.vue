<script setup lang="ts">
  import ProgressBar from 'primevue/progressbar';
</script>

<template>
  <div
    id="about-us-section"
    class="about-us-section mt-[-100px] scroll-m-16 pt-[100px] md:mt-0 md:pt-0"
  >
    <div class="content-wrapper-middle-wide flex flex-col items-center gap-16">
      <div class="flex flex-col items-center gap-2 text-white">
        <h2 class="text-h2 text-center">Poznaj nas bliżej</h2>
        <span class="text-body-l text-center">
          Kilka słów na temat przyszłej Pary Młodej
        </span>
      </div>
      <div
        class="flex flex-wrap items-center justify-center gap-24 lg:justify-between"
      >
        <div class="flex max-w-[410px] flex-col items-center gap-8">
          <div class="flex flex-col items-center gap-4">
            <NuxtImg
              src="/women.jpg"
              class="h-[150px] w-[120px] rounded-[60px] object-cover"
            />
            <span class="text-body-l text-white">Anna Sipurzyńska</span>
            <p class="text-body-m h-auto text-center text-white md:h-[500px]">
              Jestem studentką trzeciego roku medycyny – choć czasem żartuję, że
              jeśli ten plan się nie powiedzie, zostanę cukiernikiem, bo mam
              ogromną słabość do słodyczy.
              <br />
              <br />
              W wolnym czasie wróciłam do swojej pasji z czasów gimnazjum –
              grania. Nie na instrumencie, a w gry wideo.
              <br />
              <br />
              Gdybym miała wybrać jedno danie, które mogłabym jeść do końca
              życia, bez wahania postawiłabym na makaron – a konkretnie penne
              alla vodka.
              <br />
              <br />
              Uwielbiam filmy Quentina Tarantino – jego styl absolutnie trafia w
              mój gust.
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
        <div class="flex max-w-[410px] flex-col items-center gap-8">
          <div class="flex flex-col items-center gap-4">
            <NuxtImg
              src="/lukasz.png"
              class="h-[150px] w-[120px] rounded-[60px] object-cover"
            />
            <span class="text-body-l text-white">Łukasz Podlipski</span>
            <p class="text-body-m h-auto text-center text-white md:h-[500px]">
              Jestem tym szczęśliwym facetem, który usłyszał „tak” od
              naładniejszej kobiecie na świecie.
              <br />
              <br />
              Zawodowo zajmuję się programowaniem aplikacji internetowych, a w
              wolnym czasie lubię grać w gry wideo, oglądać filmy akcji oraz...
              jeszcze więcej programować.
              <br />
              <br />
              Poza tym jestem miłośnikiem militarii, co przekłada się na godziny
              spędzone przy słuchawniu podcastów o tej tematyce jak i
              weekendowych wypadach na gry w Airsoft z Anią i przyjaciółmi.
              <br />
              <br />
              A kiedy akurat nie programuję, nie gram i nie siedzę w krzakach z
              repliką, to pewnie kręcę coś w kuchni. Gotowanie mnie relaksuje –
              zwłaszcza gdy widzę, jak Ania po cichu sięga po dokładkę.
            </p>
          </div>
          <div class="flex w-full flex-col gap-6">
            <p class="text-body-m w-full text-left text-white">
              Co uwielbiam? Czym się pasjonuję?
            </p>
            <div class="flex w-full flex-col gap-4">
              <div class="flex w-full flex-col gap-2">
                <div class="flex w-full justify-between">
                  <span class="text-body-s text-white">Technologia</span>
                  <span class="text-body-s text-white">100%</span>
                </div>
                <ProgressBar :value="100"></ProgressBar>
              </div>
              <div class="flex w-full flex-col gap-2">
                <div class="flex w-full justify-between">
                  <span class="text-body-s text-white">Gadżeciarstwo</span>
                  <span class="text-body-s text-white">80%</span>
                </div>
                <ProgressBar :value="80"></ProgressBar>
              </div>
              <div class="flex w-full flex-col gap-2">
                <div class="flex w-full justify-between">
                  <span class="text-body-s text-white">Dobra Kuchnia</span>
                  <span class="text-body-s text-white">100%</span>
                </div>
                <ProgressBar :value="100"></ProgressBar>
              </div>
              <div class="flex w-full flex-col gap-2">
                <div class="flex w-full justify-between">
                  <span class="text-body-s text-white">Militaria</span>
                  <span class="text-body-s text-white">90%</span>
                </div>
                <ProgressBar :value="90"></ProgressBar>
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
