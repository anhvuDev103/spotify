export enum ButtonVariantsEnum {
  Contained = 'contained',
  Outline = 'outline',
  Ghost = 'ghost',
  Emphasize = 'emphasize',
  Icon = 'icon',
  Clear = 'clear'
}

export type ButtonVariants = `${ButtonVariantsEnum}`;

export enum ButtonSizesEnum {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg'
}

export type ButtonSizes = `${ButtonSizesEnum}`;

export interface ButtonProps {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  rounded?: boolean;
  children: React.ReactNode;
  endIcon?: React.ReactElement;
  hoverScale?: boolean;
}

export const DEFAULT_BUTTON_VARIANT = ButtonVariantsEnum.Ghost;
export const DEFAULT_BUTTON_SIZE = ButtonSizesEnum.Medium;
