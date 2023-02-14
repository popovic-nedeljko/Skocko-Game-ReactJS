import React, { useContext, useEffect, useState } from 'react';
import {
  BsFillSuitSpadeFill,
  BsFillStarFill,
  BsFillSuitClubFill,
  BsFillSuitHeartFill,
} from 'react-icons/bs';
import { GiDiamonds, GiCardJoker } from 'react-icons/gi';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const symbols = [
    <BsFillSuitSpadeFill />,
    <BsFillStarFill />,
    <BsFillSuitClubFill />,
    <GiDiamonds />,
    <GiCardJoker />,
    <BsFillSuitHeartFill />,
  ];

  const [hidden, setHidden] = useState(true);
  const [secretSymbols, setSecretSymbols] = useState([]);

  const [rowOne, setRowOne] = useState([]);
  const [isRowOne, setIsRowOne] = useState(false);
  const [rowTwo, setRowTwo] = useState([]);
  const [isRowTwo, setIsRowTwo] = useState(false);
  const [rowThree, setRowThree] = useState([]);
  const [isRowThree, setIsRowThree] = useState(false);
  const [rowFour, setRowFour] = useState([]);
  const [isRowFour, setIsRowFour] = useState(false);
  const [rowFive, setRowFive] = useState([]);
  const [isRowFive, setIsRowFive] = useState(false);

  const [resultsRowOne, setResultsRowOne] = useState([]);
  const [resultsRowTwo, setResultsRowTwo] = useState([]);
  const [resultsRowThree, setResultsRowThree] = useState([]);
  const [resultsRowFour, setResultsRowFour] = useState([]);
  const [resultsRowFive, setResultsRowFive] = useState([]);

  const [time, setTime] = useState(100);
  const [newGame, setNewGame] = useState(false);

  const random = (item) => {
    let number = Math.floor(Math.random() * item.length);
    return number;
  };

  useEffect(() => {
    setSecretSymbols([
      symbols[random(symbols)],
      symbols[random(symbols)],
      symbols[random(symbols)],
      symbols[random(symbols)],
    ]);
  }, []);

  return (
    <AppContext.Provider
      value={{
        secretSymbols,
        hidden,
        time,
        setTime,
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
        setNewGame,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
