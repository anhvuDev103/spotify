import Button from '@components/primitives/Button';
import { PlayIcon } from '@components/Svg';

import { CollectionFrame } from './styled';
import { CollectionProps } from './types';

const Collection: React.FC<CollectionProps> = ({ ...playlist }) => {
  const [image] = playlist.images;

  return (
    <CollectionFrame>
      <div className='Collection-thumbnail'>
        <img
          src={image.url}
          alt={playlist.name}
          className='Collection-thumbnailImage'
        />
        <Button
          variant='icon'
          hoverScale
          className='Collection-playBtn'
          size='lg'
        >
          <PlayIcon />
        </Button>
      </div>
      <div className='Collection-details'>
        <h5 className='Collection-name'>{playlist.name}</h5>
        <p className='Collection-description'>{playlist.description}</p>
      </div>
    </CollectionFrame>
  );
};

export default Collection;
