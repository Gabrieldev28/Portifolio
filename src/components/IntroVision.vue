<script setup lang="ts">
import { ref, onMounted } from 'vue'
import visionVideo from '@/assets/videos/vision-intro.mp4'

const emit = defineEmits<{
  (e: 'finished'): void
}>()

const videoRef = ref<HTMLVideoElement | null>(null)
const visible = ref(true)
const opacity = ref(1)

const STORAGE_KEY = 'vision-intro-played'

onMounted(() => {
  if (sessionStorage.getItem(STORAGE_KEY)) {
    // Já viu → some imediatamente
    visible.value = false
    emit('finished')
  }
})

const finish = () => {
  sessionStorage.setItem(STORAGE_KEY, 'true')

  // Fade out da intro
  opacity.value = 0

  setTimeout(() => {
    visible.value = false
    emit('finished')
  }, 900)
}

const onTimeUpdate = () => {
  if (!videoRef.value || opacity.value < 1) return

  const timeLeft = videoRef.value.duration - videoRef.value.currentTime

  // Quando fica preto
  if (timeLeft <= 1.3) {
    finish()
  }
}

const onVideoEnded = () => {
  if (opacity.value === 1) {
    finish()
  }
}

const skip = () => {
  if (opacity.value < 1) return
  videoRef.value?.pause()
  finish()
}
</script>

<template>
  <div
    v-if="visible"
    class="fixed inset-0 z-[9999] bg-black transition-opacity duration-900 ease-out"
    :style="{ opacity }"
    @click="skip"
  >
    <video
      ref="videoRef"
      :src="visionVideo"
      autoplay
      muted
      playsinline
      class="w-full h-full object-cover"
      @timeupdate="onTimeUpdate"
      @ended="onVideoEnded"
    />
  </div>
</template>