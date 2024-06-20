import { queryKeysFactory } from '@constants/queries';
import { useQuery } from '@tanstack/react-query';

import { useSharedServices } from './providers/useSharedServicesProvider';

const useCurrentUserSavedTracks = () => {
  const { uiUserService } = useSharedServices();

  return useQuery({
    queryKey: queryKeysFactory.getCurrentUserSavedTracks,
    queryFn: () => uiUserService.getCurrentUserSavedTracks(),
  });
};

export default useCurrentUserSavedTracks;
