const GamesStatistic = () => {
  return (
    <div className="bg-white/20 backdrop-blur-xl border border-white/30 p-6 rounded-3xl shadow-lg hover:bg-white/25 transition-all duration-300">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-base font-medium text-slate-700">Games statistic</h3>
        <a href="#" className="text-xs font-medium text-teal-600 hover:text-teal-700">View all statistic</a>
      </div>
      
      <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/40 shadow-inner">
        {/* Custom Progress Bar */}
        <div className="h-3 w-full flex rounded-full overflow-hidden mb-6">
          <div className="h-full bg-teal-700 w-[70%] rounded-l-full"></div>
          <div className="h-full bg-slate-200 w-[15%]"></div>
          <div className="h-full bg-red-400 w-[15%] rounded-r-full"></div>
        </div>

        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">PL</p>
            <p className="text-xl font-medium text-slate-700">8</p>
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Victories</p>
            <p className="text-xl font-medium text-slate-700">6</p>
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Draws</p>
            <p className="text-xl font-medium text-slate-700">1</p>
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Lost</p>
            <p className="text-xl font-medium text-slate-700">1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesStatistic;