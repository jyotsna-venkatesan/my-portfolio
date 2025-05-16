<template id="experience">
  <div
    v-if="isSectionVisible && !isPurpleWaveVisible && !isNextSectionVisible"
    class="fixed bottom-0 left-0 right-0 h-[35vh] z-[999] pointer-events-none bottom-blur"
  ></div>

  <section id="experience" class="bg-[#f1f1f1] relative" ref="experienceSection">
    <div class="relative">
      <div class="mb-8 px-6 mx-auto max-w-6xl lg:px-8">
        <p class="font-inter text-[35px] text-[#2A82CE]" style="text-shadow: 0 0 8px #94bee2">
          my experience
        </p>
      </div>
      <div class="cards-wrapper overflow-hidden">
        <div class="columns-container" :style="containerStyle" ref="cardsContainer">
          <div
            v-for="colIndex in getNumberOfColumns()"
            :key="'col-' + colIndex"
            class="column"
            :style="getColumnStyle(colIndex)"
          >
            <div
              v-for="(stat, statIndex) in getColumnStats(colIndex)"
              :key="stat.name"
              class="card-item"
              :style="getCardStyle(statIndex + getColumnStartIndex(colIndex))"
            >
              <div class="flex items-start gap-x-4 mb-3">
                <p class="font-inter font-black text-[16px] text-[#f1f1f1] shrink-0">
                  {{ stat.name }}
                </p>
                <div class="flex flex-col">
                  <p class="font-inter font-bold text-[14px] text-[#f1f1f1]">{{ stat.value }}</p>
                  <p class="font-inter text-[12px] text-[#f1f1f1]">{{ stat.date }}</p>
                </div>
              </div>
              <div class="mt-2">
                <p class="font-inter text-[13px] text-[#f1f1f1] mb-2">{{ stat.description }}</p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="skill in stat.skills"
                    :key="skill"
                    class="px-4 py-2 rounded-md bg-[#f1f1f1] border border-[#f1f1f1] text-[#181818] text-[11px] font-inter"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-screen relative left-1/2 right-1/2 -mx-[50vw] -mb-5"
      style="margin-left: calc(-50vw + 0px); margin-right: calc(-50vw + 0px)"
    >
      <img
        ref="purpleWaveRef"
        :src="purpleWave"
        alt="purple wave"
        class="w-full h-auto object-cover relative z-10"
      />
    </div>
  </section>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import purpleWave from '/purple-wave.png'

// Debug flag to log transition points once
const debugOnce = ref(true)

// Track if section is visible for blur overlay
const isSectionVisible = ref(false)

// Track if purple wave is visible
const isPurpleWaveVisible = ref(false)
const purpleWaveRef = ref(null)

// Track if the next section (projects) is visible
const isNextSectionVisible = ref(false)

