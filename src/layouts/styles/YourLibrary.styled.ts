import Paper from '@components/primitives/Paper';
import Stack from '@components/primitives/Stack';
import styled from 'styled-components';

export const YourLibraryFrame = styled(Paper)`
  flex: 1;

  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  overflow-y: hidden;

  .YourLibrary-heading {
    display: flex;
    align-items: center;

    padding: 8px 16px;
  }

  .YourLibrary-headingTitle {
    display: flex;
    align-items: center;

    height: 40px;
    padding: 4px 8px;

    &:hover {
      cursor: pointer;
    }

    p {
      margin-left: 12px;

      ${({ theme }) => theme.typography.medium16}
    }
  }

  .YourLibrary-headingControls {
    display: flex;
    align-items: center;
    gap: 8px;

    margin-left: auto;
  }

  .YourLibrary-searchBtn {
    width: 10px;

    display: flex;
    align-items: center;

    position: relative;

    border-radius: 4px;

    transition: 300ms;
  }

  .YourLibrary-active {
    width: 188px;

    background-color: ${({ theme }) => theme.palette.button.ghost.hover};

    button {
      background-color: transparent;

      pointer-events: none;
      cursor: default;
    }

    .YourLibrary-searchInput {
      opacity: 1;
      z-index: 0;
    }
  }

  .YourLibrary-searchInput {
    position: absolute;
    inset: 0;
    padding: 8px 8px 8px 32px;

    opacity: 0;
    z-index: -1;
    transition: 300ms;

    ${({ theme }) => theme.typography.regular12};
  }

  .YourLibrary-head {
    margin-bottom: 8px;
  }

  .YourLibrary-headBadges {
    display: flex;
    align-items: center;
    gap: 8px;

    margin: 8px 16px 0;
  }

  .YourLibrary-clearFilterBtn {
    background-color: ${({ theme }) => theme.palette.button.ghost.main};
    color: ${({ theme }) => theme.palette.button.ghost.contrast};

    &:hover {
      background-color: ${({ theme }) => theme.palette.button.ghost.hover};

      svg {
        color: ${({ theme }) => theme.palette.text.muted};
      }
    }
  }

  .YourLibrary-librariesSearch {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2px 12px 0 8px;
  }

  .YourLibrary-libraries {
    padding: 0 0 8px 8px;

    flex: 1;

    overflow: hidden;
  }

  .YourLibrary-librariesList {
    padding-right: 8px;
  }
`;

export const LibraryItemFrame = styled(Stack.Item)`
  padding: 8px;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 12px;

  position: relative;
  z-index: 0;
  overflow: hidden;

  &::after {
    content: '';

    position: absolute;
    inset: 0;
    z-index: -1;
  }

  &:hover {
    cursor: pointer;

    &::after {
      background-color: ${({ theme }) => theme.palette.action.hover};
    }
  }
`;

export const PlaylistItemFrame = styled(LibraryItemFrame)`
  img.PlaylistItem-thumbnail {
    width: 48px;
    height: 48px;
    border-radius: 4px;
  }

  .PlaylistItem-details {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 2px;
  }

  .PlaylistItem-name {
    color: ${({ theme }) => theme.palette.text.main};
  }

  .PlaylistItem-info {
    font-size: 1.4rem;

    svg {
      font-size: 1.2rem;
      margin-right: 8px;
    }
  }

  .PlaylistItem-separator {
    font-size: 0.8rem;
    vertical-align: middle;
  }
`;

export const ArtistItemFrame = styled(LibraryItemFrame)`
  display: flex;
  align-items: center;
  gap: 12px;

  .ArtistItem-thumbnail {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  .ArtistItem-details {
  }

  .ArtistItem-name {
    ${({ theme }) => theme.typography.regular16};
    color: ${({ theme }) => theme.palette.text.main};
  }
`;
