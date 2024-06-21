import Stack from '@components/primitives/Stack';
import { Album, Artist, Playlist } from '@spotify/web-api-ts-sdk';
import { FormattedSavedAlbum } from '@utils/formatters/user';
import clsx from 'clsx';

import AlbumItem from './AlbumItem';
import ArtistItem from './ArtistItem';
import PlaylistItem from './PlaylistItem';
import { ViewAsOption } from './YourLibrary';

enum LibraryItemType {
  Playlist = 'playlist',
  Artist = 'artist',
  Album = 'album',
}

interface Props {
  viewAs: ViewAsOption;
  items: (Playlist | Artist | FormattedSavedAlbum)[];
  search: string;
}

const YourLibraryList: React.FC<Props> = ({ viewAs, items, search }) => {
  return (
    <Stack.List
      className={clsx([
        'YourLibrary-libraryList',
        `YourLibrary-viewType${viewAs.label}`,
      ])}
    >
      {items.length > 0 &&
        items.map((item) => {
          if (item.type === LibraryItemType.Playlist) {
            return (
              <PlaylistItem
                key={item.id}
                viewType={viewAs}
                {...(item as Playlist)}
              />
            );
          }

          if (item.type === LibraryItemType.Artist) {
            return (
              <ArtistItem
                key={item.id}
                viewType={viewAs}
                {...(item as Artist)}
              />
            );
          }

          if (item.type === LibraryItemType.Album) {
            return (
              <AlbumItem key={item.id} viewType={viewAs} {...(item as Album)} />
            );
          }
        })}
      {items.length === 0 && search && (
        <div className='YourLibrary-noItemFound'>
          <h5>Couldn't find “{search}”</h5>
          <h6>Try searching again using a different spelling or keyword.</h6>
        </div>
      )}
    </Stack.List>
  );
};

export default YourLibraryList;
