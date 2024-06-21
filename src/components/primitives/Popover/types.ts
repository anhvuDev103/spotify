import { TippyProps } from '@tippyjs/react';
import { DivAttrs } from '@utils/types';

export interface PopoverProps extends TippyProps {
  children: React.ReactElement;
  renderElement: React.ReactNode;
}

export interface PopoverOptionGroupProps extends DivAttrs {
  label?: string;
}

export interface PopoverOptionItemProps extends Omit<DivAttrs, 'onSelect'> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onSelect: () => void;
}

export interface PopoverOptionItemFrameProps {
  $active?: boolean;
  $disabled?: boolean;
}

export interface PopoverOptionDividerProps extends DivAttrs {}
