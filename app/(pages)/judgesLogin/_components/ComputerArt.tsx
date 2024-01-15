import Image from 'next/image';
import styles from './ComputerArt.module.scss';
export default function ComputerArt() {
  return (
    <div className={styles.container}>
      <div className={styles.computer}>
        <Image
          src="/judgesLogin/computer_duck.svg"
          alt="computer_duck"
          width={150}
          height={150}
          style={{
            objectFit: 'contain',
            zIndex: 1,
          }}
        />
        <Image
          src="/judgesLogin/computer_cow.svg"
          alt="computer_cow"
          width={150}
          height={150}
          style={{
            objectFit: 'contain',
            zIndex: 2,
            position: 'absolute',
            left: 87,
            top: 50,
          }}
        />
        <Image
          src="/judgesLogin/computer_bunny.svg"
          alt="computer_bunny"
          width={150}
          height={154}
          style={{
            objectFit: 'contain',
            zIndex: 2,
            position: 'absolute',
            left: -63,
            top: 45,
          }}
        />
        <Image
          src="/judgesLogin/computer_frog.svg"
          alt="computer_frog"
          width={162}
          height={150}
          style={{
            objectFit: 'contain',
            zIndex: 2,
            position: 'absolute',
            left: 17,
            top: 67,
          }}
        />
      </div>
    </div>
  );
}
