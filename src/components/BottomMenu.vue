<script setup>
import { useRoute } from 'vue-router'
import HomeIcon from './icons/HomeIcon.vue'
import ProfileIcon from './icons/ProfileIcon.vue'
import ProjectsIcon from './icons/ProjectsIcon.vue'
import PhoneIcon from './icons/PhoneIcon.vue'

const route = useRoute()

const menuItems = [
  { name: 'home', label: 'Início', icon: HomeIcon, to: '/' },
  { name: 'profile', label: 'Sobre Mim', icon: ProfileIcon, to: '/profile' },
  { name: 'projects', label: 'Projetos', icon: ProjectsIcon, to: '/projects' },
  { name: 'contact', label: 'Contato', icon: PhoneIcon, to: '/contact' },
]
</script>

<template>
  <nav class="relative">
    <div class="py-1 px-1 flex glass glass-light rounded-full justify-between items-center gap-1">
      <RouterLink
        v-for="item in menuItems"
        :key="item.name"
        :to="item.to"
        class="flex items-center gap-2 transition-all duration-300"
        :class="[
          route.name === item.name
            ? 'button-active text-white'
            : 'text-gray-300 hover:text-white px-3 py-2'
        ]"
      >
        <component :is="item.icon" class="w-5 h-5" />
        
        <!-- Texto só aparece quando está ativo -->
        <span
          v-if="route.name === item.name"
          class="text-sm font-medium pr-1 whitespace-nowrap"
        >
          {{ item.label }}
        </span>
      </RouterLink>
    </div>
  </nav>
</template>