const stats = [
  {
    name: '08',
    value: 'Front-end Web Developer at Sleep Deprived Dreamers',
    date: 'Jun 2021 - Jul 2021',
    description: 'Worked on implementing modern UI/UX designs using Knorishh, HTML, CSS, and JS.',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: '07',
    value: 'Founding Developer and Moderator at Auxiliors',
    date: 'May 2021 - Aug 2021',
    description:
      'Established a community-driven mental support platform, while moderating sessions on self-confidence.',
    skills: ['Community Building', 'Web Development'],
  },
  {
    name: '06',
    value: 'Digital Media Creator at AInspire',
    date: 'Apr 2021 - May 2022',
    description: 'Created engaging digital content to increase brand awareness and engagement.',
    skills: ['Digital Media', 'Content Creation'],
  },
  {
    name: '05',
    value: 'Student Assistant at CLP',
    date: 'Feb 2023 - Apr 2023',
    description:
      'Assisted in testing and quality assurance efforts for the CLP Generator Inspection Robot.',
    skills: ['QA Testing', 'Robotics'],
  },
  {
    name: '04',
    value: 'Web/ Front-End Developer Intern at Oxbridge Economics',
    date: 'Jun 2023 - Aug 2023',
    description:
      'Developed and maintained web applications, focusing on user experience and performance optimization.',
    skills: ['React', 'JavaScript', 'UI/UX'],
  },
  {
    name: '03',
    value: 'UI/UX Designer at PolyU Smart Cities Research Institute',
    date: 'Feb 2024 - May 2024',
    description:
      'Designed and developed user interfaces for the software QC Spatial-3Dx, focusing on accessibility and user experience.',
    skills: ['UI/UX Design', 'Accessibility'],
  },
  {
    name: '02',
    value: 'Quality Assurance Intern at GoGoX',
    date: 'Jun 2024 - Aug 2024',
    description: 'Automated the sanity and regression test suite of the client app.',
    skills: ['Test Automation', 'QA'],
  },
  {
    name: '01',
    value: 'QA Automation Intern at GoGoX',
    date: 'Sep 2024 - Dec 2024',
    description:
      'Explored ways to optimise the testing process through means like parallel processing and cloud-based virtual devices.',
    skills: ['Parallel Testing', 'Cloud Testing'],
  },
]

// Compute reversed stats to display from latest to earliest
const reversedStats = computed(() => {
  return [...stats].reverse()
})

// Transition progress - 0 is initial state (full width), 1 is final state (6xl width)
const transitionProgress = ref(0)

// Reference to the experience section
const experienceSection = ref(null)
const cardsContainer = ref(null)

// Dimensions for transitions
const fullScreenWidth = ref(window.innerWidth)
const targetWidth = ref(1152) // 72rem (6xl)
const initialGap = 16 // 1rem in pixels
const finalGap = 12 // 0.75rem in pixels

// Update responsive styles for different screen sizes
const getResponsiveColumnLayout = () => {
  // For desktop (default)
  let columnLayout = {
    initial: {
      columns: '1fr 1.5fr 1fr', // Middle column 50% larger
      count: 3,
    },
    final: {
      columns: '1fr 1fr 1fr', // Equal columns
      count: 3,
    },
  }

  // For tablets
  if (fullScreenWidth.value <= 1023 && fullScreenWidth.value > 639) {
    columnLayout = {
      initial: {
        columns: '1fr 1.4fr', // Second column 40% larger
        count: 2,
      },
      final: {
        columns: '1fr 1fr', // Equal columns
        count: 2,
      },
    }
  }

  // For mobile
  if (fullScreenWidth.value <= 639) {
    columnLayout = {
      initial: {
        columns: '1fr',
        count: 1,
      },
      final: {
        columns: '1fr',
        count: 1,
      },
    }
  }

  return columnLayout
}

// Container style based on transition progress
const containerStyle = computed(() => {
  const progress = transitionProgress.value

  // Smoothly transition container width from 100% viewport to 6xl
  const viewportWidth = fullScreenWidth.value
  const targetWidth6xl = Math.min(1152, viewportWidth * 0.9) // 6xl (72rem) or 90% of screen for smaller screens

  // Calculate current container width (px)
  const currentWidth = viewportWidth - progress * (viewportWidth - targetWidth6xl)

  // Calculate current gap
  const currentGap = initialGap - progress * (initialGap - finalGap)

  return {
    display: 'flex',
    justifyContent: 'space-between',
    gap: `${currentGap}px`,
    width: `${currentWidth}px`,
    maxWidth: '100%',
    margin: '0 auto',
    padding: '0 24px',
    transition: 'none', // We control the transition manually with scroll
  }
})

