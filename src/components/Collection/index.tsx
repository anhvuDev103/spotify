import Button from '@components/primitives/Button';
import { PlayIcon } from '@components/Svg';

import { CollectionFrame } from './styled';
import { CollectionProps } from './types';

const Collection: React.FC<CollectionProps> = () => {
  return (
    <CollectionFrame>
      <div className='Collection-thumbnail'>
        <img
          src='https://i2o.scdn.co/image/ab67706c0000cfa39a48455a14b7df88184cd74b'
          alt='FIX_ME'
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
        <h5 className='Collection-name'>Liked Songs</h5>
        <p className='Collection-description'>
          Nhún nhảy theo những giai điệu mới toanh từ nghệ sĩ bạn theo dõi và
          đĩa đơn mới dành cho bạn. Cập nhật mỗi thứ Sáu.
        </p>
      </div>
    </CollectionFrame>
  );
};

export default Collection;
