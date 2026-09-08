<template>
  <div class="flex flex-col w-2/6 glass p-4 rounded-4xl gap-2" :class="glassClass()">
    <h3 class="tracking-wider text-lg">{{ t('aboutMe.certification') }}</h3>

    <!-- Unicesumar -->
    <div class="flex gap-2">
      <img src="../assets/images/unicesumarLogo.png" alt="Unicesumar" class="w-10 h-10" />
      <div class="flex flex-col">
        <div class="flex gap-2 items-center">
          <span class="text-xl font-bold">Unicesumar</span>
          <span>•</span>
          <span class="font-extralight text-xs">2025 ~ 2028</span>
        </div>
        <span class="italic tracking-wider">{{ t('aboutMe.ads') }}</span>
      </div>
    </div>

    <!-- Figma PRO -->
    <div class="flex gap-2">
      <img src="../assets/images/figmaLogo.png" alt="Figma PRO" class="w-10 h-10" />
      <div>
        <div class="flex gap-2 items-center">
          <span class="text-xl font-bold">Figma PRO</span>
          <span>•</span>
          <span class="font-extralight text-xs">2025</span>
        </div>
        <span class="italic tracking-wider">{{ t('home.design') }}</span>
      </div>
    </div>

    <!-- FEUX -->
    <div class="flex gap-2">
      <img src="../assets/images/feuxLogo.png" alt="FEUX" class="w-10 h-10" />
      <div>
        <div class="flex gap-2 items-center">
          <span class="text-xl font-bold">FEUX</span>
          <span>•</span>
          <span class="font-extralight text-xs">2025</span>
        </div>
        <span class="italic tracking-wider">Design System</span>
      </div>
    </div>

    <!-- Impacta -->
    <div class="flex gap-2">
      <img src="../assets/images/impactaLogo.png" alt="Impacta" class="w-10 h-10" />
      <div class="flex flex-col gap-1">
        <div class="flex gap-2 items-center">
          <span class="text-xl font-bold">Impacta</span>
          <span>•</span>
          <span class="font-extralight text-xs">2022 ~ 2024</span>
        </div>
        <span class="italic tracking-wider">{{ t('aboutMe.fullstack') }}</span>
        <span class="italic tracking-wider">{{ t('aboutMe.db') }}</span>
        <span class="italic tracking-wider">{{ t('aboutMe.logic') }}</span>
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