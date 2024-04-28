import styles from './TableLocations.module.scss';
import Image from 'next/image';
import LogoutButton from '../LogoutButton/LogoutButton';

import map from 'public/judges/hub/map.png';
export default function TableLocations() {
  const logOutStyle = {
    zIndex: 1,
    borderRadius: '15.497px',
    background: '#9EE7E5',
    boxShadow: '0px 3.874px 61.987px 0px rgba(255, 197, 61, 0.16)',
    color: '#173A52',
    textAlign: 'center',
    fontFamily: 'Metropolis',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
    letterSpacing: '0.32px',
    width: '90%',
    height: '43px',
    border: 'none',
    alignSelf: 'center',
    marginTop: '64px',
  };

  return (
    <div className={styles.container}>
      {/* <h3 className={styles.header}>Table Locations</h3> */}
      <Image src={map} alt={'venue map'} className={styles.map} />
      <LogoutButton style={logOutStyle}>
        <p>Sign out</p>
      </LogoutButton>
    </div>
  );
}
