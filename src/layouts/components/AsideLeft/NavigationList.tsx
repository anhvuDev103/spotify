import Stack from '@components/primitives/Stack';
import { ROUTES_NAVIGATION } from '@constants/app';
import { NavigationItem, NavigationListFrame } from '@layouts/styled';
import { NavLink } from 'react-router-dom';

const NavigationList = () => {
  return (
    <NavigationListFrame>
      <Stack.List as='nav'>
        {ROUTES_NAVIGATION.map((route) => {
          const Icon = route.icon;
          const ActiveIcon = route.iconActive;

          return (
            <NavigationItem key={route.path}>
              <NavLink to={route.path} className='NavigationList-link'>
                <div className='NavigationList-icons'>
                  <Icon className='NavigationList-inactiveIcon' />
                  <ActiveIcon className='NavigationList-activeIcon' />
                </div>
                {route.title}
              </NavLink>
            </NavigationItem>
          );
        })}
      </Stack.List>
    </NavigationListFrame>
  );
};

export default NavigationList;
