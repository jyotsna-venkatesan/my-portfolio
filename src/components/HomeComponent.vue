<template>
  <div class="bg-[#181818] overflow-hidden min-h-[100vh]">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1"></div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 font-inter text-[#F1F1F1]"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            @click="(e) => scrollToSection(e, item.href)"
            class="text-sm/6 font-inter text-[18px] text-[#F1F1F1] hover:text-gray-400"
            >{{ item.name }}</a
          >
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#181818] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-inter text-[#F1F1F1]"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="size-6" aria-hidden="true" />
            </button>
          </div>
          <Mydresumeiv class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-inter text-[#F1F1F1] hover:bg-gray-50"
                  >{{ item.name }}</a
                >
              </div>
              <div class="py-6"></div>
            </div>
          </Mydresumeiv>
        </DialogPanel>
      </Dialog>
    </header>
    <div class="relative isolate px-6 pt-14 lg:px-8 min-h-[90vh]">
      <div class="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
        <div class="flex justify-between items-start gap-8">
          <!-- Left text box -->
          <div class="max-w-md px-3 py-1 text-sm/6 font-inter text-[18px] text-[#F1F1F1]">
            A Computer Science student with a minor in Business Economics at the Hong Kong
            Polytechnic University.
            <br />
            <br />
            In a world of flying cars and talking robots, I hope I get front row seats to
            participant in writing tomorrow's plot twist.
          </div>

          <!-- Right links -->
          <div class="flex flex-col gap-4 text-sm/6 font-inter text-[18px] text-[#F1F1F1]">
            <a
              href="/CV.pdf"
              target="_blank"
              class="flex items-center hover:text-gray-400 transition-colors"
            >
              My resume <span class="ml-2">→</span>
            </a>

            <a
              href="https://www.linkedin.com/in/jyotsna-venkatesan-8684801b8/"
              target="_blank"
              class="flex items-center hover:text-gray-400 transition-colors"
            >
              LinkedIn <span class="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>

      <!-- SVG Name positioning -->
      <div
        class="absolute bottom-20 -z-10 w-full transform translate-y-1/4 left-1/2 -translate-x-1/2 md:left-auto md:-translate-x-0 md:right-20 max-w-[90%] md:max-w-[80%]"
      >
        <img :src="jyotsna" alt="Jyotsna" class="w-full h-auto object-contain" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import jyotsna from '../assets/jyotsna.png'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
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
