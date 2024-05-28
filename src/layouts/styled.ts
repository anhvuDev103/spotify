import Paper from '@components/primitives/Paper';
import Stack from '@components/primitives/Stack';
import styled from 'styled-components';

export const NavigationItem = styled(Stack.Item)`
  display: flex;
  align-items: center;

  height: 48px;
  padding: 0 12px;

  cursor: pointer;

  &:hover {
    .NavigationList-icons {
      svg {
        color: ${({ theme }) => theme.palette.text.main};
      }
    }

    a {
      color: ${({ theme }) => theme.palette.text.main};
    }
  }

  &:has(a.active) {
    .NavigationList-inactiveIcon {
      display: none;
    }

    .NavigationList-activeIcon {
      display: block;
    }
  }

  .NavigationList-link {
    flex: 1;

    display: flex;
    align-items: center;
    gap: 20px;
  }

  .NavigationList-icons {
    position: relative;
    width: 24px;
    height: 24px;

    svg {
      position: absolute;
      inset: 0;
    }

    .NavigationList-activeIcon {
      display: none;
    }
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.text.muted};

    ${({ theme }) => theme.typography.medium16};
  }
`;

export const NavigationListFrame = styled(Paper)`
  padding: 8px 12px;
`;

export const AsideLeftFrame = styled.section`
  width: 420px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 8px;

  overflow-y: hidden;
`;

export const MainLayoutFrame = styled.main`
  height: 100%;
  padding: 8px;

  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr auto;
  gap: 8px;
`;

export const MainContent = styled.section`
  overflow: hidden;
`;

export const AsideRightFrame = styled(Paper)`
  width: 420px;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  overflow: hidden;

  .AsideRight-head {
    min-height: 48px;
    margin: 8px 0;
    padding: 0 16px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .AsideRight-label {
    color: ${({ theme }) => theme.palette.text.main};

    ${({ theme }) => theme.typography.bold14};
  }

  .AsideRight-inQueue {
    padding: 0 0 16px 16px;

    overflow: hidden;
  }

  .AsideRight-inQueueContent {
    padding-right: 8px;
  }

  .AsideRight-inQueueNowPlaying {
  }

  .AsideRight-listLabel {
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${({ theme }) => theme.palette.text.main};

    ${({ theme }) => theme.typography.bold14};
  }

  .AsideRight-clearQueueBtn {
    padding-left: 0;
    padding-right: 0;
    margin-right: 16px;
  }

  .AsideRight-inQueueList {
  }
`;

export const PlayerControlFrame = styled.section`
  height: 72px;

  grid-column: 1/4;
`;
