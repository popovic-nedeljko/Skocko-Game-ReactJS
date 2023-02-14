import React from 'react';
import './CheckButton.scss';
import { useGlobalContext } from '../../../context';
function CheckButton() {
  const {
    rowOne,
    isRowOne,
    setIsRowOne,
    rowTwo,
    isRowTwo,
    setIsRowTwo,
    rowThree,

    isRowThree,
    setIsRowThree,
    rowFour,
    isRowFour,
    setIsRowFour,
    rowFive,
    isRowFive,
    setIsRowFive,
    secretSymbols,
    setResultsRowOne,
    setResultsRowTwo,
    setResultsRowThree,
    setResultsRowFour,
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
    if (!isRowOne && rowOne.length === 4) {
      setIsRowOne(true);
      compare(secretSymbols, rowOne, setResultsRowOne);
    }
    if (isRowOne && !isRowTwo && rowTwo.length === 4) {
      setIsRowTwo(true);
      compare(secretSymbols, rowTwo, setResultsRowTwo);
    }
    if (isRowTwo && !isRowThree && rowThree.length === 4) {
      setIsRowThree(true);
      compare(secretSymbols, rowThree, setResultsRowThree);
    }
    if (isRowThree && !isRowFour && rowFour.length === 4) {
      setIsRowFour(true);
      compare(secretSymbols, rowFour, setResultsRowFour);
    }
    if (isRowFour && !isRowFive && rowFive.length === 4) {
      setIsRowFive(true);
      compare(secretSymbols, rowFive, setResultsRowFive);
    }

    console.log(`klik`);
  };

  return (
    <button className='btn btn__check' onClick={handleClick}>
      CHECK RESULT
    </button>
  );
}

export default CheckButton;
