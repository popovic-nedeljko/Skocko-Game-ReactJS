import React from 'react';
import CheckView from '../components/CheckView';
import { useGlobalContext } from '../context';

function CheckReuslts() {
  const {
    resultsRowOne,
    resultsRowTwo,
    resultsRowThree,
    resultsRowFour,
    resultsRowFive,
  } = useGlobalContext();

  return (
    <>
      <CheckView row={resultsRowOne} />
      <CheckView row={resultsRowTwo} />
      <CheckView row={resultsRowThree} />
      <CheckView row={resultsRowFour} />
      <CheckView row={resultsRowFive} />
    </>
  );
}

export default CheckReuslts;
