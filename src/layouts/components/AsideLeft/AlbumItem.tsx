import { AlbumItemFrame } from '@layouts/styles/YourLibrary.styled';
import { Album } from '@spotify/web-api-ts-sdk';

import { ViewAsOptionLabel, YourLibraryItemProps } from './YourLibrary';

interface Props extends YourLibraryItemProps, Album {}

const AlbumItem: React.FC<Props> = ({ viewType, type, ...album }) => {
  const separator = '•';

  const [image] = album.images;

  return (
    <AlbumItemFrame className='LibraryItem'>
      <img
        src={image.url}
        alt={album.name}
        className='AlbumItem-thumbnail LibraryItem-thumbnail'
      />
      <div className='AlbumItem-details LibraryItem-details'>
        <h5 className='AlbumItem-name'>
          {album.name}{' '}
          {viewType.label === ViewAsOptionLabel.Compact && (
            <span className='LibraryItem-type'>
              {separator} {type}
            </span>
          )}
        </h5>
        <div className='AlbumItem-info'>
          {album.artists.map((artist) => {
            return artist.name;
          })}
        </div>
      </div>
    </AlbumItemFrame>
  );
};

export default AlbumItem;
