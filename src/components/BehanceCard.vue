<template>
    <div class="flex flex-col glass rounded-4xl p-8 w-10/12" :class="glassClass()">
        <p class="font-extralight tracking-widest text-lg italic leading-loose">Este portfólio é uma tentativa de
            traduzir a experiência de um Vision Pro para a web. Os projetos acima
            seguem o mesmo princípio: questionar o formato antes de aceitar a solução. Lumea, Nitro e UniLevel
            representam maneiras diferentes de resolver problemas por meio de estrutura, comportamento e
            experiência. Clique em qualquer projeto para explorar o case completo; para outros experimentos,
            redesigns e estudos de interface, acesse meu Behance.
        </p>
        <a href="https://www.behance.net/gabriel-ui-ux" target="_blank" rel="noopener noreferrer"
            class="flex gap-2 self-end items-center hover:opacity-60 transition-opacity">
            Clique aqui e acesse
            <LinkIcon />
        </a>
    </div>
</template>

<script setup lang="ts">
import LinkIcon from '@/components/icons/LinkIcon.vue';
import { useTheme } from '@/composables/useTheme'
const { glassClass } = useTheme()
</script>
