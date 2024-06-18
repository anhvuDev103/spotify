import AsideLeft from './components/AsideLeft';
import AsideRight from './components/AsideRight';
import PlayerPanel from './components/PlayerPanel';
import { MainContent, MainLayoutFrame } from './styled';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <MainLayoutFrame>
      <AsideLeft />
      <MainContent>{children}</MainContent>
      <AsideRight />
      <PlayerPanel />
    </MainLayoutFrame>
  );
};

export default MainLayout;
