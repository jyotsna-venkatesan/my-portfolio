<template id="experience">
  <section id="experience" class="bg-[#090909] -translate-y-4">
    <div class="relative mx-auto max-w-6xl py-16 sm:py-24 px-6 lg:px-8">
      <div class="mb-8">
        <p class="font-inter text-[35px] text-[#DF97C0]" style="text-shadow: 0 0 8px #cd348b">
          experience
        </p>
      </div>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="stat in reversedStats"
          :key="stat.name"
          class="flex flex-col p-6 bg-[#090909] bg-opacity-20 border border-[#DF97C0] rounded-lg"
        >
          <div class="flex items-start gap-x-4 mb-3">
            <p class="font-inter font-black text-[16px] text-[#F1F1F1] shrink-0">{{ stat.name }}</p>
            <div class="flex flex-col">
              <p class="font-inter font-bold text-[14px] text-[#F1F1F1]">{{ stat.value }}</p>
              <p class="font-inter text-[12px] text-[#F1F1F1]">{{ stat.date }}</p>
            </div>
          </div>
          <div class="mt-2">
            <p class="font-inter text-[13px] text-[#F1F1F1] mb-2">{{ stat.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in stat.skills"
                :key="skill"
                class="px-2 py-1 rounded-full bg-[#181818] border border-[#DF97C0] text-[#F1F1F1] text-[11px] font-inter"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const stats = [
  {
    name: '01',
    value: 'Front-end Web Developer at Sleep Deprived Dreamers',
    date: 'Jun 2021 - Jul 2021',
    description: 'Worked on implementing modern UI/UX designs using Knorishh, HTML, CSS, and JS.',
    skills: ['HTML', 'CSS', 'JavaScript']
  },
  {
    name: '02',
    value: 'Founding Developer and Moderator at Auxiliors',
    date: 'May 2021 - Aug 2021',
    description:
      'Established a community-driven mental support platform, while moderating sessions on self-confidence.',
    skills: ['Community Building', 'Web Development']
  },
  {
    name: '03',
    value: 'Digital Media Creator at AInspire',
    date: 'Apr 2021 - May 2022',
    description: 'Created engaging digital content to increase brand awareness and engagement.',
    skills: ['Digital Media', 'Content Creation']
  },
  {
    name: '04',
    value: 'Student Assistant at CLP',
    date: 'Feb 2023 - Apr 2023',
    description:
      'Assisted in testing and quality assurance efforts for the CLP Generator Inspection Robot.',
    skills: ['QA Testing', 'Robotics']
  },
  {
    name: '05',
    value: 'Web/ Front-End Developer Intern at Oxbridge Economics',
    date: 'Jun 2023 - Aug 2023',
    description:
      'Developed and maintained web applications, focusing on user experience and performance optimization.',
    skills: ['React', 'JavaScript', 'UI/UX']
  },
  {
    name: '06',
    value: 'UI/UX Designer at PolyU Smart Cities Research Institute',
    date: 'Feb 2024 - May 2024',
    description:
      'Designed and developed user interfaces for the software QC Spatial-3Dx, focusing on accessibility and user experience.',
    skills: ['UI/UX Design', 'Accessibility']
  },
  {
    name: '07',
    value: 'Quality Assurance Intern at GoGoX',
    date: 'Jun 2024 - Aug 2024',
    description: 'Automated the sanity and regression test suite of the client app.',
    skills: ['Test Automation', 'QA']
  },
  {
    name: '08',
    value: 'QA Automation Intern at GoGoX',
    date: 'Sep 2024 - Dec 2024',
    description:
      'Explored ways to optimise the testing process through means like parallel processing and cloud-based virtual devices.',
    skills: ['CI/CD', 'Parallel Testing', 'Cloud Testing']
  },
]

// Compute reversed stats to display from latest to earliest
const reversedStats = computed(() => {
  return [...stats].reverse()
})
</script>
