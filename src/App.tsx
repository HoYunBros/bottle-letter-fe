import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@styles/GlobalStyles.style';
import { lightTheme } from '@styles/theme';

import Router from '@routes/Router';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={lightTheme}>
        <RecoilRoot>
          <Router />
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
};

export default App;
