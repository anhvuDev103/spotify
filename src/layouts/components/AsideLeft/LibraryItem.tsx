import { PinIcon } from '@components/Svg';
import { LibraryItemFrame } from '@layouts/styles/YourLibrary.styled';

const LibraryItem = () => {
  const separator = '•';

  return (
    <LibraryItemFrame>
      <img
        src='https://i2o.scdn.co/image/ab67706c0000cfa39a48455a14b7df88184cd74b'
        alt='FIX_ME'
        className='thumbnail'
      />
      <div className='details'>
        <h5 className='name'>Liked Songs</h5>
        <div className='info'>
          <PinIcon color='success.main' />
          Playlist <span className='separator'>{separator}</span> Duc Anh Vu
        </div>
      </div>
    </LibraryItemFrame>
  );
};

export default LibraryItem;