// Calculate background focus point based on card position
const getBackgroundPosition = (index) => {
  // Get responsive column layout to determine grid structure
  const layoutInfo = getResponsiveColumnLayout()
  const columnCount = layoutInfo.initial.count

  if (columnCount === 1) {
    // For single column layout - alternate positions
    const positions = ['top', 'center', 'bottom']
    return `${positions[index % 3]}`
  } else if (columnCount === 2) {
    // For two column layout (2 x 4 grid)
    const col = index % 2 // 0: left, 1: right
    const row = Math.floor(index / 2) // 0-3: row position

    // Map grid position to focus point
    const horizontalPosition = col === 0 ? 'left' : 'right'
    let verticalPosition

    if (row === 0) verticalPosition = 'top'
    else if (row === 3) verticalPosition = 'bottom'
    else verticalPosition = 'center'

    return `${verticalPosition} ${horizontalPosition}`
  } else {
    // For three column layout (3 x 3 grid)
    const col = index % 3 // 0: left, 1: middle, 2: right
    const row = Math.floor(index / 3) // 0: top, 1: middle, 2: bottom

    // Map grid position to background focus point
    if (row === 0) {
      // Top row
      return col === 0 ? 'top left' : col === 1 ? 'top center' : 'top right'
    } else if (row === 1) {
      // Middle row
      return col === 0 ? 'center left' : col === 1 ? 'center' : 'center right'
    } else {
      // Bottom row
      return col === 0 ? 'bottom left' : col === 1 ? 'bottom center' : 'bottom right'
    }
  }
}

// Get number of columns based on layout
const getNumberOfColumns = () => {
  const layoutInfo = getResponsiveColumnLayout()
  return layoutInfo.initial.count
}

// Get column stats (distribute stats across columns)
const getColumnStats = (colIndex) => {
  // Adjust column index (1-based in template, 0-based for calculations)
  const col = colIndex - 1
  const totalCards = reversedStats.value.length
  const columnCount = getNumberOfColumns()

  // Calculate how many cards per column (approximately)
  const cardsPerColumn = Math.ceil(totalCards / columnCount)

  // Get cards for this column
  const startIndex = col * cardsPerColumn
  const endIndex = Math.min(startIndex + cardsPerColumn, totalCards)

  return reversedStats.value.slice(startIndex, endIndex)
}

// Get starting index for a column's cards
const getColumnStartIndex = (colIndex) => {
  // Adjust column index (1-based in template, 0-based for calculations)
  const col = colIndex - 1
  const totalCards = reversedStats.value.length
  const columnCount = getNumberOfColumns()

  // Calculate how many cards per column (approximately)
  const cardsPerColumn = Math.ceil(totalCards / columnCount)

  return col * cardsPerColumn
}

// Get column style based on index
const getColumnStyle = (colIndex) => {
  const progress = transitionProgress.value

  // Adjust column index (1-based in template, 0-based for calculations)
  const col = colIndex - 1

  // Calculate column width based on layout and progress
  const layoutInfo = getResponsiveColumnLayout()
  const columnCount = layoutInfo.initial.count

  // Column widths percentages (relative to availableWidth)
  let widthPercent = 0

  if (columnCount === 1) {
    // Single column
    widthPercent = 100
  } else if (columnCount === 2) {
    // Two columns with ratio 1:1.4
    const totalParts = 2.4 // 1 + 1.4
    if (col === 0) {
      // First column (smaller - 1 part)
      const initialPercent = (1 / totalParts) * 100
      const finalPercent = 50 // Equal columns at end
      widthPercent = initialPercent + progress * (finalPercent - initialPercent)
    } else {
      // Second column (larger - 1.4 parts)
      const initialPercent = (1.4 / totalParts) * 100
      const finalPercent = 50 // Equal columns at end
      widthPercent = initialPercent + progress * (finalPercent - initialPercent)
    }
  } else {
    // Three columns with ratio 1:1.5:1
    const totalParts = 3.5 // 1 + 1.5 + 1
    if (col === 1) {
      // Middle column (larger - 1.5 parts)
      const initialPercent = (1.5 / totalParts) * 100
      const finalPercent = 33.33 // Equal columns at end
      widthPercent = initialPercent + progress * (finalPercent - initialPercent)
    } else {
      // Side columns (smaller - 1 part each)
      const initialPercent = (1 / totalParts) * 100
      const finalPercent = 33.33 // Equal columns at end
      widthPercent = initialPercent + progress * (finalPercent - initialPercent)
    }
  }

  // Calculate current gap
  const currentGap = initialGap - progress * (initialGap - finalGap)

  return {
    display: 'flex',
    flexDirection: 'column',
    gap: `${currentGap}px`,
    width: `${widthPercent}%`,
    transition: 'none', // Controlled by scroll
  }
}

