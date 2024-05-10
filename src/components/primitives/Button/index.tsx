import { ButtonFrame } from './styled';
import {
  ButtonProps,
  DEFAULT_BUTTON_SIZE,
  DEFAULT_BUTTON_VARIANT
} from './types';

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  rounded,
  size,
  startIcon,
  endIcon,
  hoverScale,
  ...props
}) => {
  return (
    <ButtonFrame
      $variant={variant}
      $rounded={rounded}
      $size={size}
      $hoverScale={!!hoverScale}
      {...props}
    >
      {startIcon && <div className='startIcon'>{startIcon}</div>}
      {children}
      {endIcon && <div className='endIcon'>{endIcon}</div>}
    </ButtonFrame>
  );
};

Button.defaultProps = {
  rounded: true,
  variant: DEFAULT_BUTTON_VARIANT,
  size: DEFAULT_BUTTON_SIZE
};

export default Button;
