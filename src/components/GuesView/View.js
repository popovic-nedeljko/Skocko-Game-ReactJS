import React from 'react';
import { useGlobalContext } from '../../context';
import './View.scss';
import ViewBlock from './ViewBlock';

const View = () => {
  const { gameState } = useGlobalContext();

  return (
    <>
      {gameState.map((row, index) => (
        <ViewBlock row={row.row} key={index} isActive={row.isRow} />
      ))}
    </>
  );
};

export default View;
