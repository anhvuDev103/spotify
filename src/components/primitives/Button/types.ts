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

type ButtonAttrs = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  'size'
>;

export interface ButtonProps extends ButtonAttrs {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  rounded?: boolean;
  children: React.ReactNode;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  hoverScale?: boolean;
  backgroundColor?: string;
}

export interface StyledButtonProps extends ButtonAttrs {
  $variant?: ButtonVariants;
  $rounded?: boolean;
  $size?: ButtonSizes;
  $hoverScale?: boolean;
  $backgroundColor?: string;
}

export const DEFAULT_BUTTON_VARIANT = ButtonVariantsEnum.Ghost;
export const DEFAULT_BUTTON_SIZE = ButtonSizesEnum.Medium;
