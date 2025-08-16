import { Hero } from '@/components/common';
import { PlasmaWave } from '@/components/shared';

export default function LandingRoute() {
  return (
    <section className="bg-[#060010] relative h-screen overflow-hidden">
      <PlasmaWave yOffset={-300} xOffset={100} rotationDeg={-30} />
      <Hero />
    </section>
  );
}
