import { queryKeysFactory } from '@constants/queries';
import { useQuery } from '@tanstack/react-query';

import { useSharedServices } from './providers/useSharedServicesProvider';

const useUserPlaylists = () => {
  const { uiUserService } = useSharedServices();

  return useQuery({
    queryKey: queryKeysFactory.getCurrentUserPlaylists,
    queryFn: () => uiUserService.getCurrentUserPlaylists(),
    select: (data) => {
      console.log('>> Check | data:', data);
    },
  });
};

export default useUserPlaylists;
