'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
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
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [divWidth, setDivWidth] = useState(0);
  const num_sections = Math.floor(projects.length / 2);

  useEffect(() => {
    if (progressBarRef.current) {
      // Accessing clientWidth of the div element
      const width = progressBarRef.current.offsetWidth;
      // Setting the width to state variable
      setDivWidth(width);
    }
  }, [progressBarRef]);

  const incIndex = () => {
    setIndex((index + 1) % num_sections);
  };

  const decIndex = () => {
    setIndex((index - 1) % num_sections);
  };

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
        <button onClick={decIndex}>
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
        <div className={styles.progress} ref={progressBarRef}>
          <div className={styles.progress_bar} style={{}} />
        </div>
        <button onClick={incIndex}>
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
