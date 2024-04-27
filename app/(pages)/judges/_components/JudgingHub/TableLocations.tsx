import styles from './TableLocations.module.scss';
import Image from 'next/image';

import map from 'public/judges/hub/map.png';
export default function TableLocations() {
  return (
    <div className={styles.container}>
      {/* <h3 className={styles.header}>Table Locations</h3> */}
      <Image src={map} alt={'venue map'} className={styles.map} />
    </div>
  );
}
