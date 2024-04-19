import { getThemeValue } from '@utils/common';
import styled from 'styled-components';

import { SvgProps } from './types';

const Svg = styled.svg<SvgProps>`
  flex-shrink: 0;
  color: ${({ theme, color }) =>
    getThemeValue(theme.palette, color || 'text.main')};
`;

export default Svg;
