import { RecoilRoot } from 'recoil';
import { MantineProvider } from '@mantine/core';

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RecoilRoot>
        <div>
          <h2>Let's get started!</h2>
        </div>
      </RecoilRoot>
    </MantineProvider>
  );
};

export default App;
