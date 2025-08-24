<template>
  <section id="projects" class="project-container">
    <!-- Background color blobs container -->
    <div class="blobs-container">
      <!-- Blobs for Project 1 -->
      <div
        class="blob-group"
        :class="{
          active: activeProjectIndex === 0,
          transitioning: isTransitioning && (activeProjectIndex === 0 || activeProjectIndex === 1),
        }"
      >
        <div class="blob blob-1" :style="{ background: projectColors[0].blob1Color }"></div>
        <div class="blob blob-2" :style="{ background: projectColors[0].blob2Color }"></div>
        <div class="blob blob-3" :style="{ background: projectColors[0].blob3Color }"></div>
      </div>

      <!-- Blobs for Project 2 -->
      <div
        class="blob-group"
        :class="{
          active: activeProjectIndex === 1,
          transitioning: isTransitioning && (activeProjectIndex === 1 || activeProjectIndex === 2),
        }"
      >
        <div class="blob blob-1" :style="{ background: projectColors[1].blob1Color }"></div>
        <div class="blob blob-2" :style="{ background: projectColors[1].blob2Color }"></div>
        <div class="blob blob-3" :style="{ background: projectColors[1].blob3Color }"></div>
      </div>

      <!-- Blobs for Project 3 -->
      <div
        class="blob-group"
        :class="{
          active: activeProjectIndex === 2,
          transitioning: isTransitioning && (activeProjectIndex === 2 || activeProjectIndex === 3),
        }"
      >
        <div class="blob blob-1" :style="{ background: projectColors[2].blob1Color }"></div>
        <div class="blob blob-2" :style="{ background: projectColors[2].blob2Color }"></div>
        <div class="blob blob-3" :style="{ background: projectColors[2].blob3Color }"></div>
      </div>

      <!-- Blobs for Project 4 -->
      <div
        class="blob-group"
        :class="{
          active: activeProjectIndex === 3,
          transitioning: isTransitioning && (activeProjectIndex === 3 || activeProjectIndex === 4),
        }"
      >
        <div class="blob blob-1" :style="{ background: projectColors[3].blob1Color }"></div>
        <div class="blob blob-2" :style="{ background: projectColors[3].blob2Color }"></div>
        <div class="blob blob-3" :style="{ background: projectColors[3].blob3Color }"></div>
      </div>

      <!-- Blobs for Project 5 -->
      <div
        class="blob-group"
        :class="{
          active: activeProjectIndex === 4,
          transitioning: isTransitioning && activeProjectIndex === 4,
        }"
      >
        <div class="blob blob-1" :style="{ background: projectColors[4].blob1Color }"></div>
        <div class="blob blob-2" :style="{ background: projectColors[4].blob2Color }"></div>
        <div class="blob blob-3" :style="{ background: projectColors[4].blob3Color }"></div>
      </div>
    </div>

    <div class="projects-wrapper">
      <!-- Project heading that only shows within this section -->
      <div class="projects-heading w-full">
        <div class="max-w-6xl mx-auto flex items-center mb-8 px-4 md:px-6">
          <div class="relative">
            <p class="font-inter text-[25px] md:text-[45px] font-semibold text-[#EBEBEA] text-left">
              my favorite projects
            </p>
          </div>
        </div>
      </div>

      <!-- Project 1 -->
      <div
        class="project-section"
        :data-bg-color="projectColors[0].bg"
        :data-text-color="projectColors[0].text"
        :data-shadow-color="projectColors[0].shadow"
        data-project-index="0"
      >
        <div class="project-content">
          <div class="project-image">
            <img src="/yuvoa.png" alt="AI-Powered Social Media Analytics Dashboard" />
          </div>
          <div class="project-info">
            <h2 class="project-title">Yuvoa</h2>
            <p class="project-description">
              A collaborative space for student teams to manage projects, share progress, and
              actually enjoy working together.
            </p>
            <div class="tech-stack">
              <span>Svelte</span>
              <span>Gleam</span>
            </div>
            <div class="project-links">
              <a href="https://github.com/jyotsna-venkatesan/yuvoa" class="project-link"
                >Go to GitHub →</a
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Project 2 -->
      <div
        class="project-section"
        :data-bg-color="projectColors[1].bg"
        :data-text-color="projectColors[1].text"
        :data-shadow-color="projectColors[1].shadow"
        data-project-index="1"
      >
        <div class="project-content">
          <div class="project-info">
            <h2 class="project-title">Orbityr</h2>
            <p class="project-description">
              A location intelligence system that tells you exactly where to place anything -
              whether it’s a retail store, an EV charger, or a defense asset. Powered by the AI
              analysis of Satellite Data, Foot traffic patterns, Demographics, and Infrastructure
              Data. A Microfund Shortlisted Idea.
            </p>
            <div class="tech-stack">
              <span>Svelte</span>
              <span>MCP</span>
              <span>OpenAI</span>
              <span>Uber H3</span>
            </div>
            <div class="project-links">
              <a href="https://github.com/jyotsna-venkatesan/vexos" class="project-link"
                >Go to GitHub →</a
              >
              <a href="https://www.vexos.space/" class="project-link">Check it out →</a>
            </div>
          </div>
          <div class="project-image">
            <img src="/vexos.png" alt="E-Commerce Marketplace Platform" />
          </div>
        </div>
      </div>

      <!-- Project 3 -->
      <div
        class="project-section"
        :data-bg-color="projectColors[2].bg"
        :data-text-color="projectColors[2].text"
        :data-shadow-color="projectColors[2].shadow"
        data-project-index="2"
      >
        <div class="project-content">
          <div class="project-image">
            <img src="/sporkify.png" alt="Smart Task Management Mobile App" />
          </div>
          <div class="project-info">
            <h2 class="project-title">Sporkify</h2>
            <p class="project-description">
              A recipe platform that brings the familiar playlist experience to cooking - discover,
              collect, and share recipes based on your mood, ingredients, and cooking vibe!
            </p>
            <div class="tech-stack">
              <span>Vue.js</span>
              <span>Tailwind CSS</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>Better-SQLite3</span>
              <span>Multer</span>
              <span>Bcrypt</span>
              <span>CORS</span>
            </div>
            <div class="project-links">
              <a href="https://github.com/jyotsna-venkatesan/sporkify" class="project-link"
                >Go to GitHub →</a
              >
              <a href="https://web-production-6c51.up.railway.app/" class="project-link"
                >Check it out →</a
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Project 4 -->
      <div
        class="project-section"
        :data-bg-color="projectColors[3].bg"
        :data-text-color="projectColors[3].text"
        :data-shadow-color="projectColors[3].shadow"
        data-project-index="3"
      >
        <div class="project-content">
          <div class="project-info">
            <h2 class="project-title">Zzafari</h2>
            <p class="project-description">
              A cozy sleep tracker mobile app that rewards your sleep with animal companions in a
              growing virtual world.
            </p>
            <div class="tech-stack">
              <span>SwiftUI</span>
              <span>Swift</span>
              <span>Xcode</span>
            </div>
            <div class="project-links">
              <a href="https://github.com/jyotsna-venkatesan/Zzzafari" class="project-link"
                >Go to GitHub →</a
              >
            </div>
          </div>
          <div class="project-image">
            <img src="/zzafari.png" alt="Zzafari" class="zzafari-image" />
          </div>
        </div>
      </div>

      <!-- Project 5 -->
      <div
        class="project-section"
        :data-bg-color="projectColors[4].bg"
        :data-text-color="projectColors[4].text"
        :data-shadow-color="projectColors[4].shadow"
        data-project-index="4"
      >
        <div class="project-content">
          <div class="project-image">
            <img src="/blend.png" alt="Blockchain-Based Supply Chain Tracking" />
          </div>
          <div class="project-info">
            <h2 class="project-title">Blend</h2>
            <p class="project-description">
              Blend is an interactive project designed to educate users about the rich history and
              cultural significance of coffee. Through a hands-on, step-by-step coffee-making
              experience, users not only learn how to brew their perfect cup but also discover the
              fascinating stories behind one of the world's most beloved beverages.
            </p>
            <div class="tech-stack">
              <span>SvelteKit</span>
              <span>TailwindCSS</span>
              <span>Custom Audio</span>
            </div>
            <div class="project-links">
              <a href="https://github.com/jyotsna-venkatesan/blend" class="project-link"
                >Go to GitHub →</a
              >
              <a href="https://blend-coffee.netlify.app/" class="project-link">Check it out →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Define project color schemes with blob colors
