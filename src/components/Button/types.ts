export enum ButtonVariants {
  Contained = 'contained',
  Outline = 'outline',
  Ghost = 'ghost',
  Emphasize = 'emphasize',
  Icon = 'icon'
}

export enum ButtonSizes {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg'
}

export interface ButtonProps {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  rounded?: boolean;
  children: React.ReactNode;
}

export const DEFAULT_BUTTON_VARIANT = ButtonVariants.Ghost;
export const DEFAULT_BUTTON_SIZE = ButtonSizes.Medium;
