import { ForwardedRef, forwardRef } from 'react';

import { ButtonFrame } from './styled';
import {
  ButtonProps,
  DEFAULT_BUTTON_SIZE,
  DEFAULT_BUTTON_VARIANT,
} from './types';

const Button = (
  {
    children,
    variant = DEFAULT_BUTTON_VARIANT,
    rounded = true,
    size = DEFAULT_BUTTON_SIZE,
    startIcon,
    endIcon,
    hoverScale,
    backgroundColor,
    ...props
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  return (
    <ButtonFrame
      $variant={variant}
      $rounded={rounded}
      $size={size}
      $hoverScale={!!hoverScale}
      $backgroundColor={backgroundColor}
      ref={ref}
      {...props}
    >
      {startIcon && (
        <div className='Button-icon Button-startIcon'>{startIcon}</div>
      )}
      {children}
      {endIcon && <div className='Button-icon Button-endIcon'>{endIcon}</div>}
    </ButtonFrame>
  );
};

export default forwardRef(Button);
