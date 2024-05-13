export type Orientation = 'horizontal' | 'vertical';

type DivAttrs = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface StackProps extends DivAttrs {
  orientation?: Orientation;
  as?: keyof HTMLElementTagNameMap;
  children: React.ReactNode;
}

export interface StackItemProps extends DivAttrs {
  children: React.ReactNode;
  as?: keyof HTMLElementTagNameMap;
}
