'use client';

import Image from 'next/image';
import { useRef, useCallback } from 'react';
import styles from './ProjectCarousel.module.scss';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import { useCarouselProgress } from '@hooks/useCarouselProgress';

function JudgingCard({ project }: { project: any }) {
  return (
    <div className={styles.card_container}>
      <h2 className={styles.project_num}>#{project.num}</h2>
      <p className={styles.project_name}>{project.name}</p>
    </div>
  );
}

export default function JudgingList({ projects }: { projects: object[] }) {
  const progressBarRef = useRef<HTMLDivElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: 'start',
      dragFree: true,
      skipSnaps: true,
      watchDrag: true,
    },
    [WheelGesturesPlugin()]
  );

  const { scrollProgress, handleProgressBarClick } =
    useCarouselProgress(emblaApi);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={styles.container}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.projects}>
          {projects.map((project, index) => (
            <JudgingCard key={index} project={project} />
          ))}
        </div>
      </div>
      <div className={styles.controls}>
        <button onClick={onPrevButtonClick}>
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
        <div
          className={styles.progress}
          ref={progressBarRef}
          onClick={handleProgressBarClick}
        >
          <div
            className={styles.progress_bar}
            style={{
              transform: `translateX(${scrollProgress * 400}%`,
            }}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
        <button onClick={onNextButtonClick}>
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
