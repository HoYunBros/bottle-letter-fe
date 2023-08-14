import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { MantineProvider } from '@mantine/core';

import router from '@routes/router';

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </MantineProvider>
  );
};

export default App;
