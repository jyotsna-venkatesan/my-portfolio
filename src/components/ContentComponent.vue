<template id="about">
  <section class="isolate overflow-hidden bg-[#181818] px-6 lg:px-8" id="about">
    <div class="relative mx-auto max-w-6xl py-24 sm:py-32">
      <!-- Text section -->
      <div class="mx-auto text-center lg:max-w-2xl">
        <h1 class="font-inter font-black text-[24px] text-[#cbcbcb]">side quests</h1>
        <blockquote
          class="text-xl/8 font-inter text-[14px] text-[#cbcbcb] py-4"
          style="line-height: 1.4em"
        >
          <p class="text-[14px] text-left">
            As part of the COVID-batch of high-schoolers, I truly learned the value of human
            connection. At university, I took this lesson to action, aiming to pursue two parallel
            paths alongside my studies - one for social impact and another for career development.
            Here's how the social quests went:
          </p>
        </blockquote>

        <!-- Timeline section -->
        <ul role="list" class="space-y-6 mt-8 text-left">
          <li v-for="(quest, idx) in sideQuests" :key="idx" class="relative flex gap-x-4">
            <!-- Timeline line -->
            <div
              :class="[
                idx === sideQuests.length - 1 ? 'h-6' : '-bottom-6',
                'absolute left-0 top-0 flex w-6 justify-center',
              ]"
            >
              <div class="w-px bg-[#cbcbcb]" />
            </div>

            <!-- Timeline dot -->
            <div class="relative flex size-6 flex-none items-center justify-center bg-[#181818]">
              <div class="size-1.5 rounded-full bg-[#cbcbcb] ring-1 ring-[#cbcbcb]" />
            </div>

            <!-- Content -->
            <div class="flex-auto">
              <p class="font-medium text-[#cbcbcb]">Year {{ quest.year }}</p>
              <p class="text-sm text-[#9b9b9b]">{{ quest.activity }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
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
</script>
