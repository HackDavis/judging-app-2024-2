'use client';

import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import { getSubmission } from '@actions/submissions/getSubmission';

export function useSubmission(team_id: string): any {
  const { user, loading: authLoading } = useAuth();
  const [submission, setSubmssion] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const getSubmissionWrapper = async (judge_id: string) => {
      const submission = await getSubmission(judge_id, team_id);
      setSubmssion(submission);
      setLoading(false);
    };
    if (!authLoading && user) {
      getSubmissionWrapper(user._id);
    }
  }, [authLoading, user, team_id]);

  return { submission, loading };
}
