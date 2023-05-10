import React, { ReactElement, useContext, useEffect, useState } from 'react';

import { symbols, random } from './utils';

type GameStateType = {
  row: ReactElement[];
  isRow: boolean;
  resultsRow: string[];
}[];

type AppContextType = {
  rowIndex: number;
  setRowIndex: React.Dispatch<React.SetStateAction<number>>;
  gameState: GameStateType;
  setGameState: React.Dispatch<React.SetStateAction<GameStateType>>;
  secretSymbols: ReactElement[];
  hidden: boolean;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  renderRandomSymbols: () => void;
};

type ChildrenType = {
  children?: ReactElement;
};

const initialContextValue: AppContextType = {
  rowIndex: 0,
  setRowIndex: () => 0,
  gameState: [],
  setGameState: () => [],
  secretSymbols: [],
  hidden: true,
  setHidden: () => true,
  time: 0,
  setTime: () => 0,
  renderRandomSymbols: () => [],
};

const AppContext = React.createContext<AppContextType>(initialContextValue);

const AppProvider = ({ children }: ChildrenType) => {
  const [hidden, setHidden] = useState<boolean>(true);
  const [secretSymbols, setSecretSymbols] = useState<ReactElement[]>([]);
  const [rowIndex, setRowIndex] = useState<number>(0);

  const [gameState, setGameState] = useState<GameStateType>([
    { row: [], isRow: true, resultsRow: ['', '', '', ''] },
    { row: [], isRow: false, resultsRow: ['', '', '', ''] },
    { row: [], isRow: false, resultsRow: ['', '', '', ''] },
    { row: [], isRow: false, resultsRow: ['', '', '', ''] },
    { row: [], isRow: false, resultsRow: ['', '', '', ''] },
    { row: [], isRow: false, resultsRow: ['', '', '', ''] },
  ]);

  console.log(gameState);

  const [time, setTime] = useState<number>(100);

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

export const useGlobalContext = (): AppContextType => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
