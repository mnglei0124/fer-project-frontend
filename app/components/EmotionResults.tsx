import EmotionIcon from "./EmotionIcon";

interface EmotionData {
  name: string;
  confidence: number;
  color: string;
}

interface EmotionResultsProps {
  emotionData: EmotionData[];
  currentEmotion: string;
  isAnalyzing: boolean;
}

export default function EmotionResults({
  emotionData,
  currentEmotion,
  isAnalyzing,
}: EmotionResultsProps) {
  if (!isAnalyzing) return null;

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
      <h3 className="text-xl font-semibold text-white mb-6">
        Detected Emotions
      </h3>
      {currentEmotion && (
        <p className="text-white text-lg mb-4">
          Current Mood:{" "}
          <span className="font-bold capitalize">{currentEmotion}</span>
        </p>
      )}
      <div className="space-y-4">
        {emotionData.map((emotion) => (
          <div key={emotion.name} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={emotion.color}>
                <EmotionIcon emotionName={emotion.name} />
              </div>
              <span className="text-white font-medium">{emotion.name}</span>
            </div>
            <div className="flex items-center space-x-3 flex-1 mx-4">
              <div className="flex-1 bg-slate-700 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full transition-all duration-1000 ${
                    emotion.name.toLowerCase() === currentEmotion
                      ? "bg-gradient-to-r from-purple-400 to-pink-400"
                      : "bg-slate-600"
                  }`}
                  style={{ width: `${emotion.confidence * 100}%` }}
                ></div>
              </div>
              <span className="text-slate-300 text-sm font-mono min-w-[3rem]">
                {Math.round(emotion.confidence * 100)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
