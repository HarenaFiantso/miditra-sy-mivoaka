import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router';

import { paths } from '@/config/paths';
import { useAuth } from '@/hooks/use-auth';

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to={paths.auth.login.getHref(location.pathname)} replace />;
  }

  return children;
}
