<script setup lang="ts">

import BottomMenu from './components/BottomMenu.vue';
import HeaderNav from './components/HeaderNav.vue';
import DotIcon from './components/icons/DotIcon.vue';
import LocalIcon from './components/icons/LocalIcon.vue';
import ProfileImage from './components/ProfileImage.vue';
import SkillsCard from './components/SkillsCard.vue';

</script>

<template>
  <div class="w-full flex justify-center items-center min-h-screen">
    <div class="flex flex-col justify-center items-center max-w-360  gap-6">
      <HeaderNav />
      <div class="w-10/12 glass glass-light rounded-4xl p-4 flex flex-col gap-2">
        <div class="flex justify-between h-8 font-medium">
          <span class="flex gap-2 items-center">
            <DotIcon />
            <p class="text-lg lg:text-sm">Disponível para novos projetos</p>
          </span>
          <span class="flex items-center gap-2">
            <LocalIcon class="w-4"/>
            <p>Santo andré - SP</p>
          </span>
        </div>
        <div class="flex justify-between items-center">
          <ProfileImage />
          <div class="w-5/8 flex flex-col justify-center gap-4">
            <span class="text-3xl font-light">Olá, eu sou</span>
            <img src="../src/assets/images/gabrielAugusto.svg" alt="gabriel augusto" class="w-3/4">
            <div class="flex text-2xl gap-4 italic font-normal">
              <span>Design UI/UX</span>
              <span>•</span>
              <span>Desenvolvedor</span>
            </div>
            <p class="text-xl font-extralight">Transformo ideias em experiências digitais intuitivas, funcionais e
              memoráveis, conectando design, produto e desenvolvimento para criar soluções que fazem sentido para
              usuários e negócios. Sou a ponte entre a visão do projeto e sua execução técnica.</p>
          </div>
        </div>
      </div>
      <SkillsCard />
      <div class="flex flex-col gap-4">
        <BottomMenu />
        <p class="p-4 glass glass-light rounded-full italic font-extralight text-sm text-center">Designed & Engineered by Gabriel
          Augusto • 2026</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
