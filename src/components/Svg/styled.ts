import { getThemeValue } from '@utils/common';
import styled, { css } from 'styled-components';

import { SvgProps } from './types';

const Svg = styled.svg<SvgProps>`
  flex-shrink: 0;
  font-size: 2.4rem;
  color: ${({ theme, color }) =>
    getThemeValue(theme.palette, color || 'text.muted')};

  ${({ size }) => css`
    width: ${size || '1em'};
    height: ${size || '1em'};
  `}
`;

export default Svg;
