'use client';
import { useSearchParams } from 'next/navigation';
import ScoringForm from '../_components/ScoringForm/ScoringForm';
import { useAuth } from '@hooks/useAuth';
export default function Scoring() {
  const { loading, user } = useAuth();
  const searchParams = useSearchParams();
  const team_id = searchParams.get('team_id');
  if (loading) {
    return 'loading...';
  }

  return <ScoringForm team_id={team_id ?? ''} judge_id={user._id} />;
}
