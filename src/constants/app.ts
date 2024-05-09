import {
  HomeActiveIcon,
  HomeIcon,
  SearchActiveIcon,
  SearchIcon
} from '@components/Svg';
import Home from '@pages/Home';
import Search from '@pages/Search';

export const ROUTES = [
  {
    path: '/',
    title: 'Home',
    element: Home,
    icon: HomeIcon,
    iconActive: HomeActiveIcon,
    navigation: true
  },
  {
    path: '/search',
    title: 'Search',
    element: Search,
    icon: SearchIcon,
    iconActive: SearchActiveIcon,
    navigation: true
  }
] as const;
