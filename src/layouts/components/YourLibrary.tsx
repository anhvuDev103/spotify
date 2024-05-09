import Button from '@components/Button';
import Paper from '@components/primitives/Paper';
import { LibraryIcon } from '@components/Svg';
import styled from 'styled-components';

const YourLibraryFrame = styled(Paper)`
  border-radius: 8px;
`;

const YourLibrary = () => {
  return (
    <YourLibraryFrame>
      <div className='YourLibrary-Head'>
        <LibraryIcon />
        Your Library
      </div>
    </YourLibraryFrame>
  );
};

export default YourLibrary;
