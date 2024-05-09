import Button from '@components/primitives/Button';
import { ButtonVariantsEnum } from '@components/primitives/Button/types';

import { BadgeProps } from './types';

const Badge: React.FC<BadgeProps> = ({ children, ...props }) => {
  return (
    <Button variant={ButtonVariantsEnum.Ghost} {...props}>
      {children}
    </Button>
  );
};

export default Badge;
