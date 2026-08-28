'use client';
import React from 'react';
import { Spiral as Hamburger } from 'hamburger-react';
import Experience from './Experience';
import About from './About';
import Projects from './Projects';
import Intro from './Intro';
import Skills from './Skiils';

export default function Hero() {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <section id="about" className="intro-section min-h-screen py-6 sm:py-8">
      <nav className="intro-nav relative flex items-center justify-between pb-5">
        {!isOpen && (
          <a
            className="font-mono text-sm text-cp-yellow transition-colors hover:text-cp-text"
            href="/leetcode"
          >
            LeetCode
          </a>
        )}
        <div className="hidden md:flex">
          <Menu />
        </div>
        <div className="md:hidden z-50">
          <Hamburger toggled={isOpen} toggle={setOpen} duration={0.5} />
        </div>
        {isOpen && <Menu />}
      </nav>

      <div className="py-20 sm:py-28">
        <div className="max-w-4xl">
          <section className="h-screen snap-start">
            <Intro />
          </section>
          <section className="h-screen snap-start">
            <About />
          </section>
          <section className="h-screen snap-start">
            <Skills />
          </section>
          <section className="h-screen snap-start">
            <Experience />
          </section>
          <section className="h-screen snap-start">
            <Projects />
          </section>
        </div>
      </div>
    </section>
  );
}

const Menu = () => {
  return (
    <div className="flex flex-wrap justify-end gap-x-6 gap-y-2 text-sm text-cp-subtext sm:gap-x-9">
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
