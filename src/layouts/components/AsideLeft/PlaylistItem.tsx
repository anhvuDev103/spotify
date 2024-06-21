import { PlaylistItemFrame } from '@layouts/styles/YourLibrary.styled';
import { Playlist } from '@spotify/web-api-ts-sdk';

import { ViewAsOptionLabel, YourLibraryItemProps } from './YourLibrary';

interface Props extends YourLibraryItemProps, Playlist {}

const PlaylistItem: React.FC<Props> = ({ viewType, type, ...playlist }) => {
  const separator = '•';

  const [image] = playlist.images;

  return (
    <PlaylistItemFrame className='LibraryItem'>
      <img
        src={image.url}
        alt={playlist.name}
        className='LibraryItem-thumbnail PlaylistItem-thumbnail'
      />
      <div className='PlaylistItem-details LibraryItem-details'>
        <h5 className='PlaylistItem-name'>
          {playlist.name}{' '}
          {viewType.label === ViewAsOptionLabel.Compact && (
            <span className='LibraryItem-type'>
              {separator} {type}
            </span>
          )}
        </h5>
        <div className='PlaylistItem-info'>
          Playlist <span className='PlaylistItem-separator'>{separator}</span>{' '}
          Duc Anh Vu
        </div>
      </div>
    </PlaylistItemFrame>
  );
};

export default PlaylistItem;
