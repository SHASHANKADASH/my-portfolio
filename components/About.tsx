export default function About() {
  return (
    <div className="intro-about section-margin w-full">
      <p className="font-mono text-xl font-bold tracking-[0.18em] text-cp-blue">About</p>

      <div className="mt-5 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div>
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-cp-peach">
            <span className="h-px w-8 bg-cp-peach" />
            Senior backend engineer
          </p>
          <h2 className="mt-5 max-w-md text-3xl font-medium leading-tight tracking-[-0.035em] text-cp-mauve sm:text-4xl">
            I make complex systems feel dependable.
          </h2>
          <p className="mt-5 max-w-md leading-7 text-cp-subtext">
            From the first event to production support, I care about the parts of a system people rely on without
            having to think about them.
          </p>
        </div>

        <div className="lg:pt-1">
          <p className="max-w-2xl text-lg leading-8 text-cp-text sm:text-xl">
            I&apos;m Shashanka, a senior backend engineer building scalable order-management and event-driven systems.
            I work primarily with Java, Spring Boot, Kafka, MongoDB, and AWS.
          </p>
          <p className="mt-4 max-w-2xl leading-7 text-cp-subtext">
            Over 5+ years, I&apos;ve led end-to-end backend delivery, modernised legacy processing into real-time cloud
            services, and supported production-critical applications. I enjoy turning complex operational problems
            into reliable, well-observed systems.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-cp-overlay pt-5 font-mono text-xs uppercase tracking-[0.12em]">
        <span className="text-cp-peach">5+ years experience</span>
        <span className="text-cp-overlay">/</span>
        <span className="text-cp-mauve">Event-driven architecture</span>
        <span className="text-cp-overlay">/</span>
        <span className="text-cp-green">Distributed systems</span>
        <span className="text-cp-overlay">/</span>
        <span className="text-cp-subtext">Two years onsite in the UK</span>
      </div>
    </div>
  );
}
