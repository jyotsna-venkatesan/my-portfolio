<template id="experience">
  <section id="experience" class="bg-[#CBCBCB]">
    <div class="relative mx-auto max-w-6xl py-12 sm:py-16">
      <div class="mb-8">
        <h1 class="font-inter font-black text-[24px] text-[#303030]">experience</h1>
      </div>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="stat in stats"
          :key="stat.name"
          class="flex flex-col p-6 bg-[#d5d5d5] rounded-lg"
        >
          <div class="flex items-start gap-x-4 mb-3">
            <p class="font-inter font-black text-[16px] text-[#303030] shrink-0">{{ stat.name }}</p>
            <div class="flex flex-col">
              <p class="font-inter font-bold text-[14px] text-[#303030]">{{ stat.value }}</p>
              <p class="font-inter text-[12px] text-[#505050]">{{ stat.date }}</p>
            </div>
          </div>
          <div class="mt-2">
            <p class="font-inter text-[13px] text-[#404040] mb-2">{{ stat.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in stat.skills"
                :key="skill"
                class="px-2 py-1 rounded-full bg-[#303030] text-[#CBCBCB] text-[11px] font-inter"
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
const stats = [
  {
    name: '01',
    value: 'Front-end Web Developer at Sleep Deprived Dreamers',
    date: 'Jun 2021 - Jul 2021',
    description: 'Worked on implementing modern UI/UX designs using Knorishh, HTML, CSS, and JS.',
  },
  {
    name: '02',
    value: 'Founding Developer and Moderator at Auxiliors',
    date: 'May 2021 - Aug 2021',
    description:
      'Established a community-driven mental support platform, while moderating sessions on self-confidence.',
  },
  {
    name: '03',
    value: 'Digital Media Creator at AInspire',
    date: 'Apr 2021 - May 2022',
    description: 'Created engaging digital content to increase brand awareness and engagement.',
  },
  {
    name: '04',
    value: 'Student Assistant at CLP',
    date: 'Feb 2023 - Apr 2023',
    description:
      'Assisted in testing and quality assurance efforts for the CLP Generator Inspection Robot.',
  },
  {
    name: '05',
    value: 'Web/ Front-End Developer Intern at Oxbridge Economics',
    date: 'Jun 2023 - Aug 2023',
    description:
      'Developed and maintained web applications, focusing on user experience and performance optimization.',
  },
  {
    name: '06',
    value: 'UI/UX Designer at PolyU Smart Cities Research Institute',
    date: 'Feb 2024 - May 2024',
    description:
      'Designed and developed user interfaces for the software QC Spatial-3Dx, focusing on accessibility and user experience.',
  },
  {
    name: '07',
    value: 'Quality Assurance Intern at GoGoX',
    date: 'Jun 2024 - Aug 2024',
    description: 'Automated the sanity and regression test suite of the client app.',
  },
  {
    name: '08',
    value: 'QA Automation Intern at GoGoX',
    date: 'Sep 2024 - Dec 2024',
    description:
      'Explored ways to optimise the testing process through means like parallel processing and cloud-based virtual devices. ',
  },
]
</script>
