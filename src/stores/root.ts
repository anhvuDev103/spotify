import { create } from 'zustand';
import { devtools, subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { AccountSlice, createAccountSlice } from './accountSlice';
import { AuthSlice, createAuthSlice } from './authSlice';

export type RootStore = AuthSlice & AccountSlice;

export const useRootStore = create<RootStore>()(
  subscribeWithSelector(
    immer(
      devtools((...args) => {
        return {
          ...createAccountSlice(...args),
          ...createAuthSlice(...args),
        };
      }),
    ),
  ),
);
