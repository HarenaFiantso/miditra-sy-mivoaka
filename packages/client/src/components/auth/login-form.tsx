import { useState, type FormEvent } from 'react';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { paths } from '@/config/paths';
import { useAuth } from '@/hooks/use-auth';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate(paths.app.dashboard.path);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
        setError(error.message || 'Login failed');
      }
    }
  };

  return (
    <div className="z-100 mx-auto w-full max-w-md">
      <div className="backdrop-blur-glass shadow-card rounded-2xl border border-white/10 p-8">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">Connexion</h1>
          <p className="text-md text-gray-300">Connect with your account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="animate-slide-in space-y-2">
            <div className="relative">
              <Mail className="text-muted-foreground absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform" />
              <Input
                type="email"
                placeholder="your.email@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-full border border-white/10 p-8 pl-10 text-white focus:border-none"
                required
              />
            </div>
          </div>
          <div className="animate-slide-in space-y-2" style={{ animationDelay: '0.1s' }}>
            <div className="relative">
              <Lock className="text-muted-foreground absolute top-1/2 left-3 mr-5 h-5 w-5 -translate-y-1/2 transform" />
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-full border border-white/10 p-8 pr-10 pl-10 text-white focus:border-none"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-1/2 right-3 -translate-y-1/2 transform text-white transition-colors hover:text-white/90"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>
          <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <Button
              type="submit"
              variant="default"
              size="lg"
              className="cta-button w-full rounded-full p-8 text-lg font-semibold"
            >
              Login
            </Button>
          </div>
          {error && <p className="text-center text-red-500">{error}</p>}
        </form>
        <div className="relative z-10 mt-6 flex justify-center" style={{ animationDelay: '0.3s' }}>
          <Link
            to="/auth/register"
            className="cursor-pointer text-sm text-white underline-offset-4 transition-all hover:underline"
          >
            Don't have an account?
          </Link>
        </div>
      </div>
    </div>
  );
}
