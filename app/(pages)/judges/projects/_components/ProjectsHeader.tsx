'use client';

// import { useState } from 'react';
import styles from './ProjectsHeader.module.scss';
import { CiMap } from 'react-icons/ci';
import Image from 'next/image';
import map from 'public/judges/hub/map.png';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Link from 'next/link';

export default function ProjectsHeader({
  activeTab,
  setActiveTab,
}: {
  activeTab: number;
  setActiveTab: (tab: number) => void;
}) {
  // const [activeTab, setActiveTab] = useState(initialTab); // 0: unjudged, 1: scored
  const [popUpActive, setPopUpActive] = useState(false);

  const handleOpen = () => {
    setPopUpActive(true);
  };

  const handleClose = () => {
    setPopUpActive(false);
  };

  const boxStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    border: 'none',
    background: 'black',
  };

  return (
    <div className={styles.container}>
      <Link href="/judges">
        <Image
          src="/judges/hub/back-arrow.svg"
          alt=""
          height={50}
          width={50}
          quality={100}
          style={{
            maxWidth: '100%',
            height: 'auto',
            objectFit: 'contain',
            marginTop: '-110px',
            marginLeft: '-15px',
          }}
        />
      </Link>
      <div className={styles.header}>
        <div className={styles.header_title}>Projects</div>
        <div>
          <div onClick={handleOpen} className={styles.header_map}>
            <CiMap className={styles.header_map_icon} />
          </div>
          <Modal open={popUpActive} onClose={handleClose}>
            <Box sx={boxStyle}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'black',
                  padding: '50px',
                }}
              >
                <Image
                  src={map}
                  alt="venue map"
                  width={350}
                  style={{ background: 'black', padding: '20px' }}
                />
                <button
                  onClick={handleClose}
                  style={{
                    display: 'flex',
                    padding: '12px 45px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '9.686px',
                    borderRadius: '32px',
                    background: '#FFC5AB',
                    width: '135px',
                    alignSelf: 'center',
                  }}
                >
                  Done
                </button>
              </div>
            </Box>
          </Modal>
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
