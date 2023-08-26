import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from '@pages/MainPage';
import SignUpPage from '@pages/SignUpPage';
import SignInPage from '@pages/SignInPage';

export const ROUTE_PATH = Object.freeze({
  MAIN: '/',
  SIGN_UP: '/signup',
  SIGN_IN: '/signin',
  ERROR: '/error',
});

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_PATH.MAIN} element={<MainPage />} />
        <Route path={ROUTE_PATH.SIGN_UP} element={<SignUpPage />} />
        <Route path={ROUTE_PATH.SIGN_IN} element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
