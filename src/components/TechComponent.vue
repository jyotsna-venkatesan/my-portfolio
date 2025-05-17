<template id="tech">
  <section class="isolate overflow-hidden bg-[#EBEBEA] pt-16 pb-0 mb-0 relative" id="tech" style="font-size: 0;">
    <div class="relative mx-auto max-w-7xl pt-0 px-6 lg:px-8" style="font-size: 16px;">
      <!-- Heading -->
      <div class="relative px-4 md:px-14" ref="imageContainer">
        <div class="flex items-center mb-8">
          <p
            class="font-inter text-[25px] md:text-[45px] font-semibold text-[#030303] text-center md:text-left"
          >
            my technical background
          </p>
        </div>

        <!-- First row - slightly to the left -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:pr-16 mb-12">
          <!-- Software Development -->
          <div
            class="tech-box relative animated-skill"
            :class="{ 'bounce-in': isVisible }"
            :style="{ animationDelay: '0ms' }"
          >
            <div
              class="absolute left-0 top-1/2 transform -translate-y-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#FF0040] to-transparent h-4/5"
            ></div>
            <div class="pl-6">
              <div class="flex items-start mb-3">
                <i class="fas fa-code text-3xl mr-4" style="color: #ff0040"></i>
                <div class="relative">
                  <h2 class="text-[#030303] text-[25px] font-semibold">Software</h2>
                  <div
                    class="h-[10px] w-24 absolute underline-highlight"
                    style="background-color: #ff0040; top: 25px; z-index: -1"
                  ></div>
                  <h2 class="text-[#030303] text-[25px] font-semibold mb-2">Development</h2>
                </div>
              </div>
              <p class="text-[#FF0040] text-[14px] mb-4">
                Python, Java, JavaScript, C++, TypeScript
              </p>
              <div class="flex flex-col">
                <span class="text-[#818181] text-[11px] mb-1">&lt;h3&gt;</span>
                <div class="flex">
                  <div class="w-[1px] bg-[#818181] ml-3 mr-4"></div>
                  <div class="tech-content py-3">
                    <p class="text-[#818181] text-[11px]">
                      I’m comfortable with both object-oriented and functional programming. I enjoy
                      building small systems that just work—and scaling them when they do.
                    </p>
                  </div>
                </div>
                <span class="text-[#818181] text-[11px] mt-1">&lt;/h3&gt;</span>
              </div>
            </div>
          </div>

          <!-- Frontend Engineering -->
          <div
            class="tech-box relative animated-skill"
            :class="{ 'bounce-in': isVisible }"
            :style="{ animationDelay: '200ms' }"
          >
            <div
              class="absolute left-0 top-1/2 transform -translate-y-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#D1AE00] to-transparent h-4/5"
            ></div>
            <div class="pl-6">
              <div class="flex items-start mb-3">
                <i class="fas fa-window-maximize text-3xl mr-4" style="color: #d1ae00"></i>
                <div class="relative">
                  <h2 class="text-[#030303] text-[25px] font-semibold">Frontend</h2>
                  <div
                    class="h-[10px] w-24 absolute underline-highlight"
                    style="background-color: #d1ae00; top: 25px; z-index: -1"
                  ></div>
                  <h2 class="text-[#030303] text-[25px] font-semibold mb-2">Engineering</h2>
                </div>
              </div>
              <p class="text-[#FF0040] text-[14px] mb-4">
                Svelte, React, Vue.js, HTML/CSS, Three.js
              </p>
              <div class="flex flex-col">
                <span class="text-[#818181] text-[11px] mb-1">&lt;h3&gt;</span>
                <div class="flex">
                  <div class="w-[1px] bg-[#818181] ml-3 mr-4"></div>
                  <div class="tech-content py-3">
                    <p class="text-[#818181] text-[11px]">
                      I'm really drawn to the creative side of development. I enjoy working on
                      responsive, interactive UIs and learning new ways to make the web feel alive.
                    </p>
                  </div>
                </div>
                <span class="text-[#818181] text-[11px] mt-1">&lt;/h3&gt;</span>
              </div>
            </div>
          </div>

          <!-- Mobile & Flutter Dev -->
          <div
            class="tech-box relative animated-skill"
            :class="{ 'bounce-in': isVisible }"
            :style="{ animationDelay: '400ms' }"
          >
            <div
              class="absolute left-0 top-1/2 transform -translate-y-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#FF7700] to-transparent h-4/5"
            ></div>
            <div class="pl-6">
              <div class="flex items-start mb-3">
                <i class="fas fa-mobile-alt text-3xl mr-4" style="color: #ff7700"></i>
                <div class="relative">
                  <h2 class="text-[#030303] text-[25px] font-semibold">Mobile &</h2>
                  <div
                    class="h-[10px] w-24 absolute underline-highlight"
                    style="background-color: #ff7700; top: 25px; z-index: -1"
                  ></div>
                  <h2 class="text-[#030303] text-[25px] font-semibold mb-2">Flutter Dev</h2>
                </div>
              </div>
              <p class="text-[#FF0040] text-[14px] mb-4">Flutter, Dart, Swift</p>
              <div class="flex flex-col">
                <span class="text-[#818181] text-[11px] mb-1">&lt;h3&gt;</span>
                <div class="flex">
                  <div class="w-[1px] bg-[#818181] ml-3 mr-4"></div>
                  <div class="tech-content py-3">
                    <p class="text-[#818181] text-[11px]">
                      I've been experimenting with cross-platform mobile development— turning
                      sketches into working apps has been a favorite kind of challenge.
                    </p>
                  </div>
                </div>
                <span class="text-[#818181] text-[11px] mt-1">&lt;/h3&gt;</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Second row - slightly to the right -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:pl-16">
          <!-- Backend & DevOps -->
          <div
            class="tech-box relative animated-skill"
            :class="{ 'bounce-in': isVisible }"
            :style="{ animationDelay: '600ms' }"
          >
            <div
              class="absolute left-0 top-1/2 transform -translate-y-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#ED5353] to-transparent h-4/5"
            ></div>
            <div class="pl-6">
              <div class="flex items-start mb-3">
                <i class="fas fa-server text-3xl mr-4" style="color: #ed5353"></i>
                <div class="relative">
                  <h2 class="text-[#030303] text-[25px] font-semibold">Backend &</h2>
                  <div
                    class="h-[10px] w-24 absolute underline-highlight"
                    style="background-color: #ed5353; top: 25px; z-index: -1"
                  ></div>
                  <h2 class="text-[#030303] text-[25px] font-semibold mb-2">DevOps</h2>
                </div>
              </div>
              <p class="text-[#FF0040] text-[14px] mb-4">
                Node.js, Express.js, MongoDB, MySQL, Docker, GitHub Actions
              </p>
              <div class="flex flex-col">
                <span class="text-[#818181] text-[11px] mb-1">&lt;h3&gt;</span>
                <div class="flex">
                  <div class="w-[1px] bg-[#818181] ml-3 mr-4"></div>
                  <div class="tech-content py-3">
                    <p class="text-[#818181] text-[11px]">
                      I'm learning how to structure APIs, connect databases, and automate things
                      that should never be manual.
                    </p>
                  </div>
                </div>
                <span class="text-[#818181] text-[11px] mt-1">&lt;/h3&gt;</span>
              </div>
            </div>
          </div>

          <!-- AI & Machine Learning -->
          <div
            class="tech-box relative animated-skill"
            :class="{ 'bounce-in': isVisible }"
            :style="{ animationDelay: '800ms' }"
          >
            <div
              class="absolute left-0 top-1/2 transform -translate-y-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#FF8C2E] to-transparent h-4/5"
            ></div>
            <div class="pl-6">
              <div class="flex items-start mb-3">
                <i class="fas fa-brain text-3xl mr-4" style="color: #ff8c2e"></i>
                <div class="relative">
                  <h2 class="text-[#030303] text-[25px] font-semibold">AI &</h2>
                  <div
                    class="h-[10px] w-24 absolute underline-highlight"
                    style="background-color: #ff8c2e; top: 25px; z-index: -1"
                  ></div>
                  <h2 class="text-[#030303] text-[25px] font-semibold mb-2">Machine Learning</h2>
                </div>
              </div>
              <p class="text-[#FF0040] text-[14px] mb-4">
                TensorFlow, PyTorch, scikit-learn, NumPy, Pandas
              </p>
              <div class="flex flex-col">
                <span class="text-[#818181] text-[11px] mb-1">&lt;h3&gt;</span>
                <div class="flex">
                  <div class="w-[1px] bg-[#818181] ml-3 mr-4"></div>
                  <div class="tech-content py-3">
                    <p class="text-[#818181] text-[11px]">
                      Still early in my ML journey, but I’ve built a few models and enjoyed working
                      with real data. I like the mix of math, code, and creative problem solving.
                    </p>
                  </div>
                </div>
                <span class="text-[#818181] text-[11px] mt-1">&lt;/h3&gt;</span>
              </div>
            </div>
          </div>

          <!-- Testing & Automation -->
          <div
            class="tech-box relative animated-skill"
            :class="{ 'bounce-in': isVisible }"
            :style="{ animationDelay: '1000ms' }"
          >
            <div
              class="absolute left-0 top-1/2 transform -translate-y-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#DEC488] to-transparent h-4/5"
            ></div>
            <div class="pl-6">
              <div class="flex items-start mb-3">
                <i class="fas fa-vial text-3xl mr-4" style="color: #dec488"></i>
                <div class="relative">
                  <h2 class="text-[#030303] text-[25px] font-semibold">Testing &</h2>
                  <div
                    class="h-[10px] w-24 absolute underline-highlight"
                    style="background-color: #dec488; top: 25px; z-index: -1"
                  ></div>
                  <h2 class="text-[#030303] text-[25px] font-semibold mb-2">Automation</h2>
                </div>
              </div>
              <p class="text-[#FF0040] text-[14px] mb-4">Selenium, Appium, JUnit, TestNG</p>
              <div class="flex flex-col">
                <span class="text-[#818181] text-[11px] mb-1">&lt;h3&gt;</span>
                <div class="flex">
                  <div class="w-[1px] bg-[#818181] ml-3 mr-4"></div>
                  <div class="tech-content py-3">
                    <p class="text-[#818181] text-[11px]">
                      I’ve seen how good testing saves time and sanity. I’m learning to write
                      smarter tests and build small automations that keep projects on track.
                    </p>
                  </div>
                </div>
                <span class="text-[#818181] text-[11px] mt-1">&lt;/h3&gt;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Second wave image at bottom of section -->
    <div class="wave-bottom">
      <img src="/second wave.png" alt="Wave Background" class="w-full h-auto object-bottom object-cover" style="display: block; margin-bottom: -1px;" />
    </div>
  </section>
