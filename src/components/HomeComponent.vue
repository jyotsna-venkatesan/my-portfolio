<template>
  <div class="overflow-hidden min-h-[100vh] bg-[#181818] bg-cover bg-center bg-no-repeat relative">
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
    <div class="relative mx-auto max-w-5xl py-12 sm:py-16 px-4 sm:px-6">
      <!-- quote -->
      <h1 class="font-inter text-[20px] sm:text-[24px] lg:text-[35px] text-[#F1F1F1] mt-8">
        In a world of generative AI and self-improving code, I hope to be at the forefront,
        engineering the next breakthrough that defines tomorrow’s plot twist.
      </h1>
      <h1
        class="font-inter text-[20px] sm:text-[24px] lg:text-[35px] text-[#DF97C0] mt-2"
        style="text-shadow: 0 0 8px #cd348b"
      >
        - Jyotsna Venkatesan
      </h1>

      <!-- the image part -->
      <img
        src="/landing-bg.png"
        alt="holographic background"
        class="mt-8 w-full mx-auto rounded-sm shadow-lg"
      />

      <!-- bouncing hearts -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
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
