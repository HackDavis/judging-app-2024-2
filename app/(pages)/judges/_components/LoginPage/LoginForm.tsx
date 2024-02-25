import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { useAuth } from '@hooks/useAuth';
import Login from '@actions/auth/login';

import styles from './LoginForm.module.scss';
import Link from 'next/link';

export default function LoginForm() {
  const [loginState, LoginAction] = useFormState(Login, { ok: false });
  const { login } = useAuth();

  useEffect(() => {
    console.log(loginState);

    if (loginState.ok === true) {
      login(loginState.body);
    }
  }, [loginState, login]);

  return (
    <form action={LoginAction} className={styles.container}>
      <div className={styles.fields}>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </div>
      <button className={styles.login_button} type="submit">
        Log-in
      </button>
      <div className={styles.not_judge}>
        Not a judge? <Link href="/hackers">Click here</Link>
      </div>
    </form>
  );
}
