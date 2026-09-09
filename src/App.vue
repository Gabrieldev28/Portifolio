<script setup lang="ts">
import BottomMenu from '@/components/BottomMenu.vue'
import { useTheme } from '@/composables/useTheme'
import ThemeToggle from './components/ThemeToggle.vue';
import LanguageMobileButton from './components/LanguageMobileButton.vue';

const { glassClass } = useTheme()
</script>

<template>
  <div class="w-full flex justify-center items-center min-h-screen">
    <div class="flex flex-col justify-center items-center max-w-360 w-full gap-3 2xl:gap-6">

      <!-- Aqui as views vão trocar -->
      <RouterView />

      <div class="flex flex-col gap-2 xl:gap-2 2xl:gap-4">
        <BottomMenu />
        <div class="flex w-full items-center justify-center">
          
          <div class="flex lg:hidden"><ThemeToggle /></div>
          

          <p class="p-4 glass rounded-full italic font-extralight text-[10px] text-center" :class="glassClass()">
            Designed & Engineered by Gabriel • 2026
          </p>
          <div class="flex lg:hidden"><LanguageMobileButton /></div>
          
        </div>
      </div>
    </div>
  </div>
</template>