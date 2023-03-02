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

  // const [gameState, setGameState] = useState([
  //   { rowOne: [], isRowOne: false, resultsRowOne: [] },
  //   { rowTwo: [], isRowTwo: false, resultsRowTwo: [] },
  //   { rowThree: [], isRowThree: false, resultsRowThree: [] },
  //   { rowFour: [], isRowFour: false, resultsRowFour: [] },
  //   { rowFive: [], isRowFive: false, resultsRowFive: [] },
  //   { rowSix: [], isRowSix: false, resultsRowSix: [] },
  // ]);

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
  const [rowSix, setRowSix] = useState([]);
  const [isRowSix, setIsRowSix] = useState(false);

  const [resultsRowOne, setResultsRowOne] = useState([]);
  const [resultsRowTwo, setResultsRowTwo] = useState([]);
  const [resultsRowThree, setResultsRowThree] = useState([]);
  const [resultsRowFour, setResultsRowFour] = useState([]);
  const [resultsRowFive, setResultsRowFive] = useState([]);
  const [resultsRowSix, setResultsRowSix] = useState([]);

  const [time, setTime] = useState(100);

  const random = (item) => {
    let number = Math.floor(Math.random() * item.length);
    return number;
  };
  const renderRandomSymbols = () => {
    setSecretSymbols([
      symbols[random(symbols)],
      symbols[random(symbols)],
      symbols[random(symbols)],
      symbols[random(symbols)],
    ]);
  };

  useEffect(() => {
    renderRandomSymbols();
  }, []);

  return (
    <AppContext.Provider
      value={{
        secretSymbols,
        hidden,
        setHidden,
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
        rowSix,
        setRowSix,
        isRowSix,
        setIsRowSix,
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
        resultsRowSix,
        setResultsRowSix,
        renderRandomSymbols,
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
