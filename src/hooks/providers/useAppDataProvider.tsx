import useUserSummary from '@hooks/user/useUserSummary';
import { FormattedUserSummary } from '@utils/formatters/user';
import { createContext, useContext } from 'react';
import invariant from 'tiny-invariant';

interface AppDataProviderProps {
  children?: React.ReactNode;
}

interface AppDataContextType {
  user?: FormattedUserSummary;
  isLoading: boolean;
}

const AppDataContext = createContext<AppDataContextType>({
  isLoading: true,
});

export const AppDataProvider: React.FC<AppDataProviderProps> = ({
  children,
}) => {
  const { data: userSummary, isLoading: isUserSummaryLoading } =
    useUserSummary();

  return (
    <AppDataContext.Provider
      value={{
        user: userSummary,
        isLoading: isUserSummaryLoading,
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
