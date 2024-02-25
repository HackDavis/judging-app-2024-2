'use client';
import { useFormState } from 'react-dom';
import sendInvite from '@actions/invite/sendInvite';
export default function Register() {
  const [inviteState, inviteAction] = useFormState(sendInvite, null);

  return (
    <div>
      <form action={inviteAction}>
        <p>Create invite</p>
        <div>
          <label>Email</label>
          <input name="email" type="email" />
        </div>
        <button type="submit">Create an invite</button>
        <p aria-live="polite" className="sr-only">
          {JSON.stringify(inviteState)}
        </p>
      </form>
    </div>
  );
}
