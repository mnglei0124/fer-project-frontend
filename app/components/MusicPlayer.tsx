import { Pause, Play, SkipForward, SkipBack } from "lucide-react";
import { Song } from "../types";

interface MusicPlayerProps {
  currentSong: Song | null;
  isPlaying: boolean;
  onPlayPause: () => void;
}

export default function MusicPlayer({
  currentSong,
  isPlaying,
  onPlayPause,
}: MusicPlayerProps) {
  if (!currentSong) return null;

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
      <h3 className="text-xl font-semibold text-white mb-6">Now Playing</h3>
      <div className="flex items-center space-x-4 mb-6">
        <img
          src={currentSong.cover}
          alt={currentSong.album}
          className="w-16 h-16 rounded-xl object-cover shadow-lg"
        />
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-white truncate">
            {currentSong.title}
          </h4>
          <p className="text-slate-300 truncate">{currentSong.artist}</p>
          <p className="text-slate-400 text-sm">{currentSong.album}</p>
        </div>
      </div>

      {/* Player Controls */}
      <div className="flex items-center justify-center space-x-6 mb-4">
        <button className="text-slate-400 hover:text-white transition-colors">
          <SkipBack className="w-6 h-6" />
        </button>
        <button
          onClick={onPlayPause}
          className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6" />
          ) : (
            <Play className="w-6 h-6" />
          )}
        </button>
        <button className="text-slate-400 hover:text-white transition-colors">
          <SkipForward className="w-6 h-6" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-slate-400">
          <span>1:23</span>
          <span>{currentSong.duration}</span>
        </div>
        <div className="bg-slate-700 rounded-full h-1 overflow-hidden">
          <div className="w-1/3 h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
