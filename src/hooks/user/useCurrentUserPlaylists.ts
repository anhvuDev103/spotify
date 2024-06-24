import { queryKeysFactory } from '@constants/queries';
import { useSharedServices } from '@hooks/providers/useSharedServicesProvider';
import { useQuery } from '@tanstack/react-query';

const useCurrentUserPlaylists = () => {
  const { uiUserService } = useSharedServices();

  return useQuery({
    queryKey: queryKeysFactory.getCurrentUserPlaylists,
    queryFn: () => uiUserService.getCurrentUserPlaylists(),
    select: (data) => data.items,
  });
};

export default useCurrentUserPlaylists;
