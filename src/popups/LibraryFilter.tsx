import Button from '@components/primitives/Button';
import Popover, { PopoverOption } from '@components/primitives/Popover';
import { CheeseBurgerIcon, CompactIcon, GridIcon } from '@components/Svg';
import { DispatchType } from '@utils/types';

import {
  LibrarySortBy,
  ViewAsOption,
} from '../layouts/components/AsideLeft/YourLibrary';

interface Props {
  sortBy: LibrarySortBy;
  viewAs: ViewAsOption;
  setSortBy: DispatchType<LibrarySortBy>;
  setViewAs: DispatchType<ViewAsOption>;
}

export const VIEW_AS_OPTIONS = [
  {
    label: 'Compact',
    icon: CompactIcon,
  },
  {
    label: 'List',
    icon: CheeseBurgerIcon,
  },
  {
    label: 'Grid',
    icon: GridIcon,
  },
] as ViewAsOption[];

const LibraryFilter: React.FC<Props> = ({
  sortBy,
  viewAs,
  setSortBy,
  setViewAs,
}) => {
  const ViewAsIcon = viewAs.icon;

  const selectSortBy = (type: LibrarySortBy) => () => {
    setSortBy(type);
  };

  const selectViewAs = (type: ViewAsOption) => () => {
    setViewAs(type);
  };

  return (
    <Popover
      renderElement={
        <>
          <PopoverOption.Group label='Sort by'>
            {Object.values(LibrarySortBy).map((sortType) => (
              <PopoverOption.Item
                key={sortType}
                active={sortBy === sortType}
                onSelect={selectSortBy(sortType)}
                disabled={sortType !== LibrarySortBy.Alphabetical}
              >
                {sortType}
              </PopoverOption.Item>
            ))}
          </PopoverOption.Group>
          <PopoverOption.Divider />
          <PopoverOption.Group label='View as'>
            {VIEW_AS_OPTIONS.map((option) => {
              const { label, icon: Icon } = option;
              const isActive = label === viewAs.label;
              return (
                <PopoverOption.Item
                  key={label}
                  active={isActive}
                  onSelect={selectViewAs(option)}
                  startIcon={
                    <Icon color={isActive ? 'primary.main' : undefined} />
                  }
                >
                  {label}
                </PopoverOption.Item>
              );
            })}
          </PopoverOption.Group>
        </>
      }
    >
      <Button variant='text' hoverScale endIcon={<ViewAsIcon />}>
        {sortBy}
      </Button>
    </Popover>
  );
};

export default LibraryFilter;
