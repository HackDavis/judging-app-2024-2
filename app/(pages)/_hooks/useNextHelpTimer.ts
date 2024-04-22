'use client';

import { getNextTimer } from '@actions/helpTimers/getHelpTimer';
import { useState, useEffect } from 'react';

export function useNextHelpTimer() {
  const [pending, setPending] = useState(true);
  const [event, setEvent] = useState<any | null>(null);
  const [timeTill, setTimeTill] = useState<number>(0);
  const [ended, setEnded] = useState(true);

  useEffect(() => {
    if (ended) {
      const getNextHelperTimerWrapper = async () => {
        const time = await getNextTimer();
        setEvent(time);
        setTimeTill(Math.floor((time.body.utc - Date.now()) / 1000));
        setPending(false);
        setEnded(false);
      };

      getNextHelperTimerWrapper();
    }
  }, [ended]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (event) {
        setTimeTill(Math.floor((event.body.utc - Date.now()) / 1000));
        if (event.body.utc < Date.now()) {
          setEnded(true);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [event]);

  return { pending, event, timeTill, ended };
}
