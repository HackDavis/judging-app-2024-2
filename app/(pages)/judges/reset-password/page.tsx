'use client';
import InviteOnlyRoute from '@components/InviteOnlyRoute/InviteOnlyRoute';
import ResetPasswordPage from '../_components/ResetPasswordForm/ResetPasswordPage';
export default function ResetPassword() {
  return (
    <InviteOnlyRoute>
      <ResetPasswordPage />
    </InviteOnlyRoute>
  );
}
