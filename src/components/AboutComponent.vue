<template id="about">
  <section
    class="isolate overflow-hidden bg-[#EBEBEA] pt-0 pb-0 -mt-6 md:-mt-8 lg:-mt-10"
    id="about"
  >
    <div class="relative mx-auto max-w-7xl pt-0 px-6 mb-32 lg:px-8">
      <figure class="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">
        <!-- Heading and combined content section -->
        <div class="relative px-4 md:px-14" ref="imageContainer">
          <p
            class="font-inter font-semibold text-[25px] md:text-[45px] text-[#030303] text-center md:text-left mb-6"
          >
            about me
          </p>

          <!-- Image shown only on desktop -->
          <div class="hidden md:flex md:justify-start">
            <img
              src="/jyotsna-image.jpg"
              alt="Jyotsna"
              class="w-64 h-64 object-cover rounded-[5%] shadow-lg"
            />
          </div>
        </div>
        <!-- Text section -->
        <div class="lg:max-w-9xl lg:mt-16">
          <blockquote
            class="font-inter text-right text-[14px] lg:text-[14px] text-[#F1F1F1] py-4 relative"
            ref="paragraphsContainer"
          >
            <!-- First paragraph -->
            <div class="relative">
              <div
                class="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#FF0000] to-transparent h-full"
                :style="{ opacity: paragraphOpacity[0] }"
              ></div>
              <p
                class="pb-16 text-[#030303] transition-opacity duration-700 ease-in-out pr-6"
                :style="{ opacity: paragraphOpacity[0] }"
                ref="firstParagraph"
              >
                Having called Dubai, London, the United States, and six different Indian cities
                home, you might think I'd be confused about where I belong. But my love for masala
                dosa and super-useful talent of sleeping through traffic will tell you I'm from
                <span class="text-[#FD5B62]">Bangalore, the Silicon Valley of India.</span>
              </p>
            </div>

            <!-- Second paragraph -->
            <div class="relative">
              <div
                class="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#FF0000] to-transparent h-full"
                :style="{ opacity: paragraphOpacity[1] }"
              ></div>
              <p
                class="pb-16 text-[#030303] transition-opacity duration-700 ease-in-out pr-6"
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
                class="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#FF0000] to-transparent h-full"
                :style="{ opacity: paragraphOpacity[2] }"
              ></div>
              <p
                class="transition-opacity text-[#030303] duration-700 ease-in-out pr-6"
                :style="{ opacity: paragraphOpacity[2] }"
                ref="thirdParagraph"
              >
                Now I'm here, trying to use code and creativity to help write tomorrow's chapters -
                <span class="text-[#FD5B62]">both mine and others'.</span>
              </p>
            </div>
          </blockquote>

          <!-- Download Resume Button -->
          <div class="flex justify-end mb-8 mt-6 pr-2">
            <a
              href="/CV.pdf"
              download
              class="font-inter bg-[#E63104] hover:bg-[#e9484f] text-white py-2 px-6 rounded-md transition-colors duration-300 flex items-center shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              My resume
            </a>
          </div>

          <!-- Image shown only on mobile, after text -->
          <div class="flex justify-center md:hidden mt-6 mb-8">
            <img
              src="/jyotsna-image.jpg"
              alt="Jyotsna"
              class="w-64 h-64 object-cover rounded-[5%] shadow-lg"
            />
          </div>
        </div>
      </figure>
    </div>
    <!-- Spinner at the bottom of the about section -->
    <div class="spinner-container">
      <img src="/spinner.png" alt="Spinning icon" class="spinner" />
    </div>
  </section>
</template>

<style scoped>
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -40px;
  position: relative;
  z-index: 20;
}

.spinner {
  width: 80px;
  height: 80px;
  animation: spin 8s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

// References and state for the spinning star
const imageContainer = ref(null)
const paragraphsContainer = ref(null)
const firstParagraph = ref(null)
const secondParagraph = ref(null)
const thirdParagraph = ref(null)
const scrollPosition = ref(0)
const rotationDegree = ref(0)
const maxScrollDistance = ref(0)
const paragraphOpacity = ref([1, 1, 1]) // Initialize paragraphs as visible

// Calculate the scroll and rotation values based on scroll position
const handleScroll = () => {
  // Get the about section's position
  const aboutSection = document.getElementById('about')
  if (!aboutSection || !imageContainer.value) return

  const containerRect = imageContainer.value.getBoundingClientRect()

  // Calculate the maximum scroll distance
  if (maxScrollDistance.value === 0) {
    maxScrollDistance.value = containerRect.height
  }

  // Get all paragraph elements
  const paragraphs = [firstParagraph.value, secondParagraph.value, thirdParagraph.value]

  // Keep paragraphs visible on initial load
  // But start tracking visibility based on scroll after user starts scrolling
  if (window.scrollY > 10) {
    // Update paragraph opacities based on their position in the viewport
    paragraphs.forEach((paragraph, index) => {
      if (paragraph) {
        const rect = paragraph.getBoundingClientRect()
        const viewportHeight = window.innerHeight
        const paragraphTop = rect.top

        // For mobile devices, use a different calculation
        if (window.innerWidth < 768) {
          // On mobile: if text is in viewport, keep it visible
          if (paragraphTop < viewportHeight * 0.8) {
            paragraphOpacity.value[index] = 1
          } else {
            // Only fade out if it's scrolled significantly out of view
            paragraphOpacity.value[index] = Math.max(
              0,
              1 - (paragraphTop - viewportHeight * 0.8) / viewportHeight,
            )
          }
        } else {
          // Desktop behavior
          const visibilityStart = viewportHeight * 0.9
          const visibilityEnd = viewportHeight * 0.5

          if (paragraphTop < visibilityStart) {
            // Calculate opacity based on position
            const visibilityRatio = Math.min(
              1,
              Math.max(0, (visibilityStart - paragraphTop) / (visibilityStart - visibilityEnd)),
            )
            paragraphOpacity.value[index] = visibilityRatio
          } else {
            paragraphOpacity.value[index] = 0
          }
        }
      }
    })
  } else {
    // On initial load, ensure all paragraphs are visible
    paragraphs.forEach((_, index) => {
      paragraphOpacity.value[index] = 1
    })
  }

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
        const sideImage = imageContainer.value.querySelector('img[alt="About side image"]')

        if (sideImage) {
          const sideImageHeight = sideImage.offsetHeight
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

          // Update rotation - clockwise rotation limited to 180 degrees
          rotationDegree.value = 180 * scrollRatio
        }
      }
    }
  }
}

// Set up listeners and initialize
onMounted(() => {
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll, { passive: true })

  // Force initial visibility
  nextTick(() => {
    // Set all paragraphs initially visible
    for (let i = 0; i < 3; i++) {
      paragraphOpacity.value[i] = 1
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
