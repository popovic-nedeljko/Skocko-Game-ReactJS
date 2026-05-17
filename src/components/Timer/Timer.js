import React, { useEffect } from 'react';
import { useGlobalContext } from '../../context';
import './Timer.scss';

const Timer = () => {
  const { time, setTime, setHidden, hidden } = useGlobalContext();

  useEffect(() => {
    if (time <= 0) return;
    const timer = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [time, setTime]);

  useEffect(() => {
    if (time === 0) setHidden(false);
  }, [time, setHidden]);

  useEffect(() => {
    if (!hidden) setTime(0);
  }, [hidden, setTime]);

  return <div className='timer'>{time}</div>;
};

export default Timer;
