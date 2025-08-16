import { useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import LandingRoute from './routes/landing';
import Register from './routes/auth/register';
import { paths } from '@/config/paths';

const createAppRouter = () =>
  createBrowserRouter([
    {
      path: paths.home.path,
      element: <LandingRoute />,
    },
    {
      path: paths.auth.register.path,
      element: <Register />
    }
  ]);

export const AppRouter = () => {
  const router = useMemo(() => createAppRouter(), []);

  return <RouterProvider router={router} />;
};
