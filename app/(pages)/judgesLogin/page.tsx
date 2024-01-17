import LoginForm from './_components/LoginForm/LoginForm';
import ComputerArt from './_components/ComputerArt/ComputerArt';
import BackgroundImage from './_components/BackgroundImage/BackgroundImage';
import styles from './judgesLogin.module.scss';
export default function JudgesPOV() {
  return (
    <main>
      <div className={styles.judgesLogin}>
        <BackgroundImage />
        <div className={styles.container}>
          <div className={styles.container_title}>
            <p>Welcome to HackDavis, </p>
            <h1>Judges!</h1>
          </div>
          <LoginForm />
          <ComputerArt />
        </div>
      </div>
    </main>
  );
}
