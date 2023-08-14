import { RecoilRoot } from 'recoil';
import { MantineProvider } from '@mantine/core';

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RecoilRoot>
        <RouterProvider router={router} />;
      </RecoilRoot>
    </MantineProvider>
  );

};

export default App;
