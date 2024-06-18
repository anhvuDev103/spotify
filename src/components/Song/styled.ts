import styled from 'styled-components';

interface StyledSongFrameProps {}

export const SongFrame = styled.div<StyledSongFrameProps>`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 8px;
  border-radius: 6px;

  overflow: hidden;

  .Song-thumbnail {
    width: 48px;
    height: 48px;

    position: relative;
  }

  .Song-thumbnailImage {
    width: 100%;
    height: 100%;
    border-radius: 4px;

    position: absolute;
    inset: 0;
  }

  .Song-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    color: ${({ theme }) => theme.palette.text.main};
    opacity: 0;
  }

  .Song-playIcon {
  }

  .Song-pauseIcon {
    display: none;
  }

  .Song-details {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 2px;
  }

  .Song-name {
    ${({ theme }) => theme.typography.regular16};
    color: ${({ theme }) => theme.palette.text.main};
  }

  .Song-artists {
    ${({ theme }) => theme.typography.regular14};

    &:hover {
      text-decoration: underline;

      cursor: pointer;
    }
  }
`;