const getCardStyle = (index) => {
  const progress = transitionProgress.value

  // Get responsive column layout to adjust initial square size
  const layoutInfo = getResponsiveColumnLayout()
  const columnCount = layoutInfo.initial.count

  // Square to rectangle transition
  // We use fixed 220px height for final rectangle state
  const finalCardHeight = 220

  // Figure out which column this card belongs to (0, 1, or 2)
  const currentColumn = index % columnCount

  // Calculate initial width based on column
  let initialWidth
  const viewportWidth = fullScreenWidth.value - 48 - (columnCount - 1) * initialGap // Account for container padding and gaps

  if (columnCount === 1) {
    // Single column - use full available width
    initialWidth = viewportWidth
  } else if (columnCount === 2) {
    // Two columns
    // For first column (smaller)
    const col1Width = viewportWidth / 2.4 // Sized for 1:1.4 ratio
    // For second column (larger - 1.4x)
    const col2Width = (viewportWidth / 2.4) * 1.4

    initialWidth = currentColumn === 0 ? col1Width : col2Width
  } else {
    // Three columns
    // For side columns (smaller)
    const sideColWidth = viewportWidth / 3.5
    // For middle column (larger - 1.5x)
    const middleColWidth = (viewportWidth / 3.5) * 1.5

    initialWidth = currentColumn === 1 ? middleColWidth : sideColWidth
  }

  // Make the card height equal to its width initially for square appearance
  const initialSquareSize = initialWidth

  // Interpolate height from square to rectangle
  const currentHeight = initialSquareSize - progress * (initialSquareSize - finalCardHeight)

  // Calculate column width at current progress point

  // Background zoom interpolation
  const startZoom = 120 // Initial zoom percentage
  const endZoom = 140 // Final zoom percentage
  const currentZoom = startZoom + progress * (endZoom - startZoom)

  // Background position interpolation - make it gradual
  const positions = {
    start: 'center',
    end: getBackgroundPosition(index),
  }

  // Parse the positions for smooth interpolation
  const parsePosition = (posStr) => {
    // Default to center if not specified
    if (!posStr || posStr === 'center') return { x: 50, y: 50 }

    // Parse vertical and horizontal positions
    const [vertical, horizontal] = posStr.split(' ').map((p) => p.trim())

    let x = 50,
      y = 50 // Default center

    // Parse horizontal position
    if (horizontal) {
      if (horizontal === 'left') x = 0
      else if (horizontal === 'right') x = 100
      else if (horizontal === 'center') x = 50
    }

    // Parse vertical position
    if (vertical === 'top') y = 0
    else if (vertical === 'bottom') y = 100
    else if (vertical === 'center') y = 50

    return { x, y }
  }

  // Parse start and end positions
  const startPos = parsePosition(positions.start)
  const endPos = parsePosition(positions.end)

  // Interpolate between positions
  const currentX = startPos.x + progress * (endPos.x - startPos.x)
  const currentY = startPos.y + progress * (endPos.y - startPos.y)

  // Format as CSS background-position
  const currentPosition = `${currentY}% ${currentX}%`

  return {
    height: `${currentHeight}px`,
    width: `100%`, // Take up full column width
    backgroundImage: `linear-gradient(rgba(20, 20, 20, 0.4), rgba(9, 9, 9, 0.55)), url('/exp-${(index % 8) + 1}.png')`,
    backgroundSize: `${currentZoom}%`,
    backgroundPosition: currentPosition,
    transform: `translateZ(${-50 + progress * 50}px)`,
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5rem',
    border: '1px solid #df97c0',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    transition: 'background-position 0.5s ease-out', // Add smooth transition for background position
    backfaceVisibility: 'hidden', // Prevent flickering during transform
    willChange: 'transform, height, background-position', // Optimize for animations
  }
}

