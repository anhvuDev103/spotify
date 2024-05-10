import Stack from '@components/primitives/Stack';
import { ROUTES } from '@constants/app';
import { NavigationItem, NavigationListFrame } from '@layouts/styled';
import { NavLink } from 'react-router-dom';

const NavigationList = () => {
  return (
    <NavigationListFrame>
      <Stack.List as='nav'>
        {ROUTES.map((route) => {
          const Icon = route.icon;
          const ActiveIcon = route.iconActive;

          return (
            <NavigationItem key={route.path}>
              <div className='NavigationList-icons'>
                <Icon className='NavigationList-inactiveIcon' />
                <ActiveIcon className='NavigationList-activeIcon' />
              </div>
              <NavLink to={route.path}>{route.title}</NavLink>
            </NavigationItem>
          );
        })}
      </Stack.List>
    </NavigationListFrame>
  );
};

export default NavigationList;
