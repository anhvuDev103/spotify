import { InterpolationMapped, Theme } from '@styles/theme';
import styled from 'styled-components';

import { PaperVariants, PaperVariantsEnum } from './types';

interface StyledPaperProps {
  $variant?: PaperVariants;
}

interface ThemedButtonProps extends StyledPaperProps {
  theme: Theme;
}

const getVariantStyle = ({ $variant, theme }: ThemedButtonProps) => {
  const styles = {
    [PaperVariantsEnum.Contained]: {
      backgroundColor: theme.palette.paper.contained.main,
    },
    [PaperVariantsEnum.Alpha]: {
      backgroundColor: theme.palette.paper.alpha.main,
    },
  } as InterpolationMapped<PaperVariants>;

  return styles[$variant!];
};

export const PaperFrame = styled.div<StyledPaperProps>`
  border-radius: 8px;

  ${getVariantStyle}
`;
