import styled from 'styled-components';

import NavigationList from './NavigationList';

const AsideLeftFrame = styled.section``;

const AsideLeft = () => {
  return (
    <AsideLeftFrame>
      <NavigationList />
    </AsideLeftFrame>
  );
};

export default AsideLeft;
