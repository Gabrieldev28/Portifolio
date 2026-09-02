<template>
            <div class="flex flex-col w-2/6 glass p-4 rounded-4xl gap-2" :class="glassClass()">
            <h3 class="tracking-wider text-lg">Minha formação</h3>
            <div class="flex gap-2">
                <img src="../assets/images/unicesumarLogo.png" alt="" class="w-10 h-10">
                <div class="flex flex-col">
                    <div class="flex gap-2 items-center">
                        <span class="text-xl font-bold">Unicesumar</span>
                        <span>•</span>
                        <span class="font-extralight text-xs">2025 ~ 2028</span>
                    </div>
                    <span class="italic tracking-wider">Análise e desenvolvimento de sistemas</span>
                </div>
                <hr />
            </div>
            <div class="flex gap-2">
                <img src="../assets/images/figmaLogo.png" alt="" class="w-10 h-10">
                <div>
                    <div class="flex gap-2 items-center">
                        <span class="text-xl font-bold">Figma PRO</span>
                        <span>•</span>
                        <span class="font-extralight text-xs">2025</span>
                    </div>
                    <span class="italic tracking-wider">Design UI/UX</span>
                </div>
                <hr />
            </div>
            <div class="flex gap-2">
                <img src="../assets/images/feuxLogo.png" alt="" class="w-10 h-10">
                <div>
                    <div class="flex gap-2 items-center">
                        <span class="text-xl font-bold">FEUX</span>
                        <span>•</span>
                        <span class="font-extralight text-xs">2025</span>
                    </div>
                    <span class="italic tracking-wider">Design System</span>
                </div>
                <hr />
            </div>
            <div class="flex gap-2">
                <img src="../assets/images/impactaLogo.png" alt="" class="w-10 h-10">
                <div class="flex flex-col gap-1">
                    <div class="flex gap-2 items-center">
                        <span class="text-xl font-bold">Impacta</span>
                        <span>•</span>
                        <span class="font-extralight text-xs">2022 ~ 2024</span>
                    </div>
                    <span class="italic tracking-wider">Desenvolvimento Fullstack</span>
                    <span class="italic tracking-wider">Banco de Dados SQL e NoSQL</span>
                    <span class="italic tracking-wider">Lógica de Programação</span>
                </div>
                <hr />
            </div>

        </div>
</template>

<script lang="ts" setup>

import { useTheme } from '@/composables/useTheme'
const { glassClass } = useTheme()
</script>