<template>
  <div
    class="flex glass flex-col p-4 lg:p-6 gap-1 2xl:gap-2 rounded-2xl lg:rounded-3xl"
    :class="glassClass()" data-aos="fade-right"
  >
    <h3 class="text-base lg:text-lg 2xl:text-2xl font-medium lg:font-bold">
      {{ t('aboutMe.process') }}
    </h3>

    <div class="grid grid-cols-5 gap-1 lg:gap-2 2xl:gap-3">
      <!-- Entender -->
      <div class="flex flex-col gap-0.5 min-w-0">
        <SearchThinkIcon class="w-4 2xl:w-10 shrink-0" />
        <p class="font-bold text-[10px] lg:text-sm 2xl:text-lg leading-none break-all">
          {{ t('aboutMe.understand') }}
        </p>
        <p class="text-[7px] lg:text-xs 2xl:text-base leading-tight opacity-80 break-words">
          {{ t('aboutMe.understandP') }}
        </p>
      </div>

      <!-- Estruturar -->
      <div class="flex flex-col gap-0.5 min-w-0">
        <GitThinkIcon class="w-4 2xl:w-10 shrink-0" />
        <p class="font-bold text-[10px] lg:text-sm 2xl:text-lg leading-none break-all">
          {{ t('aboutMe.structure') }}
        </p>
        <p class="text-[7px] lg:text-xs 2xl:text-base leading-tight opacity-80 break-words">
          {{ t('aboutMe.structureP') }}
        </p>
      </div>

      <!-- Simplificar -->
      <div class="flex flex-col gap-0.5 min-w-0">
        <LayersThinkIcon class="w-4 2xl:w-10 shrink-0" />
        <p class="font-bold text-[10px] lg:text-sm 2xl:text-lg leading-none break-all">
          {{ t('aboutMe.simple') }}
        </p>
        <p class="text-[7px] lg:text-xs 2xl:text-base leading-tight opacity-80 break-words">
          {{ t('aboutMe.simpleP') }}
        </p>
      </div>

      <!-- Projetar -->
      <div class="flex flex-col gap-0.5 min-w-0">
        <PenThinkIcon class="w-4 2xl:w-10 shrink-0" />
        <p class="font-bold text-[10px] lg:text-sm 2xl:text-lg leading-none break-all">
          {{ t('aboutMe.project') }}
        </p>
        <p class="text-[7px] lg:text-xs 2xl:text-base leading-tight opacity-80 break-words">
          {{ t('aboutMe.projectP') }}
        </p>
      </div>

      <!-- Construir -->
      <div class="flex flex-col gap-0.5 min-w-0">
        <CodeThinkIcon class="w-4 2xl:w-10 shrink-0" />
        <p class="font-bold text-[10px] lg:text-sm 2xl:text-lg leading-none break-all">
          {{ t('aboutMe.build') }}
        </p>
        <p class="text-[7px] lg:text-xs 2xl:text-base leading-tight opacity-80 break-words">
          {{ t('aboutMe.buildP') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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