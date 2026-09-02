<template>
    <div class="flex glass flex-col p-4 gap-2 rounded-3xl" :class="glassClass()">
        <h3 class="text-lg font-bold">Meu processo mental</h3>
        <div class="flex justify-between gap-4">
            <div class="flex flex-col w-1/5 gap-2">
                <SearchThinkIcon />
                <p class="font-bold text-xl">Entender</p>
                <p>Negócio, usuário, restrições e contexto.</p>
            </div>
            <div class="flex flex-col w-1/5 gap-2">
                <GitThinkIcon />
                <p class="font-bold text-xl">Estruturar</p>
                <p>Transformo caos em fluxos e relações claras.</p>
            </div>
            <div class="flex flex-col w-1/5 gap-2">
                <LayersThinkIcon />
                <p class="font-bold text-xl">Simplificar</p>
                <p>Elimino complexidade sem perder contexto.</p>
            </div>
            <div class="flex flex-col w-1/5 gap-2">
                <PenThinkIcon />
                <p class="font-bold text-xl">Projetar</p>
                <p>Interfaces e decisões que fazem sentido.</p>
            </div>
            <div class="flex flex-col w-1/5 gap-2">
                <CodeThinkIcon />
                <p class="font-bold text-xl">Construir</p>
                <p>Levo a solução do conceito ao código.</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

import { useTheme } from '@/composables/useTheme'
const { glassClass } = useTheme()

import CodeThinkIcon from '@/components/icons/CodeThinkIcon.vue';
import GitThinkIcon from '@/components/icons/GitThinkIcon.vue';
import LayersThinkIcon from '@/components/icons/LayersThinkIcon.vue';
import PenThinkIcon from '@/components/icons/PenThinkIcon.vue';
import SearchThinkIcon from '@/components/icons/SearchThinkIcon.vue';
</script>