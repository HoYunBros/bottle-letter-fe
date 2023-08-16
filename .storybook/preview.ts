// .storybook/preview.js
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { darkTheme, lightTheme } from '../src/styles/theme';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles,
  }),
];
