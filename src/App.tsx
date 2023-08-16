import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import { lightTheme } from '@styles/theme';

import Router from '@routes/Router';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default App;
