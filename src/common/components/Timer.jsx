import { useState, useEffect, useContext } from 'react'

export function useTimer(timestamp) {
  const [time, setTime] = useState(timestamp);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timestamp]);

  useEffect(() => {
    if (time === 0) clearInterval(interval);
  }, [time]);

  const days = Math.floor(time / (3600 * 24));
  const hours = Math.floor((time % (3600 * 24)) / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return {
    days,
    hours,
    minutes,
    seconds
  }
}