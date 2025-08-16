import { useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';

import { paths } from '@/config/paths';

import { default as AppRoot } from './routes/app/root';
import LandingRoute from './routes/landing';
import Register from './routes/auth/register';
import Login from './routes/auth/login';
import Dashboard from './routes/app/dashboard';
import Expenses from './routes/app/expenses';
import Incomes from './routes/app/incomes';
import Categories from './routes/app/categories';
import Profile from './routes/app/profile';

const createAppRouter = () =>
  createBrowserRouter([
    {
      path: paths.home.path,
      element: <LandingRoute />,
    },
    {
      path: paths.auth.register.path,
      element: <Register />,
    },
    {
      path: paths.auth.login.path,
      element: <Login />,
    },
    {
      path: paths.app.root.path,
      element: <AppRoot />,
      children: [
        {
          path: paths.app.dashboard.path,
          element: <Dashboard />,
        },
        {
          path: paths.app.expenses.path,
          element: <Expenses />,
        },
        {
          path: paths.app.incomes.path,
          element: <Incomes />,
        },
        {
          path: paths.app.categories.path,
          element: <Categories />,
        },
        {
          path: paths.app.profile.path,
          element: <Profile />,
        },
      ],
    },
  ]);

export const AppRouter = () => {
  const router = useMemo(() => createAppRouter(), []);

  return <RouterProvider router={router} />;
};
