import { Play } from "lucide-react";
import { Song } from "../types";

interface SongListProps {
  songs: Song[];
  currentEmotion: string;
  onSelectSong: (song: Song) => void;
}

export default function SongList({
  songs,
  currentEmotion,
  onSelectSong,
}: SongListProps) {
  if (songs.length === 0) return null;

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
      <h3 className="text-xl font-semibold text-white mb-6">
        Recommended for{" "}
        {currentEmotion && (
          <span className="capitalize text-purple-400">{currentEmotion}</span>
        )}{" "}
        mood
      </h3>
      <div className="space-y-4">
        {songs.map((song) => (
          <div
            key={song.id}
            onClick={() => onSelectSong(song)}
            className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/10 cursor-pointer transition-all duration-300 group"
          >
            <img
              src={song.cover}
              alt={song.album}
              className="w-12 h-12 rounded-lg object-cover shadow-md group-hover:shadow-lg transition-shadow"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-white group-hover:text-purple-300 transition-colors truncate">
                {song.title}
              </h4>
              <p className="text-slate-300 text-sm truncate">{song.artist}</p>
            </div>
            <div className="text-slate-400 text-sm">{song.duration}</div>
            <Play className="w-5 h-5 text-slate-400 group-hover:text-purple-400 transition-colors opacity-0 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </div>
  );
}
