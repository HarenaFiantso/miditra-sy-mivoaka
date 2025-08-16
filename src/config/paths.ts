type PathConfig<T extends (...args: any[]) => string> = {
  path: string;
  getHref: T;
};

const makePath = (base: string, sub: string = ''): PathConfig<() => string> => {
  const fullPath = [base, sub].filter(Boolean).join('/');
  return {
    path: sub || base,
    getHref: () => fullPath,
  };
};

const makePathWithRedirect = (base: string, sub: string): PathConfig<(redirectTo?: string | null) => string> => {
  const fullPath = `${base}/${sub}`;
  return {
    path: fullPath,
    getHref: (redirectTo?: string | null) =>
      `${fullPath}${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
  };
};

export const paths = {
  home: makePath('/'),

  auth: {
    register: makePathWithRedirect('/auth', 'register'),
    login: makePathWithRedirect('/auth', 'login'),
  },

  app: {
    root: makePath('/app'),
    dashboard: makePath('/app'),
    expenses: makePath('/app', 'expenses'),
    incomes: makePath('/app', 'incomes'),
    categories: makePath('/app', 'categories'),
    profile: makePath('/app', 'profile'),
  },
} as const;
