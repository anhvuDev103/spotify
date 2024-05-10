import { Theme } from '@styles/theme';
import lodash from 'lodash';

export const getThemeValue = (
  theme: Theme | Theme[keyof Theme],
  path: string,
) => lodash.get(theme, path);
