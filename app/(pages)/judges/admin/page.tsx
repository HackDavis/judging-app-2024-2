'use client';
import AdminProtected from '@components/AdminProtected/AdminProtected';
import InviteLinkForm from './_components/InviteLinkForm/InviteLinkForm';
import ResetPasswordLinkForm from './_components/ResetPasswordLinkForm/ResetPasswordLinkForm';
export default function Admin() {
  return (
    <AdminProtected
      loadingDisplay={'loading...'}
      failDisplay={"you aren't the admin 😡"}
    >
      <div>
        <InviteLinkForm />
        <ResetPasswordLinkForm />
      </div>
    </AdminProtected>
  );
}
