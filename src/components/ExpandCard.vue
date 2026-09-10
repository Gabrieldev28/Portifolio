<template>
  <div 
    class="w-10/12 text-center py-6 px-4 rounded-2xl glass"
    :class="glassClass()"
  >
    <h4 class="font-bold text-lg">
      {{ t('home.expand') }}
    </h4>
    <p class="text-[10px] opacity-80 mt-1">
      {{ t('home.expandP') }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
const { glassClass } = useTheme()
import { useI18n } from 'vue-i18n'
const { t } = useI18n()


</script>