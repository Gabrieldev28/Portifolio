<template>
  <div
    class="w-28 glass p-1 flex rounded-full items-center justify-between cursor-pointer"
    :class="glassClass()"
    @click="toggleTheme"
  >
    <!-- Sol -->
    <span
      class="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300"
      :class="theme === 'light' ? 'glass glass-light-toggle' : ''"
    >
      <SunIcon class="w-4 h-4" />
    </span>

    <!-- Lua -->
    <span
      class="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300"
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