const projectColors = ref([
  {
    bg: '#030303', // dark gray
    text: '#DF97C0',
    shadow: '0 0 8px #cd348b',
    blob1Color:
      'radial-gradient(circle at center, rgba(223, 151, 192, 0.8) 10%, rgba(223, 151, 192, 0) 70%)',
    blob2Color:
      'radial-gradient(circle at center, rgba(205, 52, 139, 0.7) 10%, rgba(205, 52, 139, 0) 70%)',
    blob3Color:
      'radial-gradient(circle at center, rgba(255, 0, 64, 0.6) 10%, rgba(255, 0, 64, 0) 70%)',
  },
  {
    bg: '#75272C', // red
    text: '#64FFDA',
    shadow: '0 0 8px #00C7B7',
    blob1Color:
      'radial-gradient(circle at center, rgba(239, 177, 101, 0.85) 10%, rgba(239, 177, 101, 0) 70%)',
    blob2Color:
      'radial-gradient(circle at center, rgba(255, 140, 0, 0.75) 10%, rgba(255, 140, 0, 0) 70%)',
    blob3Color:
      'radial-gradient(circle at center, rgba(100, 255, 218, 0.7) 10%, rgba(100, 255, 218, 0) 70%)',
  },
  {
    bg: '#4D3F5F', // purple
    text: '#FFA07A',
    shadow: '0 0 8px #FF7F50',
    blob1Color:
      'radial-gradient(circle at center, rgba(255, 160, 122, 0.85) 10%, rgba(255, 160, 122, 0) 70%)',
    blob2Color:
      'radial-gradient(circle at center, rgba(255, 127, 80, 0.75) 10%, rgba(255, 127, 80, 0) 70%)',
    blob3Color:
      'radial-gradient(circle at center, rgba(221, 120, 255, 0.65) 10%, rgba(221, 120, 255, 0) 70%)',
  },
  {
    bg: '#22462D', // green
    text: '#F8D56B',
    shadow: '0 0 8px #F1C232',
    blob1Color:
      'radial-gradient(circle at center, rgba(248, 213, 107, 0.85) 10%, rgba(248, 213, 107, 0) 70%)',
    blob2Color:
      'radial-gradient(circle at center, rgba(241, 194, 50, 0.75) 10%, rgba(241, 194, 50, 0) 70%)',
    blob3Color:
      'radial-gradient(circle at center, rgba(161, 235, 159, 0.65) 10%, rgba(161, 235, 159, 0) 70%)',
  },
  {
    bg: '#422917', // brown
    text: '#8BE9FD',
    shadow: '0 0 8px #55C2DA',
    blob1Color:
      'radial-gradient(circle at center, rgba(139, 233, 253, 0.85) 10%, rgba(139, 233, 253, 0) 70%)',
    blob2Color:
      'radial-gradient(circle at center, rgba(80, 250, 123, 0.75) 10%, rgba(80, 250, 123, 0) 70%)',
    blob3Color:
      'radial-gradient(circle at center, rgba(189, 147, 249, 0.65) 10%, rgba(189, 147, 249, 0) 70%)',
    nextColor: '#030303', // Fade into dark gray at the end
  },
])

