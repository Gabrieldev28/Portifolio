<template>
  <div class="flex glass-think flex-col rounded-2xl lg:rounded-3xl 2xl:rounded-4xl w-full gap-0 2xl:gap-4 p-4 2xl:p-12 justify-center items-center">
    <p class="text-xl 2xl:text-3xl font-bold tracking-wider">
      {{ t('aboutMe.slogan1') }} • {{ t('aboutMe.slogan2') }} • {{ t('aboutMe.slogan3') }} • {{ t('aboutMe.slogan4') }}
    </p>
    <p class="text-base 2xl:text-xl tracking-wider">
      {{ t('aboutMe.slogan') }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>