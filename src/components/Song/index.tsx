import { PauseIcon, PlayIcon } from '@components/Svg';

import { SongFrame } from './styled';
import { SongProps } from './types';

const Song: React.FC<SongProps> = ({ children, ...props }) => {
  return (
    <SongFrame {...props}>
      <div className='Song-thumbnail'>
        <img
          src='https://i.scdn.co/image/ab67616d00004851636bd3e9f31e1ea1e7bb389e'
          alt='FIX_ME'
          className='Song-thumbnailImage'
        />
        <PlayIcon className='Song-icon Song-playIcon' />
        <PauseIcon className='Song-icon Song-pauseIcon' />
      </div>
      <div className='Song-details'>
        <h6 className='Song-name'>Đã lỡ yêu em nhiều</h6>
        <p className='Song-artists'>Justatee</p>
      </div>
      {children}
    </SongFrame>
  );
};

export default Song;
