import Button from '@components/primitives/Button';
import {
  PlayIcon,
  RepeatIcon,
  ShuffleIcon,
  SkipNextIcon,
  SkipPreviousIcon,
} from '@components/Svg';
import { ControlsFrame } from '@layouts/styled';

const Controls = () => {
  return (
    <ControlsFrame>
      <div className='ControlsFrame-controlBtns'>
        <Button variant='icon' className='ControlsFrame-controlBtn'>
          <ShuffleIcon />
        </Button>
        <Button variant='icon' className='ControlsFrame-controlBtn'>
          <SkipPreviousIcon />
        </Button>
      </div>
      <Button
        variant='icon'
        className='ControlsFrame-controlBtn ControlsFrame-togglePlayBtn'
        hoverScale
      >
        <PlayIcon />
      </Button>
      <div className='ControlsFrame-controlBtns'>
        <Button variant='icon' className='ControlsFrame-controlBtn'>
          <SkipNextIcon />
        </Button>
        <Button variant='icon' className='ControlsFrame-controlBtn'>
          <RepeatIcon />
        </Button>
      </div>
    </ControlsFrame>
  );
};

export default Controls;
