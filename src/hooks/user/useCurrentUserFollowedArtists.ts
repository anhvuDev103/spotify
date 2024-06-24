import { queryKeysFactory } from '@constants/queries';
import { useSharedServices } from '@hooks/providers/useSharedServicesProvider';
import { useQuery } from '@tanstack/react-query';

const useCurrentUserFollowedArtists = () => {
  const { uiUserService } = useSharedServices();

  return useQuery({
    queryKey: queryKeysFactory.getCurrentUserFollowedArtists,
    queryFn: () => uiUserService.getCurrentUserFollowedArtists(),
    select: (data) => data.artists.items,
  });
};

export default useCurrentUserFollowedArtists;
