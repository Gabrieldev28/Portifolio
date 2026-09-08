<template>
  <div class="flex justify-between w-10/12">
    <!-- Toggle -->
    <ThemeToggle class="hidden lg:flex" />

    <!-- Path dinâmico -->
    <div
      class="w-full lg:w-5/12 glass max-h-16 p-2 lg:p-1 flex gap-4 justify-center items-center rounded-full"
      :class="glassClass()"
    >
      <LockIcon class="w-6 lg:w-4" />
      <span class="font-semibold text-sm">
        GabrielOS.io{{ currentPath }}
      </span>
    </div>
    <div class="hidden lg:flex">
        <LanguageButton />
    </div>



    <div
      class="hidden lg:flex glass rounded-full px-4 gap-2 items-center max-h-16"
      :class="glassClass()"
    >
      <LinkedinIcon class="w-6" />
      <GithubIcon class="w-6" />
      <BehanceIcon class="w-6" />
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