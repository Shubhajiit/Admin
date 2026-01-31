import Header from '../components/Header';
import NextGame from '../components/NextGame';
import Standings from '../components/Standings';
import GamesStatistic from '../components/GamesStatistic';
import StatsCards from '../components/StatsCards';
import CallToAction from '../components/CallToAction';

const Dashboard = () => {
  return (
    <div className="h-full flex flex-col">
      {/* Fixed Header */}
      <div className="fixed top-0 right-0 left-64 z-20">
        <Header />
      </div>
      
      {/* Scrollable Main Content */}
      <main className="flex-1 pt-24 overflow-y-auto px-4 py-6 lg:px-8">
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