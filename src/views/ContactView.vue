<template>
  <HeaderNav />
  <div class="flex flex-col items-center">
    <div
      class="portrait:w-10/12 landscape:w-10/12 lg:w-8/12 2xl:w-10/12 flex flex-col rounded-2xl lg:rounded-3xl 2xl:rounded-4xl glass p-2 lg:p-4 2xl:p-8 leading-loose tracking-wider portrait:gap-2 landscape:gap-0 lg:gap-2 2xl:gap-6 my-2 lg:my-4" data-aos="zoom-in"
      :class="glassClass()">
      <h3 class="font-bold text-base lg:text-2xl 2xl:text-4xl">
        {{ t('contact.thanks') }}
      </h3>
      <p class="text-xs lg:text-base font italic">
        {{ t('contact.description') }}
      </p>
    </div>

    <div class="portrait:w-10/12 landscape:w-10/12 lg:w-8/12 2xl:w-10/12 flex portrait:flex-col-reverse gap-4 lg:gap-8" >
      <!-- Links sociais -->
      <div
        class="portrait:w-full landscape:w-1/5 flex portrait:flex-row landscape:flex-col portrait:justify-between items-center gap-1 lg:gap-2 2xl:gap-4">
        <a v-for="link in socialLinks" :key="link.name" :href="link.href" target="_blank" rel="noopener noreferrer"
          class="flex h-14 items-center glass rounded-full link-hover
           portrait:w-14 portrait:justify-center landscape:h-6 lg:h-10 2xl:h-12 portrait:px-0
           landscape:w-full landscape:justify-between landscape:px-4" :class="glassClass()"  data-aos="zoom-in">
          <div class="flex gap-2 items-center">
            <component :is="link.icon" class="w-6 portrait:w-7 landscape:w-4 lg:w-6 shrink-0" />

            <!-- Nome só aparece no landscape -->
            <span class="portrait:hidden landscape:flex text-[10px] lg:text-sm tracking-wider">
              {{ link.name }}
            </span>
          </div>

          <!-- Seta só aparece no landscape -->
          <ArrowIcon class="portrait:hidden landscape:block shrink-0 w-2 lg:w-4" />
        </a>
      </div>

      <!-- Slogan / Session -->
      <div
        class="portrait:w-full landscape:w-4/5 glass-think p-1 lg:p-4 2xl:p-8 rounded-2xl lg:rounded-4xl flex flex-col items-center justify-center gap-2 lg:gap-6 leading-loose tracking-wider" data-aos="zoom-in">
        <h4 class="font-bold text-sm lg:text-2xl 2xl:text-4xl">
          {{ t('contact.slogan1') }} •
          {{ t('contact.slogan2') }} •
          {{ t('contact.slogan3') }} •
          {{ t('contact.slogan4') }}
        </h4>

        <p class="text-xs lg:text-base 2xl:text-xl italic text-center">
          {{ t('contact.slogan') }}
        </p>

        <p class=" text-[10px] lg:text-base 2xl:text-lg text-center">
          {{ t('contact.session') }} • GabrielOS v1.0 • {{ t('home.local') }}
        </p>
      </div>
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
  { name: 'GitHub', href: 'https://https://github.com/Gabrieldev28', icon: GithubIcon },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/gabrielaugustodacosta28/', icon: LinkedinIcon },
  { name: 'Email', href: 'mailto:gabrieldev28@gmail.com', icon: EmailIcon },
  { name: 'WhatsApp', href: 'https://wa.me/5511983796012', icon: WhatsappIcon },
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