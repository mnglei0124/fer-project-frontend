import { Emotion } from "../types";

export const emotions: Omit<Emotion, "icon">[] = [
  {
    name: "Surprise",
    confidence: 0,
    color: "text-purple-400",
  },
  {
    name: "Fear",
    confidence: 0,
    color: "text-red-600",
  },
  {
    name: "Disgust",
    confidence: 0,
    color: "text-green-600",
  },
  {
    name: "Happiness",
    confidence: 0,
    color: "text-yellow-400",
  },
  {
    name: "Sadness",
    confidence: 0,
    color: "text-blue-400",
  },
  {
    name: "Anger",
    confidence: 0,
    color: "text-red-500",
  },
  {
    name: "Neutral",
    confidence: 0,
    color: "text-gray-400",
  },
];
