import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { GlobalStyles } from '@styles/GlobalStyles.style';
import { lightTheme } from '@styles/theme';

import Router from '@routes/router';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={lightTheme}>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <Router />
          </RecoilRoot>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
