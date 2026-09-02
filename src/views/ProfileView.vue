<template>
    <HeaderNav />
    <div class="flex w-10/12 justify-between gap-4">
        <CertificationCard />
        <div class="w-4/6 flex flex-col gap-4">
            <DescriptionCard />
            <ThinkCard />
        </div>
    </div>
    <SloganCard />

</template>

<script setup lang="ts">
import CertificationCard from '@/components/CertificationCard.vue';
import DescriptionCard from '@/components/DescriptionCard.vue';
import HeaderNav from '@/components/HeaderNav.vue';
import SloganCard from '@/components/SloganCard.vue';
import ThinkCard from '@/components/ThinkCard.vue';
import { useTheme } from '@/composables/useTheme'
const { glassClass } = useTheme()

</script>
