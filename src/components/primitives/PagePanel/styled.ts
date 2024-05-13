import styled from 'styled-components';

import Paper from '../Paper';

interface StyledPagePanelFrameProps {}

export const PagePanelFrame = styled(Paper)<StyledPagePanelFrameProps>`
  height: 100%;

  .PagePanel-header {
    padding: 0 24px;
  }

  .PagePanel-headerMain {
    display: flex;
    align-items: center;
    justify-content: space-between;

    min-height: 64px;
  }

  .PagePanel-headerBottom {
  }

  .PagePanel-navigation {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .PagePanel-user {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .PagePanel-installBtn {
    ${({ theme }) => theme.typography.bold14};
  }

  .PagePanel-content {
    padding: 0 24px;
    margin-top: 16px;
  }
`;
