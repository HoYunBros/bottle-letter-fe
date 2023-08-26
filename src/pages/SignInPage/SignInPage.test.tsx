import { render, screen } from '@testing-library/react';
import SignInPage from '.';
import TestProvider from 'src/test/TestProvider';

describe('<SignInPage />', () => {
  it('should render without errors', () => {
    render(
      <TestProvider>
        <SignInPage />
      </TestProvider>
    );

    expect(screen.getByText('로그인')).toBeInTheDocument();
  });
});
