import styles from './TableLocations.module.scss';
import LogoutButton from '../LogoutButton/LogoutButton';
import Link from 'next/link';
export default function TableLocations() {
  const logOutStyle = {
    zIndex: 1,
    borderRadius: '15.497px',
    background: '#9EE7E5',
    boxShadow: '0px 3.874px 61.987px 0px rgba(255, 197, 61, 0.16)',
    color: '#173A52',
    textAlign: 'center',
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
  const figmaLink =
    'https://www.figma.com/proto/9frZI5Kc9f2c8o4ZIZG8fX/Judging-Table-Map?page-id=0:1&type=design&node-id=1-4&viewport=134,164,0.69&t=Jfp4HXeR7nRs3B6R-1&scaling=min-zoom&mode=design';

  return (
    <div className={styles.container}>
      <Link href={figmaLink} target="_blank">
        <div className={styles.header}>Click Here for Table Map</div>
      </Link>
      <LogoutButton style={logOutStyle}>
        <p>Sign out</p>
      </LogoutButton>
    </div>
  );
}
