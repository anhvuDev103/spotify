import { create } from 'zustand';
import { devtools, subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { AuthSlice, createAuthSlice } from './accountSlice';

export type RootStore = AuthSlice;

export const useRootStore = create<RootStore>()(
  subscribeWithSelector(
    immer(
      devtools((...args) => {
        return {
          ...createAuthSlice(...args),
        };
      }),
    ),
  ),
);
