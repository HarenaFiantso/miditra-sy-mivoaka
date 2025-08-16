import { Suspense, type ReactNode } from 'react';
import { ClockLoader } from 'react-spinners';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <ClockLoader size={50} />
        </div>
      }
    >
      {children}
    </Suspense>
  );
};
