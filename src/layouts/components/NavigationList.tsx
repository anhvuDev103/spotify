import Stack from '@components/primitives/Stack';
import { ROUTES } from '@constants/app';
import { NavigationItem, NavigationListFrame } from '@layouts/styled';
import { NavLink } from 'react-router-dom';

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
