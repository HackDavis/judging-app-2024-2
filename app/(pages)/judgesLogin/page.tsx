import LoginForm from './_components/LoginForm';
import ComputerArt from './_components/ComputerArt';
import styles from './judgesLogin.module.scss';
export default function JudgesPOV() {
  return (
    <main>
      <div className={styles.judgesLogin}>
        <div className={styles.container}>
          <h1>Judges POV</h1>
          <LoginForm />
          <ComputerArt />
        </div>
      </div>
    </main>
  );
}
