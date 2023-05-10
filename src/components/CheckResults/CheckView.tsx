import React from 'react';
import './CheckView.scss';
import CheckComponent from './CheckComponent';

interface CheckViewProps {
  row: string[];
}

const CheckView: React.FC<CheckViewProps> = ({ row }) => {
  return (
    <div className='check--view'>
      {row.map((row: string, index: number) => (
        <CheckComponent color={row} key={index} />
      ))}
    </div>
  );
};

export default CheckView;
