import cookieService from '@services/CookieService';
import { StateCreator } from 'zustand';

import { RootStore } from './root';

export interface AuthSlice {
  accessToken: string | undefined;
  refreshToken: string | undefined;

  setAccessToken: (token: string | undefined) => void;
  setRefreshToken: (token: string | undefined) => void;
  initTokens: () => void;
  clearTokens: () => void;
}

export const createAuthSlice: StateCreator<
  RootStore,
  [
    ['zustand/devtools', never],
    ['zustand/subscribeWithSelector', never],
    ['zustand/immer', never],
  ],
  [],
  AuthSlice
> = (set, get) => {
  return {
    accessToken: undefined,
    refreshToken: undefined,

    setAccessToken: (token) => {
      set({
        accessToken: token,
      });
    },
    setRefreshToken: (token) => {
      set({
        refreshToken: token,
      });
    },
    initTokens: () => {
      const { setAccessToken, setRefreshToken } = get();

      setAccessToken(cookieService.get('access_token'));
      setRefreshToken(cookieService.get('refresh_token'));
    },
    clearTokens: () => {
      set({
        accessToken: undefined,
        refreshToken: undefined,
      });
    },
  };
};
