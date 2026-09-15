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
          class="max-w-360 relative w-10/12 max-h-[80vh] rounded-3xl lg:rounded-4xl project-glass flex flex-col overflow-hidden scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
          @click.stop
        >
          <!-- Header fixo -->
          <div class="flex justify-between items-center px-6 py-3 border-b border-b-white/20 shrink-0">
            <div class="flex gap-2 items-center">
              <h3 class="font-semibold text-sm lg:text-base 2xl:text-xl">
                {{ t('modalLumea.title') }} •
              </h3>
              <span class="text-sm lg:text-base 2xl:text-xl">
                {{ t('modalLumea.subtitle') }}
              </span>
            </div>
            <button @click="close" class="hover:opacity-70 transition-opacity">
              <CloseIcon class="w-2 lg:w-6" />
            </button>
          </div>

          <!-- Conteúdo com scroll interno -->
          <div class="overflow-y-auto flex-1">
            <!-- Header do projeto -->
            <div class="flex px-8 lg:px-20 py-4 lg:py-10 items-center gap-4 lg:gap-12">
              <LumeaLogo class="lg:w-36 lg:h-36" />
              <div class="flex flex-col gap-2 lg:gap-4 tracking-wider">
                <div class="flex gap-2 items-center">
                  <h4 class="text-sm lg:text-2xl 2xl:text-3xl font-bold">
                    {{ t('modalLumea.title') }} •
                  </h4>
                  <span class="text-sm lg:text-2xl 2xl:text-3xl italic font-extralight">
                    {{ t('modalLumea.period') }}
                  </span>
                </div>
                <p class="portrait:text-[10px] landscape:text-lg lg:text-xl 2xl:text-2xl italic font-extralight">
                  {{ t('modalLumea.tagline') }}
                </p>
              </div>
            </div>

            <!-- Introdução -->
            <div class="flex portrait:flex-col justify-between items-center gap-12 px-8 lg:px-20">
              <div class="flex w-full lg:w-4/6 flex-col gap-2 lg:gap-4 text-xs lg:text-base lg:leading-relaxed 2xl:leading-loose lg:tracking-wider font-extralight">
                <p>{{ t('modalLumea.p1') }}</p>
                <p>{{ t('modalLumea.p2') }}</p>
                <p>{{ t('modalLumea.p3') }}</p>
              </div>
              <img
                src="../assets/images/lumeaMock1.png"
                alt="celular mockup1"
                class="portrait:w-2/4 landscape:w-1/4"
              />
            </div>

            <p class="flex portrait:flex-col justify-between items-center gap-8 px-8 lg:px-20 py-4 text-xs lg:text-base lg:leading-relaxed 2xl:leading-loose lg:tracking-wider font-extralight">
              {{ t('modalLumea.p4') }}
            </p>

            <!-- Conceito central -->
            <div class="flex flex-col px-8 lg:px-20 lg:leading-relaxed 2xl:leading-loose lg:tracking-wider font-extralight gap-2 lg:gap-8 text-xs lg:text-base">
              <h4 class="text-base lg:text-3xl font-bold">
                {{ t('modalLumea.conceptTitle') }}
              </h4>
              <p>{{ t('modalLumea.conceptP1') }}</p>

              <div class="flex justify-around items-center p-0 lg:p-8">
                <img
                  src="../assets/images/lumeaMock50.png"
                  alt="imagem celular com 50% de saude financeira"
                  class="w-[25%]"
                />
                <img
                  src="../assets/images/lumeaMock80.png"
                  alt="imagem celular com 80% de saude financeira"
                  class="w-[30%]"
                />
                <img
                  src="../assets/images/lumeaMock20.png"
                  alt="imagem celular com 20% de saude financeira"
                  class="w-[27%]"
                />
              </div>

              <p>{{ t('modalLumea.conceptP2') }}</p>
            </div>

            <!-- O que representa -->
            <div class="flex flex-col px-8 lg:px-20 py-8 gap-4 lg:gap-8 lg:leading-relaxed 2xl:leading-loose lg:tracking-wider font-extralight text-xs lg:text-base">
              <h4 class="text-base lg:text-3xl font-bold">
                {{ t('modalLumea.representsTitle') }}
              </h4>
              <p>{{ t('modalLumea.representsP1') }}</p>
              <p>{{ t('modalLumea.representsP2') }}</p>
            </div>

            <!-- CTA -->
            <div class="flex flex-col px-8 lg:px-20 py-4 lg:py-8 gap-4 lg:gap-8 lg:leading-relaxed 2xl:leading-loose lg:tracking-wider font-extralight text-xs lg:text-base">
              <h4 class="text-base lg:text-3xl font-bold">
                {{ t('modalLumea.exploreTitle') }}
              </h4>
              <p>{{ t('modalLumea.exploreP') }}</p>

              <a
                href="https://www.behance.net/gabriel-ui-ux"
                target="_blank"
                rel="noopener noreferrer"
                class="flex text-xs lg:text-lg font-medium p-1 lg:p-3 border-2 border-white/60 rounded-full self-end items-center hover:scale-105 transition-transform"
              >
                {{ t('modalLumea.cta') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import CloseIcon from './icons/CloseIcon.vue'
import LumeaLogo from './icons/LumeaLogo.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

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
  background: linear-gradient(
    120deg,
    rgb(0 0 0 / 0.5) 0%,
    rgb(0 0 0 / 0.7) 50%,
    rgb(0 0 0 / 0.3) 100%
  );
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