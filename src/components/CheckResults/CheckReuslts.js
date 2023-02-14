import React from 'react';
import CheckView from './CheckView';
import { useGlobalContext } from '../../context';

function CheckReuslts() {
  const {
    resultsRowOne,
    resultsRowTwo,
    resultsRowThree,
    resultsRowFour,
    resultsRowFive,
    resultsRowSix,
  } = useGlobalContext();

  return (
    <>
      <CheckView row={resultsRowOne} />
      <CheckView row={resultsRowTwo} />
      <CheckView row={resultsRowThree} />
      <CheckView row={resultsRowFour} />
      <CheckView row={resultsRowFive} />
      <CheckView row={resultsRowSix} />
    </>
  );
}

export default CheckReuslts;
