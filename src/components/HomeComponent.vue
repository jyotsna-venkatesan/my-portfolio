<template>
  <div
    ref="landingSection"
    class="overflow-x-hidden bg-[#030303] relative flex flex-col justify-start pb-0 overflow-visible mb-0"
  >
    <div class="absolute inset-0"></div>

    <!-- Vertical background lines - only visible on screens 1024px+ with animation -->
    <div class="absolute inset-x-0 top-[72px] z-10 w-full px-20 lg:px-32 hidden lg:block">
      <div class="relative w-full flex justify-between mx-auto max-w-7xl">
        <!-- First line (left outer) - extends 1/2 into hero image -->
        <div class="line-container">
          <div class="vertical-line line-animate-1 h-[50vh]"></div>
        </div>

        <!-- Second line (left inner) - extends 1/3 into hero image -->
        <div class="line-container">
          <div class="vertical-line line-animate-2 h-[28vh]"></div>
        </div>

        <!-- Third line (right inner) - extends 1/3 into hero image -->
        <div class="line-container">
          <div class="vertical-line line-animate-3 h-[28vh]"></div>
        </div>

        <div class="line-container">
          <div class="vertical-line line-animate-3 h-[28vh]"></div>
        </div>

        <!-- Fourth line (right outer) - extends 1/2 into hero image -->
        <div class="line-container">
          <div class="vertical-line line-animate-4 h-[50vh]"></div>
        </div>
      </div>
    </div>
    <header class="absolute top-0 left-0 right-0 z-50 flex w-full">
      <nav
        class="items-center bg-[#030303] px-6 py-6 w-full hidden lg:flex justify-between"
        aria-label="Global"
      >
        <template v-for="item in navigation" :key="item.name">
          <a
            :href="item.href"
            @click="(e) => scrollToSection(e, item.href)"
            class="text-[14px] font-inter text-[#DFA497] hover:text-[#FFEAE2] transition-colors duration-300"
          >
            {{ item.name }}
          </a>
        </template>
      </nav>

      <!-- mobile hamburger button -->
      <div class="lg:hidden absolute top-4 right-4">
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-md p-2.5 text-[#DFA497]"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>
      </div>

      <!-- mobile menu -->
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-[#DFA497] px-6 py-6 ring-1 ring-black/10"
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
              @click="(e) => scrollToSection(e, item.href)"
              class="block text-base font-inter text-black hover:text-gray-700"
            >
              {{ item.name }}
            </a>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <!-- landing content -->
    <div class="relative w-full flex flex-col items-center mt-16 lg:mt-32">
      <div class="px-6 lg:px-12 mt-4 lg:mt-20 z-20 relative">
        <p
          class="text-[14px] font-inter text-[#FD5B62] text-center lg:text-[14px] bg-[#030303] p-4"
        >
          Penultimate CS Student @ HK PolyU
        </p>
      </div>

      <img
        src="/bg-image.png"
        alt="Hero background"
        class="w-full h-auto object-contain sm:object-cover object-top z-0 mb-0"
        style="pointer-events: none"
      />
    </div>
    <!-- No bottom padding -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'about me', href: '#about' },
  { name: 'my technical background', href: '#tech' },
  { name: 'my favorite projects', href: '#projects' },
  { name: 'other projects', href: '#other-projects' },
  { name: 'my experience', href: '#experience' },
  { name: 'side quests', href: '#side-quests' },
  { name: 'contact me!', href: '#contact' },
]
const mobileMenuOpen = ref(false)

// Function to handle smooth scrolling to sections
const scrollToSection = (e, sectionId) => {
  e.preventDefault()
  const element = document.querySelector(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    mobileMenuOpen.value = false // Close mobile menu if open
  }
}
</script>

<style scoped>
.line-container {
  position: relative;
  overflow: hidden;
}

.vertical-line {
  width: 1px;
  background-color: #696969;
  position: relative;
  transform: scaleY(0);
  transform-origin: top;
  opacity: 0.7;
  overflow: hidden; /* Contains the shine effect */
}

.line-animate-1 {
  animation: grow-line 1.2s ease forwards;
}

.line-animate-2 {
  animation: grow-line 0.8s ease forwards 0.2s;
}

.line-animate-3 {
  animation: grow-line 0.8s ease forwards 0.4s;
}

.line-animate-4 {
  animation: grow-line 1.2s ease forwards 0.6s;
}

/* Growing animation */
@keyframes grow-line {
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
}

/* Add shine effect to each line */
.vertical-line::after {
  content: '';
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 25px; /* Fixed height for shine effect */
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.8), transparent);
  animation-duration: 4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

/* Line-specific shine animations */
.line-animate-1::after {
  animation-name: shine-effect-1;
  animation-delay: 1s;
}

.line-animate-2::after {
  animation-name: shine-effect-2;
  animation-delay: 2s;
}

.line-animate-3::after {
  animation-name: shine-effect-3;
  animation-delay: 3s;
}

.line-animate-4::after {
  animation-name: shine-effect-4;
  animation-delay: 4s;
}

/* Specific animations for each line type to ensure precise control */
@keyframes shine-effect-1 {
  0% {
    top: -25px;
  }
  100% {
    top: calc(50vh); /* Full height of tall lines */
  }
}

@keyframes shine-effect-2 {
  0% {
    top: -25px;
  }
  100% {
    top: calc(28vh - 25px); /* Exactly the height of shorter lines */
  }
}

@keyframes shine-effect-3 {
  0% {
    top: -25px;
  }
  100% {
    top: calc(28vh - 25px); /* Exactly the height of shorter lines */
  }
}

@keyframes shine-effect-4 {
  0% {
    top: -25px;
  }
  100% {
    top: calc(50vh); /* Full height of tall lines */
  }
}
</style>
