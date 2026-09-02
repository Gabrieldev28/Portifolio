<template>
    <HeaderNav />
    <div class="flex w-10/12 justify-between gap-4">
        <div class="flex flex-col w-2/6 glass p-4 rounded-4xl gap-2" :class="glassClass()">
            <h3>Minha formação</h3>
            <div class="flex gap-2">
                <img src="../assets/images/unicesumarLogo.png" alt="" class="w-10 h-10">
                <div class="flex flex-col">
                    <div class="flex gap-2 items-center">
                        <span class="text-xl font-bold">Unicesumar</span>
                        <span>•</span>
                        <span class="font-extralight text-xs">2025 ~ 2028</span>
                    </div>
                    <span class="italic">Análise e desenvolvimento de sistemas</span>
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
                    <span class="italic">Design UI/UX</span>
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
                    <span class="italic">Design System</span>
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
                    <span class="italic">Desenvolvimento Fullstack</span>
                    <span class="italic">Banco de Dados SQL e NoSQL</span>
                    <span class="italic">Lógica de Programação</span>
                </div>
                <hr />
            </div>

        </div>
        <div class="w-4/6 flex flex-col gap-4">
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
            <div class="flex glass flex-col p-4 gap-2 rounded-3xl" :class="glassClass()">
                <h3 class="text-lg font-bold">Meu processo mental</h3>
                <div class="flex justify-between gap-4">
                    <div class="flex flex-col w-1/5 gap-2">
                        <SearchThinkIcon />
                        <p class="font-bold">Entender</p>
                        <p>Negócio, usuário, restrições e contexto.</p>
                    </div>
                    <div class="flex flex-col w-1/5 gap-2">
                        <GitThinkIcon />
                        <p class="font-bold">Estruturar</p>
                        <p>Transformo caos em fluxos e relações claras.</p>
                    </div>
                    <div class="flex flex-col w-1/5 gap-2">
                        <LayersThinkIcon />
                        <p class="font-bold">Simplificar</p>
                        <p>Elimino complexidade sem perder contexto.</p>
                    </div>
                    <div class="flex flex-col w-1/5 gap-2">
                        <PenThinkIcon />
                        <p class="font-bold">Projetar</p>
                        <p>Interfaces e decisões que fazem sentido.</p>
                    </div>
                    <div class="flex flex-col w-1/5 gap-2">
                        <CodeThinkIcon />
                        <p class="font-bold">Construir</p>
                        <p>Levo a solução do conceito ao código.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex glass-think flex-col rounded-4xl w-10/12 gap-4 p-12 justify-center items-center">
        <p class="text-3xl font-bold tracking-wider">Think • Structure • Design • Code</p>
        <p class="text-xl tracking-wider">O ciclo que conecta entendimento, design e desenvolvimento em cada projeto.</p>
    </div>

</template>

<script setup lang="ts">
import HeaderNav from '@/components/HeaderNav.vue';
import CodeThinkIcon from '@/components/icons/CodeThinkIcon.vue';
import GitThinkIcon from '@/components/icons/GitThinkIcon.vue';
import LayersThinkIcon from '@/components/icons/LayersThinkIcon.vue';
import PenThinkIcon from '@/components/icons/PenThinkIcon.vue';
import SearchThinkIcon from '@/components/icons/SearchThinkIcon.vue';
import { useTheme } from '@/composables/useTheme'
const { glassClass } = useTheme()

</script>
