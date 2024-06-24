import Button from '@components/primitives/Button';
import ScrollArea from '@components/primitives/ScrollArea';
import Stack from '@components/primitives/Stack';
import { CloseIcon } from '@components/Svg';
import { AsideRightFrame } from '@layouts/styled';
import { useRootStore } from '@stores/root';
import { memo } from 'react';

import InQueueSong from './InQueueSong';

const AsideRight = () => {
  const { profile } = useRootStore();

  if (!profile) return null;

  return (
    <AsideRightFrame>
      <div className='AsideRight-head'>
        <h3 className='AsideRight-label'>Queue</h3>
        <Button variant='icon'>
          <CloseIcon />
        </Button>
      </div>
      <div className='AsideRight-inQueue'>
        <ScrollArea>
          <div className='AsideRight-inQueueContent'>
            <div className='AsideRight-inQueueNowPlaying'>
              <h4 className='AsideRight-listLabel'>Now playing</h4>
              <InQueueSong />
            </div>
            <h4 className='AsideRight-listLabel'>
              Now playing
              <Button
                variant='text'
                hoverScale
                className='AsideRight-clearQueueBtn'
              >
                Clear queue
              </Button>
            </h4>

            <Stack.List className='AsideRight-inQueueList'>
              {[...Array(12)].map((_, i) => (
                <InQueueSong key={i} />
              ))}
            </Stack.List>
          </div>
        </ScrollArea>
      </div>
    </AsideRightFrame>
  );
};

export default memo(AsideRight);
