import { queryKeysFactory } from '@constants/queries';
import { useSharedServices } from '@hooks/providers/useSharedServicesProvider';
import { useRootStore } from '@stores/root';
import { useQuery } from '@tanstack/react-query';

const useCurrentUserSavedAlbums = () => {
  const { uiUserService } = useSharedServices();
  const { isLogin } = useRootStore();

  return useQuery({
    queryKey: queryKeysFactory.getCurrentUserSavedAlbums,
    queryFn: () => uiUserService.getCurrentUserSavedAlbums(),
    enabled: !!isLogin,
    initialData: [],
  });
};

export default useCurrentUserSavedAlbums;
