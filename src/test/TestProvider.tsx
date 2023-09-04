import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@styles/GlobalStyles.style';
import { lightTheme } from '@styles/theme';

interface TestProviderProps {
  children: React.ReactNode;
}

const TestProvider = ({ children }: TestProviderProps) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={lightTheme}>
        <MemoryRouter>
          <Routes>
            <Route path={'/'} element={children} />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>
    </>
  );
};

export default TestProvider;
