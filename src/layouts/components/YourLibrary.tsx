import Badge from '@components/Badge';
import Button from '@components/primitives/Button';
import {
  ArrowRightIcon,
  CheeseBurgerIcon,
  LibraryIcon,
  PlusIcon,
  SearchIcon
} from '@components/Svg';
import { YourLibraryFrame } from '@layouts/styles/YourLibrary.styled';

import LibraryItem from './LibraryItem';

const YourLibrary = () => {
  return (
    <YourLibraryFrame>
      <div className='heading'>
        <div className='headingTitle'>
          <LibraryIcon />
          <p>Your Library</p>
        </div>
        <div className='headingControls'>
          <Button variant='icon'>
            <PlusIcon />
          </Button>
          <Button variant='icon'>
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
      <div className='controls'>
        <div className='controlsBadges'>
          <Badge>Playlists</Badge>
          <Badge>Artists</Badge>
          <Badge>Albums</Badge>
        </div>
        <div className='controlsSearch'>
          <Button variant='icon'>
            <SearchIcon />
          </Button>
          <Button variant='clear' hoverScale endIcon={<CheeseBurgerIcon />}>
            Recents
          </Button>
        </div>
      </div>
      <div className='libraries'>
        {[...Array(10)].map((_, i) => (
          <LibraryItem key={i} />
        ))}
      </div>
    </YourLibraryFrame>
  );
};

export default YourLibrary;
