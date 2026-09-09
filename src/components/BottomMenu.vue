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
        class="flex items-center gap-1 px-2 py-1 rounded-full transition-all duration-400 ease-in-out"
        :class="route.name === item.name 
          ? 'button-active text-white' 
          : 'text-gray-300 hover:text-white'"
      >
        <component :is="item.icon" class="w-6 h-6 shrink-0" />

        <span
          class="text-base font-medium whitespace-nowrap overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]"
          :class="route.name === item.name 
            ? 'max-w-40 opacity-100' 
            : 'max-w-0 opacity-0'"
        >
          {{ t(item.label) }}
        </span>
      </RouterLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import HomeIcon from './icons/HomeIcon.vue'
import ProfileIcon from './icons/ProfileIcon.vue'
import ProjectsIcon from './icons/ProjectsIcon.vue'
import PhoneIcon from './icons/PhoneIcon.vue'
import ThemeToggle from './ThemeToggle.vue'
import { useTheme } from '@/composables/useTheme'

const route = useRoute()
const { t } = useI18n()
const { glassClass } = useTheme()

const menuItems = [
  { name: 'home', label: 'button.home', icon: HomeIcon, to: '/' },
  { name: 'profile', label: 'button.about', icon: ProfileIcon, to: '/profile' },
  { name: 'projects', label: 'button.projects', icon: ProjectsIcon, to: '/projects' },
  { name: 'exit', label: 'button.contact', icon: PhoneIcon, to: '/exit' },
]
</script>