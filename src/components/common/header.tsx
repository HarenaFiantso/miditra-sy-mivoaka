import { Star } from 'lucide-react';
import { Link } from 'react-router';

export default function Header() {
  return (
    <header className="fixed top-0 left-1/2 z-[100] mx-auto flex h-[160px] w-screen -translate-x-1/2 items-center justify-between bg-gradient-to-b from-[#060010] to-transparent px-16">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between">
        <Link to="/" className="text-2xl font-semibold text-white">
          M&M
        </Link>
        <div className="flex items-center gap-6">
          <button
            className="cta-button gap-2"
            onClick={() => window.open('https://github.com/HarenaFiantso/mivoaka-sy-miditra', '_blank')}
          >
            Star On GitHub
            <Star size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
