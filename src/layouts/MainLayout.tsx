import AsideLeft from './components/AsideLeft';
import AsideRight from './components/AsideRight';
import PlayerControl from './components/PlayerControl';
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
      <PlayerControl />
    </MainLayoutFrame>
  );
};

export default MainLayout;
