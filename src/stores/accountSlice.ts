import { StateCreator } from 'zustand';

import { RootStore } from './root';

export interface AccountSlice {
  account: string;
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
    account: 'ahihi',
  };
};
