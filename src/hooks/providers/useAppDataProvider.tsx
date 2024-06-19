import { createContext } from 'react';

interface AppDataProviderProps {
  children?: React.ReactNode;
}

interface AppDataContextType {}

const AppDataContext = createContext<AppDataContextType>({});

export const AppDataProvider: React.FC<AppDataProviderProps> = ({
  children,
}) => {
  return (
    <AppDataContext.Provider value={{}}>{children}</AppDataContext.Provider>
  );
};
