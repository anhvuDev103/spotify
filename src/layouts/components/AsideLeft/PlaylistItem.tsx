import { PlaylistItemFrame } from '@layouts/styles/YourLibrary.styled';
import { Playlist } from '@spotify/web-api-ts-sdk';

interface Props extends Playlist {}

const PlaylistItem: React.FC<Props> = ({ ...playlist }) => {
  const separator = '•';

  const [image] = playlist.images;

  return (
    <PlaylistItemFrame>
      <img
        src={image.url}
        alt={playlist.name}
        className='PlaylistItem-thumbnail'
      />
      <div className='PlaylistItem-details'>
        <h5 className='PlaylistItem-name'>{playlist.name}</h5>
        <div className='PlaylistItem-info'>
          Playlist <span className='PlaylistItem-separator'>{separator}</span>{' '}
          Duc Anh Vu
        </div>
      </div>
    </PlaylistItemFrame>
  );
};

export default PlaylistItem;
