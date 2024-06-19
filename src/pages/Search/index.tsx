import PagePanel from '@components/primitives/PagePanel';
import { memo } from 'react';
import styled from 'styled-components';

const Search = () => {
  return (
    <PagePanel>
      <SearchFrame>
        <h2 className='Search-label'>Browse all</h2>
      </SearchFrame>
    </PagePanel>
  );
};

const SearchFrame = styled.div``;

export default memo(Search);
