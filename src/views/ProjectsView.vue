<template>
    <HeaderNav />
    <div class="flex flex-col items-center gap-1 lg:my-4 lg:gap-3 2xl:gap-8">
        <ProjectCards />
        <BehanceCard />
    </div>


</template>

<script setup lang="ts">
import BehanceCard from '@/components/BehanceCard.vue';
import HeaderNav from '@/components/HeaderNav.vue';
import LinkIcon from '@/components/icons/LinkIcon.vue';
import ProjectCards from '@/components/ProjectCards.vue';
import { useTheme } from '@/composables/useTheme'
const { glassClass } = useTheme()
</script>
