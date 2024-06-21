import useUserSummary from '@hooks/useUserSummary';
import { FormattedUserSummary } from '@utils/formatters/user';
import { createContext, useContext } from 'react';
import invariant from 'tiny-invariant';

interface AppDataProviderProps {
  children?: React.ReactNode;
}

interface AppDataContextType {
  user?: FormattedUserSummary;
}

const AppDataContext = createContext<AppDataContextType>({});

export const AppDataProvider: React.FC<AppDataProviderProps> = ({
  children,
}) => {
  const { data: user } = useUserSummary();

  return (
    <AppDataContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};

export const useAppDataProvider = () => {
  const context = useContext(AppDataContext);

  invariant(
    context,
    'Component should be wrapped inside <SharedServicesProvider/>',
  );

  return context;
};
