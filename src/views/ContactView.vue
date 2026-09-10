<template>
  <HeaderNav />

  <div
    class="portrait:w-10/12 landscape:w-10/12 lg:w-8/12 2xl:w-10/12 flex flex-col rounded-4xl glass p-8 leading-loose tracking-wider gap-4"
    :class="glassClass()">
    <h3 class="font-bold text-4xl">
      {{ t('contact.thanks') }}
    </h3>
    <p class="text-base font italic">
      {{ t('contact.description') }}
    </p>
  </div>

  <div class="portrait:w-10/12 landscape:w-10/12 lg:w-8/12 2xl:w-10/12 flex portrait:flex-col-reverse gap-8">
    <!-- Links sociais -->
    <div class="portrait:w-full landscape:w-1/5 flex portrait:flex-row landscape:flex-col items-center gap-4">
      <a v-for="link in socialLinks" :key="link.name" :href="link.href" target="_blank" rel="noopener noreferrer" class="flex h-14 items-center glass rounded-full link-hover
           portrait:w-14 portrait:justify-center portrait:px-0
           landscape:w-full landscape:justify-between landscape:px-4" :class="glassClass()">
        <div class="flex gap-2 items-center">
          <component :is="link.icon" class="w-6 portrait:w-7 landscape:w-6 shrink-0" />

          <!-- Nome só aparece no landscape -->
          <span class="portrait:hidden landscape:flex">
            {{ link.name }}
          </span>
        </div>

        <!-- Seta só aparece no landscape -->
        <ArrowIcon class="portrait:hidden landscape:block shrink-0" />
      </a>
    </div>

    <!-- Slogan / Session -->
    <div
      class="w-4/5 glass-think p-8 rounded-4xl flex flex-col items-center justify-center gap-6 leading-loose tracking-wider">
      <h4 class="font-bold text-4xl">
        {{ t('contact.slogan1') }} •
        {{ t('contact.slogan2') }} •
        {{ t('contact.slogan3') }} •
        {{ t('contact.slogan4') }}
      </h4>

      <p class="text-xl italic">
        {{ t('contact.slogan') }}
      </p>

      <p class="text-lg">
        {{ t('contact.session') }} • GabrielOS v1.0 • {{ t('home.local') }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import HeaderNav from '@/components/HeaderNav.vue'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'
import BehanceIcon from '@/components/icons/BehanceIcon.vue'
import EmailIcon from '@/components/icons/EmailIcon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
import WhatsappIcon from '@/components/icons/WhatsappIcon.vue'
import { useTheme } from '@/composables/useTheme'

const { t } = useI18n()
const { glassClass } = useTheme()

const socialLinks = [
  { name: 'Behance', href: 'https://www.behance.net/gabriel-ui-ux', icon: BehanceIcon },
  { name: 'GitHub', href: 'https://github.com/seu-usuario', icon: GithubIcon },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/seu-perfil', icon: LinkedinIcon },
  { name: 'Email', href: 'mailto:seuemail@exemplo.com', icon: EmailIcon },
  { name: 'WhatsApp', href: 'https://wa.me/5511999999999', icon: WhatsappIcon },
]
</script>

<style>
.link-hover:hover {
  background: linear-gradient(to bottom,
      rgba(125, 180, 233, 0.4),
      rgba(129, 188, 243, 0.5),
      rgba(67, 135, 199, 0.3));
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  box-shadow: 12px 12px 30px rgba(49, 163, 230, 0.1);
  cursor: pointer;
}
</style>