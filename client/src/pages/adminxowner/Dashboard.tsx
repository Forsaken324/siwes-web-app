import { useEffect, useState } from "react";
import { assets, dummyDashboardData } from "../../assets/assets";
import type { DashboardDataPayload } from "../../interfaces/interfaces";
import Loading from "../../common/animations/Loading";

const Dashboard = () => {

  const [dashboardData, setDashboardData] =
    useState<DashboardDataPayload | null>(null);
  const getDashBoardData = async () => {
    setDashboardData(dummyDashboardData);
  };

  useEffect(() => {
    getDashBoardData();
  }, []);

  return dashboardData ? (
    <div>
      <h1 className="text-[26px] text-black">Admin Dashboard</h1>
      <p className="text-gray-400 text-sm md:w-[400px]">
        Monitor overall platform performance including total cars, bookings,
        revenue, and recent activities
      </p>
      <div className="flex flex-wrap gap-4 mt-10">
        <div className="flex items-center justify-between px-3 py-3 w-[200px] md:w-[220px] h-[77px] border border-gray-400/30 rounded">
            <div>
                <p className="text-gray-400 text-sm">Total Cars</p>
                <p className="font-bold text-[24px]">{dashboardData.totalCars}</p>
            </div>
            <div className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-primary/20">
                <img src={assets.carIconColored} alt="car icon" className="h-[25px]" />
            </div>
        </div>
        <div className="flex items-center justify-between px-3 py-3 w-[200px] md:w-[220px] h-[77px] border border-gray-400/30 rounded">
            <div>
                <p className="text-gray-400 text-sm">Total Bookings</p>
                <p className="font-bold text-[24px]">{dashboardData.totalBookings}</p>
            </div>
            <div className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-primary/20">
                <img src={assets.listIconColored} alt="car icon" className="h-[25px]" />
            </div>
        </div>
        <div className="flex items-center justify-between px-3 py-3 w-[200px] md:w-[220px] h-[77px] border border-gray-400/30 rounded">
            <div>
                <p className="text-gray-400 text-sm">Pending Bookings</p>
                <p className="font-bold text-[24px]">{dashboardData.pendingBookings}</p>
            </div>
            <div className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-primary/20">
                <img src={assets.cautionIconColored} alt="car icon" className="h-[25px]" />
            </div>
        </div>
        <div className="flex items-center justify-between px-3 py-3 w-[200px] md:w-[220px] h-[77px] border border-gray-400/30 rounded">
            <div>
                <p className="text-gray-400 text-sm">Completed Bookings</p>
                <p className="font-bold text-[24px]">{dashboardData.completedBookings}</p>
            </div>
            <div className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-primary/20">
                <img src={assets.carIconColored} alt="car icon" className="h-[25px]" />
            </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Dashboard;

// isaiah 14 talks about the devil?.
// a prophecy against kush tall and smooth skin, land divided by rivers, the land of waring wings, feared far and wide, of strange speech
// egyptian against egyptians, loose heart, their plans to nothing, hand them over to the power of a rude master and a fierce king will rule
// over them.
