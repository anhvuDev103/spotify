import { queryKeysFactory } from '@constants/queries';
import { useQuery } from '@tanstack/react-query';

import { useSharedServices } from './providers/useSharedServicesProvider';

const useCurrentUserFollowedArtists = () => {
  const { uiUserService } = useSharedServices();

  return useQuery({
    queryKey: queryKeysFactory.getCurrentUserFollowedArtists,
    queryFn: () => uiUserService.getCurrentUserFollowedArtists(),
  });
};

export default useCurrentUserFollowedArtists;
