import {
  ArrowDownCircleIcon,
  BellIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@components/Svg';

import Button from '../Button';
import { PagePanelFrame } from './styled';
import { PagePanelProps } from './types';

const PagePanel: React.FC<PagePanelProps> = ({ children }) => {
  return (
    <PagePanelFrame>
      <div className='header'>
        <div className='navigation'>
          <Button
            variant='icon'
            className='navigateBtn'
            backgroundColor='button.contained.main'
          >
            <ChevronLeftIcon color='text.main' />
          </Button>
          <Button
            variant='icon'
            className='navigateBtn'
            backgroundColor='button.contained.main'
          >
            <ChevronRightIcon color='text.main' />
          </Button>
        </div>
        <div className='user'>
          <Button
            variant='contained'
            hoverScale
            startIcon={<ArrowDownCircleIcon color='text.main' />}
            className='installBtn'
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
              src='https://scontent-tpe1-1.xx.fbcdn.net/v/t1.30497-1/84628273_176159830277856_972693363922829312_n.jpg?stp=c15.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ppIiOJPOLL4Q7kNvgEjmpaD&_nc_ht=scontent-tpe1-1.xx&edm=AP4hL3IEAAAA&oh=00_AfDNRPEkMp52OlUWgDn2B7lgs_yE_cgqQehhYdZm2tml5Q&oe=666459D9'
            />
          </Button>
        </div>
      </div>
      <div className='content'>{children}</div>
    </PagePanelFrame>
  );
};

export default PagePanel;
