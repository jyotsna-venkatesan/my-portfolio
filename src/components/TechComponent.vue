<template id="tech">
  <section class="isolate overflow-hidden bg-[#EBEBEA] pt-16 pb-0" id="tech">
    <div class="relative mx-auto max-w-7xl pt-0 px-6 mb-32 lg:px-8">
      <!-- Heading -->
      <div class="relative px-4 md:px-14" ref="imageContainer">
        <div class="flex items-center mb-8">
          <i class="fas fa-laptop-code text-3xl mr-4"></i>
          <p
            class="font-inter text-[25px] md:text-[45px] font-semibold text-[#030303] text-center md:text-left"
          >
            my technical background
          </p>
        </div>

        <!-- First row - slightly to the left -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:pr-16 mb-12">
          <!-- Software Development -->
          <div class="tech-box relative">
            <div class="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#FF0040] to-transparent h-full"></div>
            <div class="pl-4">
              <i class="fas fa-code text-3xl mb-3" style="color: #FF0040;"></i>
              <div class="relative">
                <h2 class="text-[#030303] text-[25px] font-semibold">Software</h2>
                <div class="h-[10px] w-24 absolute underline-highlight" style="background-color: #FF0040; top: 25px; z-index: -1;"></div>
                <h2 class="text-[#030303] text-[25px] font-semibold mb-2">Development</h2>
              </div>
              <p class="text-[#FF0040] text-[14px] mb-4">C++, Python, Java, JavaScript</p>
              <div class="flex flex-col">
                <span class="text-[#818181] text-[11px] mb-1">&lt;h3&gt;</span>
                <div class="flex">
                  <div class="w-[1px] bg-[#818181] mr-4"></div>
                  <div class="tech-content py-3">
                    <p class="text-[#818181] text-[11px]">
                      Expertise in object-oriented programming, data structures, algorithms, and system
                      design. Experience with C++, Python, and Java.
                    </p>
                  </div>
                </div>
                <span class="text-[#818181] text-[11px] mt-1">&lt;/h3&gt;</span>
              </div>
            </div>
          </div>

          <!-- Frontend Engineering -->
          <div class="tech-box relative">
            <div class="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#D1AE00] to-transparent h-full"></div>
            <div class="pl-4">
              <i class="fas fa-window-maximize text-3xl mb-3" style="color: #D1AE00;"></i>
              <div class="relative">
                <h2 class="text-[#030303] text-[25px] font-semibold">Frontend</h2>
                <div class="h-[10px] w-24 absolute underline-highlight" style="background-color: #D1AE00; top: 25px; z-index: -1;"></div>
                <h2 class="text-[#030303] text-[25px] font-semibold mb-2">Engineering</h2>
              </div>
              <p class="text-[#FF0040] text-[14px] mb-4">HTML, CSS, JavaScript, Vue.js, React</p>
              <div class="flex flex-col">
                <span class="text-[#818181] text-[11px] mb-1">&lt;h3&gt;</span>
                <div class="flex">
                  <div class="w-[1px] bg-[#818181] mr-4"></div>
                  <div class="tech-content py-3">
                    <p class="text-[#818181] text-[11px]">
                      Proficient in creating responsive interfaces using modern frameworks like Vue.js,
                      React, and Angular. Strong knowledge of HTML, CSS, and JavaScript.
                    </p>
                  </div>
                </div>
                <span class="text-[#818181] text-[11px] mt-1">&lt;/h3&gt;</span>
              </div>
            </div>
          </div>

          <!-- Mobile & Flutter Dev -->
          <div class="tech-box relative">
            <div class="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#FF7700] to-transparent h-full"></div>
            <div class="pl-4">
              <i class="fas fa-mobile-alt text-3xl mb-3" style="color: #FF7700;"></i>
              <div class="relative">
                <h2 class="text-[#030303] text-[25px] font-semibold">Mobile &</h2>
                <div class="h-[10px] w-24 absolute underline-highlight" style="background-color: #FF7700; top: 25px; z-index: -1;"></div>
                <h2 class="text-[#030303] text-[25px] font-semibold mb-2">Flutter Dev</h2>
              </div>
              <p class="text-[#FF0040] text-[14px] mb-4">Flutter, Dart, Swift, Kotlin</p>
              <div class="flex flex-col">
                <span class="text-[#818181] text-[11px] mb-1">&lt;h3&gt;</span>
                <div class="flex">
                  <div class="w-[1px] bg-[#818181] mr-4"></div>
                  <div class="tech-content py-3">
                    <p class="text-[#818181] text-[11px]">
                      Specialized in cross-platform mobile development using Flutter and Dart.
                      Experience with native Android (Kotlin) and iOS (Swift) development.
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
          <div class="tech-box relative">
            <div class="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#ED5353] to-transparent h-full"></div>
            <div class="pl-4">
              <i class="fas fa-server text-3xl mb-3" style="color: #ED5353;"></i>
              <div class="relative">
                <h2 class="text-[#030303] text-[25px] font-semibold">Backend &</h2>
                <div class="h-[10px] w-24 absolute underline-highlight" style="background-color: #ED5353; top: 25px; z-index: -1;"></div>
                <h2 class="text-[#030303] text-[25px] font-semibold mb-2">DevOps</h2>
              </div>
              <p class="text-[#FF0040] text-[14px] mb-4">Node.js, Django, Docker, AWS, GCP</p>
              <div class="flex flex-col">
                <span class="text-[#818181] text-[11px] mb-1">&lt;h3&gt;</span>
                <div class="flex">
                  <div class="w-[1px] bg-[#818181] mr-4"></div>
                  <div class="tech-content py-3">
                    <p class="text-[#818181] text-[11px]">
                      Experienced in server-side development with Node.js, Django, and Spring Boot.
                      Skilled in containerization with Docker and cloud services like AWS and GCP.
                    </p>
                  </div>
                </div>
                <span class="text-[#818181] text-[11px] mt-1">&lt;/h3&gt;</span>
              </div>
            </div>
          </div>

          <!-- AI & Machine Learning -->
          <div class="tech-box relative">
            <div class="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#FF8C2E] to-transparent h-full"></div>
            <div class="pl-4">
              <i class="fas fa-brain text-3xl mb-3" style="color: #FF8C2E;"></i>
              <div class="relative">
                <h2 class="text-[#030303] text-[25px] font-semibold">AI &</h2>
                <div class="h-[10px] w-24 absolute underline-highlight" style="background-color: #FF8C2E; top: 25px; z-index: -1;"></div>
                <h2 class="text-[#030303] text-[25px] font-semibold mb-2">Machine Learning</h2>
              </div>
              <p class="text-[#FF0040] text-[14px] mb-4">TensorFlow, PyTorch, scikit-learn, Python</p>
              <div class="flex flex-col">
                <span class="text-[#818181] text-[11px] mb-1">&lt;h3&gt;</span>
                <div class="flex">
                  <div class="w-[1px] bg-[#818181] mr-4"></div>
                  <div class="tech-content py-3">
                    <p class="text-[#818181] text-[11px]">
                      Knowledge of machine learning algorithms, deep learning, and data analysis.
                      Experience with TensorFlow, PyTorch, and scikit-learn for model development.
                    </p>
                  </div>
                </div>
                <span class="text-[#818181] text-[11px] mt-1">&lt;/h3&gt;</span>
              </div>
            </div>
          </div>

          <!-- Testing & Automation -->
          <div class="tech-box relative">
            <div class="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#DEC488] to-transparent h-full"></div>
            <div class="pl-4">
              <i class="fas fa-vial text-3xl mb-3" style="color: #DEC488;"></i>
              <div class="relative">
                <h2 class="text-[#030303] text-[25px] font-semibold">Testing &</h2>
                <div class="h-[10px] w-24 absolute underline-highlight" style="background-color: #DEC488; top: 25px; z-index: -1;"></div>
                <h2 class="text-[#030303] text-[25px] font-semibold mb-2">Automation</h2>
              </div>
              <p class="text-[#FF0040] text-[14px] mb-4">Jest, Cypress, Selenium, Jenkins, GitHub Actions</p>
              <div class="flex flex-col">
                <span class="text-[#818181] text-[11px] mb-1">&lt;h3&gt;</span>
                <div class="flex">
                  <div class="w-[1px] bg-[#818181] mr-4"></div>
                  <div class="tech-content py-3">
                    <p class="text-[#818181] text-[11px]">
                      Experienced in unit testing, integration testing, and end-to-end testing.
                      Proficient with tools like Jest, Cypress, Selenium, and CI/CD pipelines.
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

<script setup></script>
