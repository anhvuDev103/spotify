import styled from 'styled-components';

import { StyledInputProps } from './types';

export const InputFrame = styled.input<StyledInputProps>`
  background-color: transparent;
  border: none;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.palette.text.muted};
  }
`;
