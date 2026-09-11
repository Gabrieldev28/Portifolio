<template>
  <div class="flex justify-between w-10/12 lg:w-8/12 2xl:w-10/12 ">
    <!-- Toggle -->
    <ThemeToggle class="hidden lg:flex" />

    <!-- Path dinâmico -->
    <div
      class="w-full lg:w-5/12 glass h-8 lg:h-12 2xl:h-16 max-h-16 p-2 lg:p-1 flex gap-4 justify-center items-center rounded-full"
      :class="glassClass()">
      <LockIcon class="w-3 lg:w-4" />
      <span class="font-semibold text-xs lg:text-sm">
        GabrielOS.dev{{ currentPath }}
      </span>
    </div>
    <div class="hidden lg:flex">
      <LanguageButton />
    </div>



    <div class="hidden lg:flex glass rounded-full px-3 gap-1 items-center lg:h-12 2xl:h-16 max-h-16"
      :class="glassClass()">
      <a href="https://www.linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer"
        class="p-2 rounded-full hover:scale-110 transition-transform duration-300">
        <LinkedinIcon class="w-4 2xl:w-6 icon-gradient" />
      </a>

      <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer"
        class="p-2 rounded-full hover:scale-110 transition-transform duration-300">
        <GithubIcon class="w-4 2xl:w-6 icon-gradient" />
      </a>

      <a href="https://www.behance.net/seu-usuario" target="_blank" rel="noopener noreferrer"
        class="p-2 rounded-full hover:scale-110 transition-transform duration-300">
        <BehanceIcon class="w-4 2xl:w-6 icon-gradient" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'
import BehanceIcon from './icons/BehanceIcon.vue'
import GithubIcon from './icons/GithubIcon.vue'
import LinkedinIcon from './icons/LinkedinIcon.vue'
import FlagIcon from './icons/FlagIcon.vue'
import DownIcon from './icons/DownIcon.vue'
import LockIcon from './icons/LockIcon.vue'
import { useTheme } from '../composables/useTheme'
import LanguageButton from './LanguageButton.vue'

const { glassClass } = useTheme()
const route = useRoute()

// Exibe /profile, /projects, /exit etc. (vazio na home)
const currentPath = computed(() => {
  return route.path === '/' ? '' : route.path
})
</script>