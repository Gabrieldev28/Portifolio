import { createI18n } from 'vue-i18n'

import pt from './locales/pt.json'
import en from './locales/en.json'
import es from './locales/es.json'
import fr from './locales/fr.json'
import de from './locales/de.json'
import ru from './locales/ru.json'

const i18n = createI18n({
  legacy: false,          // Composition API
  locale: localStorage.getItem('lang') || 'pt',
  fallbackLocale: 'pt',
  messages: {
    pt,
    en,
    es,
    fr,
    de,
    ru,
  },
})

export default i18n