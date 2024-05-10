import { InterpolationMapped, Theme } from '@styles/theme';
import { getThemeValue } from '@utils/common';
import styled, { css } from 'styled-components';

import {
  ButtonSizes,
  ButtonSizesEnum,
  ButtonVariants,
  ButtonVariantsEnum,
  StyledButtonProps,
} from './types';

interface ThemedButtonProps extends StyledButtonProps {
  theme: Theme;
}

const getVariantStyle = ({ $variant, theme }: ThemedButtonProps) => {
  const styles = {
    [ButtonVariantsEnum.Ghost]: {
      backgroundColor: theme.palette.button.ghost.main,
      color: theme.palette.button.ghost.contrast,

      '&:hover': {
        backgroundColor: theme.palette.button.ghost.hover,
      },
    },

    [ButtonVariantsEnum.Contained]: {
      backgroundColor: theme.palette.button.contained.main,
      color: theme.palette.button.contained.contrast,
    },
    [ButtonVariantsEnum.Emphasize]: {},
    [ButtonVariantsEnum.Icon]: {
      backgroundColor: theme.palette.button.icon.main,

      '&:hover': {
        backgroundColor: theme.palette.button.icon.hover,
      },

      img: {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
      },
    },
    [ButtonVariantsEnum.Outline]: {},
    [ButtonVariantsEnum.Text]: {
      backgroundColor: theme.palette.button.text.main,

      '&:hover': {
        color: theme.palette.button.text.contrast,

        svg: {
          color: theme.palette.button.text.contrast,
        },
      },
    },
  } as InterpolationMapped<ButtonVariants>;

  return styles[$variant!];
};

const getSizeStyle = ({ $size, $variant, theme }: ThemedButtonProps) => {
  const styles = {
    [ButtonSizesEnum.Small]: {
      height: 24,
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
          },
        },

        '&:has(img)': {
          padding: 4,
        },

        svg: {
          fontSize: 16,
        },
      }),
    },
    [ButtonSizesEnum.Large]: {
      // ??
    },
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

  ${({ $backgroundColor, theme }) =>
    !!$backgroundColor &&
    css`
      background-color: ${getThemeValue(
        theme.palette,
        $backgroundColor,
      )} !important;
    `}

  &:hover {
    transform: ${({ $hoverScale }) => ($hoverScale ? 'scale(1.04)' : 'none')};
  }

  .Button-icon {
    display: flex;

    svg {
      font-size: 1.6rem;
    }
  }

  .Button-startIcon {
    margin-right: 4px;
  }

  .Button-endIcon {
    margin-left: 4px;
  }
`;
