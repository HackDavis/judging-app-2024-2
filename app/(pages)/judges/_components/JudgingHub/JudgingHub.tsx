import { useAuth } from '@hooks/useAuth';

import styles from './JudgingHub.module.scss';
import HubHero from './HubHero';
import JudgingList from './JudgingList';
import TableLocations from './TableLocations';
import { useSubmissions } from '@hooks/useSubmissions';

export default function JudgingHub() {
  const { user, loading } = useAuth();
  const { loading: submissionLoading, unjudgedTeams } = useSubmissions();
  return (
    <div className={styles.container}>
      <HubHero user={user} loading={loading} />
      <JudgingList loading={submissionLoading} projects={unjudgedTeams} />
      <TableLocations />
    </div>
  );
}
