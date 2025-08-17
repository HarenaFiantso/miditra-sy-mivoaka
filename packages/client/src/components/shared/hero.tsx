import { Link } from 'react-router';
import { SplitText } from '../shared';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen overflow-hidden">
      <div className="mx-auto flex h-screen max-w-[60%] flex-col items-start justify-center">
        <h1 className="relative z-10 mb-4 max-w-[22ch] text-[5rem] leading-none font-medium tracking-[-3px] whitespace-nowrap text-white select-none [text-shadow:0_0_2px_rgba(255,255,255,0.1),0_0_4px_rgba(255,255,255,0.3),0_0_8px_rgba(255,255,255,0.4),0_0_136px_rgba(120,60,255,0.8)]">
          <SplitText
            text="Welcome to"
            className="hero-split"
            splitType="chars"
            delay={30}
            duration={2}
            ease="elastic.out(0.5, 0.3)"
          />
          <br />
          <SplitText
            text="Miditra & Mivoaka"
            className="hero-split"
            splitType="chars"
            delay={30}
            duration={2}
            ease="elastic.out(0.5, 0.3)"
          />
        </h1>
        <Link to={'/auth/login'} className="cta-button">
          <span>Get started</span>
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
}
