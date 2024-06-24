import { TopContent } from '@utils/formatters/home';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  items: TopContent[];
}

const RecentPlaylists: React.FC<Props> = ({ items }) => {
  return (
    <RecentPlaylistsFrame>
      {items.map((item) => {
        const [image] = item.images;
        const [, type, id] = item.uri.split(':');

        return (
          <Link
            key={item.uri}
            to={`/${type}/${id}`}
            className='RecentPlaylists-recentPlaylistItem'
          >
            <img
              src={image.url}
              alt={item.name}
              className='RecentPlaylists-thumbnail'
            />
            <h5 className='RecentPlaylists-name'>{item.name}</h5>
          </Link>
        );
      })}
    </RecentPlaylistsFrame>
  );
};

const RecentPlaylistsFrame = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;

  padding-top: 8px;
  margin-bottom: 16px;

  .RecentPlaylists-recentPlaylistItem {
    display: flex;
    align-items: center;
    gap: 8px;

    background-color: ${({ theme }) => theme.palette.button.ghost.main};
    border-radius: 4px;

    transition: background-color 400ms;
    overflow: hidden;

    &:hover {
      background-color: #ffffff33;

      cursor: pointer;
    }
  }

  .RecentPlaylists-thumbnail {
    width: 64px;
    height: 64px;
  }

  .RecentPlaylists-name {
    ${({ theme }) => theme.typography.medium14};
    color: ${({ theme }) => theme.palette.text.main};
  }
`;

export default RecentPlaylists;
