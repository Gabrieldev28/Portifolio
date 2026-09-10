<template>
  <div class="relative shrink-0" ref="dropdownRef">
    <!-- Botão -->
    <button
      class="flex items-center gap-2 glass h-10 px-4 rounded-full cursor-pointer transition-all"
      :class="glassClass()"
      @click.stop="isOpen = !isOpen"
    >
      <img
        :src="currentLanguage.flag"
        :alt="currentLanguage.code"
        class="w-4 h-3 object-cover rounded-sm"
      />
      <DownIcon
        class="w-3.5 transition-transform duration-200"
        :class="isOpen ? '' : 'rotate-180'"
      />
    </button>

    <!-- Dropdown (forçado para absolute + abre para cima) -->
    <div
      v-show="isOpen"
      class="!absolute right-0 bottom-full mb-2 z-50
             glass rounded-2xl p-1.5 flex flex-col gap-1 shadow-xl"
      :class="glassClass()"
      style="position: absolute;"
    >
      <button
        v-for="lang in languages"
        :key="lang.code"
        class="flex items-center justify-center w-8 h-8 rounded-full transition-all hover:bg-white/10"
        :class="{ 'bg-white/15': lang.code === locale }"
        @click="selectLanguage(lang.code)"
      >
        <img
          :src="lang.flag"
          :alt="lang.code"
          class="w-4 h-3 object-cover rounded-sm"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import DownIcon from './icons/DownIcon.vue'
import { useTheme } from '@/composables/useTheme'

import BrazilFlag from '@/assets/flags/br.svg'
import USFlag from '@/assets/flags/us.svg'
import SpainFlag from '@/assets/flags/es.svg'
import FranceFlag from '@/assets/flags/fr.svg'
import GermanyFlag from '@/assets/flags/de.svg'
import RussiaFlag from '@/assets/flags/ru.svg'

const { glassClass } = useTheme()
const { locale } = useI18n()

const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

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

onMounted(() => {
  const saved = localStorage.getItem('lang')
  if (saved && languages.some((lang) => lang.code === saved)) {
    locale.value = saved
  }
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>