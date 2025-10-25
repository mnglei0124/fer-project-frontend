export default function GettingStarted() {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
      <h3 className="text-xl font-semibold text-white mb-4">How It Works</h3>
      <div className="space-y-4 text-slate-300">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-purple-400 text-sm font-semibold">1</span>
          </div>
          <div>
            <h4 className="font-medium text-white mb-1">Camera Analysis</h4>
            <p className="text-sm">
              We analyze your facial expressions using advanced AI technology
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-purple-400 text-sm font-semibold">2</span>
          </div>
          <div>
            <h4 className="font-medium text-white mb-1">Emotion Detection</h4>
            <p className="text-sm">
              Identify emotions like happiness, sadness, energy, and calm
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-purple-400 text-sm font-semibold">3</span>
          </div>
          <div>
            <h4 className="font-medium text-white mb-1">
              Music Recommendations
            </h4>
            <p className="text-sm">
              Get personalized song suggestions that match your current mood
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
