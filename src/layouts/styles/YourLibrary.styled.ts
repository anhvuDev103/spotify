import Paper from '@components/primitives/Paper';
import Stack from '@components/primitives/Stack';
import styled from 'styled-components';

export const YourLibraryFrame = styled(Paper)`
  border-radius: 8px;

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

  .YourLibrary-controls {
    margin-bottom: 8px;
  }

  .YourLibrary-controlsBadges {
    display: flex;
    align-items: center;
    gap: 8px;

    margin: 8px 16px;
  }

  .YourLibrary-controlsSearch {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2px 4px 0 16px;
  }

  .YourLibrary-libraries {
    padding: 0 8px 8px;
  }
`;

export const LibraryItemFrame = styled(Stack.Item)`
  padding: 8px;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 8px;

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

  img.LibraryItem-thumbnail {
    width: 48px;
    height: 48px;
    border-radius: 4px;
  }

  .LibraryItem-details {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 2px;
  }

  .LibraryItem-name {
    color: ${({ theme }) => theme.palette.text.main};
  }

  .LibraryItem-info {
    font-size: 1.4rem;

    svg {
      font-size: 1.2rem;
      margin-right: 8px;
    }
  }

  .LibraryItem-separator {
    font-size: 0.8rem;
    vertical-align: middle;
  }
`;
