import Badge from '@components/Badge';
import Collection from '@components/Collection';
import CollectionsPanel from '@components/primitives/CollectionsPanel';
import PagePanel from '@components/primitives/PagePanel';
import useHomeSummary from '@hooks/home/useHomeSummary';
import { memo } from 'react';
import styled from 'styled-components';

import RecentPlaylists from './RecentPlaylists';

const Home = () => {
  const { data: homeSummary } = useHomeSummary();

  return (
    <PagePanel
      bottomExtension={
        <CategoryFilter>
          <Badge>All</Badge>
          <Badge>Music</Badge>
          <Badge>Podcasts</Badge>
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
