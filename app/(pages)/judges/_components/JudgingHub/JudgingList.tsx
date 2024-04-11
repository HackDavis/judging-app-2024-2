import styles from './JudgingList.module.scss';
import ProjectCarousel from './ProjectCarousel';

const numProjects = 4;

export default function JudgingList({
  //   user,
  //   loading,
  projects,
}: {
  //   user: object;
  //   loading: boolean;
  projects: object[];
}) {
  return (
    <div className={styles.container}>
      <div className={styles.top_text}>
        <h3>Judging has begun!</h3>
        <p>
          You have <span>{numProjects}</span> left to judge:
        </p>
      </div>
      <ProjectCarousel projects={projects} />
    </div>
  );
}
