import React from 'react';
import './CheckButton.scss';
import { useGlobalContext } from '../context';
function CheckButton() {
  const {
    rowOne,
    setRowOne,
    isRowOne,
    setIsRowOne,
    rowTwo,
    setRowTwo,
    isRowTwo,
    setIsRowTwo,
    rowThree,
    setRowThree,
    isRowThree,
    setIsRowThree,
    rowFour,
    setRowFour,
    isRowFour,
    setIsRowFour,
    rowFive,
    setRowFive,
    isRowFive,
    setIsRowFive,
    secretSymbols,
    setsecretSymbols,
    resultsRowOne,
    setResultsRowOne,
    resultsRowTwo,
    setResultsRowTwo,
    resultsRowThree,
    setResultsRowThree,
    resultsRowFour,
    setResultsRowFour,
    resultsRowFive,
    setResultsRowFive,
  } = useGlobalContext();
  console.log(rowOne);
  console.log(secretSymbols);

  const compare = (result, row, setResults) => {
    const red = [];
    const yellow = [];
    const nista = [];
    result.map((item, index) => {
      if (row[index] === item) {
        return red.push(`red`);
      } else if (rowOne.includes(item)) {
        return yellow.push(`yellow`);
      } else {
        return nista.push(`nista`);
      }
    });
    console.log([...red, ...yellow, ...nista]);
    return setResults([...red, ...yellow, ...nista]);
  };

  const handleClick = () => {
    //go to another row
    if (!isRowOne && rowOne.length === 4) setIsRowOne(true);
    if (isRowOne && !isRowTwo && rowTwo.length === 4) setIsRowTwo(true);
    if (isRowTwo && !isRowThree && rowThree.length === 4) setIsRowThree(true);
    if (isRowThree && !isRowFour && rowFour.length === 4) setIsRowFour(true);
    if (isRowFour && !isRowFive && rowFive.length === 4) setIsRowFive(true);

    compare(secretSymbols, rowOne, setResultsRowOne);

    console.log(`klik`);
  };

  return (
    <button className='btn btn__check' onClick={handleClick}>
      CHECK RESULT
    </button>
  );
}

export default CheckButton;
