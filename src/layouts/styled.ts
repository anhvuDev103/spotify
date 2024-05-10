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
    .NavigationItem-Icon {
      svg {
        color: ${({ theme }) => theme.palette.text.main};
        transition: 200ms;
      }
    }

    a {
      color: ${({ theme }) => theme.palette.text.main};
      transition: 200ms;
    }
  }

  &:has(a.active) {
    .NavigationItem-Icon_Inactive {
      display: none;
    }

    .NavigationItem-Icon_Active {
      display: block;
    }
  }

  .NavigationItem-Icon {
    position: relative;
    width: 24px;
    height: 24px;

    svg {
      position: absolute;
      inset: 0;
    }

    .NavigationItem-Icon_Active {
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
  width: 400px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 8px;
`;
