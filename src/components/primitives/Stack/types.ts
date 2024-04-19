export type Orientation = 'horizontal' | 'vertical';

export interface StackProps {
  orientation?: Orientation;
  as?: keyof HTMLElementTagNameMap;
  children: React.ReactNode;
}

export interface StackItemProps {
  children: React.ReactNode;
  as?: keyof HTMLElementTagNameMap;
}
