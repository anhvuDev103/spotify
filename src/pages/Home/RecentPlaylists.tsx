import styled from 'styled-components';

const RecentPlaylists = () => {
  return (
    <RecentPlaylistsFrame>
      {[...Array(8)].map((_, i) => (
        <div key={i} className='RecentPlaylists-recentPlaylistItem'>
          <img
            src='https://misc.scdn.co/liked-songs/liked-songs-640.png'
            alt='FIX_ME'
            className='RecentPlaylists-thumbnail'
          />
          <h5 className='RecentPlaylists-name'>Liked Songs</h5>
        </div>
      ))}
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
