import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from './i18n'
import AOS from 'aos'
import 'aos/dist/aos.css'

import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')

AOS.init({
  duration: 800,   // duração da animação
  once: false,      // anima só uma vez
  offset: 100      // distância do trigger
})
