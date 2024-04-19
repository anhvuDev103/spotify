import styled from 'styled-components';

import { Orientation } from './types';

interface StyledStack {
  $orientation?: Orientation;
}

interface StyledStackItem {}

export const StackFrame = styled.div<StyledStack>``;

export const StackItemFrame = styled.div<StyledStackItem>``;
