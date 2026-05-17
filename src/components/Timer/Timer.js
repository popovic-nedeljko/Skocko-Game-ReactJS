import React, { useEffect } from 'react';
import { useGlobalContext } from '../../context';
import './Timer.scss';

const Timer = () => {
  const { time, setTime, setHidden, hidden } = useGlobalContext();

  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime(time - 1);
      }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  useEffect(() => {
    if (time === 0) setHidden(false);
  }, [time, setHidden]);

  useEffect(() => {
    if (!hidden) setTime(0);
  }, [hidden, setTime]);

  return <div className='timer'>{time}</div>;
};

export default Timer;
