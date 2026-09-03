<template>
  <div class="flex w-10/12 justify-between gap-8">
    <div
      v-for="project in projects"
      :key="project.name"
      class="flex flex-col w-1/3 p-6 glass rounded-4xl gap-4 hover-project transition ease-in"
      :class="glassClass()"
      @click="openProject(project)"
    >
      <div class="flex items-center gap-8">
        <component :is="project.logo" :class="project.logoClass" />
        <h5 class="text-3xl font-project font-light tracking-wider">
          {{ project.name }}
        </h5>
      </div>

      <p class="font-extralight tracking-wider text-lg">
        {{ project.description }}
      </p>

      <div class="flex gap-4 items-center">
        <component :is="project.icon" />
        <span class="font-light tracking-wider text-base">
          {{ project.role }}
        </span>
      </div>
    </div>
  </div>

  <!-- Modal do projeto Nitro -->
  <NitroModal v-model:open="showNitroModal" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AskIcon from '@/components/icons/AskIcon.vue'
import CubeIcon from '@/components/icons/CubeIcon.vue'
import LumeaLogo from '@/components/icons/LumeaLogo.vue'
import NitroLogo from '@/components/icons/NitroLogo.vue'
import PencilIcon from '@/components/icons/PencilIcon.vue'
import UnicesumarLogo from '@/components/icons/UnicesumarLogo.vue'
import NitroModal from './NitroModal.vue' // ajuste o caminho se necessário
import { useTheme } from '@/composables/useTheme'

const { glassClass } = useTheme()

const showNitroModal = ref(false)

const projects = [
  {
    name: 'Nitro',
    description: 'Plataforma social automotiva com foco em comunidade, perfis de veículos e engajamento.',
    logo: NitroLogo,
    icon: PencilIcon,
    role: 'UI/UX e Flutter',
  },
  {
    name: 'Lumea',
    description: 'Sistema para simplificar a gestão financeira de casais por meio de indicadores de saúde financeira.',
    logo: LumeaLogo,
    icon: CubeIcon,
    role: 'Product Design',
  },
  {
    name: 'UniLevel',
    description: 'Gamificação para educação com progressão, níveis e retenção de alunos.',
    logo: UnicesumarLogo,
    logoClass: 'w-16 h-16',
    icon: AskIcon,
    role: 'UX Research',
  },
]

function openProject(project: { name: string }) {
  if (project.name === 'Nitro') {
    showNitroModal.value = true
  }
  // Depois você pode adicionar os outros projetos aqui
  // else if (project.name === 'Lumea') { ... }
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