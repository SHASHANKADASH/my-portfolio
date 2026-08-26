const experienceStages = [
  {
    label: 'India',
    period: 'May 2021 – Oct 2023',
    location: 'Bhubaneswar, Odisha',
    color: 'bg-cp-peach',
    title: 'Backend Engineer',
    summary: 'Built foundational microservices and production support workflows.',
  },
  {
    label: 'United Kingdom',
    period: 'Oct 2023 – Aug 2025',
    location: 'London, United Kingdom',
    color: 'bg-cp-blue',
    title: 'Senior Backend Engineer',
    summary: 'Led cross-functional delivery for order systems and event-driven platforms.',
  },
  {
    label: 'India',
    period: 'Aug 2025 – Present',
    location: 'Bhubaneswar, Odisha',
    color: 'bg-cp-green',
    title: 'Senior Backend Engineer',
    summary: 'Continuing strategic backend ownership and architecture evolution.',
  },
];

export default function Experience() {
  return (
    <div id="experience" className="intro-experience mt-12">
      <p className="font-mono text-xl font-bold uppercase tracking-[0.18em] text-cp-blue">Experience</p>
      <p className="font-mono uppercase tracking-[0.18em] text-cp-maroon pt-4 font-semibold">TATA CONSULTANCY SERVICES</p>
      <div className="relative mt-6 pl-2 sm:pl-3">
        <div className="space-y-8">
          {experienceStages.map((stage) => (
            <div key={`${stage.label}-${stage.period}`} className="relative flex gap-5 sm:gap-8">
              <div className="relative z-10 flex w-5 shrink-0 justify-center pt-1.5">
                <span className={`h-3.5 w-3.5 rounded-full border-2 border-cp-base ${stage.color}`} />
              </div>

              <div className="flex-1 pb-1">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="mt-1 text-base font-medium text-cp-mauve">{stage.title}</p>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-cp-maroon">
                    {stage.period}
                  </p>
                </div>

                <div className="mt-3 space-y-2 text-sm text-cp-subtext">
                  <p>{stage.location}</p>
                  <p className="max-w-xl leading-6 text-cp-text/90">{stage.summary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
