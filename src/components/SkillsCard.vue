<template>
  <div
    class="w-10/12 glass p-4 rounded-3xl"
    :class="glassClass()"
  >
    <!-- Header -->
    <div class="flex justify-between font-semibold mb-2">
      <p>Minhas Skills</p>
      <p>Sempre aprendendo, sempre evoluindo</p>
    </div>

    <!-- Skills -->
    <div class="flex justify-between items-center font-semibold">
      <template v-for="(skill, index) in skills" :key="skill.name">
        <div class="flex flex-col items-center justify-center p-8 gap-2">
          <component :is="skill.icon" class="h-8 w-8" />
          <p class="text-sm">{{ skill.name }}</p>
        </div>

        <!-- Separador vertical -->
        <div
          v-if="index < skills.length - 1"
          class="h-12 w-px bg-white/20"
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

const { glassClass } = useTheme()

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