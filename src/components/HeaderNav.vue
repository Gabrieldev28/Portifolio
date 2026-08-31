<template>
    <div class="flex justify-between w-10/12">
        <div class="w-28 glass glass-light p-1 flex rounded-full items-center justify-between">
          <span class="flex items-center glass glass-light-toggle px-5 py-3"><SunIcon class="w-4"/></span>
          <span class="px-3"><MoonIcon class="w-4"/></span>
        </div>

        <div class="w-8/12 lg:w-5/12 glass glass-light p-2 lg:p-1 flex gap-4 justify-center items-center rounded-full">
          <LockIcon class="w-6 lg:w-4"/>
          <span class="font-semibold text-sm lg:text-sm">GabrielOS.io</span>
        </div>
        <div class="flex glass glass-light px-6 rounded-full gap-2 items-center">
          <FlagIcon class="w-6"/>
          <DownIcon class="w-6" />
        </div>
        <div class="flex glass glass-light rounded-full px-4 gap-2 items-center">
          <LinkedinIcon class="w-6" />
          <GithubIcon class="w-6"/>
          <BehanceIcon  class="w-6"/>
        </div>
      </div>
</template>

<script setup lang="ts">
import BehanceIcon from './icons/BehanceIcon.vue';
import GithubIcon from './icons/GithubIcon.vue';
import LinkedinIcon from './icons/LinkedinIcon.vue';
import FlagIcon from './icons/FlagIcon.vue';
import DownIcon from './icons/DownIcon.vue';
import SunIcon from './icons/SunIcon.vue';
import MoonIcon from './icons/MoonIcon.vue';
import LockIcon from './icons/LockIcon.vue';

</script>