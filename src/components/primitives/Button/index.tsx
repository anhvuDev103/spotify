import { ButtonFrame } from './styled';
import {
  ButtonProps,
  DEFAULT_BUTTON_SIZE,
  DEFAULT_BUTTON_VARIANT,
} from './types';

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  rounded,
  size,
  startIcon,
  endIcon,
  hoverScale,
  backgroundColor,
  ...props
}) => {
  return (
    <ButtonFrame
      $variant={variant}
      $rounded={rounded}
      $size={size}
      $hoverScale={!!hoverScale}
      $backgroundColor={backgroundColor}
      {...props}
    >
      {startIcon && <div className='icon startIcon'>{startIcon}</div>}
      {children}
      {endIcon && <div className='icon endIcon'>{endIcon}</div>}
    </ButtonFrame>
  );
};

Button.defaultProps = {
  rounded: true,
  variant: DEFAULT_BUTTON_VARIANT,
  size: DEFAULT_BUTTON_SIZE,
};

export default Button;
