import { Header, Hero } from '@/components/common';
import { PlasmaWave, CircularText } from '@/components/shared';

export default function LandingRoute() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#060010]">
      <Header />
      <PlasmaWave yOffset={-300} xOffset={100} rotationDeg={-30} />
      <Hero />
      <div className='absolute bottom-5 right-10'>
        <CircularText text="EXPENSES*TRACKER*" onHover="speedUp" spinDuration={20} className="text-white" />
      </div>
    </section>
  );
}
