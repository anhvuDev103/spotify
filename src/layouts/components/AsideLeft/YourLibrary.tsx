import Badge from '@components/Badge';
import Button from '@components/primitives/Button';
import Input from '@components/primitives/Input';
import ScrollArea from '@components/primitives/ScrollArea';
import {
  ArrowRightIcon,
  CloseIcon,
  LibraryIcon,
  SearchIcon,
} from '@components/Svg';
import { useAppDataProvider } from '@hooks/providers/useAppDataProvider';
import useDebounceValue from '@hooks/useDebounceValue';
import { YourLibraryFrame } from '@layouts/styles/YourLibrary.styled';
import CreateNew from '@popups/CreateNew';
import LibraryFilter, { VIEW_AS_OPTIONS } from '@popups/LibraryFilter';
import { Artist, Playlist } from '@spotify/web-api-ts-sdk';
import { formatAndSortLibraryItem } from '@utils/formatters/library';
import { FormattedSavedAlbum } from '@utils/formatters/user';
import { PopoverOptionType } from '@utils/types';
import { clsx } from 'clsx';
import { useEffect, useMemo, useRef, useState } from 'react';

import YourLibraryList from './YourLibraryList';

export enum LibraryFilterType {
  Playlists = 'Playlists',
  Artists = 'Artists',
  Albums = 'Albums',
}

export enum LibrarySortBy {
  Recents = 'Recents',
  RecentlyAdded = 'Recently Added',
  Alphabetical = 'Alphabetical',
  Creator = 'Creator',
}

export enum ViewAsOptionLabel {
  Compact = 'Compact',
  List = 'List',
  Grid = 'Grid',
}

export type ViewAsOption = PopoverOptionType<ViewAsOptionLabel>;

export interface YourLibraryItemProps {
  viewType: ViewAsOption;
}

const YourLibrary = () => {
  const { user } = useAppDataProvider();

  const [isShowSearchBox, setIsShowSearchBox] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterSelected, setFilterSelected] =
    useState<LibraryFilterType | null>(null);
  const [sortBy, setSortBy] = useState<LibrarySortBy>(
    LibrarySortBy.Alphabetical,
  );
  const [viewAs, setViewAs] = useState<ViewAsOption>(() => {
    const defaultViewAsOption = VIEW_AS_OPTIONS.find(
      (option) => option.label === 'List',
    );

    return defaultViewAsOption || VIEW_AS_OPTIONS[0];
  });

  const searchInput = useRef<HTMLInputElement>(null);

  const debouncedSearch = useDebounceValue(searchTerm);

  useEffect(() => {
    if (isShowSearchBox) {
      const searchInputElm = searchInput.current;

      requestIdleCallback(() => {
        searchInputElm?.focus();
      });

      const blurHandler = () => {
        if (!searchTerm) {
          setIsShowSearchBox(false);
        }
      };

      searchInputElm?.addEventListener('blur', blurHandler);

      return () => {
        searchInputElm?.removeEventListener('blur', blurHandler);
      };
    }
  }, [isShowSearchBox, searchTerm]);

  const computedLibraryItems = useMemo(() => {
    let items: (Playlist | Artist | FormattedSavedAlbum)[] = [];

    items = formatAndSortLibraryItem({
      user,
      filterType: filterSelected,
    });

    if (debouncedSearch.trim()) {
      items = items.filter((item) =>
        item.name.toLowerCase().includes(debouncedSearch.trim().toLowerCase()),
      );
    }

    return items;
  }, [filterSelected, debouncedSearch, user]);

  const showSearchBox = () => {
    setIsShowSearchBox(true);
  };

  const clearFilter = () => {
    setFilterSelected(null);
  };

  const selectFilterType = (type: LibraryFilterType) => () => {
    setFilterSelected(type);
  };

  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <YourLibraryFrame>
      <div className='YourLibrary-heading'>
        <div className='YourLibrary-headingTitle'>
          <LibraryIcon />
          <p>Your Library</p>
        </div>
        <div className='YourLibrary-headingControls'>
          <CreateNew />
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
      <div className='YourLibrary-library'>
        <ScrollArea>
          <div className='YourLibrary-libraryContainer'>
            <div className='YourLibrary-librarySearch'>
              <div
                className={clsx('YourLibrary-search', {
                  'YourLibrary-searchActive': isShowSearchBox,
                })}
              >
                <Button
                  variant='icon'
                  onClick={showSearchBox}
                  className='YourLibrary-toggleBtn'
                >
                  <SearchIcon />
                </Button>
                <Input
                  className='YourLibrary-searchInput'
                  placeholder='Search in Your Library'
                  value={searchTerm}
                  onChange={changeSearch}
                  setValue={setSearchTerm}
                  ref={searchInput}
                />
              </div>
              <LibraryFilter
                sortBy={sortBy}
                viewAs={viewAs}
                setSortBy={setSortBy}
                setViewAs={setViewAs}
              />
            </div>
            <YourLibraryList
              viewAs={viewAs}
              items={computedLibraryItems}
              search={debouncedSearch}
            />
          </div>
        </ScrollArea>
      </div>
    </YourLibraryFrame>
  );
};

export default YourLibrary;
