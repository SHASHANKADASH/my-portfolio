export default function Intro() {
  return (
    <div id="intro" className="mt-12">
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
        I design and build reliable microservices, APIs, and real-time event-driven applications —
        from architecture through production support.
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
    </div>
  );
}
