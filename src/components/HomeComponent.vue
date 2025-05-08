<template>
  <div ref="landingSection" class="overflow-hidden min-h-[100vh] bg-[#181818] bg-cover bg-center bg-no-repeat relative flex flex-col justify-center">
    <div class="absolute inset-0"></div>
    <header class="absolute top-0 left-0 right-0 z-50 flex justify-center">
      <nav class="items-center gap-6 px-6 py-6 w-max hidden lg:flex" aria-label="Global">
        <template v-for="(item, index) in navigation" :key="item.name">
          <a
            :href="item.href"
            @click="(e) => scrollToSection(e, item.href)"
            class="text-[14px] font-inter text-[#DF97C0] hover:text-[#FFE2F3] transition-colors"
          >
            {{ item.name }}
          </a>
          <!-- vertical divider -->
          <span v-if="index < navigation.length - 1" class="h-4 w-px bg-[#DF97C0]"></span>
        </template>
      </nav>

      <!-- Mobile Hamburger Button -->
      <div class="lg:hidden absolute top-4 right-4">
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-md p-2.5 text-[#DF97C0]"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>
      </div>

      <!-- Mobile Menu Drawer -->
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-[#DF97C0] px-6 py-6 ring-1 ring-black/10"
        >
          <div class="flex items-center justify-end">
            <button
              type="button"
              class="rounded-md p-2.5 text-black"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="size-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 space-y-4">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              @click="mobileMenuOpen = false"
              class="block text-base font-inter text-black hover:text-gray-700"
            >
              {{ item.name }}
            </a>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <!-- landing content -->
    <div class="relative mx-auto max-w-5xl py-8 sm:py-16 px-4 sm:px-6">
      <!-- quote with typewriter effect -->
      <h1
        class="font-inter text-[20px] sm:text-[24px] lg:text-[35px] text-[#F1F1F1] flex flex-col"
        style="min-height: 5em"
      >
        <div class="typewriter-container relative" style="height: 100%">
          <span ref="typewriterText"></span>
          <span class="typewriter-cursor">|</span>
        </div>
      </h1>
      <h1
        class="font-inter text-[20px] sm:text-[24px] lg:text-[35px] text-[#DF97C0] mt-2 mb-12 sm:mb-16 animate-fade-in"
        style="text-shadow: 0 0 8px #cd348b"
      >
        - Jyotsna Venkatesan
      </h1>

      <!-- the image part with hearts overlaid -->
      <div class="relative">
        <img
          src="/landing-bg.png"
          alt="holographic background"
          class="w-full mx-auto rounded-sm shadow-lg"
        />

        <!-- hearts positioned with different sizes and positions -->
        <div class="absolute inset-0 flex justify-center">
          <!-- First heart: largest and protruding above the image, tilted right by 5 degrees -->
          <div
            ref="firstHeart"
            class="absolute first-heart"
            style="top: -40px; transform: translateX(-60px) rotate(5deg)"
          >
            <img src="/heart.png" alt="heart" class="w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48" />
          </div>

          <!-- Second heart: medium sized and positioned lower, tilted right by 10 degrees -->
          <div ref="secondHeart" class="absolute second-heart" style="bottom: -20px; transform: rotate(10deg)">
            <img src="/heart.png" alt="heart" class="w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36" />
          </div>

          <!-- Third heart: smallest but at same height as first, tilted left by 12 degrees -->
          <div
            ref="thirdHeart"
            class="absolute third-heart"
            style="top: -20px; transform: translateX(60px) rotate(-12deg)"
          >
            <img src="/heart.png" alt="heart" class="w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32" />
          </div>
        </div>
      </div>

      <!-- lower text and buttons -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        <div>
          <p class="font-inter text-[14px] sm:text-[16px] text-[#F1F1F1] max-w-xs">
            A Computer Science student with a minor in Business Economics at the Hong Kong
            Polytechnic University.
          </p>
        </div>
        <div class="flex flex-col sm:flex-row gap-4 items-start">
          <a
            href="/CV.pdf"
            target="_blank"
            class="holographic-button px-6 py-3 rounded-lg font-inter font-medium text-[14px] bg-[#7462B4] text-white hover:bg-[#3C2B79] transition-colors inline-flex items-center relative overflow-hidden"
          >
            <span class="relative z-10">My Resume <span class="ml-2">→</span></span>
            <span class="holographic-shine"></span>
          </a>
          <a
            href="https://www.linkedin.com/in/jyotsna-venkatesan-8684801b8/"
            target="_blank"
            class="holographic-button px-6 py-3 rounded-lg font-inter font-medium text-[14px] border border-[#7462B4] text-[#f1f1f1] hover:bg-[#3C2B79] hover:text-white transition-colors inline-flex items-center relative overflow-hidden"
          >
            <span class="relative z-10">LinkedIn <span class="ml-2">→</span></span>
            <span class="holographic-shine"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Side-quests', href: '#content' },
  { name: 'Contact', href: '#contact' },
]
const mobileMenuOpen = ref(false)
const typewriterText = ref(null)
const firstHeart = ref(null)
const secondHeart = ref(null)
const thirdHeart = ref(null)
const landingSection = ref(null)
const heartsAnimated = ref(false)

const quoteText =
  "In a world of generative AI and self-improving code, I hope to be at the forefront, engineering the next breakthrough that defines tomorrow's plot twist."

onMounted(() => {
  // Typewriter effect
  let i = 0
  const speed = 20 // typing speed

  function typeWriter() {
    if (i < quoteText.length) {
      if (typewriterText.value) {
        typewriterText.value.textContent += quoteText.charAt(i)
        i++
        setTimeout(typeWriter, speed)
      }
    }
  }

  // start typing effect after a short delay
  setTimeout(() => {
    typeWriter()
  }, 500)
  
  // Add scroll event listener for hearts zoom-out effect
  // This approach will be more reliable than Intersection Observer for this specific effect
  let lastScrollY = window.scrollY
  
  const handleScroll = () => {
    const currentScrollY = window.scrollY
    
    // Check if user is scrolling down and has scrolled past a threshold
    if (currentScrollY > lastScrollY && currentScrollY > 100 && !heartsAnimated.value) {
      console.log('Scrolling down, triggering heart animations!')
      heartsAnimated.value = true
      
      // First heart zooms out to top-left
      if (firstHeart.value) {
        firstHeart.value.classList.add('heart-zoom-out-left')
      }
      
      // Second heart zooms out to bottom
      if (secondHeart.value) {
        secondHeart.value.classList.add('heart-zoom-out-bottom')
      }
      
      // Third heart zooms out to top-right
      if (thirdHeart.value) {
        thirdHeart.value.classList.add('heart-zoom-out-right')
      }
    }
    
    // Reset animation when scrolling back to top
    if (currentScrollY < 50 && heartsAnimated.value) {
      console.log('Scrolled back up, resetting heart animations!')
      heartsAnimated.value = false
      
      if (firstHeart.value) {
        firstHeart.value.classList.remove('heart-zoom-out-left')
      }
      
      if (secondHeart.value) {
        secondHeart.value.classList.remove('heart-zoom-out-bottom')
      }
      
      if (thirdHeart.value) {
        thirdHeart.value.classList.remove('heart-zoom-out-right')
      }
    }
    
    lastScrollY = currentScrollY
  }
  
  // Add scroll event listener with passive option for better performance
  window.addEventListener('scroll', handleScroll, { passive: true })
  
  // Clean up event listener on component unmount
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})

const scrollToSection = (e, href) => {
  e.preventDefault()
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    // Optional: Update URL without the duplicate hash
    window.history.pushState(null, '', href)
  }
}
</script>

