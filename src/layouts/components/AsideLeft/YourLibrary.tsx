import Badge from '@components/Badge';
import Button from '@components/primitives/Button';
import ScrollArea from '@components/primitives/ScrollArea';
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
      <div className='YourLibrary-head'>
        <div className='YourLibrary-headBadges'>
          <Badge>Playlists</Badge>
          <Badge>Artists</Badge>
          <Badge>Albums</Badge>
        </div>
      </div>
      <div className='YourLibrary-libraries'>
        <ScrollArea>
          <div className='YourLibrary-librariesSearch'>
            <Button variant='icon'>
              <SearchIcon />
            </Button>
            <Button variant='text' hoverScale endIcon={<CheeseBurgerIcon />}>
              Recents
            </Button>
          </div>
          <Stack.List className='YourLibrary-librariesList'>
            {[...Array(27)].map((_, i) => (
              <LibraryItem key={i} num={i} />
            ))}
          </Stack.List>
        </ScrollArea>
      </div>
    </YourLibraryFrame>
  );
};

export default YourLibrary;
