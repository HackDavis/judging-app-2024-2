import { useFormState } from 'react-dom';
import sendInvite from '@actions/invite/sendInvite';
import styles from './InviteLinkForm.module.scss';

export default function InviteLinkForm() {
  const [inviteState, inviteAction] = useFormState(sendInvite, null);

  return (
    <form action={inviteAction} className={styles.form}>
      <p>Invite a Judge</p>
      <div className={styles.fields}>
        <label>Name</label>
        <input name="name" type="text" />
        <label>Email</label>
        <input name="email" type="email" />
        <label>Specialty</label>
        <input name="specialty" type="text" />
        <input name="role" type="hidden" value="judge" />
        <input name="slug" type="hidden" defaultValue="/register" />
      </div>
      <button type="submit">Generate invite link</button>
      <p className={styles.link_text}>{inviteState ?? ''}</p>
    </form>
  );
}
