import { AppDataProvider } from '@hooks/providers/useAppDataProvider';
import { SharedServicesProvider } from '@hooks/providers/useSharedServicesProvider';
import buildProvidersTree from '@utils/buildProvidersTree';

const ProvidersTree = buildProvidersTree([
  [AppDataProvider],
  [SharedServicesProvider],
]);

export default ProvidersTree;
