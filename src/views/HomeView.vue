<template>
    <HeaderNav />
    <div class="w-10/12 glass rounded-4xl p-4 flex flex-col gap-2" :class="glassClass()">
        <div class="flex justify-between h-8 font-medium">
            <span class="flex gap-2 items-center">
                <DotIcon />
                <p class="text-lg lg:text-sm">Disponível para novos projetos</p>
            </span>
            <span class="flex items-center gap-2">
                <LocalIcon class="w-4" />
                <p>Santo andré - SP</p>
            </span>
        </div>

        <div class="flex justify-between items-center">
            <ProfileImage />
            <div class="w-5/8 flex flex-col justify-center gap-4">
                <span class="text-3xl font-light">Olá, eu sou</span>
                <img src="../assets/images/gabrielAugusto.svg" alt="gabriel augusto" class="w-3/4" />
                <div class="flex text-2xl gap-4 italic font-normal">
                    <span>Design UI/UX</span>
                    <span>•</span>
                    <span>Desenvolvedor</span>
                </div>
                <p class="text-xl font-extralight">
                    Transformo ideias em experiências digitais intuitivas, funcionais e
                    memoráveis, conectando design, produto e desenvolvimento para criar
                    soluções que fazem sentido para usuários e negócios. Sou a ponte entre
                    a visão do projeto e sua execução técnica.
                </p>
            </div>
        </div>
    </div>

    <SkillsCard />
</template>

<script lang="ts" setup>
import HeaderNav from '@/components/HeaderNav.vue'
import DotIcon from '@/components/icons/DotIcon.vue'
import LocalIcon from '@/components/icons/LocalIcon.vue'
import ProfileImage from '@/components/ProfileImage.vue'
import SkillsCard from '@/components/SkillsCard.vue'
import { useTheme } from '@/composables/useTheme'

const { glassClass } = useTheme()
</script>