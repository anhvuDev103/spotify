import { UserProfile } from '@spotify/web-api-ts-sdk';
import { StateCreator } from 'zustand';

import { RootStore } from './root';

export interface AccountSlice {
  profile: UserProfile | undefined;
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
> = () => {
  return {
    profile: undefined,
  };
};
