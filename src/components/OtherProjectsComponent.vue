<template>
  <section
    class="isolate overflow-hidden bg-[#030303] pt-16 pb-0 mb-0 relative"
    id="other-projects"
  >
    <div class="relative mx-auto max-w-7xl pt-0 px-6 lg:px-8">
      <!-- Heading -->
      <div class="relative px-4 md:px-14" ref="imageContainer">
        <div class="flex items-center mb-8">
          <p
            class="font-inter text-[25px] md:text-[45px] font-semibold text-[#EBEBEA] text-center md:text-left"
          >
            all my other projects
          </p>
        </div>
      </div>

      <!-- Bento Grid Layout -->
      <div class="relative px-4 md:px-14">
        <!-- First Row -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <!-- Left box - double height -->
          <div
            class="col-span-1 md:col-span-2 md:row-span-2 relative rounded-md overflow-hidden group"
          >
            <img src="/decodr.png" class="w-full h-full object-cover" alt="Decodr Project" />
            <div
              class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center"
            >
              <div
                class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-6"
              >
                <h3 class="text-2xl font-bold mb-2">Decodr</h3>
                <p class="mb-4">
                  A project that walks users through the step-by-step process behind how large
                  language models (LLMs) generate text.
                </p>
                <div class="flex space-x-3">
                  <a
                    href="https://github.com/jyotsna-venkatesan/decodr"
                    class="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                    >GitHub</a
                  >
                  <a
                    href="https://decodr-llm.netlify.app/"
                    class="px-4 py-2 bg-gray-600 rounded-md hover:bg-gray-700 transition-colors"
                    >Check it out!</a
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- Right top box -->
          <div class="col-span-1 relative rounded-md overflow-hidden group">
            <img
              src="/online-storage.png"
              class="w-full h-full object-cover"
              alt="Online Storage Project"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center"
            >
              <div
                class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-6"
              >
                <h3 class="text-xl font-bold mb-2">Online Storage System</h3>
                <p class="mb-4">
                  An online storage system that enables users to securely store, access, and share
                  files while protecting data confidentiality and integrity.
                </p>
                <div class="flex space-x-3">
                  <a
                    href="An online storage system that enables users to securely store, access, and share files while protecting data confidentiality and integrity."
                    class="px-3 py-1 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors text-sm"
                    >GitHub</a
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- Right bottom box -->
          <div class="col-span-1 relative rounded-md overflow-hidden group">
            <img src="/prequel.png" class="w-full h-full object-cover" alt="Prequel Project" />
            <div
              class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center"
            >
              <div
                class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-6"
              >
                <h3 class="text-xl font-bold mb-2">Prequel</h3>
                <p class="mb-4">
                  The landing page for a competitor for Preface made with Vue and TailwindCSS!
                </p>
                <div class="flex space-x-3">
                  <a
                    href="https://github.com/jyotsna-venkatesan/prequel"
                    class="px-3 py-1 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors text-sm"
                    >GitHub</a
                  >
                  <a
                    href="https://meek-tartufo-681bf5.netlify.app/"
                    class="px-3 py-1 bg-gray-600 rounded-md hover:bg-gray-700 transition-colors text-sm"
                    >Check it out!</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Second Row -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <!-- Left top box -->
          <div class="col-span-1 relative rounded-md overflow-hidden group">
            <img src="/powehi.png" class="w-full h-full object-cover" alt="Powehi Project" />
            <div
              class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center"
            >
              <div
                class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-6"
              >
                <h3 class="text-xl font-bold mb-2">Powehi</h3>
                <p class="mb-4">
                  Welcome to Powehi, an immersive web application where you explore the universe
                  through stunning images captured by the James Webb Space Telescope. A project for
                  the 2024 NASA Space Apps Challenge.
                </p>
                <div class="flex space-x-3">
                  <a
                    href="https://github.com/jyotsna-venkatesan/Powehi"
                    class="px-3 py-1 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors text-sm"
                    >GitHub</a
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- Left bottom box -->
          <div class="col-span-1 relative rounded-md overflow-hidden group">
            <img
              src="/music-from-image.png"
              class="w-full h-full object-cover"
              alt="Music From Image Project"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center"
            >
              <div
                class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-6"
              >
                <h3 class="text-xl font-bold mb-2">Music From Image</h3>
                <p class="mb-4">AI tool that generates music based on image emotions</p>
                <div class="flex space-x-3">
                  <a
                    href="https://github.com/jyotsna-venkatesan/music-generation-from-image"
                    class="px-3 py-1 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors text-sm"
                    >GitHub</a
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- Right box - double height -->
          <div
            class="col-span-1 md:col-span-1 md:row-span-2 relative rounded-md overflow-hidden group"
          >
            <img
              src="/Multiserver.png"
              class="w-full h-full object-cover"
              alt="Multiserver Project"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center"
            >
              <div
                class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-6"
              >
                <h3 class="text-2xl font-bold mb-2">Multi-thread Web Server</h3>
                <p class="mb-4">
                  A Python-powered HTTP server that handles multiple clients like a pro! Built from
                  scratch to manage requests, serve files, and keep those connections alive
                </p>
                <div class="flex space-x-3">
                  <a
                    href="https://github.com/jyotsna-venkatesan/Multi-thread-Web-Server"
                    class="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                    >GitHub</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Third Row -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Additional projects - equal size -->
          <div class="col-span-1 relative rounded-md overflow-hidden group">
            <img src="/coderoad.png" class="w-full h-full object-cover" alt="CodeRoad Project" />
            <div
              class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center"
            >
              <div
                class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-6"
              >
                <h3 class="text-xl font-bold mb-2">CodeRoad</h3>
                <p class="mb-4">
                  An AI-powered project roadmap generator that helps developers ideate and transform
                  their ideas into structured, actionable project plans. Currently, doesn't work
                  because of API key rate limiting :(
                </p>
                <div class="flex space-x-3">
                  <a
                    href="https://github.com/jyotsna-venkatesan/Code-Road"
                    class="px-3 py-1 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors text-sm"
                    >GitHub</a
                  >
                  <a
                    href="https://coderoad-ai.netlify.app/"
                    class="px-3 py-1 bg-gray-600 rounded-md hover:bg-gray-700 transition-colors text-sm"
                    >Website</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="col-span-1 relative rounded-md overflow-hidden group">
            <img
              src="/database-chatbot.png"
              class="w-full h-full object-cover"
              alt="Database Chatbot Project"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center"
            >
              <div
                class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-6"
              >
                <h3 class="text-xl font-bold mb-2">Odoo Database Chatbot</h3>
                <p class="mb-4">
                  An extension that allows users to retrieve data from Odoo databases using a
                  chat-like interface.
                </p>
                <div class="flex space-x-3">
                  <a
                    href="https://github.com/jyotsna-venkatesan/database-chatbot"
                    class="px-3 py-1 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors text-sm"
                    >GitHub</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="col-span-1 relative rounded-md overflow-hidden group">
            <img src="/portfolio.png" class="w-full h-full object-cover" alt="Decodr Project" />
            <div
              class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center"
            >
              <div
                class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-6"
              >
                <h3 class="text-xl font-bold mb-2">Jyotsna's Portfolio</h3>
                <p class="mb-4">My portfolio website! The page you are currently on :)</p>
                <div class="flex space-x-3">
                  <a
                    href="https://github.com/jyotsna-venkatesan/jyotsna-venkatesan"
                    class="px-3 py-1 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors text-sm"
                    >GitHub</a
                  >
                  <a
                    href="https://main--jyotsnav.netlify.app/"
                    class="px-3 py-1 bg-gray-600 rounded-md hover:bg-gray-700 transition-colors text-sm"
                    >Website</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Second wave image at bottom of section -->
    <div class="wave-bottom">
      <img
        src="/third wave.png"
        alt="Wave Background"
        class="w-full h-auto object-bottom object-cover"
        style="display: block; margin-bottom: -2px; vertical-align: bottom;"
      />
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>
