import Paper from '@components/primitives/Paper';
import Stack from '@components/primitives/Stack';
import { ROUTES } from '@constants/app';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavigationItem = styled(Stack.Item)`
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

const NavigationListFrame = styled(Paper)`
  padding: 8px 12px;
`;

const NavigationList = () => {
  return (
    <NavigationListFrame>
      <Stack.Main as='nav'>
        {ROUTES.map((route) => {
          const Icon = route.icon;
          const ActiveIcon = route.iconActive;

          return (
            <NavigationItem key={route.path}>
              <div className='NavigationItem-Icon'>
                <Icon className='NavigationItem-Icon_Inactive' />
                <ActiveIcon className='NavigationItem-Icon_Active' />
              </div>
              <NavLink to={route.path}>{route.title}</NavLink>
            </NavigationItem>
          );
        })}
      </Stack.Main>
    </NavigationListFrame>
  );
};

export default NavigationList;
