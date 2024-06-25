import { queryKeysFactory } from '@constants/queries';
import { useSharedServices } from '@hooks/providers/useSharedServicesProvider';
import { useRootStore } from '@stores/root';
import { useQuery } from '@tanstack/react-query';

const useFeaturedPlaylists = () => {
  const { uiHomeService } = useSharedServices();
  const { isLogin } = useRootStore();

  return useQuery({
    queryKey: queryKeysFactory.getFeaturedPlaylists,
    queryFn: () => uiHomeService.getFeaturedPlaylists(),
    enabled: !!isLogin,
    initialData: [],
  });
};

export default useFeaturedPlaylists;
