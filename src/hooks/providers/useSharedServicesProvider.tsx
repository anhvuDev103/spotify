import { createContext } from 'react';

interface SharedServicesProviderProps {
  children?: React.ReactNode;
}

interface SharedServicesContextType {}

const SharedServices = createContext<SharedServicesContextType>({});

export const SharedServicesProvider: React.FC<SharedServicesProviderProps> = ({
  children,
}) => {
  return (
    <SharedServices.Provider value={{}}>{children}</SharedServices.Provider>
  );
};
