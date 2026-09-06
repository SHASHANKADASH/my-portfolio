import {
  AmazonwebservicesPlainWordmarkIcon,
  ApachekafkaOriginalIcon,
  DockerOriginalIcon,
  JavaOriginalIcon,
  KubernetesOriginalIcon,
  ArchlinuxOriginalIcon,
  MongodbOriginalIcon,
  SpringOriginalIcon,
  PostgresqlPlainIcon
} from '@devicon/react';

export default function Skills() {
  const skills = [
    { icon: JavaOriginalIcon, name: 'Java', detail: 'Backend services & APIs', accent: 'lavender'},
    { icon: SpringOriginalIcon, name: 'Spring Boot', detail: 'Microservice development', accent: 'green'},
    { icon: ApachekafkaOriginalIcon, name: 'Kafka', detail: 'Event-driven systems', accent: 'lavender'},
    { icon: AmazonwebservicesPlainWordmarkIcon, name: 'AWS', detail: 'Cloud infrastructure', accent: 'yellow', iconSize: '2rem'},
    { icon: MongodbOriginalIcon, name: 'MongoDB', detail: 'Document data base', accent: 'green'},
    { icon: DockerOriginalIcon, name: 'Microservices', detail: 'Distributed architecture', accent: 'blue'},
    { icon: KubernetesOriginalIcon, name: 'Kubernetes', detail: 'Container orchestration', accent: 'mauve'},
    { icon: ArchlinuxOriginalIcon, name: 'Linux', detail: 'I use arch btw :)', accent: 'lavender'},
    { icon: PostgresqlPlainIcon, name: 'Postgresql', detail: 'Relational data base', accent: 'blue'},
  ];

  return (
    <section className="intro-capabilities section-margin" aria-labelledby="skills-heading">
      <p id="skills-heading" className="font-mono text-xl font-bold tracking-[0.18em] text-cp-blue">Skills</p>

      <ul className="mt-6 grid gap-3 grid-cols-3" role="list">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <li
              key={skill.name}
              className={`skill-card skill-card--${skill.accent} group flex min-h-24 items-center gap-1 rounded-lg border border-cp-overlay bg-cp-mantle p-4 sm:p-5`}
            >
              <span className={`icon-card icon-card--${skill.accent} flex h-14 w-14 items-center justify-center rounded-lg shrink-0`}>
                <Icon size={skill.iconSize ?? '2.25rem'}/>
              </span>
              <div className='hidden md:block'>
                <p className="font-medium text-cp-text">{skill.name}</p>
                <p className="mt-1 text-sm text-cp-subtext">{skill.detail}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
