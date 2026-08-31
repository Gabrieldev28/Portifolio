<script setup>
import { useRoute } from 'vue-router'
import HomeIcon from './icons/HomeIcon.vue'
import ProfileIcon from './icons/ProfileIcon.vue'
import ProjectsIcon from './icons/ProjectsIcon.vue'
import PhoneIcon from './icons/PhoneIcon.vue'
import ThemeToggle from './ThemeToggle.vue'
import { useTheme } from '@/composables/useTheme'

const route = useRoute()
const { glassClass } = useTheme()

const menuItems = [
  { name: 'home', label: 'Início', icon: HomeIcon, to: '/' },
  { name: 'profile', label: 'Sobre Mim', icon: ProfileIcon, to: '/profile' },
  { name: 'projects', label: 'Projetos', icon: ProjectsIcon, to: '/projects' },
  { name: 'contact', label: 'Contato', icon: PhoneIcon, to: '/contact' },
]
</script>

<template>
  <div class="flex flex-col items-center gap-3">
    <!-- Menu de navegação -->
    <nav
      class="py-1 px-1 flex glass rounded-full justify-between items-center gap-1"
      :class="glassClass()"
    >
      <RouterLink
        v-for="item in menuItems"
        :key="item.name"
        :to="item.to"
        class="flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]"
        :class="route.name === item.name 
          ? 'button-active text-white' 
          : 'text-gray-300 hover:text-white'"
      >
        <component :is="item.icon" class="w-8 h-8 shrink-0" />

        <span
          class="text-lg font-medium whitespace-nowrap overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]"
          :class="route.name === item.name 
            ? 'max-w-40 opacity-100' 
            : 'max-w-0 opacity-0'"
        >
          {{ item.label }}
        </span>
      </RouterLink>
    </nav>

    <!-- Toggle de tema (aparece no mobile) -->
    <div class="block lg:hidden">
      <ThemeToggle />
    </div>
  </div>
</template>