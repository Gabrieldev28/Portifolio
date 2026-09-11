<template>
  <div class="flex flex-col glass rounded-2xl lg:rounded-3xl 2xl:rounded-4xl p-3 lg:p-4 2xl:p-8 w-10/12 lg:w-8/12 2xl:w-10/12 " :class="glassClass()" data-aos="fade-right">
    <p class="font-extralight tracking-widest text-[10px] lg:text-base 2xl:text-lg italic leading-3 lg:leading-normal 2xl:leading-loose">
      {{ t('projects.projectsDescription') }}
    </p>

    <a
      href="https://www.behance.net/gabriel-ui-ux"
      target="_blank"
      rel="noopener noreferrer"
      class="flex gap-1 lg:gap-2 self-end items-center hover:opacity-60 transition-opacity text-xs lg:text-base"
    >
      {{ t('projects.link') }}
      <LinkIcon class="w-4 lg:w-8" />
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