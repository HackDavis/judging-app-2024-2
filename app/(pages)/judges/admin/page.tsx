'use client';
import InviteLinkForm from './_components/InviteLinkForm/InviteLinkForm';
import JudgeTeamGrouping from './_components/JudgeTeamGrouping/JudgeTeamGrouping';
import ResetPasswordLinkForm from './_components/ResetPasswordLinkForm/ResetPasswordLinkForm';

export default function Admin() {
  return (
    <div>
      <InviteLinkForm />
      <ResetPasswordLinkForm />
      <JudgeTeamGrouping />
    </div>
  );
}
