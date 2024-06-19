import AuthService from '@services/AuthService';
import { createContext, useContext } from 'react';
import invariant from 'tiny-invariant';

interface SharedServicesProviderProps {
  children?: React.ReactNode;
}

interface SharedServicesContextType {
  authService: AuthService;
}

const SharedServicesContext = createContext<SharedServicesContextType | null>(
  null,
);

export const SharedServicesProvider: React.FC<SharedServicesProviderProps> = ({
  children,
}) => {
  const authService = new AuthService();
  return (
    <SharedServicesContext.Provider value={{ authService }}>
      {children}
    </SharedServicesContext.Provider>
  );
};

export const useSharedServices = () => {
  const context = useContext(SharedServicesContext);

  invariant(
    context,
    'Component should be wrapped inside <SharedServicesProvider/>',
  );

  return context;
};
