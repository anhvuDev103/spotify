import {
  HomeActiveIcon,
  HomeIcon,
  SearchActiveIcon,
  SearchIcon,
} from '@components/Svg';
import { SvgProps } from '@components/Svg/types';
import Home from '@pages/Home';
import Playlist from '@pages/Playlist';
import Search from '@pages/Search';

type AppRoute = {
  path: string;
  title: string;
  element: React.FC;
  icon?: React.FC<React.PropsWithChildren<SvgProps>>;
  iconActive?: React.FC<React.PropsWithChildren<SvgProps>>;
  navigation?: boolean;
};

export const ROUTES: AppRoute[] = [
  {
    path: '/',
    title: 'Home',
    element: Home,
    icon: HomeIcon,
    iconActive: HomeActiveIcon,
    navigation: true,
  },
  {
    path: '/search',
    title: 'Search',
    element: Search,
    icon: SearchIcon,
    iconActive: SearchActiveIcon,
    navigation: true,
  },
  {
    path: '/playlist/:id',
    title: 'Playlist',
    element: Playlist,
  },
] as const;

export const ROUTES_NAVIGATION = ROUTES.filter(
  (route) => route.navigation,
) as Required<AppRoute>[];
