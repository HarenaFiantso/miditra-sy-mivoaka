import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="backdrop-blur-glass shadow-card rounded-2xl border border-white/10 p-8">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">Connexion</h1>
          <p className="text-md text-gray-300">Connect with your account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="animate-slide-in space-y-2">
            <div className="relative space-x-1">
              <Mail className="text-muted-foreground absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform" />
              <Input
                type="email"
                placeholder="votre.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-full border border-white/10 p-8 text-white focus:border-none"
                required
              />
            </div>
          </div>
          <div className="animate-slide-in space-y-2" style={{ animationDelay: '0.1s' }}>
            <div className="relative">
              <Lock className="text-muted-foreground absolute top-1/2 left-3 mr-5 h-5 w-5 -translate-y-1/2 transform" />
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-full border border-white/10 p-8 text-white focus:border-none"
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
        </form>
        <div className="animate-slide-in mt-6 text-center" style={{ animationDelay: '0.3s' }}>
          <button className="cursor-pointer text-sm text-white underline-offset-4 transition-all hover:underline">
            Don't have an account
          </button>
        </div>
      </div>
    </div>
  );
}
