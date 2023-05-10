import { useEffect } from 'react';
import { useGlobalContext } from '../../context';
import './Timer.scss';

const Timer = () => {
  const { time, setTime, setHidden, hidden } = useGlobalContext();

  useEffect(() => {
    const timer: NodeJS.Timer | null | false =
      time > 0 &&
      setInterval(() => {
        setTime(time - 1);
      }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  if (time === 0) setHidden(false);
  if (!hidden) setTime(0);

  return <div className='timer'>{time}</div>;
};

export default Timer;
