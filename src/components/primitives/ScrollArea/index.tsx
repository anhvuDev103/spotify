import classNames from 'classnames';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { ScrollAreaProps } from './types';

const ScrollArea: React.FC<ScrollAreaProps> = ({
  children,
  className,
  ...props
}) => {
  const classes = classNames('ScrollArea', className);
  return (
    <OverlayScrollbarsComponent
      className={classes}
      options={{
        scrollbars: {
          autoHide: 'move',
        },
      }}
      defer
      {...props}
    >
      {children}
    </OverlayScrollbarsComponent>
  );
};

export default ScrollArea;
