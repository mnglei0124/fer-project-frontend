"use client";

import Header from "../components/Header";
import CameraSection from "../components/CameraSection";
import EmotionResults from "../components/EmotionResults";
import MusicPlayer from "../components/MusicPlayer";
import SongList from "../components/SongList";
import GettingStarted from "../components/GettingStarted";
import { useEmotionDetection } from "../hooks/useEmotionDetection";
import { useMusicPlayer } from "../hooks/useMusicPlayer";

export default function MoodTunePage() {
  const {
    currentEmotion,
    isAnalyzing,
    recommendedSongs,
    emotionData,
    showCamera,
    startAnalysis,
    stopAnalysis,
  } = useEmotionDetection();

  const { currentSong, isPlaying, playPause, selectSong } = useMusicPlayer();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />

      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Camera and Emotion Detection */}
          <div className="space-y-6">
            <CameraSection
              showCamera={showCamera}
              isAnalyzing={isAnalyzing}
              onStartAnalysis={startAnalysis}
              onStopAnalysis={stopAnalysis}
            />

            <EmotionResults
              emotionData={emotionData}
              currentEmotion={currentEmotion}
              isAnalyzing={isAnalyzing}
            />
          </div>

          {/* Right Column - Music Recommendations */}
          <div className="space-y-6">
            <MusicPlayer
              currentSong={currentSong}
              isPlaying={isPlaying}
              onPlayPause={playPause}
            />

            <SongList
              songs={recommendedSongs}
              currentEmotion={currentEmotion}
              onSelectSong={selectSong}
            />

            {!isAnalyzing && recommendedSongs.length === 0 && (
              <GettingStarted />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
