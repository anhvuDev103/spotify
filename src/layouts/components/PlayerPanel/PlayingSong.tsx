import Button from '@components/primitives/Button';
import Song from '@components/Song';
import { FilledCheckIcon } from '@components/Svg';
import { CurrentSong, CurrentSongFrame } from '@layouts/styled';

const PlayingSong = () => {
  return (
    <CurrentSongFrame>
      <CurrentSong>
        <Song />
        <Button
          variant='icon'
          className='PlayingSong-addToPlaylistBtn'
          hoverScale
        >
          <FilledCheckIcon color='primary.main' />
        </Button>
      </CurrentSong>
    </CurrentSongFrame>
  );
};

export default PlayingSong;
