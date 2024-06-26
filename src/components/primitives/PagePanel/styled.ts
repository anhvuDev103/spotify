import styled from 'styled-components';

import Paper from '../Paper';

interface StyledPagePanelFrameProps {}

export const PagePanelFrame = styled(Paper)<StyledPagePanelFrameProps>`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  .PagePanel-header {
    padding: 0 24px;
  }

  .PagePanel-headerMain {
    display: flex;
    align-items: center;
    justify-content: space-between;

    min-height: 64px;
  }

  .PagePanel-loginBtn {
    font-weight: 700;
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
    margin-top: 16px;

    overflow: hidden;
  }
`;
