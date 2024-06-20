import { ArtistItemFrame } from '@layouts/styles/YourLibrary.styled';
import { Artist } from '@spotify/web-api-ts-sdk';

interface Props extends Artist {}

const ArtistItem: React.FC<Props> = ({ ...artist }) => {
  const [image] = artist.images;

  return (
    <ArtistItemFrame>
      <img src={image.url} alt={artist.name} className='ArtistItem-thumbnail' />
      <div className='ArtistItem-details'>
        <h5 className='ArtistItem-name'>{artist.name}</h5>
      </div>
    </ArtistItemFrame>
  );
};

export default ArtistItem;
