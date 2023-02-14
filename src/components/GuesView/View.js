import React from 'react';
import { useGlobalContext } from '../../context';
import './View.scss';
import ViewBlock from './ViewBlock';

const View = () => {
  const { rowOne, rowTwo, rowThree, rowFour, rowFive } = useGlobalContext();

  return (
    <>
      <ViewBlock row={rowOne} />
      <ViewBlock row={rowTwo} />
      <ViewBlock row={rowThree} />
      <ViewBlock row={rowFour} />
      <ViewBlock row={rowFive} />
    </>
  );
};

export default View;
