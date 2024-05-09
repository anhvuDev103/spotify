import { PaperFrame } from './styled';
import { DEFAULT_PAPER_VARIANT, PaperProps } from './types';

const Paper: React.FC<PaperProps> = ({ variant, children, ...props }) => {
  return (
    <PaperFrame $variant={variant} {...props}>
      {children}
    </PaperFrame>
  );
};

Paper.defaultProps = {
  variant: DEFAULT_PAPER_VARIANT
};

export default Paper;
