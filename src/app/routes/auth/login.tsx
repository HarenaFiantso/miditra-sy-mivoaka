import { LoginForm } from '@/components/auth';

export default function Login() {
  return (
    <section className="flex w-full flex-1 items-center justify-center p-6">
      <div className="max-w-xl overflow-hidden">
        <LoginForm />
      </div>
    </section>
  );
}