</template>

<style scoped>
.tech-box {
  padding: 1.5rem 0;
  transition: all 0.3s ease;
  position: relative;
}

.tech-box:hover {
  transform: translateY(-5px);
}

.tech-box:hover i {
  transform: scale(1.1);
}

.tech-box i {
  transition: transform 0.2s ease;
}

.tech-box .flex {
  position: relative;
}

.wave-bottom {
  position: relative;
  width: 100%;
  display: block;
  line-height: 0;
  z-index: 2;
  font-size: 0; /* Eliminates any potential whitespace */
  overflow: hidden; /* Prevents any unexpected overflow */
}

/* Animation styles */
.animated-skill {
  opacity: 0;
  transform: translateY(40px);
}

.bounce-in {
  animation: bounceIn 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  60% {
    opacity: 1;
    transform: translateY(-10px);
  }
  80% {
    transform: translateY(5px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .tech-box {
    margin-bottom: 1.5rem;
    padding: 1.25rem 0;
  }

  .tech-box > div.pl-4 {
    padding-left: 1rem;
  }

  .underline-highlight {
    width: 80px;
    top: 18px;
  }

  .tech-box i {
    margin-bottom: 0.75rem;
  }
}
</style>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const observer = ref(null)
const imageContainer = ref(null)

onMounted(() => {
  // Create an Intersection Observer to detect when the tech section is visible
  observer.value = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        isVisible.value = true
        // Once animation has triggered, we can disconnect the observer
        observer.value.disconnect()
      }
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.3, // Trigger when 30% of the element is visible
    },
  )

  // Start observing the tech section
  if (imageContainer.value) {
    observer.value.observe(imageContainer.value)
  }
})

onUnmounted(() => {
  // Clean up the observer when component is unmounted
  if (observer.value) {
    observer.value.disconnect()
  }
})
</script>
