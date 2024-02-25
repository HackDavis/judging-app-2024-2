import { useEffect, useState, ChangeEvent } from 'react';
import { useFormState } from 'react-dom';
import { useAuth } from '@hooks/useAuth';
import LoginAction from '@actions/auth/login';

import styles from './LoginForm.module.scss';
import Link from 'next/link';
import AuthTokenInt from '@typeDefs/authToken';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState('');

  const [loginState, Login] = useFormState(LoginAction, {
    ok: false,
    body: null,
    error: null,
  });
  const { login } = useAuth();

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const validateForm = (email: string, password: string) => {
    // Simple email validation
    const isEmailValid = /\S+@\S+\.\S+/.test(email);
    // Password validation (example: minimum length of 6 characters)
    const isPasswordValid = password.length >= 6;

    // Set isValid state based on email and password validity
    setIsValid(isEmailValid && isPasswordValid);
  };

  useEffect(() => {
    if (loginState.ok === true) {
      const user = loginState.body as AuthTokenInt;
      login(user);
    } else {
      const err = loginState.error as string;
      setError(err);
    }
  }, [loginState, login]);

  useEffect(() => {
    validateForm(email, password);
  }, [email, password]);

  return (
    <form action={Login} className={styles.container}>
      <p className={styles.error_msg}>{error}</p>
      <div className={styles.fields}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          className={`${error ? styles.error : null}`}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className={`${error ? styles.error : null}`}
        />
      </div>
      <button
        className={`${styles.login_button} ${isValid ? styles.valid : null}`}
        type="submit"
        disabled={!isValid}
      >
        Log-in
      </button>
      <div className={styles.not_judge}>
        Not a judge? <Link href="/hackers">Click here</Link>
      </div>
    </form>
  );
}
