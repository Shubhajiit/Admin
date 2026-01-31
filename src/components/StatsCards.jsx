import { Waves, DollarSign, PieChart, Star } from 'lucide-react';

const StatsCards = () => {
  const stats = [
    {
      icon: Waves,
      label: 'Possession',
      value: '65',
      unit: '%',
      bgColor: 'bg-indigo-100',
      textColor: 'text-indigo-500'
    },
    {
      icon: DollarSign,
      label: 'Overall Price',
      value: '690.2',
      unit: 'm',
      prefix: '$',
      bgColor: 'bg-pink-100',
      textColor: 'text-pink-500'
    },
    {
      icon: PieChart,
      label: 'Transfer Budget',
      value: '240.6',
      unit: 'm',
      prefix: '$',
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-400'
    },
    {
      icon: Star,
      label: 'Average Score',
      value: '7.2',
      bgColor: 'bg-teal-100',
      textColor: 'text-teal-600',
      fill: true
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {stats.map((stat) => {
        const IconComponent = stat.icon;
        return (
          <div 
            key={stat.label}
            className="bg-white/20 backdrop-blur-xl border border-white/30 p-5 rounded-3xl shadow-lg hover:bg-white/25 transition-all duration-300 flex items-center gap-5"
          >
            <div className={`w-12 h-12 rounded-2xl ${stat.bgColor} ${stat.textColor} flex items-center justify-center`}>
              <IconComponent 
                className={`w-6 h-6 stroke-[1.5] ${stat.fill ? 'fill-current' : ''}`} 
              />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">
                {stat.label}
              </p>
              <p className="text-3xl font-medium text-slate-800 tracking-tight">
                {stat.prefix && (
                  <span className="text-lg font-normal text-slate-500">{stat.prefix}</span>
                )}
                {stat.value}
                {stat.unit && (
                  <span className="text-lg text-slate-500 font-normal">{stat.unit}</span>
                )}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;