"use client";

import { useState, useEffect } from "react";
import { emotions } from "../data/emotions";
import { songs } from "../data/songs";
import { Song } from "../types";

export const useEmotionDetection = () => {
  const [currentEmotion, setCurrentEmotion] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [recommendedSongs, setRecommendedSongs] = useState<Song[]>([]);
  const [emotionData, setEmotionData] = useState<
    { name: string; confidence: number; color: string }[]
  >([]);
  const [showCamera, setShowCamera] = useState(false);

  // Real emotion detection using camera
  useEffect(() => {
    if (isAnalyzing) {
      const interval = setInterval(async () => {
        try {
          // Get camera frame (you'll need to implement this)
          const imageData = await captureCameraFrame();

          if (imageData) {
            // Call your backend API
            const response = await fetch("/api/detect", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ image: imageData }),
            });

            if (response.ok) {
              const emotionProbs = await response.json();

              // Convert API response to our emotion data format
              const newEmotionData = emotions.map((emotion) => ({
                ...emotion,
                confidence: emotionProbs[emotion.name] || 0,
              }));

              setEmotionData(newEmotionData);

              // Find the emotion with highest confidence
              const dominantEmotion = Object.entries(emotionProbs)
                .reduce((a, b) =>
                  emotionProbs[a[0]] > emotionProbs[b[0]] ? a : b
                )[0]
                .toLowerCase();

              setCurrentEmotion(dominantEmotion);

              // Get songs for the detected emotion
              const matchingSongs = songs.filter(
                (song) => song.emotion === dominantEmotion
              );
              const otherSongs = songs.filter(
                (song) => song.emotion !== dominantEmotion
              );
              setRecommendedSongs([
                ...matchingSongs,
                ...otherSongs.slice(0, 2),
              ]);
            }
          }
        } catch (error) {
          console.error("Emotion detection failed:", error);
          // Fallback to random for demo purposes
          const emotionNames = ["happy", "sad", "energetic", "calm"];
          const randomEmotion =
            emotionNames[Math.floor(Math.random() * emotionNames.length)];

          const newEmotionData = emotions.map((emotion) => ({
            ...emotion,
            confidence:
              emotion.name.toLowerCase() === randomEmotion ? 0.8 : 0.2,
          }));

          setEmotionData(newEmotionData);
          setCurrentEmotion(randomEmotion);

          const matchingSongs = songs.filter(
            (song) => song.emotion === randomEmotion
          );
          const otherSongs = songs.filter(
            (song) => song.emotion !== randomEmotion
          );
          setRecommendedSongs([...matchingSongs, ...otherSongs.slice(0, 2)]);
        }
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isAnalyzing]);

  // Helper function to capture camera frame
  const captureCameraFrame = async (): Promise<string | null> => {
    // This will be implemented when we add real camera functionality
    // For now, return null to use fallback
    return null;
  };

  const startAnalysis = () => {
    setShowCamera(true);
    setIsAnalyzing(true);
  };

  const stopAnalysis = () => {
    setIsAnalyzing(false);
    setShowCamera(false);
  };

  return {
    currentEmotion,
    isAnalyzing,
    recommendedSongs,
    emotionData,
    showCamera,
    startAnalysis,
    stopAnalysis,
  };
};
