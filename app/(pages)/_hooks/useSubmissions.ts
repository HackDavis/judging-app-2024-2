'use client';

import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import { getManySubmissions } from '@actions/submissions/getSubmission';

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
      setSubmssions(submissions);
      setLoading(false);
    };
    if (!authLoading && user) {
      getSubmissionsWrapper(user._id);
    }
  }, [authLoading, user]);

  return { submissions, loading };
}
