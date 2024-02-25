import LoginForm from './LoginForm';
import Image from 'next/image';
import styles from './LoginPage.module.scss';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <Image src="/judges/auth/judge_login_hero.png" alt="" fill />
      </div>
      <div className={styles.form_section}>
        <div className={styles.logo_container}>
          <Image src="/judges/auth/hd-logo.svg" alt="" fill />
        </div>
        <div className={styles.form_intro}>
          <p>Welcome to HackDavis,</p>
          <h1>Judges!</h1>
        </div>
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}
