import Paper from '@components/primitives/Paper';
import Stack from '@components/primitives/Stack';
import styled from 'styled-components';

export const NavigationItem = styled(Stack.Item)`
  display: flex;
  align-items: center;
  gap: 20px;

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
`;

export const MainLayoutFrame = styled.main`
  padding: 8px;

  display: flex;
  align-items: stretch;
  gap: 8px;
`;

export const MainContent = styled.section`
  flex: 1;
`;
