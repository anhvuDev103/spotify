import { FeaturedPlaylists, SimplifiedPlaylist } from '@spotify/web-api-ts-sdk';
import { formatHomeSummary } from '@utils/formatters/home';
import { combineQueries } from '@utils/queries';

import useFeaturedPlaylists from './useFeaturedPlaylists';
import usePlaylistsByCategories from './usePlaylistsByCategories';

const combiner = (
  featuredPlaylists: SimplifiedPlaylist[],
  ...playlistsByCategories: FeaturedPlaylists[]
) => {
  return formatHomeSummary({
    featuredPlaylists,
    playlistsByCategories,
  });
};

const useHomeSummary = () => {
  const featuredPlaylists = useFeaturedPlaylists();
  const playlistsByCategories = usePlaylistsByCategories();

  return combineQueries(
    [featuredPlaylists, ...playlistsByCategories] as const,
    combiner,
  );
};

export default useHomeSummary;
