import { queryKeysFactory } from '@constants/queries';
import { useSharedServices } from '@hooks/providers/useSharedServicesProvider';
import { FeaturedPlaylists } from '@spotify/web-api-ts-sdk';
import { useQueries, UseQueryOptions } from '@tanstack/react-query';

import useSeveralBrowseCategories from './useSeveralBrowseCategories';

const usePlaylistsByCategories = () => {
  const { uiHomeService } = useSharedServices();

  const { data: browseCategories = [] } = useSeveralBrowseCategories();

  return useQueries({
    queries: browseCategories.map(
      (browseCategory) =>
        ({
          queryKey: queryKeysFactory.getPlaylistsByCategoryId(
            browseCategory.id,
          ),
          queryFn: () =>
            uiHomeService.getPlaylistsByCategoryId(browseCategory.id),
          enabled: browseCategories.length > 0,
        }) as UseQueryOptions<FeaturedPlaylists, Error>,
    ),
  });
};

export default usePlaylistsByCategories;
