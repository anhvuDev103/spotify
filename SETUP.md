# Initial project

- npm create vite@latest
- npm i -D eslint-config-prettier eslint-plugin-prettier prettier @types/node lint-staged husky @commitlint/config-conventional@19.1.0 @commitlint/cli@19.2.1 eslint-plugin-simple-import-sort @types/styled-components @swc/plugin-styled-components
- npm i styled-components

# .eslintrc.cjs

```cjs
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'simple-import-sort', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        semi: true,
        trailingComma: 'none',
        tabWidth: 2,
        endOfLine: 'auto',
        useTabs: false,
        singleQuote: true,
        printWidth: 80,
        jsxSingleQuote: true
      }
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error'
  }
};
```

# .prettierrc

```json
{
  "arrowParens": "always",
  "semi": true,
  "trailingComma": "none",
  "tabWidth": 2,
  "endOfLine": "auto",
  "useTabs": false,
  "singleQuote": true,
  "printWidth": 80,
  "jsxSingleQuote": true
}
```

# package.json

Add script:

```json
{
  "lint": "eslint src/**/*.{ts,tsx} --report-unused-disable-directives --max-warnings 0",
  "lint:fix": "eslint --fix src/**/*.{ts,tsx}",
  "prettier": "prettier --check ./src",
  "prettier:fix": "prettier --write ./src"
}
```

Add lint-staged:

```json
"lint-staged":
{
    "src/**/*.{ts,tsx,css,scss}": ["npm run prettier:fix", "npm run lint:fix"],
}
```

Run:
`npx husky-init`
add hooks into .husky/pre-commit: `npx lint-staged`
`echo "export default {extends: ['@commitlint/config-conventional']};" > commitlint.config.js`
`npx husky add .husky/commit-msg 'npx --no -- commitlint --edit ${1}'`

## IF ERROR: remove package-lock.json -> npm i -> run again

# vite.config.ts

```ts
import react from '@vitejs/plugin-react-swc';
import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';

function getAlias() {
  const rootProject = process.cwd();

  const entriesAlias = fs
    .readdirSync(path.resolve(rootProject, 'src/'))
    .filter(isFolder)
    .map((folderName) => {
      const alias = '@' + folderName;
      const realPath = path.resolve(rootProject, 'src/' + folderName);
      return [alias, realPath];
    });

  return Object.fromEntries(entriesAlias);

  function isFolder(dirname: string): boolean {
    return dirname.indexOf('.') === -1;
  }
}

const foldersName = getAlias();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      plugins: [
        [
          '@swc/plugin-styled-components',
          {
            displayName: true
          }
        ]
      ]
    })
  ],
  resolve: {
    alias: foldersName
  }
});
```

# tsconfig.json

```ts
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": "./src",
    "paths": {
      "@*": ["./*"]
    }
  },
  "files": ["src/theme.d.ts"],
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

# src/theme.d.ts

```ts
import { Theme } from '@styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
```

# src/styles/theme.ts

```ts
import { Interpolation } from 'styled-components';

type Mode = 'dark' | 'light';

export type InterpolationMapped<K extends string | number | symbol> = {
  [key in K]: Interpolation<object>;
};

export const getDesignTokens = (mode: Mode) => {
  const getColor = (lightColor: string, darkColor: string) =>
    mode === 'light' ? lightColor : darkColor;

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
        muted: '#00000040'
      },
      success: {
        main: getColor('#4edb95', ''),
        hover: getColor('#4edb9599', ''),
        contrast: getColor('#000000', ''),
        '60': getColor('#4edb9599', '')
      },
      warning: {
        main: getColor('#ffca02', ''),
        hover: getColor('#ffca0299', ''),
        contrast: getColor('#000000', '')
      },
      danger: {
        main: getColor('#ff5a58', ''),
        hover: getColor('#ff5a5899', ''),
        contrast: getColor('#ffffff', '')
      },
      disabled: {
        main: getColor('#e5e5e5', ''),
        hover: getColor('#e5e5e599', ''),
        contrast: getColor('#8b8b8b', '')
      },
      background: {
        default: getColor('#8c87c3', ''),
        paper: getColor('#ffffff', '')
      },
      border: {
        main: getColor('#000000', '')
      }
    },
    typography: {
      bold12: {
        fontSize: '1.2rem',
        fontWeight: '700'
      },
      semi12: {
        fontSize: '1.2rem',
        fontWeight: '600'
      },
      medium12: {
        fontSize: '1.2rem',
        fontWeight: '500'
      },
      light12: {
        fontSize: '1.2rem',
        fontWeight: '400'
      },
      bold14: {
        fontSize: '1.4rem',
        fontWeight: '700'
      },
      semi14: {
        fontSize: '1.4rem',
        fontWeight: '600'
      },
      medium14: {
        fontSize: '1.4rem',
        fontWeight: '500'
      },
      light14: {
        fontSize: '1.4rem',
        fontWeight: '400'
      },
      bold16: {
        fontSize: '1.6rem',
        fontWeight: '700'
      },
      semi16: {
        fontSize: '1.6rem',
        fontWeight: '600'
      },
      medium16: {
        fontSize: '1.6rem',
        fontWeight: '500'
      },
      light16: {
        fontSize: '1.6rem',
        fontWeight: '400'
      },
      bold20: {
        fontSize: '2rem',
        fontWeight: '700'
      },
      semi20: {
        fontSize: '2rem',
        fontWeight: '600'
      },
      medium20: {
        fontSize: '2rem',
        fontWeight: '500'
      },
      light20: {
        fontSize: '2rem',
        fontWeight: '400'
      },
      bold24: {
        fontSize: '2.4rem',
        fontWeight: '700'
      },
      semi24: {
        fontSize: '2.4rem',
        fontWeight: '600'
      },
      medium24: {
        fontSize: '2.4rem',
        fontWeight: '500'
      },
      light24: {
        fontSize: '2.4rem',
        fontWeight: '400'
      }
    }
  };
};

export type Theme = ReturnType<typeof getDesignTokens>;
```

# Last step

```txt
Wrap App by
<ThemeProvider theme={getDesignTokens('light')}>
Add src/theme.d.ts
```
