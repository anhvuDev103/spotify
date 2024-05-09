import { InterpolationMapped, Theme } from '@styles/theme';
import styled from 'styled-components';

import {
  ButtonSizes,
  ButtonSizesEnum,
  ButtonVariants,
  ButtonVariantsEnum
} from './types';

interface StyledButtonProps {
  $variant?: ButtonVariants;
  $rounded?: boolean;
  $size?: ButtonSizes;
  $hoverScale?: boolean;
}

interface ThemedButtonProps extends StyledButtonProps {
  theme: Theme;
}

const getVariantStyle = ({ $variant, theme }: ThemedButtonProps) => {
  const styles = {
    [ButtonVariantsEnum.Ghost]: {
      backgroundColor: theme.palette.ghost.main,
      color: theme.palette.ghost.contrast,

      '&:hover': {
        backgroundColor: theme.palette.ghost.hover
      }
    },

    [ButtonVariantsEnum.Contained]: {},
    [ButtonVariantsEnum.Emphasize]: {},
    [ButtonVariantsEnum.Icon]: {
      backgroundColor: 'transparent',

      '&:hover': {
        backgroundColor: theme.palette.ghost.main,
        transition: '500ms'
      }
    },
    [ButtonVariantsEnum.Outline]: {},
    [ButtonVariantsEnum.Clear]: {
      backgroundColor: 'transparent',

      '&:hover': {
        color: theme.palette.text.main,

        svg: {
          color: theme.palette.text.main
        }
      }
    }
  } as InterpolationMapped<ButtonVariants>;

  return styles[$variant!];
};

const getSizeStyle = ({ $size, $variant, theme }: ThemedButtonProps) => {
  const styles = {
    [ButtonSizesEnum.Small]: {
      height: 24
    },
    [ButtonSizesEnum.Medium]: {
      height: 32,
      padding: '4px 12px',
      ...theme.typography.regular14,

      ...($variant === ButtonVariantsEnum.Icon && {
        width: 32,
        padding: 8,

        '&:hover': {
          svg: {
            color: theme.palette.text.main,
            transition: '500ms'
          }
        },

        svg: {
          fontSize: 16
        }
      })
    },
    [ButtonSizesEnum.Large]: {
      // ??
    }
  } as InterpolationMapped<ButtonSizes>;

  return styles[$size!];
};

export const ButtonFrame = styled.button<StyledButtonProps>`
  outline: none;
  border: none;

  border-radius: ${({ $rounded }) => $rounded && '999px'};

  display: flex;
  align-items: center;

  cursor: pointer;

  ${getSizeStyle}
  ${getVariantStyle}

  &:hover {
    transform: ${({ $hoverScale }) => ($hoverScale ? 'scale(1.04)' : 'none')};
  }

  .endIcon {
    display: flex;
    margin-left: 4px;

    svg {
      font-size: 1.6rem;
    }
  }
`;
