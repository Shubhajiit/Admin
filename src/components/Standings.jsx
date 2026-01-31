const Standings = () => {
  const teams = [
    {
      position: 1,
      name: 'Juventus',
      logo: (
        <svg viewBox="0 0 100 100" className="w-3 h-3 fill-slate-900">
          <path d="M70,10 L80,10 L80,60 Q80,90 50,90 Q20,90 20,60 L20,10 L30,10 L30,60 Q30,80 50,80 Q70,80 70,60 Z M45,10 L55,10 L55,70 L45,70 Z"/>
        </svg>
      ),
      mp: 8, w: 6, d: 1, l: 1, g: '13:5', pts: 19
    },
    {
      position: 2,
      name: 'Atalanta',
      logo: <div className="text-[8px] font-bold text-blue-800">A</div>,
      mp: 8, w: 5, d: 1, l: 3, g: '10:2', pts: 16
    },
    {
      position: 3,
      name: 'Inter',
      logo: <div className="text-[8px] font-bold text-yellow-600">I</div>,
      mp: 8, w: 5, d: 0, l: 3, g: '10:3', pts: 15
    },
    {
      position: 4,
      name: 'Napoli',
      logo: <div className="text-[8px] font-bold text-blue-400">N</div>,
      mp: 8, w: 4, d: 1, l: 3, g: '14:6', pts: 13
    },
    {
      position: 5,
      name: 'Milan',
      logo: <div className="text-[8px] font-bold text-red-600">M</div>,
      mp: 8, w: 4, d: 1, l: 3, g: '8:4', pts: 13
    },
    {
      position: 6,
      name: 'Roma',
      logo: <div className="text-[8px] font-bold text-orange-700">R</div>,
      mp: 8, w: 4, d: 0, l: 4, g: '7:3', pts: 12
    }
  ];

  return (
    <div className="bg-white/20 backdrop-blur-xl border border-white/30 p-6 rounded-3xl shadow-lg flex-1 hover:bg-white/25 transition-all duration-300">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-base font-medium text-slate-700">Standings</h3>
        <a href="#" className="text-xs font-medium text-teal-600 hover:text-teal-700">View all</a>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[10px] uppercase tracking-wider text-slate-400 border-b border-slate-100">
              <th className="pb-3 pl-2 font-medium">#</th>
              <th className="pb-3 font-medium">Team</th>
              <th className="pb-3 text-center font-medium">MP</th>
              <th className="pb-3 text-center font-medium">W</th>
              <th className="pb-3 text-center font-medium">D</th>
              <th className="pb-3 text-center font-medium">L</th>
              <th className="pb-3 text-center font-medium">G</th>
              <th className="pb-3 text-right pr-2 font-medium">PTS</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {teams.map((team, index) => (
              <tr key={team.name} className="group hover:bg-white/30 transition-all duration-300 hover:shadow-sm rounded-lg">
                <td className="py-3 pl-2 text-slate-500 text-xs">{team.position}</td>
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/40 backdrop-blur-sm rounded-md shadow-lg border border-white/50 flex items-center justify-center p-0.5">
                      {team.logo}
                    </div>
                    <span className={`font-medium transition-colors ${
                      index === 0 
                        ? 'font-semibold text-slate-800' 
                        : 'text-slate-600 group-hover:text-slate-900'
                    }`}>
                      {team.name}
                    </span>
                  </div>
                </td>
                <td className="py-3 text-center text-slate-500">{team.mp}</td>
                <td className="py-3 text-center text-slate-500">{team.w}</td>
                <td className="py-3 text-center text-slate-500">{team.d}</td>
                <td className="py-3 text-center text-slate-500">{team.l}</td>
                <td className="py-3 text-center text-slate-500">{team.g}</td>
                <td className={`py-3 text-right pr-2 transition-colors ${
                  index === 0 
                    ? 'font-semibold text-slate-800' 
                    : 'font-medium text-slate-800'
                }`}>
                  {team.pts}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Standings;