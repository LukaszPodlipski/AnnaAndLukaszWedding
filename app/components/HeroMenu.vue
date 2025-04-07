<script setup lang="ts">
  const { t } = useI18n();
  const { isWebWidth } = useWebScreenSize();

  const menuItems = [
    {
      label: t('heroMenu.aboutUs'),
      href: '/about-us',
      scrollTo: 'about-us-section',
    },
    {
      label: t('heroMenu.daySchedule'),
      href: '/day-schedule',
      scrollTo: 'day-schedule-section',
    },
    {
      label: t('heroMenu.attractions'),
      href: '/attractions',
      scrollTo: 'attractions-section',
    },
    {
      label: t('heroMenu.wedding'),
      href: '/wedding',
      scrollTo: 'wedding-ceremony-section',
    },
    {
      label: t('heroMenu.weddingReception'),
      href: '/wedding-reception',
      scrollTo: 'wedding-reception-section',
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDrawerSection = (sectionId: string) => {
    drawerVisible.value = false;
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const drawerVisible = ref(false);

  const toggleDrawerVisible = () => {
    drawerVisible.value = !drawerVisible.value;
  };
</script>

<template>
  <div
    class="glass-background fixed left-1/2 z-1000 w-full -translate-x-1/2 transform !px-4 !py-3 xl:!px-10"
  >
    <div
      class="mx-auto my-[0] flex w-full max-w-[1200px] items-center justify-between gap-6"
    >
      <div class="flex w-full items-center gap-[64px]">
        <button @click="scrollToSection('hero-section')">
          <NuxtImg src="/initials.svg" class="w-[55px]" />
        </button>
        <div v-if="isWebWidth" class="flex gap-3">
          <BaseButton
            v-for="item in menuItems"
            :key="item.label"
            type="text"
            class="text-body-s uppercase"
            :label="item.label"
            @click="scrollToSection(item.scrollTo)"
          />
        </div>
      </div>
      <BaseButton
        v-if="isWebWidth"
        type="text"
        :icons="{ right: { name: 'material-symbols-light:arrow-right-alt' } }"
        :label="t('heroMenu.contact')"
        class="text-body-s uppercase"
        @click="scrollToSection('contact-section')"
      />
      <button v-else @click="toggleDrawerVisible">
        <Icon name="material-symbols-light:menu-rounded" class="text-[32px]" />
      </button>
      <Drawer v-model:visible="drawerVisible" position="full">
        <div class="flex flex-col items-center justify-center gap-3">
          <BaseButton
            v-for="item in menuItems"
            :key="item.label"
            type="text"
            class="text-body-s uppercase"
            :label="item.label"
            @click="handleDrawerSection(item.scrollTo)"
          />
          <BaseButton
            type="text"
            :label="t('heroMenu.contact')"
            class="text-body-s uppercase"
            @click="handleDrawerSection('contact-section')"
          />
        </div>
      </Drawer>
    </div>
  </div>
</template>

<style scoped>
  .glass-background {
    background: rgba(255, 255, 255, 0.82);
    backdrop-filter: blur(5px);
  }
</style>
