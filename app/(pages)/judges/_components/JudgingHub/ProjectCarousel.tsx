'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './ProjectCarousel.module.scss';

function JudgingCard({ project }: { project: object }) {
  return (
    <div className={styles.card_container}>
      <h2 className={styles.project_num}>#{project.num}</h2>
      <p className={styles.project_name}>{project.name}</p>
    </div>
  );
}

export default function JudgingList({ projects }: { projects: object[] }) {
  const [index, setIndex] = useState(0);
  return (
    <div className={styles.container}>
      <div className={styles.viewport}>
        <div className={styles.projects}>
          {projects.map((project, index) => (
            <JudgingCard key={index} project={project} />
          ))}
        </div>
      </div>
      <div className={styles.controls}>
        <button>
          <Image
            src="/judges/hub/back-arrow.svg"
            alt=""
            height={200}
            width={200}
            quality={100}
            style={{
              maxWidth: '100%',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </button>
        <div className={styles.progress}>
          <div className={styles.progress_bar} />
        </div>
        <button>
          <Image
            src="/judges/hub/next-arrow.svg"
            alt=""
            height={200}
            width={200}
            quality={100}
            style={{
              maxWidth: '100%',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </button>
      </div>
    </div>
  );
}
