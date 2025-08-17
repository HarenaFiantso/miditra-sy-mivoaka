import type { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main className='w-full min-h-screen bg-[#060010]'>
      <div className='text-white'>The bottom dock goes here</div>
      <div>{children}</div>
    </main>
  );
}
