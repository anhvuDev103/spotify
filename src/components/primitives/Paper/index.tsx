import { PaperFrame } from './styled';
import { PAPER_VARIANTS, PaperProps } from './types';

const Paper: React.FC<PaperProps> = ({ variant, children }) => {
  return <PaperFrame $variant={variant}>{children}</PaperFrame>;
};

Paper.defaultProps = {
  variant: PAPER_VARIANTS.CONTAINED
};

export default Paper;
