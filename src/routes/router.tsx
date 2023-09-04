import { createBrowserRouter } from 'react-router-dom';

import MainPage from '@pages/MainPage';
import SignUpPage from '@pages/SignUpPage';
import SignInPage from '@pages/SignInPage';

export const ROUTE_PATH = Object.freeze({
  MAIN: '/',
  SIGN_UP: '/signup',
  SIGN_IN: '/signin',
  ERROR: '/error',
});

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/signin',
    element: <SignInPage />,
  },
]);
