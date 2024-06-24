import AuthService from '@services/AuthService';
import UiHomeService from '@services/UiHomeService';
import UiUserService from '@services/UiUserService';
import { createContext, useContext } from 'react';
import invariant from 'tiny-invariant';

interface SharedServicesProviderProps {
  children?: React.ReactNode;
}

interface SharedServicesContextType {
  authService: AuthService;
  uiUserService: UiUserService;
  uiHomeService: UiHomeService;
}

const SharedServicesContext = createContext<SharedServicesContextType | null>(
  null,
);

export const SharedServicesProvider: React.FC<SharedServicesProviderProps> = ({
  children,
}) => {
  const authService = new AuthService();
  const uiUserService = new UiUserService();
  const uiHomeService = new UiHomeService();

  return (
    <SharedServicesContext.Provider
      value={{ authService, uiUserService, uiHomeService }}
    >
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
