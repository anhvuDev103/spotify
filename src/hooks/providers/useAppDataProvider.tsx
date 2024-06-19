import http from '@helpers/http';
import { createContext } from 'react';

interface AppDataProviderProps {
  children?: React.ReactNode;
}

interface AppDataContextType {}

const AppDataContext = createContext<AppDataContextType>({});

export const AppDataProvider: React.FC<AppDataProviderProps> = ({
  children,
}) => {
  console.log('sadasd', http);
  return (
    <AppDataContext.Provider value={{}}>{children}</AppDataContext.Provider>
  );
};
