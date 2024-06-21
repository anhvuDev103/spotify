import styled from 'styled-components';

import { StyledInputProps } from './types';

export const InputFrame = styled.div<StyledInputProps>`
  width: 100%;

  position: absolute;
  inset: 0;

  input {
    background-color: transparent;
    border: none;
    outline: none;

    position: absolute;
    inset: 0;

    &::placeholder {
      color: ${({ theme }) => theme.palette.text.muted};
    }
  }

  .Input-clearBtn {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);

    z-index: 1;

    &:hover {
      background-color: initial;
    }
  }
`;
