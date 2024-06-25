import { UserProfile } from '@spotify/web-api-ts-sdk';
import { StateCreator } from 'zustand';

import { RootStore } from './root';

export interface AccountSlice {
  profile: UserProfile | undefined;
  isLogin: boolean;

  login: (profile?: UserProfile) => void;
}

export const createAccountSlice: StateCreator<
  RootStore,
  [
    ['zustand/devtools', never],
    ['zustand/subscribeWithSelector', never],
    ['zustand/immer', never],
  ],
  [],
  AccountSlice
> = (set) => {
  return {
    profile: undefined,
    isLogin: false,

    login: (profile) => {
      set({
        profile,
        isLogin: !!profile,
      });
    },
  };
};
