import { CloseIcon } from '@components/Svg';
import { ForwardedRef, forwardRef } from 'react';

import Button from '../Button';
import { InputFrame } from './styled';
import { InputProps } from './types';

const Input = (
  { value, setValue, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const clear = () => {
    setValue?.('');
  };

  return (
    <InputFrame>
      <input ref={ref} value={value} {...props} />
      {value && setValue && (
        <Button variant='icon' onClick={clear} className='Input-clearBtn'>
          <CloseIcon />
        </Button>
      )}
    </InputFrame>
  );
};

export default forwardRef(Input);
