import { queryKeysFactory } from '@constants/queries';
import { useQuery } from '@tanstack/react-query';

import { useSharedServices } from './providers/useSharedServicesProvider';

const useCurrentUserPlaylists = () => {
  const { uiUserService } = useSharedServices();

  return useQuery({
    queryKey: queryKeysFactory.getCurrentUserPlaylists,
    queryFn: () => uiUserService.getCurrentUserPlaylists(),
  });
};

export default useCurrentUserPlaylists;
