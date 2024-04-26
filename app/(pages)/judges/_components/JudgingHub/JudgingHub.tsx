import { useAuth } from '@hooks/useAuth';

import styles from './JudgingHub.module.scss';
import HubHero from './HubHero';
import JudgingList from './JudgingList';
import TableLocations from './TableLocations';
import { useSubmissions } from '@hooks/useSubmissions';
import { useJudgeGroup } from '@hooks/useJudgeGroup';

export default function JudgingHub() {
  const { user, loading } = useAuth();
  const { members } = useJudgeGroup();
  const { unjudgedTeams } = useSubmissions();
  return (
    <div className={styles.container}>
      <HubHero user={user} loading={loading} members={members} />
      <JudgingList projects={unjudgedTeams} />
      <TableLocations />
    </div>
  );
}
