<template id="about">
  <section class="isolate overflow-hidden bg-[#181818] pt-0 pb-0" id="about">
    <div class="relative mx-auto max-w-6xl py-16 sm:py-24 px-6 lg:px-8">
      <figure class="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">
        <!-- Image section with spinning star (hidden on mobile) -->
        <div class="w-1/4 mx-14 relative hidden md:block" ref="imageContainer">
          <img
            :src="sidebg"
            alt="About side image"
            class="w-full h-auto object-contain relative z-10"
          />
          <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20">
            <img
              :src="spin"
              alt="Spinning star"
              class="w-[110%]"
              :style="{
                transform: `translateY(${scrollPosition}px) rotate(${rotationDegree}deg)`,
                transformOrigin: '50% 50%',
                transition: 'transform 0.05s ease-out',
                position: 'absolute',
                top: '0',
                left: '50%',
                marginLeft: '-55%',
              }"
            />
          </div>
        </div>
        <!-- Text section -->
        <div class="lg:max-w-md">
          <p
            class="font-inter text-[35px] text-[#DF97C0] text-right"
            style="text-shadow: 0 0 8px #cd348b"
          >
            about me
          </p>
          <blockquote
            class="font-inter text-right text-[20px] sm:text-[24px] lg:text-[14px] text-[#F1F1F1] py-4 relative"
            ref="paragraphsContainer"
          >
            <!-- First paragraph -->
            <div class="relative">
              <div
                class="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#DF97C0] to-transparent h-full"
                :style="{ opacity: paragraphOpacity[0] }"
              ></div>
              <p
                class="pb-16 transition-opacity duration-700 ease-in-out pr-6"
                :style="{ opacity: paragraphOpacity[0] }"
                ref="firstParagraph"
              >
                Having called Dubai, London, the United States, and six different Indian cities
                home, you might think I'd be confused about where I belong. But my love for masala
                dosa and super-useful talent of sleeping through traffic will tell you I'm from
                <span class="text-[#DF97C0]">Bangalore, the Silicon Valley of India.</span>
              </p>
            </div>

            <!-- Second paragraph -->
            <div class="relative">
              <div
                class="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#DF97C0] to-transparent h-full"
                :style="{ opacity: paragraphOpacity[1] }"
              ></div>
              <p
                class="pb-16 transition-opacity duration-700 ease-in-out pr-6"
                :style="{ opacity: paragraphOpacity[1] }"
                ref="secondParagraph"
              >
                I juggle Kannada, Tamil, Hindi, and barely considerable Arabic to collect secret
                languages to switch to. Each one is a different way to share stories that you don't
                want everyone knowing.
              </p>
            </div>

            <!-- Third paragraph -->
            <div class="relative">
              <div
                class="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#DF97C0] to-transparent h-full"
                :style="{ opacity: paragraphOpacity[2] }"
              ></div>
              <p
                class="transition-opacity duration-700 ease-in-out pr-6"
                :style="{ opacity: paragraphOpacity[2] }"
                ref="thirdParagraph"
              >
                Now I'm here, trying to use code and creativity to help write tomorrow's chapters -
                <span class="text-[#B19EF2]">both mine and others'.</span>
              </p>
            </div>
          </blockquote>
        </div>
      </figure>
    </div>
    <div
      class="w-screen relative left-1/2 right-1/2 -mx-[50vw] -mb-5"
      style="margin-left: calc(-50vw + 0px); margin-right: calc(-50vw + 0px)"
    >
      <img :src="wave" alt="wave bg" class="w-full h-auto object-cover relative z-10" />
    </div>
  </section>
</template>

<script setup>
import sidebg from '/sidebg.png'
import spin from '/spin.png'
import wave from '/wave-divider.png'
import { ref, onMounted, onUnmounted } from 'vue'

// References and state for the spinning star
const imageContainer = ref(null)
const paragraphsContainer = ref(null)
const firstParagraph = ref(null)
const secondParagraph = ref(null)
const thirdParagraph = ref(null)
const scrollPosition = ref(0)
const rotationDegree = ref(0)
const maxScrollDistance = ref(0)
const paragraphOpacity = ref([0, 0, 0]) // Initial opacity for all paragraphs (invisible)

// Calculate the scroll and rotation values based on scroll position
const handleScroll = () => {
  // Get the about section's position
  const aboutSection = document.getElementById('about')
  if (!aboutSection || !imageContainer.value) return

  const containerRect = imageContainer.value.getBoundingClientRect()
  const aboutRect = aboutSection.getBoundingClientRect()

  // Only update if the section is visible
  if (aboutRect.top < window.innerHeight && aboutRect.bottom > 0) {
    // Calculate the maximum scroll distance (height of the sidebg image)
    if (maxScrollDistance.value === 0) {
      maxScrollDistance.value = containerRect.height
    }

    // Get all paragraph elements
    const paragraphs = [firstParagraph.value, secondParagraph.value, thirdParagraph.value]

    // Update paragraph opacities based on their position in the viewport
    paragraphs.forEach((paragraph, index) => {
      if (paragraph) {
        const rect = paragraph.getBoundingClientRect()
        // Calculate how visible the paragraph should be based on its position
        // Fully visible when it's in the middle of the viewport
        const viewportHeight = window.innerHeight
        const paragraphTop = rect.top

        // Fade in as paragraph enters viewport (starting when it's 30% in)
        // Fully visible when it's 70% in the viewport
        const visibilityStart = viewportHeight * 0.9
        const visibilityEnd = viewportHeight * 0.5

        if (paragraphTop < visibilityStart) {
          // Calculate opacity based on position (0 = not visible, 1 = fully visible)
          const visibilityRatio = Math.min(
            1,
            Math.max(0, (visibilityStart - paragraphTop) / (visibilityStart - visibilityEnd)),
          )
          paragraphOpacity.value[index] = visibilityRatio
        } else {
          paragraphOpacity.value[index] = 0
        }
      }
    })

    // For star movement, we'll use the first paragraph as a reference point
    if (firstParagraph.value) {
      const firstParagraphRect = firstParagraph.value.getBoundingClientRect()
      const firstParagraphBottom = firstParagraphRect.bottom

      // Only start moving the star after scrolling past the first paragraph
      if (firstParagraphBottom < window.innerHeight) {
        // Calculate how far we've scrolled past the first paragraph
        const scrollPastFirstParagraph = Math.max(0, window.innerHeight - firstParagraphBottom)

        // Get the star element
        const starElement = imageContainer.value.querySelector('img[alt="Spinning star"]')

        // Check if star is visible (md breakpoint and above)
        if (starElement && window.getComputedStyle(starElement).display !== 'none') {
          const sideImageHeight = imageContainer.value.querySelector(
            'img[alt="About side image"]',
          ).offsetHeight
          const starHeight = starElement.offsetHeight

          // Adjust maxScrollDistance to be image height minus half the star height
          const adjustedMaxDistance = sideImageHeight - starHeight

          // Map this scroll value to a position between 0 and adjustedMaxDistance
          const scrollRatio = Math.min(1, scrollPastFirstParagraph / (containerRect.height * 0.8))
          const newScrollPosition = Math.max(
            0,
            Math.min(adjustedMaxDistance * scrollRatio, adjustedMaxDistance),
          )

          // Update position and rotation only if star is visible
          scrollPosition.value = newScrollPosition

          // Update rotation - clockwise rotation limited to 180 degrees (half circle)
          // Map the scroll position to a rotation between 0 and 180 degrees
          rotationDegree.value = 180 * scrollRatio
        }
      }
    }
  }
}

// Set up and tear down scroll event listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
