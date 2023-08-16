import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@styles/GlobalStyles';
import { lightTheme } from '@styles/theme';

import Router from '@routes/Router';

const App = () => {
  // themepro
  
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <RecoilRoot>
          <Router />
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
};

export default App;
