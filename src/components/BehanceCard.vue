<template>
  <div class="flex flex-col glass rounded-4xl p-8 w-10/12" :class="glassClass()">
    <p class="font-extralight tracking-widest text-lg italic leading-loose">
      {{ t('projects.projectsDescription') }}
    </p>

    <a
      href="https://www.behance.net/gabriel-ui-ux"
      target="_blank"
      rel="noopener noreferrer"
      class="flex gap-2 self-end items-center hover:opacity-60 transition-opacity"
    >
      {{ t('projects.link') }}
      <LinkIcon />
    </a>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LinkIcon from '@/components/icons/LinkIcon.vue'
import { useTheme } from '@/composables/useTheme'

const { t } = useI18n()
const { glassClass } = useTheme()
</script>