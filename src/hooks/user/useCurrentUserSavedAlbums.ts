import { queryKeysFactory } from '@constants/queries';
import { useSharedServices } from '@hooks/providers/useSharedServicesProvider';
import { useQuery } from '@tanstack/react-query';

const useCurrentUserSavedAlbums = () => {
  const { uiUserService } = useSharedServices();

  return useQuery({
    queryKey: queryKeysFactory.getCurrentUserSavedAlbums,
    queryFn: () => uiUserService.getCurrentUserSavedAlbums(),
    select: (data) => data.items,
  });
};

export default useCurrentUserSavedAlbums;
