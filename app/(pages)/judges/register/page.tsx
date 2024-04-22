'use client';
import InviteOnlyRoute from '@components/InviteOnlyRoute/InviteOnlyRoute';
import RegisterPage from '../_components/RegisterForm/RegisterPage';
export default function Register() {
  return (
    <InviteOnlyRoute>
      <RegisterPage />
    </InviteOnlyRoute>
  );
}
