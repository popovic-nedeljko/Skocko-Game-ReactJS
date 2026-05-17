import React, { useContext, useEffect, useState } from 'react';
import { SYMBOL_CONFIG } from './constants';

const AppContext = React.createContext();

const SYMBOLS = SYMBOL_CONFIG.map(({ Icon, color }) => <Icon color={color} />);

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