<style scoped>
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@keyframes bounce1 {
  0%,
  100% {
    transform: translateY(0) translateX(-60px) rotate(5deg);
  }
  50% {
    transform: translateY(-15px) translateX(-60px) rotate(5deg);
  }
}

@keyframes bounce2 {
  0%,
  100% {
    transform: translateY(0) rotate(10deg);
  }
  50% {
    transform: translateY(-10px) rotate(10deg);
  }
}

@keyframes bounce3 {
  0%,
  100% {
    transform: translateY(0) translateX(60px) rotate(-12deg);
  }
  50% {
    transform: translateY(-12px) translateX(60px) rotate(-12deg);
  }
}

/* Zoom out animations */
@keyframes zoom-out-left {
  0% {
    opacity: 1;
    transform: translateY(0) translateX(-60px) rotate(5deg) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-100px) translateX(-200px) rotate(45deg) scale(0.5);
  }
}

@keyframes zoom-out-bottom {
  0% {
    opacity: 1;
    transform: translateY(0) rotate(10deg) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(200px) rotate(45deg) scale(0.5);
  }
}

@keyframes zoom-out-right {
  0% {
    opacity: 1;
    transform: translateY(0) translateX(60px) rotate(-12deg) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-100px) translateX(200px) rotate(-45deg) scale(0.5);
  }
}

