<script setup>
import { ref, onMounted } from 'vue'

const sideQuests = [
  {
    year: 3,
    activity: "President of PolyU's Hall Community Service Group (HCSG)",
  },
  {
    year: 2,
    activity: "Powertrain sub-team member of PolyU's E-formula Racing Team",
  },
  {
    year: 2,
    activity: "Vice President of the PolyU SAO's International Student Association",
  },
  {
    year: 1,
    activity: "Mapping team member of PolyU's Robotics Club",
  },
]

// Ref for the section
const experienceSection = ref(null)
// Ref for the introduction block
const introBlock = ref(null)
// Create an array of refs for quest items
const questItems = ref([])

onMounted(() => {
  // Initialize refs array with enough elements
  questItems.value = Array(sideQuests.length)
    .fill()
    .map(() => ref(null))

  // Get all quest item elements after they're rendered
  const questElements = document.querySelectorAll('.quest-item')

  // Apply initial styles to intro block
  if (introBlock.value) {
    introBlock.value.style.opacity = '0'
    introBlock.value.style.transform = 'translateY(20px)'
    introBlock.value.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'
  }

  // Apply initial styles to all quest items
  questElements.forEach((element) => {
    element.style.opacity = '0'
    element.style.transform = 'translateY(30px)'
    element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out'
  })

  // Set up Intersection Observer
  const observerOptions = {
    root: null, // viewport is the root
    rootMargin: '0px',
    threshold: 0.1, // 10% of the item needs to be visible
  }

  // Observer for intro block
  const introObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateY(0)'
        introObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observer for quest items
  const questObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Calculate the delay based on the item's index
        const index = parseInt(entry.target.dataset.index)
        const delay = 0.15 * index // 150ms delay between each item

        // Apply the delay programmatically
        entry.target.style.transitionDelay = `${delay}s`

        // Animate the item
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateY(0)'

        // Stop observing after animation
        questObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Start observing intro block
  if (introBlock.value) {
    introObserver.observe(introBlock.value)
  }

  // Start observing each quest item
  questElements.forEach((item) => {
    questObserver.observe(item)
  })
})
</script>

<template>
  <section id="side-quests" class="bg-[#ebebeb] relative pt-0 mt-0 pb-16" ref="experienceSection">
    <div class="relative">
      <div class="px-6 mx-auto max-w-6xl lg:px-8">
        <div class="flex flex-col md:flex-row md:items-start py-10">
          <!-- Heading on the left -->
          <div class="md:w-1/3 mb-8 md:mb-0">
            <p
              class="font-inter text-[25px] md:text-[45px] font-semibold text-[#030303] md:sticky md:top-8"
            >
              my side quests
            </p>
          </div>

          <!-- side quests timeline on the right -->
          <div class="md:w-2/3 mt-16">
            <div class="mx-auto text-center">
              <blockquote
                ref="introBlock"
                class="text-xl/8 font-inter text-[14px] text-[#cbcbcb] py-4"
                style="line-height: 1.4em"
              >
                <p class="text-[14px] text-[#030303] text-left">
                  As part of the COVID-batch of high-schoolers, I truly learned the value of human
                  connection. At university, I took this lesson to action, aiming to pursue two
                  parallel paths alongside my studies - one for social impact and another for career
                  development. Here's how the social quests went:
                </p>
              </blockquote>

              <!-- Timeline section -->
              <ul role="list" class="space-y-6 mt-8 text-left">
                <li
                  v-for="(quest, idx) in sideQuests"
                  :key="idx"
                  class="relative flex gap-x-4 quest-item"
                  :data-index="idx"
                >
                  <!-- Timeline line -->
                  <div
                    :class="[
                      idx === sideQuests.length - 1 ? 'h-6' : '-bottom-6',
                      'absolute left-0 top-0 flex w-6 justify-center',
                    ]"
                  >
                    <div
                      class="w-[2px] bg-gradient-to-b from-transparent via-[#FF0000] to-transparent"
                    />
                  </div>

                  <!-- Timeline dot -->
                  <div
                    class="relative flex size-6 flex-none items-center justify-center bg-[#ebebeb]"
                  >
                    <div class="size-1.5 rounded-full bg-[#E63104]" />
                  </div>

                  <!-- Content -->
                  <div class="flex-auto">
                    <p class="font-medium text-[#030303]">Year {{ quest.year }}</p>
                    <p class="text-sm text-[#030303]">{{ quest.activity }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animation styles are handled dynamically in the script */
</style>
