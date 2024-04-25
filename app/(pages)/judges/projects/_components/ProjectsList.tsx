'use client';

import ProjectsCard from './ProjectsCard';
import styles from './ProjectsCard.module.scss';

export default function ProjectsList({ activeTab }: { activeTab: number }) {
  const scoredProjects = [
    {
      num: 1,
      name: 'sc haptic hand',
      categories: ['not sure', 'something else', 'another category'],
    },
    {
      num: 70,
      name: 'sc haptic hand',
      categories: ['not sure', 'something else'],
    },
  ];

  const unjudgedProjects = [
    {
      num: 75,
      name: 'unj haptic hand',
      categories: ['not sure', 'something else'],
    },
    {
      num: 75,
      name: 'unj haptic hand',
      categories: ['not', 'something', 'one more', 'another 1'],
    },
    {
      num: 175,
      name: 'unj haptic hand',
      categories: ['not sure', 'something else'],
    },
    {
      num: 75,
      name: 'unj haptic hand',
      categories: ['not sure', 'something else'],
    },
    {
      num: 75,
      name: 'unj haptic hand',
      categories: ['not', 'something', 'one more', 'another 1'],
    },
    {
      num: 75,
      name: 'unj haptic hand',
      categories: ['not sure', 'something else'],
    },
  ];

  const renderScoredProjects = () => {
    return (
      <div className={styles.container}>
        {scoredProjects.map((project, index) => (
          <ProjectsCard
            key={index}
            num={project.num}
            name={project.name}
            categories={project.categories}
          />
        ))}
      </div>
    );
  };
  const renderuUnjudgedProjects = () => {
    return (
      <div className={styles.container}>
        {unjudgedProjects.map((project, index) => (
          <ProjectsCard
            key={index}
            num={project.num}
            name={project.name}
            categories={project.categories}
          />
        ))}
      </div>
    );
  };

  return (
    <div>{activeTab ? renderScoredProjects() : renderuUnjudgedProjects()}</div>
  );
}
