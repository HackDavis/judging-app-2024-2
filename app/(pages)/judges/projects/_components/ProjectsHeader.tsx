'use client';

// import { useState } from 'react';
import styles from './ProjectsHeader.module.scss';
import { CiMap } from 'react-icons/ci';

export default function ProjectsHeader({
  activeTab,
  setActiveTab,
}: {
  activeTab: number;
  setActiveTab: (tab: number) => void;
}) {
  // const [activeTab, setActiveTab] = useState(initialTab); // 0: unjudged, 1: scored
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header_title}>Projects</div>
        <div>
          <div className={styles.header_map}>
            <CiMap className={styles.header_map_icon} />
          </div>
        </div>
      </div>
      <div className={styles.projectType}>
        <div
          className={`${styles.title} ${activeTab ? '' : `${styles.selected}`}`}
          onClick={() => setActiveTab(0)}
        >
          Unjudged
        </div>
        <div> | </div>
        <div
          className={`${styles.title} ${activeTab ? `${styles.selected}` : ''}`}
          onClick={() => setActiveTab(1)}
        >
          Scored
        </div>
      </div>
    </div>
  );
}
