import { LoginForm } from '@/components/auth';
import { PlasmaWave } from '@/components/shared';

export default function Login() {
  return (
    <section className="flex w-full flex-1 items-center justify-center p-6">
      <PlasmaWave yOffset={-300} xOffset={100} rotationDeg={-30} />
      <PlasmaWave yOffset={300} xOffset={100} rotationDeg={30} />
      <div className="max-w-xl overflow-hidden">
        <LoginForm />
      </div>
    </section>
  );
}
