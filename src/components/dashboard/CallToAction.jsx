const CallToAction = () => {
  return (
    <div className="relative bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 text-slate-800 overflow-hidden shadow-lg hover:bg-white/25 transition-all duration-300">
      {/* Abstract Shapes */}
      <div className="absolute right-[10%] bottom-[-20px] w-24 h-24 bg-blue-500 rounded-xl transform rotate-12 blur-[1px] shadow-2xl opacity-80"></div>
      <div className="absolute right-[20%] top-[10px] w-16 h-16 bg-lime-400 rounded-2xl transform -rotate-12 blur-[1px] shadow-2xl z-10"></div>
      <div className="absolute right-[5%] top-[40%] w-12 h-12 bg-white rounded-lg transform rotate-45 blur-[1px] shadow-xl z-20"></div>
      <div className="absolute right-[25%] bottom-[20px] w-8 h-8 bg-purple-500 rounded-full blur-[1px] z-0"></div>
      <div className="absolute right-[0] bottom-[0] w-32 h-16 bg-blue-700/50 rounded-tl-3xl z-10 backdrop-blur-sm"></div>

      <div className="relative z-30 max-w-md">
        <p className="text-teal-600 text-xs font-medium uppercase tracking-wider mb-2">Don't forget</p>
        <h3 className="text-2xl font-semibold tracking-tight mb-6 leading-tight text-slate-800">
          Setup training<br />for next week
        </h3>
        <button className="bg-white/40 backdrop-blur-sm border border-white/50 text-teal-700 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-white/60 transition-all duration-300 shadow-lg">
          Go to training center
        </button>
      </div>
    </div>
  );
};

export default CallToAction;