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
    <BsFillSuitSpadeFill color={`var(--color-black)`} />,
    <BsFillStarFill color={`var(--color-yellow)`} />,
    <BsFillSuitClubFill color={`var(--color-black)`} />,
    <GiDiamonds color={`var(--color-red)`} />,
    <GiCardJoker color={`var(--color-blue-dark)`} />,
    <BsFillSuitHeartFill color={`var(--color-red)`} />,
  ];

  const [hidden, setHidden] = useState(true);
  const [secretSymbols, setSecretSymbols] = useState([]);
  const [rowIndex, setRowIndex] = useState(0);

  const [gameState, setGameState] = useState([
    { row: [], isRow: true, resultsRow: ['', '', '', ''] },
    { row: [], isRow: false, resultsRow: ['', '', '', ''] },
    { row: [], isRow: false, resultsRow: ['', '', '', ''] },
    { row: [], isRow: false, resultsRow: ['', '', '', ''] },
    { row: [], isRow: false, resultsRow: ['', '', '', ''] },
    { row: [], isRow: false, resultsRow: ['', '', '', ''] },
  ]);

  console.log(gameState);

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
        rowIndex,
        setRowIndex,
        gameState,
        setGameState,
        secretSymbols,
        hidden,
        setHidden,
        time,
        setTime,
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
