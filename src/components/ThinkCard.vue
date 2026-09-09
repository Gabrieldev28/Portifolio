<template>
  <div class="flex glass flex-col p-2 2xl:p-4 gap-0 2xl:gap-2 rounded-2xl lg:rounded-3xl" :class="glassClass()">
    <h3 class=" text-base lg:text-lg 2xl:text-2xl font-medium lg:font-bold">{{ t('aboutMe.process') }}</h3>

    <div class="flex justify-between gap-1 lg:gap-2 2xl:gap-4">
      <!-- Entender -->
      <div class="flex flex-col justify-start w-1/6 gap-0 2xl:gap-2 p-1">
        <SearchThinkIcon class="w-4 2xl:w-12" />
        <p class="font-bold text-xs lg:text-base 2xl:text-xl">{{ t('aboutMe.understand') }}</p>
        <p class="text-[8px] lg:text-sm 2xl:text-xl">{{ t('aboutMe.understandP') }}</p>
      </div>

      <!-- Estruturar -->
      <div class="flex flex-col justify-start w-1/6 gap-0 2xl:gap-2 p-1">
        <GitThinkIcon class="w-4 2xl:w-12" />
        <p class="font-bold text-xs lg:text-base 2xl:text-xl">{{ t('aboutMe.structure') }}</p>
        <p class="text-[8px] lg:text-sm 2xl:text-xl">{{ t('aboutMe.structureP') }}</p>
      </div>

      <!-- Simplificar -->
      <div class="flex flex-col justify-start w-1/6 gap-0 2xl:gap-2 p-1">
        <LayersThinkIcon class="w-4 2xl:w-12" />
        <p class="font-bold text-xs lg:text-base 2xl:text-xl">{{ t('aboutMe.simple') }}</p>
        <p class="text-[8px] lg:text-sm 2xl:text-xl">{{ t('aboutMe.simpleP') }}</p>
      </div>

      <!-- Projetar -->
      <div class="flex flex-col justify-start w-1/6 gap-0 2xl:gap-2 p-1">
        <PenThinkIcon class="w-4 2xl:w-12" />
        <p class="font-bold text-xs lg:text-base 2xl:text-xl">{{ t('aboutMe.project') }}</p>
        <p class="text-[8px] lg:text-sm 2xl:text-xl">{{ t('aboutMe.projectP') }}</p>
      </div>

      <!-- Construir -->
      <div class="flex flex-col justify-start w-1/6 gap-0 2xl:gap-2 p-1">
        <CodeThinkIcon class="w-4 2xl:w-12" />
        <p class="font-bold text-xs lg:text-base 2xl:text-xl">{{ t('aboutMe.build') }}</p>
        <p class="text-[8px] lg:text-sm 2xl:text-xl">{{ t('aboutMe.buildP') }}</p>
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