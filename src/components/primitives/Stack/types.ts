import { DivAttrs } from '@utils/types';

export type Orientation = 'horizontal' | 'vertical';

export interface StackProps extends DivAttrs {
  orientation?: Orientation;
  as?: keyof HTMLElementTagNameMap;
  children: React.ReactNode;
}

export interface StackItemProps extends DivAttrs {
  children: React.ReactNode;
  as?: keyof HTMLElementTagNameMap;
}
