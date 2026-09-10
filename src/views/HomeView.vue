<template>
  <HeaderNav />

  <div class="w-10/12 lg:w-8/12 2xl:w-10/12  lg:my-4 glass rounded-2xl lg:rounded-3xl p-2 lg:p-4 flex flex-col gap-2" :class="glassClass()">
    <!-- Topo (disponível + localização) -->
    <div class="flex justify-between h-1 p-1 lg:h-8 font-regular landscape:font-extralight lg:font-medium">
      <span class="flex gap-1 items-center text-xs lg:tracking-wider">
        <DotIcon class="w-2 lg:w-4" />
        <p class="text-[10px] lg:text-sm 2xl:text-lg">{{ t('home.disponible') }}</p>
      </span>
      <span class="text-[10px] lg:text-sm 2xl:text-lg flex items-center gap-1 lg:tracking-wider">
        <LocalIcon class="w-4 lg:w-6" />
        <p>{{ t('home.local') }}</p>
      </span>
    </div>

    <!-- Conteúdo principal -->
    <div class="flex w-full justify-between items-center gap-4">
      <!-- Imagem lado esquerdo (só landscape) -->
      <ProfileImage class="portrait:hidden landscape:flex shrink-0" />

      <div class="flex-1 flex flex-col justify-center portrait:gap-2 landscape:gap-1 lg:gap-0 xl:gap-2">
        <div class="w-full flex items-center gap-3">
          <!-- Imagem no mobile vertical -->
          <ProfileImage class="portrait:flex landscape:hidden shrink-0" />

          <div class="flex flex-1 flex-col gap-1 2xl:gap-4">
            <span class="text-sm xl:text-xl 2xl:text-2xl font-light">{{ t('home.hello') }}</span>
            <img
              src="../assets/images/gabrielAugusto.svg"
              alt="gabriel augusto"
              class="w-full landscape:w-2/6 lg:w-2/4 2xl:w-3/4"
            />
            <div class="flex w-full text-sm lg:text-lg xl:text-2xl gap-1 lg:gap-4 italic font-extralight lg:font-normal">
              <span>{{ t('home.design') }}</span>
              <span>•</span>
              <span>{{ t('home.developer') }}</span>
            </div>
          </div>
        </div>

        <p class="w-full text-[10px] lg:text-base 2xl:text-xl font-extralight p-1 leading-3 lg:leading-5 2xl:leading-loose">
          {{ t('home.description') }}
        </p>
      </div>
    </div>
  </div>

  <SkillsCard />
  <ExpandCard class="portrait:flex-col landscape:hidden"/>
</template>

<script lang="ts" setup>
import ExpandCard from '@/components/ExpandCard.vue'
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