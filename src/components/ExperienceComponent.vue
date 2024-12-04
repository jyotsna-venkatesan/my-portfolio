<template id="experience">
  <section id="experience" class="bg-[#CBCBCB]">
    <div class="relative mx-auto max-w-6xl py-12 sm:py-16">
      <div class="mb-8">
        <h1 class="font-inter font-black text-[24px] text-[#303030]">experience</h1>
      </div>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="stat in stats" :key="stat.name" class="flex flex-col p-4">
          <div class="flex items-start gap-x-4">
            <p class="font-inter font-black text-[14px] text-[#303030] shrink-0">{{ stat.name }}</p>
            <p class="font-inter font-normal text-[14px] text-[#303030]">{{ stat.value }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { name: '01', value: 'Front-end Web Developer at Sleep Deprived Dreamers' },
  { name: '02', value: 'Founding Developer and Moderator at Auxiliors' },
  { name: '03', value: 'Digital Media Creator at AInspire' },
  { name: '04', value: 'Student Assistant at CLP' },
  { name: '05', value: 'Web/ Front-End Developer Intern at Oxbridge Economics' },
  { name: '06', value: 'UI/UX Designer at PolyU Smart Cities Research Institute' },
  { name: '07', value: 'Quality Assurance Intern at GoGoX' },
  { name: '08', value: 'QA Automation Intern at GoGoX' },
]
</script>
