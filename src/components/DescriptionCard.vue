<template>
  <div class="relative p-2 lg:p-4 glass rounded-xl lg:rounded-3xl" :class="glassClass()" data-aos="fade-right">
    <!-- Área scrollável com no máximo 5 linhas -->
    <div
      class="overflow-y-auto portrait:h-16 landscape:h-16 lg:h-20 2xl:h-28.5
             mask-[linear-gradient(to_bottom,black_90%,transparent)]
             scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
    >
      <p class="text-xs lg:text-sm 2xl:text-lg tracking-wider font-extralight whitespace-pre-line  lg:leading-loose">
        {{ t('aboutMe.description') }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTheme } from '@/composables/useTheme'
import { useI18n } from 'vue-i18n'

const { glassClass } = useTheme()
const { t } = useI18n()
</script>