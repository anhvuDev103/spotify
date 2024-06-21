import { ArtistItemFrame } from '@layouts/styles/YourLibrary.styled';
import { Artist } from '@spotify/web-api-ts-sdk';

import { ViewAsOptionLabel, YourLibraryItemProps } from './YourLibrary';

interface Props extends YourLibraryItemProps, Artist {}

const ArtistItem: React.FC<Props> = ({ viewType, type, ...artist }) => {
  const separator = '•';

  const [image] = artist.images;

  return (
    <ArtistItemFrame className='LibraryItem'>
      <img
        src={image.url}
        alt={artist.name}
        className='LibraryItem-thumbnail ArtistItem-thumbnail'
      />
      <div className='ArtistItem-details LibraryItem-details'>
        <h5 className='ArtistItem-name'>
          {artist.name}{' '}
          {viewType.label === ViewAsOptionLabel.Compact && (
            <span className='LibraryItem-type'>
              {separator} {type}
            </span>
          )}
        </h5>
      </div>
    </ArtistItemFrame>
  );
};

export default ArtistItem;
