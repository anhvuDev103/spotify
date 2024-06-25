import Badge from '@components/Badge';
import Collection from '@components/Collection';
import CollectionsPanel from '@components/primitives/CollectionsPanel';
import PagePanel from '@components/primitives/PagePanel';
import useHomeSummary from '@hooks/home/useHomeSummary';
import { memo, useState } from 'react';
import styled from 'styled-components';

import RecentPlaylists from './RecentPlaylists';

export enum HomeFilterType {
  All = 'All',
  Music = 'Music',
  Podcasts = 'Podcasts',
}

const Home = () => {
  const [filterSelected, setFilterSelected] = useState<HomeFilterType>(
    HomeFilterType.All,
  );

  const { data: homeSummary } = useHomeSummary();

  const selectFilterType = (type: HomeFilterType) => () => {
    setFilterSelected(type);
  };

  return (
    <PagePanel
      bottomExtension={
        <CategoryFilter>
          {Object.values(HomeFilterType).map((filterType) => (
            <Badge
              key={filterType}
              onClick={selectFilterType(filterType)}
              variant={filterType === filterSelected ? 'emphasize' : undefined}
            >
              {filterType}
            </Badge>
          ))}
        </CategoryFilter>
      }
    >
      <HomeFrame>
        <RecentPlaylists items={homeSummary?.topContents || []} />
        {homeSummary?.categoryContents.map((categoryContent) => (
          <CollectionsPanel
            key={`CollectionsPanel:${categoryContent.name}`}
            name={categoryContent.name}
          >
            {categoryContent.playlists.map((playlist) => (
              <Collection
                key={`Collection:${categoryContent.name}:${playlist.id}`}
                {...playlist}
              />
            ))}
          </CollectionsPanel>
        ))}
      </HomeFrame>
    </PagePanel>
  );
};

const HomeFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 24px;

  padding: 0 24px;
`;

const CategoryFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  padding-top: 8px;
`;

export default memo(Home);
