import Header from '../components/shared/Header';
import NextGame from '../components/dashboard/NextGame';
import Standings from '../components/dashboard/Standings';
import GamesStatistic from '../components/dashboard/GamesStatistic';
import StatsCards from '../components/dashboard/StatsCards';
import CallToAction from '../components/dashboard/CallToAction';

const Dashboard = () => {
  return (
    <div className="h-full flex flex-col">
      {/* Fixed Header */}
      <div className="fixed top-0 right-0 left-0 md:left-64 z-20 bg-slate-50/70 md:bg-transparent backdrop-blur-md md:backdrop-blur-0 border-b border-slate-200/60 md:border-b-0">
        <Header />
      </div>
      
      {/* Scrollable Main Content */}
      <main className="flex-1 pt-36 md:pt-24 overflow-y-auto px-4 pb-6 lg:px-8">
        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <NextGame />
            <Standings />
          </div>

          {/* Right Column (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <GamesStatistic />
            <StatsCards />
            <CallToAction />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;