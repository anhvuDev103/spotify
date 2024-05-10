import Paper from '@components/primitives/Paper';
import styled from 'styled-components';

export const YourLibraryFrame = styled(Paper)`
  border-radius: 8px;

  .heading {
    display: flex;
    align-items: center;

    padding: 8px 16px;
  }

  .headingTitle {
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

  .headingControls {
    display: flex;
    align-items: center;
    gap: 8px;

    margin-left: auto;
  }

  .controls {
    margin-bottom: 8px;
  }

  .controlsBadges {
    display: flex;
    align-items: center;
    gap: 8px;

    margin: 8px 16px;
  }

  .controlsSearch {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2px 4px 0 16px;
  }

  .libraries {
    padding: 0 8px 8px;
  }
`;

export const LibraryItemFrame = styled.div`
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

  img.thumbnail {
    width: 48px;
    height: 48px;
    border-radius: 4px;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 2px;
  }

  .name {
    color: ${({ theme }) => theme.palette.text.main};
  }

  .info {
    font-size: 1.4rem;

    svg {
      font-size: 1.2rem;
      margin-right: 8px;
    }
  }

  .separator {
    font-size: 0.8rem;
    vertical-align: middle;
  }
`;
