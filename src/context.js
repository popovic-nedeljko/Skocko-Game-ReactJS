import React, { useContext, useEffect, useState } from 'react';
import {
  BsFillSuitSpadeFill,
  BsFillSuitClubFill,
  BsFillSuitHeartFill,
} from 'react-icons/bs';
import { GiDiamonds, GiCardJoker } from 'react-icons/gi';
import { FaStar } from 'react-icons/fa';

const AppContext = React.createContext();

const SYMBOLS = [
  <BsFillSuitHeartFill color='#cc2233' />,
  <GiDiamonds color='#ff6600' />,
  <BsFillSuitClubFill color='#22aa44' />,
  <BsFillSuitSpadeFill color='#22a0cc' />,
  <FaStar color='#ffd700' />,
  <GiCardJoker color='#9933cc' />,
];

const AppProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [secretSymbols, setSecretSymbols] = useState([]);
  const [rowIndex, setRowIndex] = useState(0);

  const [gameState, setGameState] = useState([
    { row: [], isRow: true,  resultsRow: ['', '', '', ''] },
    { row: [], isRow: false, resultsRow: ['', '', '', ''] },
    { row: [], isRow: false, resultsRow: ['', '', '', ''] },
    { row: [], isRow: false, resultsRow: ['', '', '', ''] },
    { row: [], isRow: false, resultsRow: ['', '', '', ''] },
    { row: [], isRow: false, resultsRow: ['', '', '', ''] },
  ]);

  const [time, setTime] = useState(100);

  const random = (arr) => Math.floor(Math.random() * arr.length);

  const renderRandomSymbols = () => {
    setSecretSymbols([
      SYMBOLS[random(SYMBOLS)],
      SYMBOLS[random(SYMBOLS)],
      SYMBOLS[random(SYMBOLS)],
      SYMBOLS[random(SYMBOLS)],
    ]);
  };

  useEffect(() => {
    renderRandomSymbols();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
