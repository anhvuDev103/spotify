import { queryKeysFactory } from '@constants/queries';
import { useSharedServices } from '@hooks/providers/useSharedServicesProvider';
import { useQuery } from '@tanstack/react-query';

const useCurrentUserProfile = () => {
  const { uiUserService } = useSharedServices();

  return useQuery({
    queryKey: queryKeysFactory.getCurrentUserProfile,
    queryFn: () => uiUserService.getCurrentUserProfile(),
  });
};

export default useCurrentUserProfile;
