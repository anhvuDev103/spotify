import { queryKeysFactory } from '@constants/queries';
import { useSharedServices } from '@hooks/providers/useSharedServicesProvider';
import { useRootStore } from '@stores/root';
import { useQuery } from '@tanstack/react-query';

const useCurrentUserSavedTracks = () => {
  const { uiUserService } = useSharedServices();
  const { isLogin } = useRootStore();

  return useQuery({
    queryKey: queryKeysFactory.getCurrentUserSavedTracks,
    queryFn: () => uiUserService.getCurrentUserSavedTracks(),
    enabled: !!isLogin,
    initialData: [],
  });
};

export default useCurrentUserSavedTracks;
