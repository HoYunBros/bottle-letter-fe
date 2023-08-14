import { createBrowserRouter, createRoutesFromElements, Routes, Route } from 'react-router-dom';

import MainPage from '@pages/MainPage';
import SignUpPage from '@pages/SignUpPage';
import SignInPage from '@pages/SignInPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="signin" element={<SignInPage />} />
    </Routes>
  )
);

export default router;
