<template>
  <div class="flex glass-think flex-col rounded-4xl w-10/12 gap-4 p-12 justify-center items-center">
    <p class="text-3xl font-bold tracking-wider">
      {{ t('aboutMe.slogan1') }} • {{ t('aboutMe.slogan2') }} • {{ t('aboutMe.slogan3') }} • {{ t('aboutMe.slogan4') }}
    </p>
    <p class="text-xl tracking-wider">
      {{ t('aboutMe.slogan') }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>