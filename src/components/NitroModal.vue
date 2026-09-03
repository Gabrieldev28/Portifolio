<script setup lang="ts">
import CloseIcon from './icons/CloseIcon.vue';
import NitroLogoMedium from './icons/NitroLogoMedium.vue';

</script>

<template>
    <div class="w-10/12 rounded-3xl bg-black">
        <div class="flex justify-between items-center p-5 border-b ">
            <div class="flex gap-2 items-center">
                <span class="font-semibold text-xl">Nitro •</span>
                <span>UI/UX e Flutter</span>
            </div>
            <CloseIcon />
        </div>
        <div class="flex p-20 items-center gap-12">
            <NitroLogoMedium/>
            <div class="flex flex-col gap-4 tracking-wider">
                <div class="flex gap-2 items-center">
                    <span class="text-3xl font-bold">Nitro •</span>
                    <span class="text-3xl italic font-extralight">2023 - Atual</span>
                </div>
                <p class="text-2xl italic font-extralight">Da ideia inicial a um ecossistema de produto</p>
            </div>
        </div>
        <div class="flex justify-between items-center gap-8 px-20">
            <div class="leading-loose tracking-wider font-extralight">
                <p>A Nitro nasceu em 2023 como um projeto pessoal para unir comunidade automotiva, conteúdo e identidade em um único lugar. O que começou como um exercício de programação acabou se tornando o projeto onde desenvolvi minha forma de pensar como designer de produto.</p>
                <p>Ao longo dos anos, a Nitro foi remodelada diversas vezes. Cada versão representou uma nova hipótese, uma mudança de direção ou uma tentativa de resolver o mesmo problema de uma forma melhor. Foi nesse processo que aprendi UI/UX, arquitetura de informação, design systems, branding, Flutter e pensamento de produto.</p>
            </div>
            <img src="../assets/images/mockNitro.png" alt="">
        </div>
        

    </div>

</template>