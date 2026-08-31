'use client';
import { useRef, useState } from 'react';
import { Spiral as Hamburger } from 'hamburger-react';
import Experience from './Experience';
import About from './About';
import Projects from './Projects';
import Intro from './Intro';
import Skills from './Skills';
import { Snackbar } from './ui/Snackbar';

export default function Hero() {
  const [isOpen, setOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLElement>(null);
  return (
    <section id="hero" className="intro-section min-h-screen">
      <Snackbar message="This site is still a work in progress. 🚧" duration={4000} />
      <header className="intro-nav fixed top-0 left-0 w-full z-50 bg-cp-mantle pt-4 pb-4 pl-4 pr-4 flex items-center">
        {!isOpen && (
          <div className="flex items-center gap-x-4">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="transition-colors hover:text-cp-text"
            >
              <img src="/icon.svg" alt="Logo" className="w-8 h-8" />
            </a>
            <a
              className="font-mono text-sm text-cp-yellow transition-colors hover:text-cp-text"
              href="/leetcode"
            >
              LeetCode
            </a>
          </div>
        )}
        <div className="hidden md:flex ml-auto">
          <Menu />
        </div>
        <nav className="md:hidden flex items-center ml-auto">
          <Hamburger toggled={isOpen} toggle={setOpen} duration={0.5}/>
          {isOpen && <Menu />}
        </nav>
      </header>

      <main
        ref={scrollContainerRef}
        className="w-full h-screen overflow-y-scroll scroll-smooth snap-y snap-proximity"
      >
        <section id="intro" className="h-screen flex items-center snap-start">
          <Intro />
        </section>
        <section id="about" className="h-screen flex items-center snap-start">
          <About />
        </section>
        <section id="skills" className="h-screen flex items-center snap-start">
          <Skills />
        </section>
        <section id="experience" className="h-screen flex items-center snap-start">
          <Experience />
        </section>
        <section id="projects" className="h-screen flex items-center snap-start">
          <Projects />
        </section>
      </main>
    </section>
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
