import Song from '@components/Song';
import { SongProps } from '@components/Song/types';
import styled from 'styled-components';

interface Props extends SongProps {}

const InQueueSong: React.FC<Props> = () => {
  return <InQueueSongFrame />;
};

const InQueueSongFrame = styled(Song)`
  position: relative;

  &::after {
    content: '';

    position: absolute;
    inset: 0;
    z-index: -1;
  }

  &:hover {
    cursor: pointer;

    &::after {
      background-color: ${({ theme }) => theme.palette.action.hover};
    }

    .Song-thumbnail::after {
      content: '';

      background-color: #00000099;
    }

    .Song-icon {
      opacity: 1;
    }
  }

  .Song-icon {
    opacity: 0;
  }
`;

export default InQueueSong;
