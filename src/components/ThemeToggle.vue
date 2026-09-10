<template>
  <div
    class="w-18 h-10 lg:w-22 lg:h-12 2xl:w-28 2xl:h-16 max-h-16 glass p-1 flex rounded-full items-center justify-between cursor-pointer"
    :class="glassClass()"
    @click="toggleTheme"
  >
    <!-- Sol -->
    <span
      class="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 rounded-full transition-all duration-300"
      :class="theme === 'light' ? 'glass glass-light-toggle' : ''"
    >
      <SunIcon class="w-4 h-4" />
    </span>

    <!-- Lua -->
    <span
      class="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 rounded-full transition-all duration-300"
      :class="theme === 'dark' ? 'glass glass-dark-toggle' : ''"
    >
      <MoonIcon class="w-4 h-4" />
    </span>
  </div>
</template>
<script setup lang="ts">
import SunIcon from './icons/SunIcon.vue'
import MoonIcon from './icons/MoonIcon.vue'
import { useTheme } from '../composables/useTheme'

const { theme, toggleTheme, glassClass } = useTheme()
</script>