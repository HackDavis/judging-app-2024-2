import styles from './LoginForm.module.scss';
export default function LoginForm() {
  return (
    <div className={styles.loginForm}>
      <div className={styles.container}>
        <form action="" className={styles.form}>
          <input
            className={styles.form_input}
            type="username"
            placeholder="Username"
          />
          <input
            className={styles.form_input}
            type="password"
            placeholder="Password"
          />
          <button className={styles.form_button} type="submit">
            <p>Log-in</p>
          </button>
          <div className={styles.form_others}>
            <p>
              Not a judge? <a href="/judging-app">Click here</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
