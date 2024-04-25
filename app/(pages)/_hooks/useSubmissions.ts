'use client';

import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import { getManySubmissions } from '@actions/submissions/getSubmission';
import { getManyTeams } from '@actions/teams/getTeams';

export function useSubmissions(): any {
  const { user, loading: authLoading } = useAuth();
  const [submissions, setSubmssions] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const getSubmissionsWrapper = async (judge_id: string) => {
      const submissions = await getManySubmissions({
        judge_id: {
          '*convertId': {
            id: judge_id,
          },
        },
      });
      if (submissions.ok) {
        const team_ids = submissions.body.map(
          (body: { team_id: string }) => body.team_id
        );
        const teams = await getManyTeams({
          _id: {
            $in: {
              '*convertIds': {
                ids: team_ids,
              },
            },
          },
        });
        setSubmssions(teams);
      } else {
        setSubmssions(submissions);
      }
      setLoading(false);
    };
    if (!authLoading && user) {
      getSubmissionsWrapper(user._id);
    }
  }, [authLoading, user]);

  return { submissions, loading };
}
