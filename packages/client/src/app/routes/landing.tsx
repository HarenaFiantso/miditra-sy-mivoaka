import { PlasmaWave, CircularText, Header, Hero } from '@/components/shared';

export default function LandingRoute() {
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-[#060010] via-[#1a0033] to-[#0a0011]">
      <Header />
      <PlasmaWave yOffset={-300} xOffset={100} rotationDeg={-30} />
      <Hero />
      <div className="absolute right-10 bottom-5">
        <CircularText text="EXPENSES*TRACKER*" onHover="speedUp" spinDuration={20} className="text-white" />
      </div>
    </section>
  );
}