// Update transition progress based on scroll position
const updateTransitionProgress = () => {
  if (!experienceSection.value) return

  const rect = experienceSection.value.getBoundingClientRect()
  const windowHeight = window.innerHeight

  // Check if any part of the section is visible in the viewport
  // We consider it visible if either:
  // 1. The top is above the bottom of viewport AND bottom is below the top of viewport
  // 2. The section is larger than viewport and completely encompasses it
  const isVisible =
    (rect.top < windowHeight && rect.bottom > 0) || (rect.top <= 0 && rect.bottom >= windowHeight)

  // Update section visibility
  isSectionVisible.value = isVisible

  // Check if purple wave is visible
  if (purpleWaveRef.value && isVisible) {
    const waveRect = purpleWaveRef.value.getBoundingClientRect()
    // Wave is considered completely visible when its top and bottom are both in the viewport
    const waveIsCompletelyVisible = waveRect.top >= 0 && waveRect.bottom <= windowHeight

    // Only log when visibility changes
    if (waveIsCompletelyVisible !== isPurpleWaveVisible.value) {
      isPurpleWaveVisible.value = waveIsCompletelyVisible
      console.log(`Purple wave completely visible: ${waveIsCompletelyVisible}`)
    } else {
      isPurpleWaveVisible.value = waveIsCompletelyVisible
    }
  } else {
    isPurpleWaveVisible.value = false
  }

  // Check if the next section (projects) is visible
  const projectsSection = document.querySelector('#projects')
  if (projectsSection) {
    const projectsRect = projectsSection.getBoundingClientRect()
    isNextSectionVisible.value = projectsRect.top < windowHeight && projectsRect.top >= 0

    if (isNextSectionVisible.value) {
      console.log('Projects section is now visible')
    }
  } else {
    isNextSectionVisible.value = false
  }

  // Calculate when second row enters viewport
  // Estimate first row height (for large screens about 300-400px)
  const firstRowHeight = Math.min(fullScreenWidth.value * 0.3, 400) // Limit to reasonable size
  const sectionTopPadding = 64 // py-16 is about 64px

  // Start when second row first enters viewport
  const startPoint = windowHeight - sectionTopPadding - firstRowHeight

  // Transition over longer distance for gradual effect (600px of scrolling)
  const endPoint = startPoint - 600

  // Debug - log transition points once when component mounts
  if (debugOnce.value) {
    console.log(`Window height: ${windowHeight}px`)
    console.log(`First row height: ${firstRowHeight}px`)
    console.log(`Transition starts at section top: ${startPoint}px`)
    console.log(`Transition ends at section top: ${endPoint}px`)
    debugOnce.value = false
  }

  if (rect.top <= startPoint && rect.top >= endPoint) {
    // Calculate progress (0 at start, 1 at end)
    const rawProgress = (startPoint - rect.top) / (startPoint - endPoint)

    // Apply easing function for smoother transition
    // Use cubic ease-out for slower start, faster finish
    const easedProgress = 1 - Math.pow(1 - Math.max(0, Math.min(1, rawProgress)), 3)
    transitionProgress.value = easedProgress

    // Debug - log section position and progress occasionally
    if (Math.round(rawProgress * 100) % 25 === 0) {
      console.log(
        `Section top: ${Math.round(rect.top)}px, Progress: ${Math.round(easedProgress * 100)}%`,
      )
    }
  } else if (rect.top > startPoint) {
    // Section hasn't entered the transition zone
    transitionProgress.value = 0
  } else if (rect.top < endPoint) {
    // Section has passed the transition zone
    transitionProgress.value = 1
  }

  // Update window width measurement in case of window resize
  fullScreenWidth.value = window.innerWidth
}

