<template>
                <div class="relative p-4 glass rounded-3xl" :class="glassClass()">
                <!-- Área scrollável com no máximo 5 linhas -->
                <div class="overflow-y-auto
             h-28.5                    /* ≈ 5 linhas com leading-loose */
             mask-[linear-gradient(to_bottom,black_90%,transparent)]
             scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                    <p class="tracking-wider font-extralight">
                        Gosto de entender como as coisas funcionam antes de pensar em como elas devem parecer.<br />
                        Antes de abrir o Figma ou escrever código, tento entender o sistema, reduzir a complexidade e
                        criar uma estrutura que faça sentido para quem vai usar.<br />
                        Essa forma de pensar aparece desde a criação deste portfólio inspirado em computação espacial
                        até projetos como LUMEA, Nitro e outras soluções que nasceram da tentativa de simplificar
                        processos,
                        conectar pessoas e reorganizar experiências digitais.<br />
                        Mais do que criar interfaces, busco criar clareza.
                    </p>
                </div>
            </div>
</template>

<script lang="ts" setup>

import { useTheme } from '@/composables/useTheme'
const { glassClass } = useTheme()
</script>