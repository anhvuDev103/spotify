import Badge from '@components/Badge';
import Button from '@components/primitives/Button';
import Input from '@components/primitives/Input';
import ScrollArea from '@components/primitives/ScrollArea';
import Stack from '@components/primitives/Stack';
import {
  ArrowRightIcon,
  CheeseBurgerIcon,
  CloseIcon,
  LibraryIcon,
  PlusIcon,
  SearchIcon,
} from '@components/Svg';
import { useAppDataProvider } from '@hooks/providers/useAppDataProvider';
import { YourLibraryFrame } from '@layouts/styles/YourLibrary.styled';
import { Artist, Playlist, SavedAlbum } from '@spotify/web-api-ts-sdk';
import { clsx } from 'clsx';
import { useEffect, useMemo, useRef, useState } from 'react';

export enum LibraryFilterType {
  Playlists = 'Playlists',
  Artists = 'Artists',
  Albums = 'Albums',
}

const YourLibrary = () => {
  const { user } = useAppDataProvider();

  const [isShowSearchBox, setIsShowSearchBox] = useState<boolean>(false);
  const [filterSelected, setFilterSelected] =
    useState<LibraryFilterType | null>(null);

  const searchInput = useRef<HTMLInputElement>(null);

  // const playlists = user ? user.playlists : [];
  // const followedArtists = user ? user.followedArtists : [];
  // const albums = user ? user.savedAlbums : [];

  useEffect(() => {
    if (isShowSearchBox) {
      const searchInputElm = searchInput.current;

      requestIdleCallback(() => {
        searchInputElm?.focus();
      });

      const blurHandler = () => {
        setIsShowSearchBox(false);
      };

      searchInputElm?.addEventListener('blur', blurHandler);

      return () => {
        searchInputElm?.removeEventListener('blur', blurHandler);
      };
    }
  }, [isShowSearchBox]);

  const filteredLibraryItems = useMemo(() => {
    let items: Array<Playlist | Artist | SavedAlbum> = [];

    if (user) {
      switch (filterSelected) {
        case LibraryFilterType.Playlists:
          items = user.playlists;
          break;

        case LibraryFilterType.Artists:
          items = user.followedArtists;
          break;

        case LibraryFilterType.Albums:
          items = user.savedAlbums;
          break;

        default:
          items = [
            ...user.playlists,
            ...user.followedArtists,
            ...user.savedAlbums,
          ];
          break;
      }
    }

    return {
      type: filterSelected,
      items,
    };
  }, [filterSelected, user]);

  const showSearchBox = () => {
    setIsShowSearchBox(true);
  };

  const clearFilter = () => {
    setFilterSelected(null);
  };

  const selectFilterType = (type: LibraryFilterType) => () => {
    setFilterSelected(type);
  };

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
          {filterSelected && (
            <Button
              variant='icon'
              className='YourLibrary-clearFilterBtn'
              onClick={clearFilter}
            >
              <CloseIcon />
            </Button>
          )}

          {Object.values(LibraryFilterType).map((filterType) => {
            if (filterSelected === null) {
              return (
                <Badge key={filterType} onClick={selectFilterType(filterType)}>
                  {filterType}
                </Badge>
              );
            }

            if (filterType === filterSelected) {
              return (
                <Badge
                  variant={
                    filterType === filterSelected ? 'emphasize' : undefined
                  }
                  key={filterType}
                  onClick={selectFilterType(filterType)}
                >
                  {filterType}
                </Badge>
              );
            }
          })}
        </div>
      </div>
      <div className='YourLibrary-libraries'>
        <ScrollArea>
          <div className='YourLibrary-librariesSearch'>
            <div
              className={clsx('YourLibrary-searchBtn', {
                'YourLibrary-active': isShowSearchBox,
              })}
            >
              <Button variant='icon' onClick={showSearchBox}>
                <SearchIcon />
              </Button>
              <Input
                className='YourLibrary-searchInput'
                placeholder='Search in Your Library'
                ref={searchInput}
              />
            </div>
            <Button variant='text' hoverScale endIcon={<CheeseBurgerIcon />}>
              Recents
            </Button>
          </div>
          <Stack.List className='YourLibrary-librariesList'>
            s
            {/* {filteredLibraryItems.length > 0 &&
              filteredLibraryItems.map((filteredLibraryItem) => {
                <ArtistItem key={artist.id} {...artist} />;
              })} */}
          </Stack.List>
        </ScrollArea>
      </div>
    </YourLibraryFrame>
  );
};

export default YourLibrary;
