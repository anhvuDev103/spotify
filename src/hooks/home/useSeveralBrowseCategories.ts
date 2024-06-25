import { queryKeysFactory } from '@constants/queries';
import { useSharedServices } from '@hooks/providers/useSharedServicesProvider';
import { useRootStore } from '@stores/root';
import { useQuery } from '@tanstack/react-query';
import { RequestParams } from '@utils/types';

const useSeveralBrowseCategories = (params?: RequestParams) => {
  const { uiHomeService } = useSharedServices();
  const { isLogin } = useRootStore();

  return useQuery({
    queryKey: queryKeysFactory.getSeveralBrowseCategories(params),
    queryFn: () => uiHomeService.getSeveralBrowseCategories(params),
    enabled: !!isLogin,
    initialData: [],
  });
};

export default useSeveralBrowseCategories;