.typewriter-cursor {
  animation: blink 0.7s infinite;
}

.first-heart {
  animation: bounce1 3s ease-in-out infinite;
  transition: all 0.5s ease-out;
}

.second-heart {
  animation: bounce2 2.5s ease-in-out infinite;
  transition: all 0.5s ease-out;
}

.third-heart {
  animation: bounce3 4s ease-in-out infinite;
  transition: all 0.5s ease-out;
}

.heart-zoom-out-left {
  animation: zoom-out-left 1s forwards !important;
}

.heart-zoom-out-bottom {
  animation: zoom-out-bottom 1s forwards !important;
}

.heart-zoom-out-right {
  animation: zoom-out-right 1s forwards !important;
}

/* Larger spacing on bigger screens */
@media (min-width: 768px) {
  @keyframes bounce1-md {
    0%,
    100% {
      transform: translateY(0) translateX(-80px) rotate(5deg);
    }
    50% {
      transform: translateY(-15px) translateX(-80px) rotate(5deg);
    }
  }

  @keyframes bounce3-md {
    0%,
    100% {
      transform: translateY(0) translateX(80px) rotate(-12deg);
    }
    50% {
      transform: translateY(-12px) translateX(80px) rotate(-12deg);
    }
  }

  @keyframes zoom-out-left-md {
    0% {
      opacity: 1;
      transform: translateY(0) translateX(-80px) rotate(5deg) scale(1);
    }
    100% {
      opacity: 0;
      transform: translateY(-150px) translateX(-300px) rotate(45deg) scale(0.5);
    }
  }

  @keyframes zoom-out-right-md {
    0% {
      opacity: 1;
      transform: translateY(0) translateX(80px) rotate(-12deg) scale(1);
    }
    100% {
      opacity: 0;
      transform: translateY(-150px) translateX(300px) rotate(-45deg) scale(0.5);
    }
  }

  .first-heart {
    animation: bounce1-md 3s ease-in-out infinite;
  }

  .third-heart {
    animation: bounce3-md 4s ease-in-out infinite;
  }
  
  .heart-zoom-out-left {
    animation: zoom-out-left-md 1s forwards !important;
  }
  
  .heart-zoom-out-right {
    animation: zoom-out-right-md 1s forwards !important;
  }
}

@media (min-width: 1024px) {
  @keyframes bounce1-lg {
    0%,
    100% {
      transform: translateY(0) translateX(-120px) rotate(5deg);
    }
    50% {
      transform: translateY(-15px) translateX(-120px) rotate(5deg);
    }
  }

  @keyframes bounce3-lg {
    0%,
    100% {
      transform: translateY(0) translateX(120px) rotate(-12deg);
    }
    50% {
      transform: translateY(-12px) translateX(120px) rotate(-12deg);
    }
  }
  
  @keyframes zoom-out-left-lg {
    0% {
      opacity: 1;
      transform: translateY(0) translateX(-120px) rotate(5deg) scale(1);
    }
    100% {
      opacity: 0;
      transform: translateY(-200px) translateX(-400px) rotate(45deg) scale(0.5);
    }
  }

  @keyframes zoom-out-right-lg {
    0% {
      opacity: 1;
      transform: translateY(0) translateX(120px) rotate(-12deg) scale(1);
    }
    100% {
      opacity: 0;
      transform: translateY(-200px) translateX(400px) rotate(-45deg) scale(0.5);
    }
  }

  .first-heart {
    animation: bounce1-lg 3s ease-in-out infinite;
  }

  .third-heart {
    animation: bounce3-lg 4s ease-in-out infinite;
  }
  
  .heart-zoom-out-left {
    animation: zoom-out-left-lg 1s forwards !important;
  }
  
  .heart-zoom-out-right {
    animation: zoom-out-right-lg 1s forwards !important;
  }
}

/* Holographic button styles */
@keyframes shine {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(30deg);
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(30deg);
  }
}

.holographic-button {
  position: relative;
  overflow: hidden;
}

.holographic-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.2) 25%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: translateX(-100%) translateY(-100%) rotate(30deg);
  animation: shine 3s infinite;
  pointer-events: none;
  z-index: 1;
}

.holographic-button:hover::before {
  animation: shine 1.5s infinite;
}
</style>
