import { Music } from "lucide-react";

export default function Header() {
  return (
    <header className="relative z-10 px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <Music className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            MoodTune
          </h1>
        </div>
        <p className="text-slate-400 text-lg max-w-2xl">
          Discover music that matches your emotions through advanced facial
          expression analysis
        </p>
      </div>
    </header>
  );
}
