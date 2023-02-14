import React, { useEffect } from 'react';
import { useGlobalContext } from '../../context';
import './Timer.scss';

const Timer = () => {
  const { time, setTime } = useGlobalContext();

  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime(time - 1);
      }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  return <div className='timer'>: {time}</div>;
};

export default Timer;
