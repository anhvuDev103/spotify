import { queryKeysFactory } from '@constants/queries';
import { useQuery } from '@tanstack/react-query';

import { useSharedServices } from './providers/useSharedServicesProvider';

const useCurrentUserSavedAlbums = () => {
  const { uiUserService } = useSharedServices();

  return useQuery({
    queryKey: queryKeysFactory.getCurrentUserSavedAlbums,
    queryFn: () => uiUserService.getCurrentUserSavedAlbums(),
  });
};

export default useCurrentUserSavedAlbums;
