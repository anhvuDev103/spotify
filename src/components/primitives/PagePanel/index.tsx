import {
  ArrowDownCircleIcon,
  BellIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@components/Svg';
import { useSharedServices } from '@hooks/providers/useSharedServicesProvider';
import { Link } from 'react-router-dom';

import Button from '../Button';
import ScrollArea from '../ScrollArea';
import { PagePanelFrame } from './styled';
import { PagePanelProps } from './types';

const PagePanel: React.FC<PagePanelProps> = ({ bottomExtension, children }) => {
  const { authService } = useSharedServices();
  const oauthUrl = authService.getOauthUrl();

  return (
    <PagePanelFrame>
      <div className='PagePanel-header'>
        <div className='PagePanel-headerMain'>
          <div className='PagePanel-navigation'>
            <Button
              variant='icon'
              className='PagePanel-navigateBtn'
              backgroundColor='button.contained.main'
            >
              <ChevronLeftIcon color='text.main' />
            </Button>
            <Button
              variant='icon'
              className='PagePanel-navigateBtn'
              backgroundColor='button.contained.main'
            >
              <ChevronRightIcon color='text.main' />
            </Button>
          </div>
          <div className='PagePanel-user'>
            <Button
              variant='contained'
              hoverScale
              startIcon={<ArrowDownCircleIcon color='text.main' />}
              className='PagePanel-installBtn'
            >
              Install App
            </Button>
            <Button
              variant='icon'
              hoverScale
              backgroundColor='button.contained.main'
            >
              <BellIcon />
            </Button>
            <Button
              variant='icon'
              hoverScale
              backgroundColor='button.contained.main'
            >
              <img
                alt='FIX_ME'
                src='https://i2o.scdn.co/image/ab67706c0000cfa39a48455a14b7df88184cd74b'
              />
            </Button>
            <Link to={oauthUrl}>
              <Button
                variant='emphasize'
                size='lg'
                className='PagePanel-loginBtn'
              >
                Log in
              </Button>
            </Link>
          </div>
        </div>
        {bottomExtension && (
          <div className='PagePanel-headerBottom'>{bottomExtension}</div>
        )}
      </div>
      <div className='PagePanel-content'>
        <ScrollArea>{children}</ScrollArea>
      </div>
    </PagePanelFrame>
  );
};

export default PagePanel;
