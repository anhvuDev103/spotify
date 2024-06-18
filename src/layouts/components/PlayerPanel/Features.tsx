import Button from '@components/primitives/Button';
import {
  DeviceIcon,
  FullscreenIcon,
  MicroIcon,
  PictureInPictureIcon,
  PlayingViewIcon,
  QueueIcon,
  SpeakerIcon,
} from '@components/Svg';
import { FeaturesFrame } from '@layouts/styled';

const Features = () => {
  return (
    <FeaturesFrame>
      <Button variant='icon' className='FeaturesFrame-featureBtn'>
        <PlayingViewIcon />
      </Button>
      <Button variant='icon' className='FeaturesFrame-featureBtn'>
        <MicroIcon />
      </Button>
      <Button variant='icon' className='FeaturesFrame-featureBtn'>
        <QueueIcon />
      </Button>
      <Button variant='icon' className='FeaturesFrame-featureBtn'>
        <DeviceIcon />
      </Button>
      <Button variant='icon' className='FeaturesFrame-featureBtn'>
        <SpeakerIcon />
      </Button>
      <Button variant='icon' className='FeaturesFrame-featureBtn'>
        <PictureInPictureIcon />
      </Button>
      <Button variant='icon' className='FeaturesFrame-featureBtn'>
        <FullscreenIcon />
      </Button>
    </FeaturesFrame>
  );
};

export default Features;
