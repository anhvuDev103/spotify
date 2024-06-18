import { PlayerPanelFrame } from '@layouts/styled';

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

export default PlayerPanel;
