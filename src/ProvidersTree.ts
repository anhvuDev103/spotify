import { AppDataProvider } from '@hooks/providers/useAppDataProvider';
import { SharedServicesProvider } from '@hooks/providers/useSharedServicesProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import buildProvidersTree from '@utils/buildProvidersTree';

const queryClient = new QueryClient();

const ProvidersTree = buildProvidersTree([
  [
    QueryClientProvider,
    {
      client: queryClient,
    },
  ],
  [AppDataProvider],
  [SharedServicesProvider],
]);

export default ProvidersTree;
