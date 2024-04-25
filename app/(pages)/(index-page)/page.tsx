import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.scss';
import logo from '/public/index/logo.svg';
import frog from '/public/index/frog.svg';
import duck from '/public/index/duck.svg';

export const metadata: Metadata = {
  title: 'HackDavis Judging Portal',
};

const links = [
  {
    src: duck,
    type: 'Hacker',
    cta: 'Click to view your progess',
    href: '/hackers',
    color: '#FFC53D',
    border_color: '#CC9E31',
  },
  {
    src: frog,
    type: 'Judge',
    cta: 'Click to evaluate projects!',
    href: '/judges',
    color: '#C2E567',
    border_color: '#9BB752',
  },
];

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <Image src={logo} alt="HD LOGO" quality={100} />
        <h2 className={styles.hd_text}>HackDavis 2024</h2>
        <p className={styles.text}>Before we move on, are you a...</p>
        <div className={styles.links}>
          {links.map((link, index: number) => (
            <Link key={index} href={link.href} className={styles.link_button}>
              <div
                className={styles.img_container}
                style={{
                  background: link.color,
                  borderColor: link.border_color,
                }}
              >
                <Image src={link.src} alt={link.type} quality={100} />
              </div>
              <div className={styles.desc_container}>
                <h3>{link.type}</h3>
                <p>{link.cta}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
