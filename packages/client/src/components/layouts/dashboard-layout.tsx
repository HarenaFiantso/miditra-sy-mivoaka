import type { ReactNode } from 'react';
import { CreditCard, FolderOpen, LayoutDashboard, TrendingUp, User } from 'lucide-react';

import { FloatingDock } from '../shared';

const links = [
  {
    title: 'Dashboard',
    icon: <LayoutDashboard className="h-full w-full text-white" />,
    href: '/app',
  },

  {
    title: 'Expenses',
    icon: <CreditCard className="h-full w-full text-white" />,
    href: '/app/expenses',
  },
  {
    title: 'Incomes',
    icon: <TrendingUp className="h-full w-full text-white" />,
    href: '/app/incomes',
  },
  {
    title: 'Categories',
    icon: <FolderOpen className="h-full w-full text-white" />,
    href: '/app/categories',
  },

  {
    title: 'Profile',
    icon: <User className="h-full w-full text-white" />,
    href: '/app/profile',
  },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative flex h-screen w-full flex-col items-center justify-center gap-5 bg-[#060010]">
      {children}
      <FloatingDock items={links} />
    </main>
  );
}
