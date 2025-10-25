"use client";

import { useState } from "react";
import { Song } from "../types";

export const useMusicPlayer = () => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  const selectSong = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  return {
    currentSong,
    isPlaying,
    playPause,
    selectSong,
  };
};
