import { SvgProps } from '@components/Svg/types';

export type DivAttrs = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type PopoverOptionType<T = string> = {
  label: T;
  icon: React.FC<React.PropsWithChildren<SvgProps>>;
};

export type DispatchType<T> = React.Dispatch<React.SetStateAction<T>>;
