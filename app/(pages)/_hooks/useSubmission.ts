'use client';

import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import { getSubmission } from '@actions/submissions/getSubmission';

export function useSubmission(team_id: string): any {
  const { user, loading: authLoading } = useAuth();
  const [submission, setSubmssions] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const getSubmissionWrapper = async (judge_id: string) => {
      const submission = await getManySubmissions({
        judge_id: {
          '*convertId': {
            id: judge_id,
          },
        },
      });
    };
    if (!authLoading && user) {
      getSubmissionWrapper(user._id);
    }
  }, [authLoading, user]);

  return { submission, loading };
}
