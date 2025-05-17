<template>
  <div v-if="isLoading" class="loading-overlay">
    <div class="loading-content">
      <div class="loader">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
      <p class="loading-text text-[14px] font-inter">Gimme a second :)</p>
      <div class="loading-progress-container">
        <div class="loading-progress-bar" :style="{ width: progress + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  isLoading: {
    type: Boolean,
    default: true,
  },
})

// Animated progress bar
const progress = ref(0)
const interval = ref(null)

onMounted(() => {
  // Start the progress animation
  interval.value = setInterval(() => {
    // Slow down as we approach 90%
    if (progress.value < 90) {
      progress.value += Math.random() * 10
    } else {
      progress.value += Math.random() * 0.5
    }

    if (progress.value >= 99) {
      progress.value = 99
      clearInterval(interval.value)
    }
  }, 200)
})

// When loading is complete, jump to 100%
watch(
  () => props.isLoading,
  (newValue) => {
    if (!newValue) {
      progress.value = 100
      if (interval.value) {
        clearInterval(interval.value)
      }
    }
  },
  { immediate: true },
)
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #030303;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.5s ease;
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 90%;
}

.loader {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fd5b62;
  animation: bounce 1.4s infinite ease-in-out both;
}

.circle:nth-child(1) {
  animation-delay: -0.32s;
}

.circle:nth-child(2) {
  animation-delay: -0.16s;
}

.circle:nth-child(4) {
  animation-delay: 0.16s;
}

.loading-text {
  font-family: 'Inter', sans-serif;
  color: #fd5b62;
  letter-spacing: 0.1rem;
  text-align: center;
}

.loading-progress-container {
  width: 250px;
  height: 6px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  overflow: hidden;
}

.loading-progress-bar {
  height: 100%;
  background-color: #fd5b62;
  border-radius: 3px;
  transition: width 0.3s ease;
}

@keyframes bounce {
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}

@media (max-width: 768px) {
  .loading-text {
    font-size: 1.2rem;
  }

  .loading-progress-container {
    width: 200px;
  }

  .circle {
    width: 15px;
    height: 15px;
  }
}
</style>
