import { queryKeysFactory } from '@constants/queries';
import { useSharedServices } from '@hooks/providers/useSharedServicesProvider';
import { useQuery } from '@tanstack/react-query';

const useCurrentUserSavedTracks = () => {
  const { uiUserService } = useSharedServices();

  return useQuery({
    queryKey: queryKeysFactory.getCurrentUserSavedTracks,
    queryFn: () => uiUserService.getCurrentUserSavedTracks(),
    select: (data) => data.items,
  });
};

export default useCurrentUserSavedTracks;
