import { DispatchType } from '@utils/types';

type InputAttrs = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface InputProps extends InputAttrs {
  setValue?: DispatchType<string>;
}

export interface StyledInputProps extends InputProps {}
