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
                {{ t('nitroModal.title') }} •
              </h3>
              <span class="text-sm lg:text-base 2xl:text-xl">
                {{ t('nitroModal.subtitle') }}
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
              <NitroLogoMedium />
              <div class="flex flex-col gap-2 lg:gap-4 tracking-wider">
                <div class="flex gap-2 items-center">
                  <h4 class="text-sm lg:text-xl 2xl:text-3xl font-bold">
                    {{ t('nitroModal.title') }} •
                  </h4>
                  <span class="text-sm lg:text-xl 2xl:text-3xl italic font-extralight">
                    {{ t('nitroModal.period') }}
                  </span>
                </div>
                <p class="portrait:text-[10px] landscape:text-lg lg:text-xl 2xl:text-2xl italic font-extralight">
                  {{ t('nitroModal.tagline') }}
                </p>
              </div>
            </div>

            <!-- Introdução -->
            <div class="flex portrait:flex-col justify-between items-center gap-8 px-8 lg:px-20">
              <div class="flex flex-col gap-2 lg:gap-4 text-xs lg:text-base lg:leading-relaxed 2xl:leading-loose lg:tracking-wider font-extralight">
                <p>{{ t('nitroModal.p1') }}</p>
                <p>{{ t('nitroModal.p2') }}</p>
              </div>
              <img
                src="../assets/images/mockNitro.png"
                alt="celular mockup1"
                class="portrait:w-2/4 landscape:w-1/4"
              />
            </div>

            <!-- Identidade -->
            <div class="flex flex-col px-8 lg:px-20 lg:leading-relaxed 2xl:leading-loose lg:tracking-wider font-extralight gap-2 lg:gap-8 text-xs lg:text-base">
              <h4 class="text-base lg:text-3xl font-bold">
                {{ t('nitroModal.identityTitle') }}
              </h4>
              <p>{{ t('nitroModal.identityP1') }}</p>
              <p>{{ t('nitroModal.identityP2') }}</p>

              <div class="flex portrait:flex-col landscape:flex-row justify-around items-center p-0 lg:p-8">
                <NitroOldIcon />
                <div class="flex flex-col gap-2 lg:gap-4">
                  <p>{{ t('nitroModal.colorsIntro') }}</p>
                  <div class="flex items-center gap-2 lg:gap-4">
                    <DotRedIcon />
                    <span>{{ t('nitroModal.colorRed') }}</span>
                  </div>
                  <div class="flex items-center gap-2 lg:gap-4">
                    <DotPurpleIcon />
                    <span>{{ t('nitroModal.colorPurple') }}</span>
                  </div>
                  <p>{{ t('nitroModal.identityEvolved') }}</p>
                </div>
              </div>

              <p>{{ t('nitroModal.identityP3') }}</p>
            </div>

            <!-- O que representa -->
            <div class="flex flex-col px-8 lg:px-20 py-8 gap-4 lg:gap-8 lg:leading-relaxed 2xl:leading-loose lg:tracking-wider font-extralight text-xs lg:text-base">
              <h4 class="text-base lg:text-3xl font-bold">
                {{ t('nitroModal.representsTitle') }}
              </h4>
              <p>{{ t('nitroModal.representsP1') }}</p>
              <p>{{ t('nitroModal.representsP2') }}</p>
              <p>{{ t('nitroModal.representsP3') }}</p>

              <div class="flex justify-between items-center">
                <img src="../assets/images/mockNitro1.png" alt="" class="w-1/3" />
                <img src="../assets/images/mockNitro2.png" alt="" class="w-1/3" />
                <img src="../assets/images/mockNitro3.png" alt="" class="w-1/3" />
              </div>
            </div>

            <!-- CTA -->
            <div class="flex flex-col px-8 lg:px-20 py-4 lg:py-8 gap-4 lg:gap-8 lg:leading-relaxed 2xl:leading-loose lg:tracking-wider font-extralight text-xs lg:text-base">
              <h4 class="text-base lg:text-3xl font-bold">
                {{ t('nitroModal.exploreTitle') }}
              </h4>
              <p>{{ t('nitroModal.exploreP') }}</p>
              <a
                href="https://www.behance.net/gallery/255728017/Nitro-Do-conceito-ao-ecossistema-de-produto"
                target="_blank"
                rel="noopener noreferrer"
                class="flex text-xs lg:text-lg font-medium p-1 lg:p-3 border-2 border-white/60 rounded-full self-end items-center hover:scale-105 transition-transform"
              >
                {{ t('nitroModal.cta') }}
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
import DotPurpleIcon from './icons/DotPurpleIcon.vue'
import DotRedIcon from './DotRedIcon.vue'
import NitroLogoMedium from './icons/NitroLogoMedium.vue'
import NitroOldIcon from './icons/NitroOldIcon.vue'
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