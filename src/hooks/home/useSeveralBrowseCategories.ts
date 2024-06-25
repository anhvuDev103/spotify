import { queryKeysFactory } from '@constants/queries';
import { useSharedServices } from '@hooks/providers/useSharedServicesProvider';
import { useRootStore } from '@stores/root';
import { useQuery } from '@tanstack/react-query';

const useSeveralBrowseCategories = () => {
  const { uiHomeService } = useSharedServices();
  const { isLogin } = useRootStore();

  return useQuery({
    queryKey: queryKeysFactory.getSeveralBrowseCategories,
    queryFn: () => uiHomeService.getSeveralBrowseCategories(),
    enabled: !!isLogin,
    initialData: [],
  });
};

export default useSeveralBrowseCategories;
