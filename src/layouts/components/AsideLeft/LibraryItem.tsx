import { PinIcon } from '@components/Svg';
import { LibraryItemFrame } from '@layouts/styles/YourLibrary.styled';

const LibraryItem = ({ num }: { num: number }) => {
  const separator = '•';

  return (
    <LibraryItemFrame>
      <img
        src='https://i2o.scdn.co/image/ab67706c0000cfa39a48455a14b7df88184cd74b'
        alt='FIX_ME'
        className='LibraryItem-thumbnail'
      />
      <div className='LibraryItem-details'>
        <h5 className='LibraryItem-name'>{num}. Liked Songs</h5>
        <div className='LibraryItem-info'>
          <PinIcon color='primary.main' />
          Playlist <span className='LibraryItem-separator'>
            {separator}
          </span>{' '}
          Duc Anh Vu
        </div>
      </div>
    </LibraryItemFrame>
  );
};

export default LibraryItem;
