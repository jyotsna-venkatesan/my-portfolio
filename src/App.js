import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectGallery from "./components/ProjectGallery";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <section id="about">
        <AboutSection />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <ProjectGallery />
      </section>
      <section id="contact">
        <Footer />
      </section>
      <main></main>
    </div>
  );
}

export default App;
