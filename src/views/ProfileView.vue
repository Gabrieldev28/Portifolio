<template>
    <HeaderNav />
    <div
        class="flex portrait:flex-col portrait:w-10/12 landscape:w-10/12 lg:w-8/12 2xl:w-10/12 justify-between gap-1 lg:gap-4 2xl:gap-8 xl:my-2">
        <CertificationCard />
        <div class="w-full landscape:w-4/6 flex flex-col gap-1 lg:gap-2 2xl:gap-4">
            <DescriptionCard />
            <ThinkCard />
        </div>
    </div>
    <div class="portrait:w-8/12 landscape:w-8/12 2xl:w-10/12 portrait:hidden landscape:hidden lg:flex">
        <SloganCard />
    </div>

</template>

<script setup lang="ts">
import CertificationCard from '@/components/CertificationCard.vue';
import DescriptionCard from '@/components/DescriptionCard.vue';
import HeaderNav from '@/components/HeaderNav.vue';
import SloganCard from '@/components/SloganCard.vue';
import ThinkCard from '@/components/ThinkCard.vue';

</script>
