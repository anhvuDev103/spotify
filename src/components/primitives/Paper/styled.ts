import { InterpolationMapped, Theme } from '@styles/theme';
import styled from 'styled-components';

import { PAPER_VARIANTS, PaperVariant } from './types';

interface StyledPaperProps {
  $variant?: PaperVariant;
}

interface ThemedButtonProps extends StyledPaperProps {
  theme: Theme;
}

const getVariantStyle = ({
  $variant = PAPER_VARIANTS.CONTAINED,
  theme
}: ThemedButtonProps) => {
  const styles = {
    [PAPER_VARIANTS.CONTAINED]: {}
  } as InterpolationMapped<PaperVariant>;

  return styles[$variant];
};

export const PaperFrame = styled.div<StyledPaperProps>`
  ${getVariantStyle}
`;
