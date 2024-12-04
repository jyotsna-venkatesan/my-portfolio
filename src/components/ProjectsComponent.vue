<template id="projects">
  <section id="projects" class="bg-[#181818]">
    <div class="relative mx-auto max-w-6xl py-12 sm:py-16">
      <div class="mb-8">
        <h1 class="font-inter font-bold text-[24px] text-[#d3d3d3]">project gallery</h1>
      </div>
      <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="project in projects"
          :key="project.title"
          class="col-span-1 bg-[#d3d3d3] overflow-hidden rounded-2xl"
        >
          <div class="group relative h-48 w-full overflow-hidden">
            <img
              :src="project.imageUrl"
              alt=""
              class="h-full w-full object-cover transition-transform duration-300 grayscale group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-30"
            ></div>
          </div>

          <div class="p-6">
            <!-- Added padding container -->
            <p class="text-[14px] text-[#505050] mb-4">{{ project.description }}</p>

            <div class="flex gap-4">
              <a
                v-if="project.demoUrl"
                :href="project.demoUrl"
                target="_blank"
                class="inline-flex items-center text-[14px] text-[#303030] hover:text-[#505050] transition-colors"
              >
                <span class="mr-2">Live Demo</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>

              <a
                v-if="project.githubUrl"
                :href="project.githubUrl"
                target="_blank"
                class="inline-flex items-center text-[14px] text-[#303030] hover:text-[#505050] transition-colors"
              >
                <span class="mr-2">GitHub</span>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Sporkify',
    description: 'A recipe platform that brings the familiar playlist experience to cooking',
    imageUrl: 'https://i.imgur.com/doq5JTL.jpeg',
    demoUrl:
      'https://www.figma.com/design/AJkkbjMsx7ShPjfLPkXi4p/Sporkify?node-id=0-1&t=oZTY6zLMq0vdyDvu-1',
    githubUrl: 'https://github.com/jyotsna-venkatesan/sporkify',
  },
  {
    title: 'JustDecide',
    description:
      'An application that enables users to make informed decisions to tackle ethical issues.',
    imageUrl: 'https://i.imgur.com/vARGZdX.png',
    demoUrl:
      'https://www.figma.com/design/oIwYiKfwOyKtd9a442e9LA/JustDecide?node-id=55-49&t=qIQx7gHNMmVOvRrE-1',
    githubUrl: 'https://github.com/jyotsna-venkatesan/Just-Decide',
  },

  {
    title: 'FastAPI User Authentification',
    description:
      'A user authentication system built using FastAPI, showcasing secure user registration, login functionality, and user management.',
    imageUrl:
      'data:image/png;base64,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',
    demoUrl: 'https://github.com/jyotsna-venkatesan/CloudFastAPI',
    githubUrl: 'https://github.com/jyotsna-venkatesan/CloudFastAPI',
  },
  {
    title: 'Music from Image Generator',
    description: 'A music generator based on pixel analysis and musical research. ',
    imageUrl: 'https://www.nasa.gov/wp-content/uploads/2022/07/web_first_images_release.png',
    demoUrl: 'https://github.com/jyotsna-venkatesan/music-generation-from-image',
    githubUrl: 'https://github.com/jyotsna-venkatesan/music-generation-from-image',
  },
  {
    title: 'Portfolio Website',
    description:
      'This project is a personal portfolio website built using Vue, showcasing my skills, projects, and professional information.',
    imageUrl: 'https://i.imgur.com/lNYp2hV.png',
    demoUrl: 'https://main--jyotsnav.netlify.app/',
    githubUrl: 'https://github.com/jyotsna-venkatesan/my-portfolio',
  },
  {
    title: 'Multi thread Web Server',
    description: 'This project implements a basic HTTP server using python.',
    imageUrl:
      'data:image/png;base64,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',
    demoUrl: 'https://github.com/jyotsna-venkatesan/Multi-thread-Web-Server',
    githubUrl: 'https://github.com/jyotsna-venkatesan/Multi-thread-Web-Server',
  },
  {
    title: 'FundMap',
    description:
      'A website that visualises the extent and impact of donations based on geographical factors.',
    imageUrl: 'https://i.imgur.com/FgmraNz.jpeg',
    demoUrl: 'https://fundmap.live/',
    githubUrl: 'https://github.com/jyotsna-venkatesan/FundMap',
  },
  {
    title: 'Powehi',
    description:
      'An immersive web application where you explore the universe through the James Webb Space Telescope.',
    imageUrl: 'https://i.imgur.com/FHzQWAj.png',
    demoUrl: 'https://github.com/jyotsna-venkatesan/Powehi',
    githubUrl: 'https://github.com/jyotsna-venkatesan/Powehi',
  },
]
</script>
