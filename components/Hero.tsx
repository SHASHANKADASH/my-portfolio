'use client';
import React from 'react';
import { Spiral as Hamburger } from 'hamburger-react';

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
          <Menu/>
        </div>
        <div className="md:hidden z-50">
          <Hamburger toggled={isOpen} toggle={setOpen} duration={0.5} />
        </div>
        {isOpen && <Menu/>}
      </nav>

      <div className="py-20 sm:py-28">
        <div className="max-w-4xl">
          <div>
            <h1 className="intro-name text-5xl font-semibold leading-none tracking-[-0.055em] text-cp-maroon sm:text-7xl">
              Shashanka <span className="text-cp-text">Dash.</span>
            </h1>
          </div>
          <p className="intro-role mt-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-cp-peach">
            <span className="h-px w-8 bg-cp-peach" />
            Backend engineer
          </p>
          <h2 className="intro-title mt-5 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.035em] text-cp-mauve sm:text-4xl">
            Backend engineering for event driven systems.
          </h2>
          <p className="intro-description mt-6 max-w-3xl text-base leading-7 text-cp-subtext sm:text-lg">
            I design and build reliable microservices, APIs, and real-time event-driven applications
            — from architecture through production support.
          </p>

          <div className="intro-actions mt-9 flex flex-wrap gap-3">
            <a
              className="hero-button hero-button--primary"
              href="mailto:shashanka.shekhardash7@gmail.com"
            >
              Let&apos;s work together <span aria-hidden>↗</span>
            </a>
            <a
              className="hero-button hero-button--secondary"
              href="https://www.linkedin.com/in/shashankadash"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span aria-hidden>↗</span>
            </a>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
}

const Skills = () => {
  return <div className="intro-capabilities mt-12">
    <p className="font-mono text-xs uppercase tracking-[0.18em] text-cp-blue">Skills</p>
    <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm text-cp-text">
      <span>Java</span>
      <span className="text-cp-overlay">/</span>
      <span>Spring Boot</span>
      <span className="text-cp-overlay">/</span>
      <span>Kafka</span>
      <span className="text-cp-overlay">/</span>
      <span>AWS</span>
      <span className="text-cp-overlay">/</span>
      <span>MongoDB</span>
      <span className="text-cp-overlay">/</span>
      <span>Microservices</span>
      <span className="text-cp-overlay">/</span>
      <span>Kubernetes</span>
      <span className="text-cp-overlay">/</span>
      <span>Linux</span>
    </div>
  </div>;
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
}
