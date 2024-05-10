import Badge from '@components/Badge';
import Button from '@components/primitives/Button';
import Stack from '@components/primitives/Stack';
import {
  ArrowRightIcon,
  CheeseBurgerIcon,
  LibraryIcon,
  PlusIcon,
  SearchIcon,
} from '@components/Svg';
import { YourLibraryFrame } from '@layouts/styles/YourLibrary.styled';

import LibraryItem from './LibraryItem';

const YourLibrary = () => {
  return (
    <YourLibraryFrame>
      <div className='YourLibrary-heading'>
        <div className='YourLibrary-headingTitle'>
          <LibraryIcon />
          <p>Your Library</p>
        </div>
        <div className='YourLibrary-headingControls'>
          <Button variant='icon'>
            <PlusIcon />
          </Button>
          <Button variant='icon'>
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
      <div className='YourLibrary-controls'>
        <div className='YourLibrary-controlsBadges'>
          <Badge>Playlists</Badge>
          <Badge>Artists</Badge>
          <Badge>Albums</Badge>
        </div>
        <div className='YourLibrary-controlsSearch'>
          <Button variant='icon'>
            <SearchIcon />
          </Button>
          <Button variant='text' hoverScale endIcon={<CheeseBurgerIcon />}>
            Recents
          </Button>
        </div>
      </div>
      <div className='YourLibrary-libraries'>
        <Stack.List>
          {[...Array(10)].map((_, i) => (
            <LibraryItem key={i} />
          ))}
        </Stack.List>
      </div>
    </YourLibraryFrame>
  );
};

export default YourLibrary;