// Current text color and shadow for the heading
const currentTextColor = ref(projectColors.value[0].text)
const currentTextShadow = ref(projectColors.value[0].shadow)

// Current active project index for animations
const activeProjectIndex = ref(0)
const isTransitioning = ref(false)

// Setup scroll-based animation and color transitions
onMounted(() => {
  const projectSections = document.querySelectorAll('.project-section')
  const projectContainer = document.querySelector('.project-container')
  const blobGroups = document.querySelectorAll('.blob-group')

  // Randomly position blobs within each group
  blobGroups.forEach((group) => {
    const blobs = group.querySelectorAll('.blob')

    blobs.forEach((blob) => {
      // Random positions - more concentrated toward the center
      const topPos = Math.random() * 50 + 20 // 20% to 70% from top
      const leftPos = Math.random() * 50 + 20 // 20% to 70% from left

      // Random size between 400px and 700px - larger than before
      const size = Math.random() * 300 + 400

      // Apply random position and size
      blob.style.top = `${topPos}%`
      blob.style.left = `${leftPos}%`
      blob.style.width = `${size}px`
      blob.style.height = `${size}px`
    })
  })

  // Set initial background color
  projectContainer.style.backgroundColor = projectColors.value[0].bg
  currentTextColor.value = projectColors.value[0].text
  currentTextShadow.value = projectColors.value[0].shadow

  // Activate the first blob group
  document.querySelector('.blob-group').classList.add('active')

  // Helper function to interpolate between colors
  const lerpColor = (a, b, amount) => {
    const ah = parseInt(a.replace(/#/g, ''), 16)
    const ar = ah >> 16
    const ag = (ah >> 8) & 0xff
    const ab = ah & 0xff

    const bh = parseInt(b.replace(/#/g, ''), 16)
    const br = bh >> 16
    const bg = (bh >> 8) & 0xff
    const bb = bh & 0xff

    const rr = ar + amount * (br - ar)
    const rg = ag + amount * (bg - ag)
    const rb = ab + amount * (bb - ab)

    return `#${(((1 << 24) + (rr << 16) + (rg << 8) + rb) | 0).toString(16).slice(1)}`
  }

  // Function to handle scroll event
  const handleScroll = () => {
    // Get the current scroll position
    const scrollPosition = window.scrollY
    const windowHeight = window.innerHeight

    // Get projects container position
    const projectsContainerRect = projectContainer.getBoundingClientRect()
    const projectsContainerTop = window.scrollY + projectsContainerRect.top

    // Only apply color transitions when we're actually in the projects section
    if (scrollPosition < projectsContainerTop - windowHeight / 2) return

    // Check each project section
    projectSections.forEach((section, index) => {
      // Get section position relative to document
      const sectionTop = projectsContainerTop + section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionBottom = sectionTop + sectionHeight

      // Calculate how far through this section we've scrolled (0 to 1)
      const scrollProgress = (scrollPosition - sectionTop) / sectionHeight

      // If we're in or near this section
      if (scrollPosition >= sectionTop - windowHeight / 2 && scrollPosition < sectionBottom) {
        // Update active project for animations
        activeProjectIndex.value = index

        // Flag for transitioning effect to show both sets of blobs during transition
        isTransitioning.value = scrollProgress > 0.2 && scrollProgress < 0.8

        // Get colors for current and next section
        const currentColor = projectColors.value[index].bg
        const curTextColor = projectColors.value[index].text
        const curShadowColor = projectColors.value[index].shadow

        // Determine next colors (if there's a next section)
        let nextColor = currentColor
        let nextTextColor = curTextColor
        let nextShadowColor = curShadowColor

        if (index < projectSections.length - 1) {
          nextColor = projectColors.value[index + 1].bg
          nextTextColor = projectColors.value[index + 1].text
          nextShadowColor = projectColors.value[index + 1].shadow
        } else if (projectColors.value[index].nextColor) {
          // For the last section, use nextColor if defined
          nextColor = projectColors.value[index].nextColor
        }

        // Calculate color transition based on scroll progress
        if (scrollProgress >= 0 && scrollProgress <= 1) {
          // Transition background color
          projectContainer.style.backgroundColor = lerpColor(
            currentColor,
            nextColor,
            scrollProgress,
          )

          // Update heading colors
          if (scrollProgress > 0.5) {
            currentTextColor.value = nextTextColor
            currentTextShadow.value = nextShadowColor
          } else {
            currentTextColor.value = curTextColor
            currentTextShadow.value = curShadowColor
          }

          // Update blob opacity based on scroll position
          blobGroups.forEach((group, groupIndex) => {
            if (groupIndex === index) {
              group.style.opacity = 1 - scrollProgress
            } else if (groupIndex === index + 1) {
              group.style.opacity = scrollProgress
            } else {
              group.style.opacity = 0
            }
          })
        }
      }
    })
  }

  // Set up scroll event listener with throttling for better performance
  let ticking = false
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll()
        ticking = false
      })
      ticking = true
    }
  })

  // Setup Intersection Observer to trigger animations and handle initial colors
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.projectIndex)
          activeProjectIndex.value = index
          isTransitioning.value = false

          // Force immediate color update when a section becomes visible
          currentTextColor.value = projectColors.value[index].text
          currentTextShadow.value = projectColors.value[index].shadow

          // Also update background color when first entering the projects section
          if (index === 0) {
            projectContainer.style.backgroundColor = projectColors.value[0].bg
          }

          // Update active blob group
          blobGroups.forEach((group, groupIndex) => {
            if (groupIndex === index) {
              group.style.opacity = 1
            } else {
              group.style.opacity = 0
            }
          })
        }
      })
    },
    {
      threshold: 0.2,
      rootMargin: '-10% 0px -10% 0px', // Trigger a bit before element is fully visible
    },
  )

  // Observe all project sections
  projectSections.forEach((section) => {
    observer.observe(section)
  })

  // Initial call to handle the scroll position on page load
  handleScroll()

  // Make sure projects take up full viewport height
  const adjustProjectHeight = () => {
    const vh = window.innerHeight
    projectSections.forEach((section) => {
      section.style.height = `${vh}px`
    })
  }

  // Initial height adjustment
  adjustProjectHeight()

  // Adjust on window resize
  window.addEventListener('resize', adjustProjectHeight)

  // Add enhanced floating animation to the blobs
  document.querySelectorAll('.blob').forEach((blob) => {
    // Different animation duration for each blob to create organic movement
    // Shorter durations for more visible movement
    const duration = 12 + Math.random() * 10
    const delay = Math.random() * 3

    // Apply the animation with ease-in-out for smoother movement
    blob.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`
  })
})
</script>

<style scoped>
.project-container {
  position: relative;
  transition: background-color 0.5s ease;
  min-height: 100vh;
  overflow-x: hidden;
  z-index: 1; /* Ensure it's above previous sections */
  margin-top: -1px; /* Fix gap between wave and projects section */
}

/* Blob styling */
.blobs-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
}

.blob-group {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s ease;
}

.blob-group.active {
  opacity: 1;
}

.blob-group.transitioning {
  opacity: 0.5;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(50px);
  z-index: 1;
  mix-blend-mode: screen;
  opacity: 1; /* Full opacity for better visibility */
}

@keyframes float {
  0% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(30px, -30px) scale(1.1);
  }
  100% {
    transform: translate(-30px, 30px) scale(0.95);
  }
}

.projects-wrapper {
  position: relative;
  width: 100%;
  overflow: visible;
  z-index: 2; /* Above the blobs */
}

.projects-heading {
  position: sticky;
  top: 0;
  padding: 2rem 1rem;
  width: 100%;
  z-index: 10;
  pointer-events: none;
  transition:
    color 0.8s ease,
    text-shadow 0.8s ease;
  padding-left: 4px;
  padding-right: 14px;
}

.project-section {
  min-height: 100vh; /* Will be set to exact viewport height in JS */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: opacity 0.5s ease;
}

.project-content {
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  z-index: 5; /* Above the blobs */
}

/* Project info styling */
.project-info {
  display: flex;
  flex-direction: column;
}

.project-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: #ebebea;
}

.project-description {
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #ebebea;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 2rem;
}

.tech-stack span {
  background-color: #ebebea;
  color: #030303;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.project-link {
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.project-link:hover {
  transform: translateX(5px);
}

/* Project image styling */
.project-image {
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-image img {
  width: 100%;
  max-width: 500px;
  border-radius: 5px;
  transition: transform 0.5s ease;
}

/* Custom styling for Zzafari image */
.zzafari-image {
  max-height: 400px;
  object-fit: contain;
  object-position: center;
}

.project-section:hover .project-image img {
  transform: translateY(-5px);
}

/* Responsive styles */
@media (max-width: 1024px) {
  .project-content {
    gap: 2rem;
    padding: 1rem;
  }

  .blob {
    filter: blur(40px); /* Less blur on smaller screens */
  }

  /* Adjust the Zzafari image height on tablets */
  .zzafari-image {
    max-height: 350px;
  }
}

@media (max-width: 768px) {
  .project-content {
    grid-template-columns: 1fr;
    grid-template-areas:
      'image'
      'info' !important;
    gap: 2rem;
  }

  .project-title {
    font-size: 18px;
    margin-bottom: 1rem;
  }

  .project-description {
    font-size: 14px;
    margin-bottom: 1.5rem;
  }

  .tech-stack {
    margin-bottom: 1.5rem;
  }

  .project-image {
    margin-bottom: 1rem;
  }

  .project-image img {
    max-width: 100%;
  }

  /* Specific styling for Zzafari on mobile */
  .zzafari-image {
    max-height: 300px;
  }

  .blob {
    filter: blur(30px); /* Even less blur on mobile */
  }

  /* Responsive heading styling */
  .underline-highlight {
    width: 80px;
    top: 25px !important;
  }
}
</style>
