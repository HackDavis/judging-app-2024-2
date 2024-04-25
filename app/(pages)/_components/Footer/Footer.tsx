import styles from './Footer.module.scss';
import {
  FaMedium,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaEnvelope,
} from 'react-icons/fa';

import logo from '/public/hackers/hdLogoWhite.svg';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <Image
        src={logo}
        alt="hackdavis Logo"
        width={50}
        className={styles.hdLogoWhite}
      />
      <div className={styles.brandIcons}>
        <a href="mailto:team@hackdavis.io">
          <FaEnvelope />
        </a>
        <a
          href="https://medium.com/@HackDavis"
          target="#"
          rel="noopener noreferrer"
          aria-label="@HackDavis on Medium"
        >
          <FaMedium />
        </a>
        <a
          href="https://www.facebook.com/HackDavis"
          target="#"
          rel="noopener noreferrer"
          aria-label="HackDavis on Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com/hack_davis"
          target="#"
          rel="noopener noreferrer"
          aria-label="@hack_davis on Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/hackdavis"
          target="#"
          rel="noopener noreferrer"
          aria-label="@hackdavis on Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://discord.gg/wc6QQEc"
          target="#"
          rel="noopener noreferrer"
          aria-label="HackDavis Discord server"
        >
          <FaDiscord />
        </a>
      </div>
      <p className={styles.copyright}>
        &copy; 2024 HackDavis • Made with ☕️ & 💛 in Davis
      </p>
    </footer>
  );
}
