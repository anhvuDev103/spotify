import { InterpolationMapped, Theme } from '@styles/theme';
import styled from 'styled-components';

import { PaperVariants } from './types';

interface StyledPaperProps {
  $variant?: PaperVariants;
}

interface ThemedButtonProps extends StyledPaperProps {
  theme: Theme;
}

const getVariantStyle = ({ $variant, theme }: ThemedButtonProps) => {
  const styles = {
    [PaperVariants.Contained]: {
      backgroundColor: theme.palette.background.paper
    }
  } as InterpolationMapped<PaperVariants>;

  return styles[$variant!];
};

export const PaperFrame = styled.div<StyledPaperProps>`
  border-radius: 8px;

  ${getVariantStyle}
`;
