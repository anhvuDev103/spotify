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
  ...props
}) => {
  return (
    <ButtonFrame $variant={variant} $rounded={rounded} $size={size} {...props}>
      {children}
    </ButtonFrame>
  );
};

Button.defaultProps = {
  rounded: true,
  variant: DEFAULT_BUTTON_VARIANT,
  size: DEFAULT_BUTTON_SIZE
};

export default Button;
