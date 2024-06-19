import { create } from 'zustand';
import { devtools, subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { AccountSlice, createAccountSlice } from './accountSlice';

export type RootStore = AccountSlice;

export const useRootStore = create<RootStore>()(
  subscribeWithSelector(
    immer(
      devtools((...args) => {
        return {
          ...createAccountSlice(...args),
        };
      }),
    ),
  ),
);
