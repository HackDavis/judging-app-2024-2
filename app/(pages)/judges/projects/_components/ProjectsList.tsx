'use client';

import { useSubmissions } from '@hooks/useSubmissions';
import ProjectsCard from './ProjectsCard';
import styles from './ProjectsCard.module.scss';

interface Team {
  number: number;
  name: string;
  tracks: string[];
}

export default function ProjectsList({ activeTab }: { activeTab: number }) {
  const { loading, submissions } = useSubmissions();
  if (loading) {
    return 'loading...';
  }
  const teams = submissions.ok ? submissions.body : [];

  const scoredProjects = teams.filter((team: { scores?: string[] }) =>
    team.scores ? true : false
  );

  const unjudgedProjects = teams.filter((team: { scores?: string[] }) =>
    team.scores ? false : true
  );

  const renderScoredProjects = () => {
    return (
      <div className={styles.container}>
        {scoredProjects.map((project: Team, index: number) => (
          <ProjectsCard
            key={index}
            num={project.number}
            name={project.name}
            categories={project.tracks}
          />
        ))}
      </div>
    );
  };
  const renderuUnjudgedProjects = () => {
    return (
      <div className={styles.container}>
        {unjudgedProjects.map((project: Team, index: number) => (
          <ProjectsCard
            key={index}
            num={project.number}
            name={project.name}
            categories={project.tracks}
          />
        ))}
      </div>
    );
  };

  return (
    <div>{activeTab ? renderScoredProjects() : renderuUnjudgedProjects()}</div>
  );
}
