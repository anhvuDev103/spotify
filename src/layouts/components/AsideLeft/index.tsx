import { AsideLeftFrame } from '@layouts/styled';
import { memo } from 'react';

import NavigationList from './NavigationList';
import YourLibrary from './YourLibrary';

const AsideLeft = () => {
  return (
    <AsideLeftFrame>
      <NavigationList />
      <YourLibrary />
    </AsideLeftFrame>
  );
};

export default memo(AsideLeft);
