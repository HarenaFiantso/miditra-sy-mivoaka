import { PlasmaWave, CircularText, Header, Hero } from '@/components/shared';

export default function LandingRoute() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#060010]">
      <Header />
      <PlasmaWave yOffset={-300} xOffset={100} rotationDeg={-30} />
      <Hero />
      <div className="absolute right-10 bottom-5">
        <CircularText text="EXPENSES*TRACKER*" onHover="speedUp" spinDuration={20} className="text-white" />
      </div>
    </section>
  );
}
