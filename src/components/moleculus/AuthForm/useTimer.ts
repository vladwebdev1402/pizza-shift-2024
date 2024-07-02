import { useEffect, useRef, useState } from 'react';

const useTimer = (startTime: number) => {
  const [seconds, setSeconds] = useState(startTime);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (seconds > 0) {
      timerRef.current = setTimeout(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, [seconds]);

  const resetTimer = (seconds: number) => {
    setSeconds(seconds);
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  return { seconds, resetTimer };
};

export { useTimer };
