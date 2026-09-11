<template>
  <div class="relative shrink-0 h-10" ref="dropdownRef">

    <!-- Botão -->
    <button class="flex items-center gap-2 glass h-10 lg:h-12 2xl:h-16 px-5 rounded-full cursor-pointer transition-all"
      :class="glassClass()" @click.stop="isOpen = !isOpen">
      <img :src="currentLanguage.flag" :alt="currentLanguage.code" class="w-6 h-5 object-cover rounded-sm" />

      <DownIcon class="w-4 transition-transform duration-200" :class="iconRotation" />
    </button>

    <!-- Dropdown -->
    <div v-show="isOpen" class="absolute right-0 z-[9999]
         glass rounded-3xl p-1 min-w-12
         flex flex-col gap-1 shadow-xl" :class="[glassClass(), dropdownPosition]">
      <button v-for="lang in languages" :key="lang.code" class="flex items-center self-center justify-center
               w-10 h-10 rounded-full transition-all
               hover:bg-white/10" :class="{ 'bg-white/15': lang.code === locale }" @click="selectLanguage(lang.code)">
        <img :src="lang.flag" :alt="lang.code" class="w-6 h-5 object-cover rounded-sm" />
      </button>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

import DownIcon from './icons/DownIcon.vue'
import { useTheme } from '../composables/useTheme'

import BrazilFlag from '../assets/flags/br.svg'
import USFlag from '../assets/flags/us.svg'
import SpainFlag from '../assets/flags/es.svg'
import FranceFlag from '../assets/flags/fr.svg'
import GermanyFlag from '../assets/flags/de.svg'
import RussiaFlag from '../assets/flags/ru.svg'

const { glassClass } = useTheme()
const { locale } = useI18n()

const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)
const isMobile = ref(false)

const languages = [
  { code: 'pt', flag: BrazilFlag },
  { code: 'en', flag: USFlag },
  { code: 'es', flag: SpainFlag },
  { code: 'fr', flag: FranceFlag },
  { code: 'de', flag: GermanyFlag },
  { code: 'ru', flag: RussiaFlag },
]

const currentLanguage = computed(() => {
  return languages.find((lang) => lang.code === locale.value) || languages[0]
})

// Posição do dropdown
const dropdownPosition = computed(() => {
  return isMobile.value
    ? 'bottom-full mb-2'   // abre para cima no mobile
    : 'top-full mt-2'      // abre para baixo no desktop
})

// Rotação do ícone
const iconRotation = computed(() => {
  if (isMobile.value) {
    // No mobile a seta aponta para cima quando fechado
    return isOpen.value ? '' : 'rotate-180'
  }
  // No desktop a seta aponta para baixo quando fechado
  return isOpen.value ? 'rotate-180' : ''
})

function selectLanguage(code: string) {
  locale.value = code
  localStorage.setItem('lang', code)
  isOpen.value = false
}

function handleClickOutside(event: MouseEvent) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

function checkScreenSize() {
  isMobile.value = window.innerWidth < 1024 // breakpoint lg do Tailwind
}

onMounted(() => {
  const saved = localStorage.getItem('lang')
  if (saved && languages.some((lang) => lang.code === saved)) {
    locale.value = saved
  }

  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
  document.removeEventListener('click', handleClickOutside)
})
</script>