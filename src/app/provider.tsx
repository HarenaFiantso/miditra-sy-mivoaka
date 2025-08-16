import { Suspense, useState, type ReactNode } from 'react';
import { ClockLoader } from 'react-spinners';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { queryConfig } from '@/lib/react-query';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      })
  );

  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <ClockLoader size={50} />
        </div>
      }
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Suspense>
  );
};
