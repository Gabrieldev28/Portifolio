// composables/useTheme.ts
import { ref, watch, onMounted } from 'vue'

type Theme = 'light' | 'dark'

const theme = ref<Theme>('light')

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  const setTheme = (value: Theme) => {
    theme.value = value
  }

  // Classe que você usa nos elementos
  const glassClass = () => {
    return theme.value === 'light' ? 'glass-light' : 'glass-dark'
  }

  // Aplica a classe no <html> (útil se quiser usar depois com dark: do Tailwind)
  watch(theme, (newTheme) => {
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
  }, { immediate: true })

  onMounted(() => {
    const saved = localStorage.getItem('theme') as Theme | null
    if (saved) {
      theme.value = saved
    } else {
      // Detecta preferência do sistema
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