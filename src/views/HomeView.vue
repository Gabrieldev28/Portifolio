<template>
  <HeaderNav />

  <div class="w-10/12 glass rounded-2xl p-4 flex flex-col gap-2" :class="glassClass()">
    <!-- Topo (disponível + localização) -->
    <div class="flex justify-between h-8 font-regular landscape:font-medium">
      <span class="flex gap-1 items-center text-xs">
        <DotIcon />
        <p class="text-[10px] lg:text-sm">{{ t('home.disponible') }}</p>
      </span>
      <span class="text-[10px] flex items-center gap-1">
        <LocalIcon class="w-4" />
        <p>{{ t('home.local') }}</p>
      </span>
    </div>

    <!-- Conteúdo principal -->
    <div class="flex w-full justify-between items-center gap-4">
      <!-- Imagem lado esquerdo (só landscape) -->
      <ProfileImage class="portrait:hidden landscape:flex shrink-0" />

      <div class="flex-1 flex flex-col justify-center gap-4">
        <div class="w-full flex items-center gap-3">
          <!-- Imagem no mobile vertical -->
          <ProfileImage class="portrait:flex landscape:hidden shrink-0" />

          <div class="flex flex-1 flex-col gap-1">
            <span class="text-sm font-light">{{ t('home.hello') }}</span>
            <img
              src="../assets/images/gabrielAugusto.svg"
              alt="gabriel augusto"
              class="w-full landscape:w-3/4"
            />
            <div class="flex w-full text-sm gap-1 italic font-normal">
              <span>{{ t('home.design') }}</span>
              <span>•</span>
              <span>{{ t('home.developer') }}</span>
            </div>
          </div>
        </div>

        <p class="w-full text-xs font-extralight p-1">
          {{ t('home.description') }}
        </p>
      </div>
    </div>
  </div>

  <SkillsCard />
</template>

<script lang="ts" setup>
import HeaderNav from '@/components/HeaderNav.vue'
import DotIcon from '@/components/icons/DotIcon.vue'
import LocalIcon from '@/components/icons/LocalIcon.vue'
import ProfileImage from '@/components/ProfileImage.vue'
import SkillsCard from '@/components/SkillsCard.vue'
import { useTheme } from '@/composables/useTheme'
import { useI18n } from 'vue-i18n'

const { glassClass } = useTheme()
const { t } = useI18n()
</script>