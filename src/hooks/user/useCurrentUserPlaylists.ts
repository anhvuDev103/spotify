import { queryKeysFactory } from '@constants/queries';
import { useSharedServices } from '@hooks/providers/useSharedServicesProvider';
import { useRootStore } from '@stores/root';
import { useQuery } from '@tanstack/react-query';

const useCurrentUserPlaylists = () => {
  const { uiUserService } = useSharedServices();
  const { isLogin } = useRootStore();

  return useQuery({
    queryKey: queryKeysFactory.getCurrentUserPlaylists,
    queryFn: () => uiUserService.getCurrentUserPlaylists(),
    enabled: !!isLogin,
    initialData: [],
  });
};

export default useCurrentUserPlaylists;