// Handle window resize
const handleResize = () => {
  fullScreenWidth.value = window.innerWidth
  // Update target width for 6xl
  targetWidth.value = Math.min(1152, window.innerWidth * 0.9) // 72rem or 90% of window width
}

// Set up event listeners
onMounted(() => {
  window.addEventListener('scroll', updateTransitionProgress, { passive: true })
  window.addEventListener('resize', handleResize, { passive: true })

  // Calculate initial values
  handleResize()
  updateTransitionProgress()

  // Initialize section visibility
  if (experienceSection.value) {
    const rect = experienceSection.value.getBoundingClientRect()
    isSectionVisible.value = rect.top < window.innerHeight && rect.bottom > 0
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateTransitionProgress)
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.cards-wrapper {
  position: relative;
  width: 100%;
  overflow: visible; /* Allow cards to extend full width */
  perspective: 1000px;
}

.columns-container {
  display: flex;
  width: 100%;
}

.column {
  display: flex;
  flex-direction: column;
}

/* Card item styling */
.card-item {
  position: relative;
  width: 100%;
  margin-bottom: 16px;
  transform-style: preserve-3d;
  transition:
    transform 0.2s ease,
    background-position 0.5s ease-out;
}

/* Add a pseudo-element for depth */
.card-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  z-index: -1;
  pointer-events: none;
}

/* Bottom blur gradient effect with stronger blur */
.bottom-blur {
  /* No background color or gradient - completely transparent */
  background: transparent;
  /* No border */
  border: none;
  /* No shadow */
  box-shadow: none;
  /* Custom mask to create blur gradient */
  mask-image: linear-gradient(to bottom, transparent, black);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black);
  /* Apply much stronger blur */
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
}

/* Fallback for browsers without backdrop-filter */
@supports not ((backdrop-filter: blur(25px)) or (-webkit-backdrop-filter: blur(25px))) {
  .bottom-blur {
    background: linear-gradient(
      to bottom,
      rgba(241, 241, 241, 0) 0%,
      rgba(241, 241, 241, 0.5) 50%,
      rgba(241, 241, 241, 0.9) 100%
    );
  }
}

/* Start of animations */
/* Add floating animation for cards when scrolled into view */
@keyframes floatEffect {
  0%,
  100% {
    transform: translateY(0) translateZ(0);
  }
  50% {
    transform: translateY(-5px) translateZ(0);
  }
}

/* When fully scrolled in, add floating animation */
.card-item {
  animation: floatEffect 6s ease-in-out infinite;
  animation-play-state: paused;
}

.card-item[style*='translateZ(0px)'] {
  animation-play-state: running;
}

/* Stagger animation delays */
.column:nth-child(1) .card-item:nth-child(1) {
  animation-delay: 0s;
}
.column:nth-child(1) .card-item:nth-child(2) {
  animation-delay: 0.4s;
}
.column:nth-child(1) .card-item:nth-child(3) {
  animation-delay: 0.8s;
}

.column:nth-child(2) .card-item:nth-child(1) {
  animation-delay: 0.2s;
}
.column:nth-child(2) .card-item:nth-child(2) {
  animation-delay: 0.6s;
}
.column:nth-child(2) .card-item:nth-child(3) {
  animation-delay: 1s;
}

.column:nth-child(3) .card-item:nth-child(1) {
  animation-delay: 0.3s;
}
.column:nth-child(3) .card-item:nth-child(2) {
  animation-delay: 0.7s;
}
.column:nth-child(3) .card-item:nth-child(3) {
  animation-delay: 1.1s;
}
</style>
