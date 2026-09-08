<template>
  <div class="flex glass flex-col p-4 gap-2 rounded-3xl" :class="glassClass()">
    <h3 class="text-lg font-bold">{{ t('aboutMe.process') }}</h3>

    <div class="flex justify-between gap-4">
      <!-- Entender -->
      <div class="flex flex-col w-1/5 gap-2">
        <SearchThinkIcon />
        <p class="font-bold text-xl">{{ t('aboutMe.understand') }}</p>
        <p>{{ t('aboutMe.understandP') }}</p>
      </div>

      <!-- Estruturar -->
      <div class="flex flex-col w-1/5 gap-2">
        <GitThinkIcon />
        <p class="font-bold text-xl">{{ t('aboutMe.structure') }}</p>
        <p>{{ t('aboutMe.structureP') }}</p>
      </div>

      <!-- Simplificar -->
      <div class="flex flex-col w-1/5 gap-2">
        <LayersThinkIcon />
        <p class="font-bold text-xl">{{ t('aboutMe.simple') }}</p>
        <p>{{ t('aboutMe.simpleP') }}</p>
      </div>

      <!-- Projetar -->
      <div class="flex flex-col w-1/5 gap-2">
        <PenThinkIcon />
        <p class="font-bold text-xl">{{ t('aboutMe.project') }}</p>
        <p>{{ t('aboutMe.projectP') }}</p>
      </div>

      <!-- Construir -->
      <div class="flex flex-col w-1/5 gap-2">
        <CodeThinkIcon />
        <p class="font-bold text-xl">{{ t('aboutMe.build') }}</p>
        <p>{{ t('aboutMe.buildP') }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTheme } from '@/composables/useTheme'
import { useI18n } from 'vue-i18n'
import CodeThinkIcon from '@/components/icons/CodeThinkIcon.vue'
import GitThinkIcon from '@/components/icons/GitThinkIcon.vue'
import LayersThinkIcon from '@/components/icons/LayersThinkIcon.vue'
import PenThinkIcon from '@/components/icons/PenThinkIcon.vue'
import SearchThinkIcon from '@/components/icons/SearchThinkIcon.vue'

const { glassClass } = useTheme()
const { t } = useI18n()
</script>