<template>
  <div>
    <transition name="fade">
      <LoadingComponent v-if="isLoading" :is-loading="isLoading" />
    </transition>
    <div 
      v-show="!isLoading" 
      class="bg-white"
      :class="{ 'content-loaded': !isLoading }"
    >
      <HomeComponent />
      <AboutComponent />
      <TechComponent />
      <ProjectsComponent />
      <OtherProjectsComponent />
      <ExperienceComponent />
      <ContentComponent />
      <FooterComponent />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import LoadingComponent from './components/LoadingComponent.vue'
import HomeComponent from './components/HomeComponent.vue'
import AboutComponent from './components/AboutComponent.vue'
import TechComponent from './components/TechComponent.vue'
import ExperienceComponent from './components/ExperienceComponent.vue'
import ProjectsComponent from './components/ProjectsComponent.vue'
import OtherProjectsComponent from './components/OtherProjectsComponent.vue'
import ContentComponent from './components/ContentComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

const isLoading = ref(true)

// Function to preload key images
const preloadImages = () => {
  // List of key images to preload
  const imagesToPreload = [
    '/bg-image.png',
    '/jyotsna-image.jpg',
    '/yuvoa.png',
    '/vexos.png',
    '/sporkify.png',
    '/zzafari.png',
    '/decodr.png',
    '/powehi.png',
    '/portfolio.png',
    '/online-storage.png',
    '/prequel.png',
    '/music-from-image.png',
    '/Multiserver.png',
    '/coderoad.png',
    '/database-chatbot.png'
  ]
  
  let loadedCount = 0
  const totalImages = imagesToPreload.length
  
  return new Promise((resolve) => {
    // If there are no images, resolve immediately
    if (totalImages === 0) {
      resolve()
      return
    }
    
    // Load each image
    imagesToPreload.forEach(src => {
      const img = new Image()
      
      img.onload = img.onerror = () => {
        loadedCount++
        if (loadedCount === totalImages) {
          resolve()
        }
      }
      
      img.src = src
    })
  })
}

onMounted(async () => {
  // Wait for images to load
  await preloadImages()
  
  // Add a slight delay to ensure smooth transition
  setTimeout(() => {
    isLoading.value = false
  }, 800)
})
</script>

<style scoped>
/* Fade transition for loading screen */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Content appear animation */
.content-loaded {
  animation: fadeIn 0.8s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
