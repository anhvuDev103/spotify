import { ForwardedRef, forwardRef } from 'react';

import { InputFrame } from './styled';
import { InputProps } from './types';

const Input = (
  { ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return <InputFrame ref={ref} {...props} />;
};

export default forwardRef(Input);
