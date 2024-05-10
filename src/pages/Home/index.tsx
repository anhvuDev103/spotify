import Badge from '@components/Badge';
import Collection from '@components/Collection';
import CollectionsPanel from '@components/primitives/CollectionsPanel';
import PagePanel from '@components/primitives/PagePanel';
import styled from 'styled-components';

import RecentPlaylists from './RecentPlaylists';

const Home = () => {
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
        <RecentPlaylists />
        {[...Array(5)].map((__, k) => (
          <CollectionsPanel key={k}>
            {[...Array(7)].map((_, i) => (
              <Collection key={i} />
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
`;

const CategoryFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  padding-top: 8px;
`;

export default Home;
