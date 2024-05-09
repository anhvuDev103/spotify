import { getThemeValue } from '@utils/common';
import styled from 'styled-components';

import { SvgProps } from './types';

const Svg = styled.svg<SvgProps>`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  color: ${({ theme, color }) =>
    getThemeValue(theme.palette, color || 'text.muted')};
`;

export default Svg;
