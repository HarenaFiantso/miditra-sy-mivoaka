import { Link } from 'react-router';
import { SplitText } from '../shared';

export default function Hero() {
  return (
    <div className="min-h-screen overflow-hidden">
      <div className="mx-auto flex h-screen max-w-[60%] flex-col items-start justify-center">
        <h1 className="relative z-10 mb-4 max-w-[22ch] text-[6rem] leading-none font-medium tracking-[-3px] whitespace-nowrap text-white select-none [text-shadow:0_0_2px_rgba(255,255,255,0.1),0_0_4px_rgba(255,255,255,0.3),0_0_8px_rgba(255,255,255,0.4),0_0_136px_rgba(120,60,255,0.8)]">
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
        <Link
          to={'/text-animations/split-text'}
          className="relative isolate z-[15] flex cursor-pointer items-center justify-between gap-[1.6rem] rounded-full bg-gradient-to-br from-[#7c3aed] to-[rgba(24,47,255,0.6)] bg-[length:200%_200%] px-10 py-4 text-[1.1rem] font-semibold text-white shadow-[0_0_40px_rgba(124,58,237,0.4),0_0_80px_rgba(139,92,246,0.3),0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] before:absolute before:top-0 before:left-[-100%] before:z-[1] before:h-full before:w-full before:bg-gradient-to-r before:from-transparent before:to-transparent before:transition-all before:duration-600 before:content-[''] after:absolute after:inset-[-2px] after:z-[-1] after:animate-[border-dance_4s_linear_infinite] after:rounded-full after:bg-[linear-gradient(45deg,transparent,rgba(255,255,255,0.1),transparent,rgba(255,255,255,0.1),transparent)] after:bg-[length:200%_200%] after:opacity-0 after:transition-opacity after:duration-300 after:content-[''] hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_0_60px_rgba(124,58,237,0.2),0_0_120px_rgba(139,92,246,0.2),0_0_180px_rgba(109,40,217,0.2),0_12px_40px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.4),inset_0_-2px_0_rgba(0,0,0,0.3)] hover:before:left-full hover:after:opacity-100 active:-translate-y-0.5 active:scale-[1.02]"
        >
          <span>Get started</span>
        </Link>
      </div>
    </div>
  );
}
