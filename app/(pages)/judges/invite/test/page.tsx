'use client';

import InviteOnlyRoute from '@components/InviteOnlyRoute/InviteOnlyRoute';
import { useInvite } from '@hooks/useInvite';
import RegisterForm from '../../_components/RegisterForm/RegisterForm';

export default function Test() {
  const [pending, email] = useInvite();
  return (
    <InviteOnlyRoute>
      <p>hello there {pending ? '...' : email}</p>
      <p>
        Hi. For anyone working here, the idea is that we will have the
        registration form embedded in an InviteOnlyRoute like so... It would be
        cool if the form field for email was locked into whatever email they got
        invited with.
      </p>
      <br></br>
      <RegisterForm />
    </InviteOnlyRoute>
  );
}
