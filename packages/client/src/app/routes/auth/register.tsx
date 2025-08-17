import { RegisterForm } from '@/components/auth';
import { PlasmaWave } from '@/components/shared';

export default function Register() {
  return (
    <section className="flex w-full flex-1 items-center justify-center p-6">
      <PlasmaWave yOffset={-250} xOffset={-200} rotationDeg={-180} />
      <PlasmaWave yOffset={250} xOffset={200} rotationDeg={30} />
      <div className="max-w-xl overflow-hidden">
        <RegisterForm />
      </div>
    </section>
  );
}
