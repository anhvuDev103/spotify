import Paper from '@components/primitives/Paper';
import styled from 'styled-components';

interface StyledCollectionFrameProps {}

export const CollectionFrame = styled(Paper)<StyledCollectionFrameProps>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 8px;

  max-width: 200px;
  padding: 12px;

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

    .Collection-playBtn {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .Collection-thumbnail {
    width: 100%;
    padding-top: 100%; /* 1:1 Aspect Ratio */
    border-radius: 6px;

    position: relative;
  }

  img.Collection-thumbnailImage {
    width: 100%;
    height: 100%;
    border-radius: 6px;

    position: absolute;
    inset: 0;
  }

  .Collection-playBtn {
    background-color: ${({ theme }) => theme.palette.primary.main};
    box-shadow: 0 8px 8px #0000004d;

    position: absolute;
    bottom: 6px;
    right: 6px;

    opacity: 0;
    transform: translateY(10px);

    transition:
      transform 200ms,
      opacity 200ms;

    &:hover {
      background-color: ${({ theme }) => theme.palette.primary.hover};
    }

    svg {
      color: ${({ theme }) => theme.palette.primary.contrast};
    }
  }

  .Collection-details {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
  }

  .Collection-name {
    color: ${({ theme }) => theme.palette.text.main};
  }

  .Collection-description {
    ${({ theme }) => theme.typography.regular14};

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
