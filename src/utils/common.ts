import { Theme } from '@styles/theme';
import get from 'lodash/get';

export const getThemeValue = (
  theme: Theme | Theme[keyof Theme],
  path: string,
) => get(theme, path);

export const generateRandomString = (length: number) => {
  return Math.random().toString(36).slice(0, length);
};
