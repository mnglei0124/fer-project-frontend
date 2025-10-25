import { Camera } from "lucide-react";

interface CameraSectionProps {
  showCamera: boolean;
  isAnalyzing: boolean;
  onStartAnalysis: () => void;
  onStopAnalysis: () => void;
}

export default function CameraSection({
  showCamera,
  isAnalyzing,
  onStartAnalysis,
  onStopAnalysis,
}: CameraSectionProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
      <h2 className="text-2xl font-semibold text-white mb-6">
        Emotion Detection
      </h2>

      {!showCamera ? (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Camera className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Ready to analyze your emotions?
          </h3>
          <p className="text-slate-300 mb-8 max-w-md mx-auto">
            We'll use your camera to detect facial expressions and recommend
            music that matches your mood.
          </p>
          <button
            onClick={onStartAnalysis}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start Analysis
          </button>
          <p className="text-xs text-slate-400 mt-4">
            🔒 Your privacy is protected. Images are processed locally.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Simulated Camera View */}
          <div className="aspect-video bg-slate-800 rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 border-4 border-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-24 h-24 bg-purple-400/20 rounded-full animate-pulse"></div>
                </div>
                <p className="text-slate-300">
                  Analyzing facial expressions...
                </p>
              </div>
            </div>
            {isAnalyzing && (
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>Live</span>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={onStopAnalysis}
              className="bg-slate-700 text-white px-6 py-3 rounded-full hover:bg-slate-600 transition-colors"
            >
              Stop Analysis
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
