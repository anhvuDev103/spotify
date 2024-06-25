import { queryKeysFactory } from '@constants/queries';
import { useSharedServices } from '@hooks/providers/useSharedServicesProvider';
import { useRootStore } from '@stores/root';
import { useQuery } from '@tanstack/react-query';

const useCurrentUserFollowedArtists = () => {
  const { uiUserService } = useSharedServices();
  const { isLogin } = useRootStore();

  return useQuery({
    queryKey: queryKeysFactory.getCurrentUserFollowedArtists,
    queryFn: () => uiUserService.getCurrentUserFollowedArtists(),
    enabled: !!isLogin,
    initialData: [],
  });
};

export default useCurrentUserFollowedArtists;
