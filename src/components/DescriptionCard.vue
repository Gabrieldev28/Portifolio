<template>
  <div class="relative p-4 glass rounded-3xl" :class="glassClass()">
    <!-- Área scrollável com no máximo 5 linhas -->
    <div
      class="overflow-y-auto h-28.5
             mask-[linear-gradient(to_bottom,black_90%,transparent)]
             scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
    >
      <p class="tracking-wider font-extralight whitespace-pre-line leading-loose">
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