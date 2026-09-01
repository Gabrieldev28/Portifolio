<script setup lang="ts">
import BottomMenu from '@/components/BottomMenu.vue'
import { useTheme } from '@/composables/useTheme'

const { glassClass } = useTheme()
</script>

<template>
  <div class="w-full flex justify-center items-center min-h-screen">
    <div class="flex flex-col justify-center items-center max-w-360 gap-6">

      <!-- Aqui as views vão trocar -->
      <RouterView />

      <div class="flex flex-col gap-4">
        <BottomMenu />
        <p
          class="p-4 glass rounded-full italic font-extralight text-sm text-center"
          :class="glassClass()"
        >
          Designed & Engineered by Gabriel Augusto • 2026
        </p>
      </div>
    </div>
  </div>
</template>