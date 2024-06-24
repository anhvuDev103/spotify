import { queryKeysFactory } from '@constants/queries';
import { useSharedServices } from '@hooks/providers/useSharedServicesProvider';
import { useQuery } from '@tanstack/react-query';

const useSeveralBrowseCategories = () => {
  const { uiHomeService } = useSharedServices();

  return useQuery({
    queryKey: queryKeysFactory.getSeveralBrowseCategories,
    queryFn: () => uiHomeService.getSeveralBrowseCategories(),
    select: (data) => data.categories.items,
  });
};

export default useSeveralBrowseCategories;
