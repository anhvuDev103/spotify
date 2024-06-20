import { PlayerPanelFrame } from '@layouts/styled';
import { memo } from 'react';

import Controls from './Controls';
import Features from './Features';
import PlayingSong from './PlayingSong';

const PlayerPanel = () => {
  return (
    <PlayerPanelFrame>
      <PlayingSong />
      <Controls />
      <Features />
    </PlayerPanelFrame>
  );
};

export default memo(PlayerPanel);
