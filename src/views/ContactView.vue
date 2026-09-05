<template>
    <HeaderNav />
    <div class="w-10/12 flex flex-col rounded-4xl glass p-8  leading-loose tracking-wider gap-4" :class="glassClass()">
        <h3 class="font-bold text-4xl">Obrigado por explorar o GabrielOS</h3>
        <p class="text-base font italic">Você percorreu uma representação da forma como organizo ideias, desenho
            experiências e construo produtos. Se esta experiência despertou alguma ideia, conversa ou possibilidade, a
            próxima etapa acontece fora do sistema.</p>
    </div>
    <div class="w-10/12 flex gap-8">
        <div class="w-1/5 flex flex-col items-center gap-4">
            <a v-for="link in socialLinks" :key="link.name" :href="link.href" target="_blank" rel="noopener noreferrer"
                class="w-full flex h-14 justify-between items-center glass rounded-full px-4 link-hover" :class="glassClass()">
                <div class="flex gap-2 items-center">
                    <component :is="link.icon" class="w-10" />
                    {{ link.name }}
                </div>
                <ArrowIcon />
            </a>
        </div>
        <div
            class="w-4/5 glass-think p-8 rounded-4xl flex flex-col items-center justify-center gap-6 leading-loose tracking-wider">
            <h4 class="font-bold text-4xl">Think • Structure • Design • Code</h4>
            <p class="text-xl italic">O ciclo que conecta entendimento, design e desenvolvimento em cada projeto.</p>
            <p class="text-lg">Session complete • GabrielOS v1.0 • Santo André — SP</p>
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

const socialLinks = [
    { name: 'Behance', href: 'https://www.behance.net/gabriel-ui-ux', icon: BehanceIcon },
    { name: 'GitHub', href: 'https://github.com/seu-usuario', icon: GithubIcon },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/seu-perfil', icon: LinkedinIcon },
    { name: 'Email', href: 'mailto:seuemail@exemplo.com', icon: EmailIcon },
    { name: 'WhatsApp', href: 'https://wa.me/5511999999999', icon: WhatsappIcon },
]
</script>

<style>
.link-hover:hover {
    background: linear-gradient(to bottom,
            rgba(125, 180, 233, 0.4),
            rgba(129, 188, 243, 0.5),
            rgba(67, 135, 199, 0.3));
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    box-shadow: 12px 12px 30px rgba(49, 163, 230, 0.1);
    cursor: pointer;
}
</style>