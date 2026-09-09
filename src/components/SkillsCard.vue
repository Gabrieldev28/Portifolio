<template>
  <div
    class="w-10/12 glass p-4 rounded-3xl"
    :class="glassClass()"
  >
    <!-- Header -->
    <div class="flex justify-between font-semibold mb-4 text-sm lg:text-base">
      <p>{{ t('home.skill') }}</p>
      <p class="text-right">{{ t('home.evolution') }}</p>
    </div>

    <!-- Skills -->
    <div
      class="grid grid-cols-4 landscape:flex landscape:justify-between landscape:items-center gap-y-6"
    >
      <template v-for="(skill, index) in skills" :key="skill.name">
        <div class="flex flex-col items-center justify-center gap-1.5">
          <component
            :is="skill.icon"
            class="h-5 w-5 landscape:h-7 landscape:w-7 lg:h-8 lg:w-8"
          />
          <p class="text-[11px] landscape:text-xs lg:text-sm font-medium">
            {{ skill.name }}
          </p>
        </div>

        <!-- Separador vertical (só no landscape) -->
        <div
          v-if="index < skills.length - 1"
          class="hidden landscape:block h-10 w-px bg-white/20"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import FigmaIcon from './icons/FigmaIcon.vue'
import VueIcon from './icons/VueIcon.vue'
import JsIcon from './icons/JsIcon.vue'
import TsIcon from './icons/TsIcon.vue'
import NodeIcon from './icons/NodeIcon.vue'
import NetIcon from './icons/NetIcon.vue'
import DbIcon from './icons/DbIcon.vue'
import MongoDbIcon from './icons/MongoDbIcon.vue'
import { useTheme } from '@/composables/useTheme'
import { useI18n } from 'vue-i18n'

const { glassClass } = useTheme()
const { t } = useI18n()

const skills = [
  { name: 'UI/UX', icon: FigmaIcon },
  { name: 'VueJS', icon: VueIcon },
  { name: 'Javascript', icon: JsIcon },
  { name: 'Typescript', icon: TsIcon },
  { name: 'NodeJS', icon: NodeIcon },
  { name: '.NET', icon: NetIcon },
  { name: 'SQL', icon: DbIcon },
  { name: 'MongoDB', icon: MongoDbIcon },
]
</script>