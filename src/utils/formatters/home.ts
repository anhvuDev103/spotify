import { LIKED_SONGS_COLLECTION, TOP_CONTENT_LIMIT } from '@constants/home';
import { FeaturedPlaylists, SimplifiedPlaylist } from '@spotify/web-api-ts-sdk';
import pick from 'lodash/pick';
import uniqBy from 'lodash/uniqBy';

export type TopContent = Pick<SimplifiedPlaylist, 'name' | 'images' | 'uri'>;

export type CategoryContent = {
  name: string;
  playlists: SimplifiedPlaylist[];
};

export type FormattedHomeSummary = {
  topContents: TopContent[];
  categoryContents: CategoryContent[];
};

export const formatHomeSummary = ({
  featuredPlaylists,
  playlistsByCategories,
}: {
  featuredPlaylists: SimplifiedPlaylist[];
  playlistsByCategories: FeaturedPlaylists[];
}): FormattedHomeSummary => {
  const categoryContents = playlistsByCategories.map((playlistsByCategory) => {
    return {
      name: playlistsByCategory.message,
      playlists: uniqBy(playlistsByCategory.playlists.items, 'id'),
    };
  });

  return {
    topContents:
      featuredPlaylists.length > 0
        ? [
            LIKED_SONGS_COLLECTION,
            ...featuredPlaylists
              .slice(0, TOP_CONTENT_LIMIT - 1)
              .map((item) => pick(item, ['name', 'images', 'uri'])),
          ]
        : [],
    categoryContents,
  };
};
