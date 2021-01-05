import React from 'react';
import { createContext, FC, ReactNode, useContext, useState } from 'react';
import { TSong } from '../types';

type TContext = {
  setCurrentSong: (song: TSong) => void;
  currentSong?: TSong;
};

const initialContext: TContext = {
  setCurrentSong: (song: TSong) => null,
  currentSong: undefined,
};

const AppContext = createContext(initialContext);

export const AppProvider: FC<ReactNode> = ({ children }) => {
  const [currentSong, setCurrentSong] = useState<TSong>();

  return (
    <AppContext.Provider value={{ setCurrentSong, currentSong }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
