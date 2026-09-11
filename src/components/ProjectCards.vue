<template>
  <div class="flex portrait:flex-col landscape:flex-row w-10/12 lg:w-8/12 2xl:w-10/12 justify-between gap-1 lg:gap-4 2xl:gap-8">
    <div
      v-for="project in projects"
      :key="project.name"
      class="flex flex-col landscape:w-1/3 p-2 lg:p-4 2xl:p-6 glass rounded-2xl lg:rounded-4xl gap-1 lg:gap-2 2xl:gap-4 hover-project justify-center transition ease-in"
      :class="glassClass()"
      @click="openProject(project)" data-aos="fade-right"
    >
      <div class="flex items-center gap-2 lg:gap-4 2xl:gap-8">
        <component class="w-10 h-10 lg:w-14 lg:h-14 2xl:w-20 2xl:h-20" :is="project.logo" :class="project.logoClass" />
        <h5 class="text-base lg:text-3xl font-project font-light tracking-wider">
          {{ project.name }}
        </h5>
      </div>

      <p class="font-extralight tracking-wider text-[10px] lg:text-base 2xl:text-lg">
        {{ t(project.description) }}
      </p>

      <div class="flex gap-2 lg:gap-4 items-center">
        <component :is="project.icon" class="w-4 lg:w-10" />
        <span class="font-light tracking-wider text-xs lg:text-sm 2xl:text-base">
          {{ project.role }}
        </span>
      </div>
    </div>
  </div>

  <!-- Modal do projeto Nitro -->
  <NitroModal v-model:open="showNitroModal" />
  <LumeaModal v-model:open="showLumeaModal" />

</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import AskIcon from '@/components/icons/AskIcon.vue'
import CubeIcon from '@/components/icons/CubeIcon.vue'
import LumeaLogo from '@/components/icons/LumeaLogo.vue'
import NitroLogo from '@/components/icons/NitroLogo.vue'
import PencilIcon from '@/components/icons/PencilIcon.vue'
import UnicesumarLogo from '@/components/icons/UnicesumarLogo.vue'

import NitroModal from './NitroModal.vue'
import LumeaModal from './LumeaModal.vue'

import { useTheme } from '@/composables/useTheme'

const { t } = useI18n()
const { glassClass } = useTheme()

const showNitroModal = ref(false)
const showLumeaModal = ref(false)

const projects = [
  {
    name: 'Nitro',
    description: 'projects.nitroDescription',
    logo: NitroLogo,
    icon: PencilIcon,
    role: 'UI/UX e Flutter',
  },
  {
    name: 'Lumea',
    description: 'projects.lumeaDescription',
    logo: LumeaLogo,
    icon: CubeIcon,
    role: 'Product Design',
  },
  {
    name: 'UniLevel',
    description: 'projects.uniLevelDescription',
    logo: UnicesumarLogo,
    logoClass: 'w-10 h-10 lg:w-16 lg:h-16',
    icon: AskIcon,
    role: 'UX Research',
  },
]

function openProject(project: { name: string }) {
  if (project.name === 'Nitro') {
    showNitroModal.value = true
  } else if (project.name === 'Lumea') {
    showLumeaModal.value = true
  }
}
</script>


<style>
.hover-project:hover {
  background: linear-gradient(
    to bottom,
    rgba(125, 180, 233, 0.4),
    rgba(129, 188, 243, 0.5),
    rgba(67, 135, 199, 0.3)
  );
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  box-shadow: 12px 12px 30px rgba(49, 163, 230, 0.1);
  cursor: pointer;
}
</style>