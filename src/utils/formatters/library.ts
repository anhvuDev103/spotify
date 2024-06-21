import { LibraryFilterType } from '@layouts/components/AsideLeft/YourLibrary';
import { Artist, Playlist } from '@spotify/web-api-ts-sdk';

import { FormattedSavedAlbum, FormattedUserSummary } from './user';

export const formatAndSortLibraryItem = ({
  user,
  filterType,
}: {
  user: FormattedUserSummary | undefined;
  filterType: LibraryFilterType | null;
}) => {
  let items: Array<Playlist | Artist | FormattedSavedAlbum> = [];

  if (user) {
    switch (filterType) {
      case LibraryFilterType.Playlists:
        items = user.playlists;
        break;

      case LibraryFilterType.Artists:
        items = user.followedArtists;
        break;

      case LibraryFilterType.Albums:
        items = user.savedAlbums;
        break;

      default:
        items = [
          ...user.playlists,
          ...user.followedArtists,
          ...user.savedAlbums,
        ];
        break;
    }
  }

  const sortedItems = items.toSorted((aItem, bItem) => {
    if (aItem.name < bItem.name) return -1;

    return 1;
  });

  return sortedItems;
};
