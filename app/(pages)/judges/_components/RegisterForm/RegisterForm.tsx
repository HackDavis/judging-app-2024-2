import { useEffect, useState, ChangeEvent } from 'react';
import { useFormState } from 'react-dom';
import { useAuth } from '@hooks/useAuth';
import Register from '@actions/auth/register';

import styles from './RegisterForm.module.scss';
import Link from 'next/link';
import AuthTokenInt from '@typeDefs/authToken';
import { useInvite } from '@hooks/useInvite';
import { useRouter } from 'next/navigation';

export default function RegisterForm() {
  const router = useRouter();

  const [_, email] = useInvite();
  const [password, setPassword] = useState('');
  const [passwordDupe, setPasswordDupe] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordDupeError, setPasswordDupeError] = useState(false);

  const [registerState, RegisterAction] = useFormState(Register, {
    ok: false,
    body: null,
    error: null,
  });
  const { login } = useAuth();

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handlePasswordDupeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordDupe(event.target.value);
  };

  const validateForm = (password: string, passwordDupe: string) => {
    // Password validation (example: minimum length of 6 characters)
    const isPasswordValid = password.length >= 6 || password.length === 0;
    if (!isPasswordValid) {
      setError('Password is too short.');
    }
    setPasswordError(!isPasswordValid);

    const passwordMatch =
      password === passwordDupe || passwordDupe.length === 0;
    if (!passwordMatch) {
      setError("Passwords don't match.");
    }
    setPasswordDupeError(!passwordMatch);

    // Set isValid state based on email and password validity
    setIsValid(isPasswordValid && passwordMatch);
    if (isPasswordValid && passwordMatch) {
      setError('');
    }
  };

  useEffect(() => {
    if (registerState.ok === true) {
      const user = registerState.body as AuthTokenInt;
      setError('');
      login(user);
      router.push('/judges');
    } else {
      const err = registerState.error as string;
      setError(err);
    }
  }, [registerState, login, router]);

  useEffect(() => {
    validateForm(password, passwordDupe);
  }, [password, passwordDupe]);

  return (
    <form action={RegisterAction} className={styles.container}>
      <p className={styles.error_msg}>{error}</p>
      <div className={styles.fields}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          defaultValue={(email as string) ?? ''}
          readOnly
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className={`${passwordError ? styles.error : null}`}
        />
        <input
          name="password-dupe"
          type="password"
          placeholder="Retype password"
          value={passwordDupe}
          onChange={handlePasswordDupeChange}
          className={`${passwordDupeError ? styles.error : null}`}
        />
      </div>
      <button
        className={`${styles.login_button} ${isValid ? styles.valid : null}`}
        type="submit"
        disabled={!isValid}
      >
        Create account
      </button>
      <div className={styles.not_judge}>
        Not a judge? <Link href="/hackers">Click here</Link>
      </div>
    </form>
  );
}
