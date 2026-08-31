<template>
  <div class="flex justify-between w-10/12">
    <!-- Toggle componentizado -->
    <ThemeToggle />

    <div
      class="w-8/12 lg:w-5/12 glass p-2 lg:p-1 flex gap-4 justify-center items-center rounded-full"
      :class="glassClass()"
    >
      <LockIcon class="w-6 lg:w-4" />
      <span class="font-semibold text-sm">GabrielOS.io</span>
    </div>

    <div
      class="flex glass px-6 rounded-full gap-2 items-center"
      :class="glassClass()"
    >
      <FlagIcon class="w-6" />
      <DownIcon class="w-6" />
    </div>

    <div
      class="flex glass rounded-full px-4 gap-2 items-center"
      :class="glassClass()"
    >
      <LinkedinIcon class="w-6" />
      <GithubIcon class="w-6" />
      <BehanceIcon class="w-6" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue'
import BehanceIcon from './icons/BehanceIcon.vue'
import GithubIcon from './icons/GithubIcon.vue'
import LinkedinIcon from './icons/LinkedinIcon.vue'
import FlagIcon from './icons/FlagIcon.vue'
import DownIcon from './icons/DownIcon.vue'
import LockIcon from './icons/LockIcon.vue'
import { useTheme } from '../composables/useTheme'

const { glassClass } = useTheme()
</script>