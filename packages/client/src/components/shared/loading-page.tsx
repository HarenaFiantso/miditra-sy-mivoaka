import { MoonLoader } from 'react-spinners';

export default function LoadingPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-5 bg-[#060010]">
      <MoonLoader color="white" />
      <h1 className="text-xl text-white">We are loading the page, please wait...</h1>
    </div>
  );
}
