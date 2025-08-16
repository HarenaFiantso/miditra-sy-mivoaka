import { useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import LandingRoute from './routes/landing';

const createAppRouter = () => createBrowserRouter([
  {
    path: "/",
    element: <LandingRoute />
  }
]);

export const AppRouter = () => {
  const router = useMemo(() => createAppRouter(), []);

  return <RouterProvider router={router} />;
};
