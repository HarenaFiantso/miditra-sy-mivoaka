import { Outlet } from 'react-router';
import { SplitText } from '../shared';

function RightPanelDescription() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center p-8 text-white xl:p-12">
      <div className="space-y-8 text-center">
        <div className="inline-flex items-center rounded-full border border-white/20 bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
          <span className="mr-2 h-2 w-2 rounded-full bg-green-400" />
          Active platform
        </div>
        <div className="space-y-6">
          <h2 className="relative z-10 mb-4 max-w-[22ch] text-[5rem] leading-none font-medium tracking-[-3px] whitespace-nowrap text-white select-none [text-shadow:0_0_2px_rgba(255,255,255,0.1),0_0_4px_rgba(255,255,255,0.3),0_0_8px_rgba(255,255,255,0.4),0_0_136px_rgba(120,60,255,0.8)]">
            <SplitText
              text="Miditra & Mivoaka"
              className="hero-split"
              splitType="chars"
              delay={30}
              duration={2}
              ease="elastic.out(0.5, 0.3)"
            />
          </h2>
          <p className="text-lg leading-relaxed opacity-90">
            A web application that enables users to track personal expenses and income, upload receipts, set up
            recurring expenses with a defined duration, and receive alerts when they exceed their monthly budget.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AuthLayout() {
  return (
    <main className="flex min-h-screen bg-[#060010]">
      <Outlet />
      <article className="relative hidden flex-1 lg:flex">
        <RightPanelDescription />
      </article>
    </main>
  );
}
