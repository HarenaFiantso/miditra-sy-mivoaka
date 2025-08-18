import { useMemo, type ComponentType } from 'react';
import { createBrowserRouter, RouterProvider, type ActionFunction, type LoaderFunction } from 'react-router';
import { useQueryClient, type QueryClient } from '@tanstack/react-query';

import { paths } from '@/config/paths';

import { default as AppRoot, ErrorBoundary as AppErrorBoundary } from './routes/app/root';
import { AuthLayout } from '@/components/layouts';
import { ProtectedRoute } from '@/components/auth';

type ModuleWithClient<TProps = unknown> = {
  default: ComponentType<TProps>;
  clientLoader?: (queryClient: QueryClient) => LoaderFunction;
  clientAction?: (queryClient: QueryClient) => ActionFunction;
  [key: string]: unknown;
};

type ConvertedRoute<TProps = unknown> = {
  Component: ComponentType<TProps>;
  loader?: LoaderFunction;
  action?: ActionFunction;
} & Record<string, unknown>;

const convert =
  (queryClient: QueryClient) =>
  <TProps = unknown,>(m: ModuleWithClient<TProps>): ConvertedRoute<TProps> => {
    const { clientLoader, clientAction, default: Component, ...rest } = m;
    return {
      ...rest,
      loader: clientLoader?.(queryClient),
      action: clientAction?.(queryClient),
      Component,
    };
  };

const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: paths.home.path,
      lazy: () => import('./routes/landing').then(convert(queryClient)),
    },
    {
      path: paths.auth.root.path,
      element: <AuthLayout />,
      ErrorBoundary: AppErrorBoundary,
      children: [
        {
          path: paths.auth.register.path,
          lazy: () => import('./routes/auth/register').then(convert(queryClient)),
        },
        {
          path: paths.auth.login.path,
          lazy: () => import('./routes/auth/login').then(convert(queryClient)),
        },
      ],
    },
    {
      path: paths.app.root.path,
      element: (
        <ProtectedRoute>
          <AppRoot />
        </ProtectedRoute>
      ),
      children: [
        {
          path: paths.app.dashboard.path,
          lazy: () => import('./routes/app/dashboard').then(convert(queryClient)),
        },
        {
          path: paths.app.expenses.path,
          lazy: () => import('./routes/app/expenses').then(convert(queryClient)),
        },
        {
          path: paths.app.incomes.path,
          lazy: () => import('./routes/app/incomes').then(convert(queryClient)),
        },
        {
          path: paths.app.categories.path,
          lazy: () => import('./routes/app/categories').then(convert(queryClient)),
        },
        {
          path: paths.app.profile.path,
          lazy: () => import('./routes/app/profile').then(convert(queryClient)),
        },
      ],
    },
    {
      path: '*',
      lazy: () => import('./routes/not-found').then(convert(queryClient)),
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();

  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
};
