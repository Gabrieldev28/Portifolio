<script setup>
import BehanceIcon from '@/components/icons/BehanceIcon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
import EmailIcon from '@/components/icons/EmailIcon.vue'
import WhatsappIcon from '@/components/icons/WhatsappIcon.vue'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'

const socialLinks = [
  {
    name: 'Behance',
    href: 'https://www.behance.net/gabriel-ui-ux',
    icon: BehanceIcon,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/seu-usuario',
    icon: GithubIcon,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/seu-perfil',
    icon: LinkedinIcon,
  },
  {
    name: 'Email',
    href: 'mailto:seuemail@exemplo.com',
    icon: EmailIcon,
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/5511999999999',
    icon: WhatsappIcon,
  },
]
</script>

<template>
  <div class="w-1/5 flex flex-col items-center gap-4">
    <a
      v-for="link in socialLinks"
      :key="link.name"
      :href="link.href"
      target="_blank"
      rel="noopener noreferrer"
      class="w-full flex h-14 justify-between items-center glass rounded-full px-4"
      :class="glassClass()"
    >
      <div class="flex gap-2 items-center">
        <component :is="link.icon" class="w-10" />
        <span>{{ link.name }}</span>
      </div>
      <ArrowIcon />
    </a>
  </div>
</template>