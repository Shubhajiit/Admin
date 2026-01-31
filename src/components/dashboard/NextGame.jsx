const NextGame = () => {
  return (
    <div className="bg-white/20 backdrop-blur-xl border border-white/30 p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/25">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-base font-medium text-slate-700">Next game</h3>
        <a href="#" className="text-xs font-medium text-teal-600 hover:text-teal-700">View calendar</a>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-medium text-teal-600 flex items-center gap-1">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" 
              className="h-4 w-auto" 
              alt="Serie A"
            /> 
            Serie A
          </span>
          <span className="text-xs text-slate-400">|</span>
          <span className="text-xs text-slate-500">21:00, 11 November, 2020</span>
        </div>

        <div className="flex items-center justify-between w-full px-2 sm:px-8">
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-white/40 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 flex items-center justify-center p-2">
              {/* Juventus Logo */}
              <svg viewBox="0 0 100 100" className="w-10 h-10 fill-slate-900">
                <path d="M70,10 L80,10 L80,60 Q80,90 50,90 Q20,90 20,60 L20,10 L30,10 L30,60 Q30,80 50,80 Q70,80 70,60 Z M45,10 L55,10 L55,70 L45,70 Z"/>
              </svg>
            </div>
            <span className="text-sm font-semibold text-slate-800">Juventus</span>
          </div>

          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-400 to-pink-500 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-pink-200">
            VS
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-white/40 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 flex items-center justify-center p-2">
              {/* Sassuolo Logo */}
              <div className="w-10 h-10 bg-green-900 rounded-lg flex items-center justify-center border-2 border-black">
                <div className="text-[8px] text-white font-bold leading-none text-center">US<br />Sass</div>
              </div>
            </div>
            <span className="text-sm font-semibold text-slate-800">Sassuolo</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGame;