import type { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <div></div>
      <div>{children}</div>
    </main>
  );
}
