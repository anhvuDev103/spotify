import AsideLeft from './components/AsideLeft';
import AsideRight from './components/AsideRight';
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
    </MainLayoutFrame>
  );
};

export default MainLayout;
