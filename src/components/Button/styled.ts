import { InterpolationMapped, Theme } from '@styles/theme';
import styled, { Interpolation } from 'styled-components';

import { ButtonSizes, ButtonVariants } from './types';

interface StyledButtonProps {
  $variant?: ButtonVariants;
  $rounded?: boolean;
  $size?: ButtonSizes;
}

interface ThemedButtonProps extends StyledButtonProps {
  theme: Theme;
}

const getVariantStyle = ({ $variant, theme }: ThemedButtonProps) => {
  const styles = {
    [ButtonVariants.Ghost]: {
      backgroundColor: theme.palette.ghost.main,
      color: theme.palette.ghost.contrast,

      '&:hover': {
        backgroundColor: theme.palette.ghost.hover
      }
    },

    [ButtonVariants.Contained]: {},
    [ButtonVariants.Emphasize]: {},
    [ButtonVariants.Icon]: {},
    [ButtonVariants.Outline]: {}
  } as InterpolationMapped<ButtonVariants>;

  return styles[$variant!];
};

const getSizeStyle = ({
  $size,
  theme
}: ThemedButtonProps): Interpolation<object> => {
  const styles = {
    sm: {
      height: 24
    },
    md: { height: 32, padding: '4px 12px', ...theme.typography.regular14 },
    lg: {
      // ??
    }
  } as InterpolationMapped<ButtonSizes>;

  return styles[$size!];
};

export const ButtonFrame = styled.button<StyledButtonProps>`
  outline: none;
  border: none;

  border-radius: ${({ $rounded }) => $rounded && '999px'};

  cursor: pointer;

  ${getSizeStyle}
  ${getVariantStyle}
`;
