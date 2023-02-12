import React from 'react';
import { useGlobalContext } from '../context';
import SingleItem from './SingleItem';
import './View.scss';

const View = () => {
  const { rowOne, rowTwo, rowThree, rowFour, rowFive } = useGlobalContext();

  return (
    <div className='view'>
      <SingleItem item={rowOne[0]} />
      <SingleItem item={rowOne[1]} />
      <SingleItem item={rowOne[2]} />
      <SingleItem item={rowOne[3]} />

      <SingleItem item={rowTwo[0]} />
      <SingleItem item={rowTwo[1]} />
      <SingleItem item={rowTwo[2]} />
      <SingleItem item={rowTwo[3]} />

      <SingleItem item={rowThree[0]} />
      <SingleItem item={rowThree[1]} />
      <SingleItem item={rowThree[2]} />
      <SingleItem item={rowThree[3]} />

      <SingleItem item={rowFour[0]} />
      <SingleItem item={rowFour[1]} />
      <SingleItem item={rowFour[2]} />
      <SingleItem item={rowFour[3]} />

      <SingleItem item={rowFive[0]} />
      <SingleItem item={rowFive[1]} />
      <SingleItem item={rowFive[2]} />
      <SingleItem item={rowFive[3]} />
    </div>
  );
};

export default View;
