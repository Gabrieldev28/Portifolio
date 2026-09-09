<script setup lang="ts">
import BottomMenu from '@/components/BottomMenu.vue'
import { useTheme } from '@/composables/useTheme'
import ThemeToggle from './components/ThemeToggle.vue';
import LanguageButton from './components/LanguageButton.vue';

const { glassClass } = useTheme()
</script>

<template>
  <div class="w-full flex justify-center items-center min-h-screen">
    <div class="flex flex-col justify-center items-center max-w-360 w-full gap-6">

      <!-- Aqui as views vão trocar -->
      <RouterView />

      <div class="flex flex-col gap-4">
        <BottomMenu />
        <div class="flex">
          
          <div class="flex lg:hidden"><ThemeToggle /></div>
          

          <p class="p-4 glass rounded-full italic font-extralight text-sm text-center" :class="glassClass()">
            Designed & Engineered by Gabriel Augusto • 2026
          </p>
          <div class="flex lg:hidden"><LanguageButton /></div>
          
        </div>
      </div>
    </div>
  </div>
</template>