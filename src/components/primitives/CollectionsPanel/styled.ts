import styled from 'styled-components';

import Paper from '../Paper';

interface StyledCollectionsPanelFrameProps {}

export const CollectionsPanelFrame = styled(
  Paper,
)<StyledCollectionsPanelFrameProps>`
  .CollectionsPanel-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;
  }

  .CollectionsPanel-label {
    ${({ theme }) => theme.typography.bold24};
    color: ${({ theme }) => theme.palette.text.main};

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  .CollectionsPanel-showAllBtn {
    ${({ theme }) => theme.typography.medium14};
    color: ${({ theme }) => theme.palette.text.muted};

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  .CollectionsPanel-content {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }
`;
