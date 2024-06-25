import { PlayerPanelFrame } from '@layouts/styled';
import { useRootStore } from '@stores/root';
import { memo } from 'react';

import Controls from './Controls';
import Features from './Features';
import PlayingSong from './PlayingSong';

const PlayerPanel = () => {
  const { isLogin } = useRootStore();

  if (!isLogin) return null;

  return (
    <PlayerPanelFrame>
      <PlayingSong />
      <Controls />
      <Features />
    </PlayerPanelFrame>
  );
};

export default memo(PlayerPanel);
