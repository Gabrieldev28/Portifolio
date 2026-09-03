<template>
  <!-- Overlay (fundo desfocado) -->
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click.self="close"
      >
        <!-- Backdrop com blur -->
        <div class="absolute inset-0 bg-black/50 backdrop-blur-md"></div>

        <!-- Modal em si -->
        <div
          class="max-w-360 relative w-10/12 max-h-[75vh] rounded-4xl project-glass flex flex-col overflow-hidden scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
          @click.stop
        >
          <!-- Header fixo -->
          <div class="flex justify-between items-center p-5 border-b border-b-white/20 shrink-0">
            <div class="flex gap-2 items-center">
              <h3 class="font-semibold text-xl">Nitro •</h3>
              <span>UI/UX e Flutter</span>
            </div>
            <button @click="close" class="hover:opacity-70 transition-opacity">
              <CloseIcon />
            </button>
          </div>

          <!-- Conteúdo com scroll interno -->
          <div class="overflow-y-auto flex-1">
            <!-- Todo o conteúdo que você já tinha -->
            <div class="flex px-20 py-10 items-center gap-12">
              <NitroLogoMedium />
              <div class="flex flex-col gap-4 tracking-wider">
                <div class="flex gap-2 items-center">
                  <h4 class="text-3xl font-bold">Nitro •</h4>
                  <span class="text-3xl italic font-extralight">2023 - Atual</span>
                </div>
                <p class="text-2xl italic font-extralight">Da ideia inicial a um ecossistema de produto</p>
              </div>
            </div>

            <div class="flex justify-between items-center gap-8 px-20">
              <div class="flex flex-col gap-4 leading-loose tracking-wider font-extralight">
                <p>A Nitro nasceu em 2023 como um projeto pessoal para unir comunidade automotiva, conteúdo e identidade
                  em um único lugar. O que começou como um exercício de programação acabou se tornando o projeto onde
                  desenvolvi minha forma de pensar como designer de produto.</p>
                <p>Ao longo dos anos, a Nitro foi remodelada diversas vezes. Cada versão representou uma nova hipótese,
                  uma mudança de direção ou uma tentativa de resolver o mesmo problema de uma forma melhor. Foi nesse
                  processo que aprendi UI/UX, arquitetura de informação, design systems, branding, Flutter e
                  pensamento de produto.</p>
              </div>
              <img src="../assets/images/mockNitro.png" alt="">
            </div>

            <div class="flex flex-col px-20 leading-loose tracking-wider font-extralight gap-8">
              <h4 class="text-3xl font-bold">A identidade da Nitro</h4>
              <p>O nome Nitro foi escolhido como uma metáfora para o próprio nitro automotivo: o impulso extra usado
                quando é preciso ir além. A ideia sempre foi representar movimento, evolução e a busca constante por
                algo maior.</p>
              <p>A primeira identidade visual foi construída com dois triângulos formando um “N” de maneira subliminar. A
                execução ainda era simples, mas a intenção já existia: criar uma marca que transmitisse direção sem
                recorrer aos símbolos mais óbvios do universo automotivo.</p>
              <div class="flex justify-around items-center p-8">
                <NitroOldIcon />
                <div class="flex flex-col gap-4">
                  <p>As cores permaneceram as mesmas desde o início: </p>
                  <div class="flex items-center gap-4">
                    <DotRedIcon />
                    <span>Vermelho, representando paixão e energia.</span>
                  </div>
                  <div class="flex items-center gap-4">
                    <DotPurpleIcon />
                    <span>Roxo, representando criatividade e experimentação.</span>
                  </div>
                  <p>A identidade evoluiu junto com o produto.</p>
                </div>
              </div>
              <p>Na versão definitiva, essas cores deixam de ser apenas um gradiente e passam a representar um conceito.
                Os dois caminhos se encontram para formar uma única direção, simbolizando a união entre paixão e
                criatividade — ou, olhando para trás, entre design e tecnologia. A identidade visual evoluiu junto com o
                produto.</p>
            </div>

            <div class="flex flex-col px-20 py-8 gap-8 leading-loose tracking-wider font-extralight">
              <h4 class="text-3xl font-bold">O que a Nitro representa hoje</h4>
              <p>Ao longo dos anos, o projeto foi remodelado diversas vezes. A maior mudança aconteceu quando percebi que
                o problema não era apenas compartilhar carros, mas conectar pessoas, serviços, eventos e experiências
                dentro do mesmo ecossistema.</p>
              <p>A Nitro deixou de ser apenas uma rede social para entusiastas e passou a ser pensada como um hub
                automotivo, capaz de reunir comunidade, eventos, oficinas, marketplace, descoberta por localização e
                novas experiências para quem vive o universo dos carros.</p>
              <p>Foi o projeto onde deixei de aprender ferramentas e comecei a construir produtos.</p>
              <div class="flex justify-between items-center">
                <img src="../assets/images/mockNitro1.png" alt="" class="w-1/3">
                <img src="../assets/images/mockNitro2.png" alt="" class="w-1/3">
                <img src="../assets/images/mockNitro3.png" alt="" class="w-1/3">
              </div>
            </div>

            <div class="flex flex-col px-20 py-12 gap-8 leading-loose tracking-wider font-extralight">
              <h4 class="text-3xl font-bold">Explore a evolução completa da Nitro</h4>
              <p>Este modal apresenta um resumo da trajetória do projeto. Você pode explorar wireframes, versões
                anteriores, decisões de produto e a evolução completa da Nitro acessando o case no Behance.</p>
              <a href="https://www.behance.net/gabriel-ui-ux" target="_blank" rel="noopener noreferrer"
                class="flex text-lg font-medium p-3 border-2 border-white/60 rounded-full self-end items-center hover:scale-105 transition-transform">
                Abrir case completo
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DotRedIcon from './DotRedIcon.vue'
import CloseIcon from './icons/CloseIcon.vue'
import DotPurpleIcon from './icons/DotPurpleIcon.vue'
import NitroLogoMedium from './icons/NitroLogoMedium.vue'
import NitroOldIcon from './icons/NitroOldIcon.vue'

const isOpen = defineModel<boolean>('open', { default: false })

function close() {
  isOpen.value = false
}
</script>

<style scoped>
.project-glass {
  position: relative;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  box-shadow: 2px 2px 25px rgb(0 0 0 / 0.25);
  background: linear-gradient(120deg,
      rgb(0 0 0 / 0.50) 0%,
      rgb(0 0 0 / 0.70) 50%,
      rgb(0 0 0 / 0.30) 100%);
}

/* Animação de entrada/saída */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .project-glass,
.modal-leave-to .project-glass {
  transform: scale(0.95) translateY(20px);
}
</style>