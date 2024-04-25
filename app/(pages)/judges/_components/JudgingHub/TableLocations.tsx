import styles from './TableLocations.module.scss';

export default function TableLocations() {
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Table Locations</h3>
      <div className={styles.map}></div>
    </div>
  );
}
