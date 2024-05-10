import { AsideLeftFrame } from '@layouts/styled';

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

export default AsideLeft;
