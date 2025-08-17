import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react';
import { Link } from 'react-router';

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Register attempt:', { username, email, password, confirmPassword });
  };

  return (
    <div className="z-100 mx-auto w-full max-w-md">
      <div className="backdrop-blur-glass shadow-card rounded-2xl border border-white/10 p-8">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">Sign Up</h1>
          <p className="text-md text-gray-300">Create a new account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="animate-slide-in space-y-2">
            <div className="relative">
              <User className="text-muted-foreground absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform" />
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="rounded-full border border-white/10 p-8 pl-10 text-white focus:border-none"
                required
              />
            </div>
          </div>
          <div className="animate-slide-in space-y-2" style={{ animationDelay: '0.05s' }}>
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
          <div className="animate-slide-in space-y-2" style={{ animationDelay: '0.15s' }}>
            <div className="relative">
              <Lock className="text-muted-foreground absolute top-1/2 left-3 mr-5 h-5 w-5 -translate-y-1/2 transform" />
              <Input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="rounded-full border border-white/10 p-8 pr-10 pl-10 text-white focus:border-none"
                required
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute top-1/2 right-3 -translate-y-1/2 transform text-white transition-colors hover:text-white/90"
              >
                {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
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
              Register
            </Button>
          </div>
        </form>
        <div className="relative z-10 mt-6 flex justify-center" style={{ animationDelay: '0.25s' }}>
          <Link
            to="/auth/login"
            className="cursor-pointer text-sm text-white underline-offset-4 transition-all hover:underline"
          >
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  );
}
