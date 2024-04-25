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
      <button className={styles.projects_button}>
        View All Projects{' '}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
        >
          <path
            d="M5.25156 11.2527L17.2516 11.2527M17.2516 11.2527L12.3104 7.25269M17.2516 11.2527L12.3104 15.2527"
            stroke="#173A52"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
