import styled from 'styled-components';

import AsideLeft from './components/AsideLeft';
import AsideRight from './components/AsideRight';

interface Props {
  children: React.ReactNode;
}

const MainLayoutFrame = styled.main``;

const MainContent = styled.section``;

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
