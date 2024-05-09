import styled from 'styled-components';

import NavigationList from './NavigationList';
import YourLibrary from './YourLibrary';

const AsideLeftFrame = styled.section`
  width: 400px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 8px;
`;

const AsideLeft = () => {
  return (
    <AsideLeftFrame>
      <NavigationList />
      <YourLibrary />
    </AsideLeftFrame>
  );
};

export default AsideLeft;
