import styled from 'styled-components';

import Paper from '../Paper';

interface StyledPagePanelFrameProps {}

export const PagePanelFrame = styled(Paper)<StyledPagePanelFrameProps>`
  height: 100%;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 16px 24px;
  }

  .navigation {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .user {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .installBtn {
    ${({ theme }) => theme.typography.semi14};
  }

  .content {
    margin-top: 16px;
    padding: 0 24px;
  }
`;
