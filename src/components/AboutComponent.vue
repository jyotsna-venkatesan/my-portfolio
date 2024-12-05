<template id="about">
  <section class="isolate overflow-hidden bg-[#D3D3D3] px-6 lg:px-8" id="about">
    <div class="relative mx-auto max-w-6xl py-24 sm:py-32">
      <figure class="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">
        <!-- Text section -->
        <div class="lg:max-w-md">
          <h1 class="font-inter font-black text-[24px] font-[#303030]">about me</h1>
          <blockquote
            class="text-xl/8 font-inter text-[14px] text-[#303030] py-4"
            style="line-height: 1.4em"
          >
            <p class="text-[14px]">
              Having called Dubai, London, the United States, and six different Indian cities home,
              you might think I'd be confused about where I belong. But my love for masala dosa and
              super-useful talent of sleeping through traffic will tell you I'm from Bangalore, the
              Silicon Valley of India.
              <br />
              <br />
              I juggle Kannada, Tamil, Hindi, and barely considerable Arabic to collect secret
              languages to switch to. Each one is a different way to share stories that you don't
              want everyone knowing.
              <br />
              <br />
              Now I'm here, trying to use code and creativity to help write tomorrow's chapters -
              both mine and others'.
            </p>
          </blockquote>
        </div>
        <!-- Image section -->
        <div class="w-full lg:w-[600px]">
          <img :src="image" alt="Jyotsna's Space" class="w-full h-auto object-contain" />
        </div>
      </figure>
    </div>
  </section>
</template>

<script setup>
import image from '../assets/image.png'
</script>
