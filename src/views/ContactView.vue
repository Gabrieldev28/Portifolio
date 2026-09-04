<template>
    <HeaderNav />
    <div class="w-10/12 flex flex-col rounded-4xl glass p-8  leading-loose tracking-wider gap-4" :class="glassClass()">
        <h3 class="font-bold text-4xl">Obrigado por explorar o GabrielOS</h3>
        <p class="text-base font italic">Você percorreu uma representação da forma como organizo ideias, desenho
            experiências e construo produtos. Se esta experiência despertou alguma ideia, conversa ou possibilidade, a
            próxima etapa acontece fora do sistema.</p>
    </div>
    <div class="w-10/12">
        <div class="w-1/5 flex flex-col items-center gap-4">
            <div class="w-full flex h-14 justify-between items-center glass rounded-full px-4" :class="glassClass()">
                <a href="https://www.behance.net/gabriel-ui-ux" target="_blank" rel="noopener noreferrer"
                    class="flex gap-2 items-center">
                    <BehanceIcon class="w-10" />
                    Behance
                </a>
                <ArrowIcon />
            </div>
            <div class="w-full flex h-14 justify-between items-center glass rounded-full px-4" :class="glassClass()">
                <a href="https://www.behance.net/gabriel-ui-ux" target="_blank" rel="noopener noreferrer"
                    class="flex gap-2 items-center">
                    <GithubIcon class="w-10" />
                    GitHub
                </a>
                <ArrowIcon />
            </div>
            <div class="w-full flex h-14 justify-between items-center glass rounded-full px-4" :class="glassClass()">
                <a href="https://www.behance.net/gabriel-ui-ux" target="_blank" rel="noopener noreferrer"
                    class="flex gap-2 items-center">
                    <LinkedinIcon class="w-10" />
                    LinkedIn
                </a>
                <ArrowIcon />
            </div>
            <div class="w-full flex h-14 justify-between items-center glass rounded-full px-4" :class="glassClass()">
                <a href="https://www.behance.net/gabriel-ui-ux" target="_blank" rel="noopener noreferrer"
                    class="flex gap-2 items-center">
                    <EmailIcon class="w-10" />
                    Email
                </a>
                <ArrowIcon />
            </div>
            <div class="w-full flex h-14 justify-between items-center glass rounded-full px-4" :class="glassClass()">
                <a href="https://www.behance.net/gabriel-ui-ux" target="_blank" rel="noopener noreferrer"
                    class="flex gap-2 items-center">
                    <WhatsappIcon class="w-10" />
                    WhatsApp
                </a>
                <ArrowIcon />
            </div>
        </div>
        <div>
            
        </div>
    </div>

</template>


<script setup lang="ts">
import HeaderNav from '@/components/HeaderNav.vue';
import ArrowIcon from '@/components/icons/ArrowIcon.vue';
import BehanceIcon from '@/components/icons/BehanceIcon.vue';
import EmailIcon from '@/components/icons/EmailIcon.vue';
import GithubIcon from '@/components/icons/GithubIcon.vue';
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue';
import WhatsappIcon from '@/components/icons/WhatsappIcon.vue';

import { useTheme } from '@/composables/useTheme'

const { glassClass } = useTheme()

</script>
