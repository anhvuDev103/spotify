import { Interpolation } from 'styled-components';

type Mode = 'dark' | 'light';

export type InterpolationMapped<K extends string | number | symbol> = {
  [key in K]: Interpolation<object>;
};

export const getDesignTokens = (mode: Mode) => {
  const getColor = (darkColor: string, lightColor: string) =>
    mode === 'dark' ? darkColor : lightColor;

  return {
    palette: {
      common: {
        white: '#ffffff',
        white20: '#ffffff33',
        white40: '#ffffff66',
        white60: '#ffffff99',
        black: '#000000',
        black10: '#0000001a',
        black60: '#00000099',
        muted: '#00000040',
      },
      contrast: {
        contrast0: {
          background: getColor('#ffffff', ''),
          text: getColor('#000000', ''),
        },
      },
      primary: {
        main: getColor('#1ed760', ''),
        hover: getColor('#1fdf64', ''),
        contrast: getColor('#000000', ''),
      },
      success: {
        main: getColor('#1fd75f', ''),
        hover: getColor('#4edb9599', ''),
        contrast: getColor('#000000', ''),
        '60': getColor('#4edb9599', ''),
      },
      warning: {
        main: getColor('#ffca02', ''),
        hover: getColor('#ffca0299', ''),
        contrast: getColor('#000000', ''),
      },
      danger: {
        main: getColor('#ff5a58', ''),
        hover: getColor('#ff5a5899', ''),
        contrast: getColor('#ffffff', ''),
      },
      disabled: {
        main: getColor('#e5e5e5', ''),
        hover: getColor('#e5e5e599', ''),
        contrast: getColor('#8b8b8b', ''),
      },
      background: {
        default: getColor('#000000', ''),
        paper: getColor('#121212', ''),
      },
      border: {
        main: getColor('#000000', ''),
      },
      text: {
        main: getColor('#ffffff', ''),
        muted: getColor('#b3b3b3', ''),
      },
      action: {
        hover: getColor('#1a1a1a', ''),
      },
      button: {
        contained: {
          main: getColor('#0000008a', ''),
          hover: getColor('#0000008a', ''),
          contrast: getColor('#ffffff', ''),
        },
        ghost: {
          main: getColor('#ffffff12', ''),
          hover: getColor('#ffffff1a', ''),
          contrast: getColor('#ffffff', ''),
        },
        text: {
          main: getColor('transparent', ''),
          hover: getColor('#ffffff12', ''),
          contrast: getColor('#ffffff', ''),
        },
        icon: {
          main: getColor('transparent', ''),
          hover: getColor('#ffffff12', ''),
          contrast: getColor('#ffffff', ''),
        },
        emphasize: {
          main: getColor('#ffffff', ''),
          hover: getColor('#b7b7b7', ''),
          contrast: getColor('#000000', ''),
        },
      },
    },
    typography: {
      bold12: {
        fontSize: '1.2rem',
        fontWeight: '700',
      },
      medium12: {
        fontSize: '1.2rem',
        fontWeight: '500',
      },
      regular12: {
        fontSize: '1.2rem',
        fontWeight: '400',
      },
      bold14: {
        fontSize: '1.4rem',
        fontWeight: '700',
      },
      medium14: {
        fontSize: '1.4rem',
        fontWeight: '500',
      },
      regular14: {
        fontSize: '1.4rem',
        fontWeight: '400',
      },
      bold16: {
        fontSize: '1.6rem',
        fontWeight: '700',
      },
      medium16: {
        fontSize: '1.6rem',
        fontWeight: '500',
      },
      regular16: {
        fontSize: '1.6rem',
        fontWeight: '400',
      },
      bold20: {
        fontSize: '2rem',
        fontWeight: '700',
      },
      medium20: {
        fontSize: '2rem',
        fontWeight: '500',
      },
      regular20: {
        fontSize: '2rem',
        fontWeight: '400',
      },
      bold24: {
        fontSize: '2.4rem',
        fontWeight: '700',
      },
      medium24: {
        fontSize: '2.4rem',
        fontWeight: '500',
      },
      regular24: {
        fontSize: '2.4rem',
        fontWeight: '400',
      },
    },
  };
};

export type Theme = ReturnType<typeof getDesignTokens>;
