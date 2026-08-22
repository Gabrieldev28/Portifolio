<script setup lang="ts">

import BottomMenu from './components/BottomMenu.vue';
import BehanceIcon from './components/icons/BehanceIcon.vue';
import DotIcon from './components/icons/DotIcon.vue';
import DownIcon from './components/icons/DownIcon.vue';
import FlagIcon from './components/icons/FlagIcon.vue';
import GithubIcon from './components/icons/GithubIcon.vue';
import LinkedinIcon from './components/icons/LinkedinIcon.vue';
import LocalIcon from './components/icons/LocalIcon.vue';
import LockIcon from './components/icons/LockIcon.vue';
import MoonIcon from './components/icons/MoonIcon.vue';
import SunIcon from './components/icons/SunIcon.vue';
import ProfileImage from './components/ProfileImage.vue';

</script>

<template>
  <div class="w-full flex justify-center items-center ">
    <div class="flex flex-col justify-center items-center max-w-360 lg:w-8/12 gap-6">
      <div class="flex justify-between w-10/12">
        <div class="w-40 glass glass-light p-1 flex gap-2 rounded-full items-center">
          <span class="flex items-center glass glass-light-toggle px-6 py-4"><SunIcon class="w-6"/></span>
          <span class="px-4"><MoonIcon class="w-6"/></span>
        </div>

        <div class="w-8/12 lg:w-5/12 glass glass-light p-2 lg:p-1 flex gap-4 justify-center items-center rounded-4xl">
          <LockIcon class="w-6 lg:w-4"/>
          <span class="font-semibold text-base lg:text-sm">GabrielOS.io</span>
        </div>
        <div class="flex glass glass-light px-4 rounded-4xl gap-2 items-center">
          <FlagIcon class="w-6"/>
          <DownIcon class="w-6" />
        </div>
        <div class="flex glass glass-light rounded-4xl px-4 gap-2 items-center">
          <LinkedinIcon class="w-8" />
          <GithubIcon class="w-8"/>
          <BehanceIcon  class="w-8"/>
        </div>
      </div>
      <div class="w-10/12 glass glass-light rounded-4xl p-4 flex flex-col">
        <div class="flex justify-between h-8">
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
          <div class="w-5/8 flex flex-col justify-center gap-2">
            <span class="text-3xl lg:text-xl font-light">Olá, eu sou</span>
            <h3 class="text-5xl lg:text-3xl font-brand tracking-[-2px] w-full">Gabriel Augusto</h3>
            <div class="flex text-2xl lg:text-lg gap-4 italic font-normal">
              <span>Design UI/UX</span>
              <span>•</span>
              <span>Desenvolvedor</span>
            </div>
            <p class="text-xl lg:text-sm font-extralight">Transformo ideias em experiências digitais intuitivas, funcionais e
              memoráveis, conectando design, produto e desenvolvimento para criar soluções que fazem sentido para
              usuários e negócios. Sou a ponte entre a visão do projeto e sua execução técnica.</p>
          </div>
        </div>
      </div>
      <div>
        <BottomMenu />
        <p class="p-4 glass glass-light rounded-full italic font-extralight text-sm">Designed & Engineered by Gabriel
          Augusto • 2026</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
