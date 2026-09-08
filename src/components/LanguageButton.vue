<template>
  <div class="relative shrink-0 h-10" ref="dropdownRef">
    <!-- Botão -->
    <button
      class="flex items-center gap-2 glass h-16 px-5 rounded-full cursor-pointer transition-all"
      :class="glassClass()"
      @click.stop="isOpen = !isOpen"
    >
      <span class="text-lg leading-none">{{ currentLanguage.flag }}</span>
      <DownIcon
        class="w-4 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
      />
    </button>

    <!-- Dropdown -->
    <div
      v-show="isOpen"
      class="absolute top-full right-0 -mt-2 z-50
             glass rounded-3xl p-1.5 min-w-13 flex flex-col gap-1 shadow-xl"
      :class="glassClass()"
    >
      <button
        v-for="lang in languages"
        :key="lang.code"
        class="flex items-center self-center justify-center w-10 h-10 rounded-full transition-all hover:bg-white/10"
        :class="{ 'bg-white/15': lang.code === currentLang }"
        @click="selectLanguage(lang.code)"
      >
        <span class="text-xl leading-none">{{ lang.flag }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import DownIcon from './icons/DownIcon.vue'
import { useTheme } from '../composables/useTheme'
const { glassClass } = useTheme()
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const isOpen = ref(false)
const currentLang = ref('pt')
const dropdownRef = ref<HTMLElement | null>(null)

const languages = [
  { code: 'pt', flag: '🇧🇷' },
  { code: 'en', flag: '🇺🇸' },
  { code: 'es', flag: '🇪🇸' },
  { code: 'fr', flag: '🇫🇷' },
  { code: 'de', flag: '🇩🇪' },
  { code: 'ru', flag: '🇷🇺' },
]
const currentLanguage = computed(() => {
  return languages.find(l => l.code === locale.value) || languages[0]
})

function selectLanguage(code: string) {
  locale.value = code                 // ← muda o idioma de verdade
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
  if (saved) {
    locale.value = saved              // ← aplica o idioma salvo
  }
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>