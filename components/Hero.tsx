'use client';
import Experience from './Experience';
import About from './About';
import Projects from './Projects';
import Intro from './Intro';
import Skills from './Skills';
import { Snackbar } from './ui/Snackbar';

export default function Hero() {
  return (
    <div className="min-h-screen">
      <Snackbar message="This site is still a work in progress. 🚧" duration={2000} />
      <header className="intro-nav fixed top-0 left-0 w-full z-50 bg-cp-mantle pt-4 pb-4 pl-4 pr-4 flex items-center">
        <div className="flex items-center gap-x-4">
          <a href="#intro" className="transition-colors hover:text-cp-text">
            <img src="/icon.svg" alt="Logo" className="w-8 h-8" />
          </a>
        </div>
        <div className="md:flex ml-auto">
          <Menu />
        </div>
      </header>

      <main className="overflow-x-hidden">
        <section id="intro" className="min-h-[100svh] flex items-center">
          <Intro />
        </section>

        <hr className="mx-4 border-cp-overlay sm:mx-8 lg:mx-12" />

        <section id="about" className="section">
          <About />
        </section>

        <hr className="mx-4 border-cp-overlay sm:mx-8 lg:mx-12" />

        <section id="skills" className="section">
          <Skills />
        </section>

        <hr className="mx-4 border-cp-overlay sm:mx-8 lg:mx-12" />

        <section id="experience" className="section">
          <Experience />
        </section>

        <hr className="mx-4 border-cp-overlay sm:mx-8 lg:mx-12" />

        <section id="projects" className="section">
          <Projects />
        </section>
      </main>
    </div>
  );
}

const Menu = () => {
  return (
    <div className="flex gap-x-6 text-sm text-cp-subtext sm:gap-x-9">
      <a className="transition-colors hover:text-cp-blue" href="#about">
        About
      </a>
      <a className="transition-colors hover:text-cp-blue" href="#skills">
        Skills
      </a>
      <a className="transition-colors hover:text-cp-blue" href="#experience">
        Experience
      </a>
      <a className="transition-colors hover:text-cp-blue" href="#projects">
        Projects
      </a>
    </div>
  );
};
