import { useFormState } from 'react-dom';
import sendInvite from '@actions/invite/sendInvite';
import styles from './InviteLinkForm.module.scss';

export default function InviteLinkForm() {
  const [inviteState, inviteAction] = useFormState(sendInvite, null);

  return (
    <form action={inviteAction} className={styles.form}>
      <h3>Invite a Judge</h3>
      <div className={styles.fields}>
        <div>
          <label className={styles.label}>Name</label>
          <input name="name" type="text" required />
        </div>
        <div>
          <label className={styles.label}>Email</label>
          <input name="email" type="email" required />
        </div>
        <div className={styles.specialty_select}>
          <label className={styles.label}>Specialty</label>
          <div>
            <label>Technical</label>
            <input type="radio" name="specialty" value="tech" required />
          </div>
          <div>
            <label>Design</label>
            <input type="radio" name="specialty" value="design" required />
          </div>
          <div>
            <label>General</label>
            <input type="radio" name="specialty" value="general" required />
          </div>
        </div>
        <input name="role" type="hidden" value="judge" />
        <input name="slug" type="hidden" defaultValue="/register" />
      </div>
      <button type="submit">Generate invite link</button>
      <p className={styles.link_text}>{inviteState ?? ''}</p>
    </form>
  );
}
