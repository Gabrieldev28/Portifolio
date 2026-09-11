// composables/useTheme.ts
import { ref, watch, onMounted, nextTick } from 'vue'
import AOS from 'aos'   // ← adicione isso

type Theme = 'light' | 'dark'

const theme = ref<Theme>('light')

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  const setTheme = (value: Theme) => {
    theme.value = value
  }

  const glassClass = () => {
    return theme.value === 'light' ? 'glass-light' : 'glass-dark'
  }

  watch(theme, async (newTheme) => {
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)

    // Espera o DOM atualizar e força o AOS a manter os elementos já animados
    await nextTick()
    AOS.refreshHard()
  }, { immediate: true })

  onMounted(() => {
    const saved = localStorage.getItem('theme') as Theme | null
    if (saved) {
      theme.value = saved
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      theme.value = prefersDark ? 'dark' : 'light'
    }
  })

  return {
    theme,
    toggleTheme,
    setTheme,
    glassClass,
  }
}