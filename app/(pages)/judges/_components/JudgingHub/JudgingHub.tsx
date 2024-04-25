import { useAuth } from '@hooks/useAuth';

import styles from './JudgingHub.module.scss';
import HubHero from './HubHero';
import JudgingList from './JudgingList';
import TableLocations from './TableLocations';

const projects = [
  {
    num: 1,
    name: 'haptic hand',
    categories: [
      'Beginner',
      'Best Interactive Media Hack',
      'Best Design',
      'Best Design',
      'Best Design',
    ],
  },
  {
    num: 70,
    name: 'haptic hand',
    categories: ['not sure', 'something else', 'Best Design'],
  },
  {
    num: 75,
    name: 'haptic hand',
    categories: ['not sure', 'something else'],
  },
  {
    num: 75,
    name: 'haptic hand',
    categories: ['not sure', 'something else'],
  },
  {
    num: 78,
    name: 'haptic hand',
    categories: ['not sure', 'something else'],
  },
  {
    num: 8,
    name: 'haptic hand',
    categories: ['not sure', 'something else'],
  },
];

export default function JudgingHub() {
  const { user, loading } = useAuth();
  return (
    <div className={styles.container}>
      <HubHero user={user} loading={loading} />
      <JudgingList /*user={user} loading={loading}*/ projects={projects} />
      <TableLocations />
    </div>
  );
}
