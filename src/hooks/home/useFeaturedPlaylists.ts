import { queryKeysFactory } from '@constants/queries';
import { useSharedServices } from '@hooks/providers/useSharedServicesProvider';
import { useQuery } from '@tanstack/react-query';

const useFeaturedPlaylists = () => {
  const { uiHomeService } = useSharedServices();

  return useQuery({
    queryKey: queryKeysFactory.getFeaturedPlaylists,
    queryFn: () => uiHomeService.getFeaturedPlaylists(),
    select: (data) => data.playlists.items,
  });
};

export default useFeaturedPlaylists;
