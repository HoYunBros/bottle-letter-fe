import { RecoilRoot } from 'recoil';
import { MantineProvider } from '@mantine/core';

import Router from '@routes/Router';

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </MantineProvider>
  );
};

export default App;
