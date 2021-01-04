import { createContext, FC, ReactNode, useContext, useState } from 'react';
import { TSong } from '../types';

const AppContext = createContext({});

export const AppProvider: FC<ReactNode> = ({ children }) => {
  const [currentSong, setCurrentSong] = useState<TSong | null>(null);

  return (
    <AppContext.Provider value={{ setCurrentSong, currentSong }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
