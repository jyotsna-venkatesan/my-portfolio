<template>
  <div v-if="isLoading" class="loading-overlay">
    <div class="loading-content">
      <p class="loading-text text-[14px] font-inter">Making it look presentable...</p>
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
  gap: 1.5rem;
  max-width: 90%;
}

.loading-text {
  font-family: 'Inter', sans-serif;
  color: #fd5b62;
  letter-spacing: 0.1rem;
  text-align: center;
}

.loading-progress-container {
  position: relative;
  width: 250px;
  height: 3px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
}

/* Base progress bar with subtle glow */
.loading-progress-bar {
  position: relative;
  height: 100%;
  background-color: #fd5b62;
  border-radius: 2px;
  transition: width 0.3s ease;
  overflow: hidden;
  box-shadow: 0 0 6px 0 rgba(253, 91, 98, 0.6);
}

/* The shine effect */
.loading-progress-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: -50px;
  width: 20px; /* Slightly smaller shine width for thinner bar */
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0)
  );
  animation: progress-shine 2s linear infinite;
  box-shadow: 0 0 10px 3px rgba(255, 255, 255, 0.5); /* Reduced shadow for thinner bar */
}

@keyframes progress-shine {
  0% {
    left: -25px;
  }
  100% {
    left: calc(100% + 25px);
  }
}

@media (max-width: 768px) {
  .loading-text {
    font-size: 1.2rem;
  }

  .loading-progress-container {
    width: 200px;
  }
}
</style>
