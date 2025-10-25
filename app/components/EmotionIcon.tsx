import {
  Smile,
  Frown,
  Zap,
  Heart,
  AlertTriangle,
  Meh,
  Angry,
} from "lucide-react";

interface EmotionIconProps {
  emotionName: string;
}

export default function EmotionIcon({ emotionName }: EmotionIconProps) {
  const iconMap = {
    Surprise: <AlertTriangle className="w-5 h-5" />,
    Fear: <AlertTriangle className="w-5 h-5" />,
    Disgust: <Frown className="w-5 h-5" />,
    Happiness: <Smile className="w-5 h-5" />,
    Sadness: <Frown className="w-5 h-5" />,
    Anger: <Angry className="w-5 h-5" />,
    Neutral: <Meh className="w-5 h-5" />,
  };

  return iconMap[emotionName as keyof typeof iconMap] || null;
}
