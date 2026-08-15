import React from 'react';

export default function Home() {
  return (
    <main className="py-20">
      <header className="mb-12">
        <h1 className="text-4xl font-semibold">Hi — I'm Shashanka.</h1>
        <p className="mt-3 text-cp-muted max-w-xl">Senior Backend Engineer. I build reliable, scalable backend systems.</p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="p-6 rounded-lg bg-cp-surface">
          <h2 className="text-xl font-medium">Selected Projects</h2>
          <p className="mt-2 text-cp-muted">Placeholder for a few highlighted projects.</p>
        </div>

        <div className="p-6 rounded-lg bg-cp-surface">
          <h2 className="text-xl font-medium">Experience & Impact</h2>
          <p className="mt-2 text-cp-muted">Short summary of engineering experience and measurable impact.</p>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="text-lg font-medium">Tech Stack</h3>
        <p className="mt-2 text-cp-muted">Java · Spring Boot · Kafka · AWS · MongoDB · ...</p>
      </section>
    </main>
  );
}
