<template>
  <div class="flex flex-col w-full justify-between landscape:w-2/6 glass p-2 lg:p-4 rounded-2xl lg:rounded-4xl lg:gap-2" :class="glassClass()">
    <h3 class="tracking-wider text-lg">{{ t('aboutMe.certification') }}</h3>

    <!-- Unicesumar -->
    <div class="flex gap-2">
      <img src="../assets/images/unicesumarLogo.png" alt="Unicesumar" class="w-5 lg:w-10 h-5 lg:h-10" />
      <div class="flex flex-col gap-0">
        <div class="flex gap-2 items-center">
          <span class="text-xs lg:text-base 2xl:text-xl font-bold">Unicesumar</span>
          <span>•</span>
          <span class="font-extralight text-[8px] lg:text-xs">2025 ~ 2028</span>
        </div>
        <span class="italic tracking-wider text-[8px] lg:text-xs 2xl:text-base">{{ t('aboutMe.ads') }}</span>
      </div>
    </div>

    <!-- Figma PRO -->
    <div class="flex gap-2">
      <img src="../assets/images/figmaLogo.png" alt="Figma PRO" class="w-5 lg:w-10 h-5 lg:h-10" />
      <div class="flex flex-col gap-0">
        <div class="flex gap-2 items-center">
          <span class="text-xs lg:text-base 2xl:text-xl font-bold">Figma PRO</span>
          <span>•</span>
          <span class="font-extralight text-[8px] lg:text-xs">2025</span>
        </div>
        <span class="italic tracking-wider text-[8px] lg:text-xs 2xl:text-base">{{ t('home.design') }}</span>
      </div>
    </div>

    <!-- FEUX -->
    <div class="flex gap-2">
      <img src="../assets/images/feuxLogo.png" alt="FEUX" class="w-5 lg:w-10 h-5 lg:h-10" />
      <div class="flex flex-col gap-0">
        <div class="flex gap-2 items-center">
          <span class="text-xs lg:text-base 2xl:text-xl font-bold">FEUX</span>
          <span>•</span>
          <span class="font-extralight text-[8px] lg:text-xs">2025</span>
        </div>
        <span class="italic tracking-wider text-[8px] lg:text-xs 2xl:text-base">Design System</span>
      </div>
    </div>

    <!-- Impacta -->
    <div class="flex gap-2">
      <img src="../assets/images/impactaLogo.png" alt="Impacta" class="w-5 lg:w-10 h-5 lg:h-10" />
      <div class="flex flex-col gap-0">
        <div class="flex gap-2 items-center">
          <span class="text-xs lg:text-base 2xl:text-xl font-bold">Impacta</span>
          <span>•</span>
          <span class="font-extralight text-[8px] lg:text-xs">2022 ~ 2024</span>
        </div>
        <span class="italic tracking-wider text-[8px] lg:text-xs 2xl:text-base">{{ t('aboutMe.fullstack') }}</span>
        <span class="italic tracking-wider text-[8px] lg:text-xs 2xl:text-base">{{ t('aboutMe.db') }}</span>
        <span class="italic tracking-wider text-[8px] lg:text-xs 2xl:text-base">{{ t('aboutMe.logic') }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTheme } from '@/composables/useTheme'
import { useI18n } from 'vue-i18n'

const { glassClass } = useTheme()
const { t } = useI18n()
</script>