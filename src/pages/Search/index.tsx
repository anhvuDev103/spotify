import Input from '@components/primitives/Input';
import PagePanel from '@components/primitives/PagePanel';
import { SearchIcon } from '@components/Svg';
import useSeveralBrowseCategories from '@hooks/home/useSeveralBrowseCategories';
import { memo } from 'react';

import { SearchFrame, SearchInput } from './styled';

const Search = () => {
  const { data: browseCategories = [] } = useSeveralBrowseCategories({
    limit: 50,
  });
  console.log('>> Check | browseCategories:', browseCategories);

  return (
    <PagePanel
      leftExtension={
        <SearchInput>
          <SearchIcon size='16px' />
          <Input placeholder='What do you want to play?' />
        </SearchInput>
      }
    >
      <SearchFrame>
        <h2 className='Search-label'>Browse all</h2>
      </SearchFrame>
    </PagePanel>
  );
};

export default memo(Search);
