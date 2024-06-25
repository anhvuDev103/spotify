import Button from '@components/primitives/Button';
import Popover, { PopoverOption } from '@components/primitives/Popover';
import { FolderIcon, NotePlusIcon, PlusIcon } from '@components/Svg';
import { PopoverOptionType } from '@utils/types';

const CREATE_NEW_OPTIONS = [
  {
    label: 'Create a new playlist',
    icon: NotePlusIcon,
  },
  {
    label: 'Create a playlist folder',
    icon: FolderIcon,
  },
] as PopoverOptionType[];

const CreateNewAction = () => {
  return (
    <Popover
      placement='bottom-end'
      renderElement={
        <PopoverOption.Group>
          {CREATE_NEW_OPTIONS.map(({ label, icon: Icon }) => (
            <PopoverOption.Item
              key={label}
              onSelect={() => {}}
              startIcon={<Icon />}
              // disabled={sortType !== LibrarySortBy.Alphabetical}
            >
              {label}
            </PopoverOption.Item>
          ))}
        </PopoverOption.Group>
      }
    >
      <Button variant='icon'>
        <PlusIcon />
      </Button>
    </Popover>
  );
};

export default CreateNewAction;
