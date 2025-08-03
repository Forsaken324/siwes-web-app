import { useEffect, useState } from "react";
import { assets, dummyDashboardData, dummyUserData } from "../../assets/assets";
import type { DashboardDataPayload } from "../../interfaces/interfaces";
import Loading from "../../common/animations/Loading";
import RecentBookings from "../../components/adminxowner/RecentBookings";
import { motion } from "motion/react";

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
    <motion.div>
      <h1 className="text-[26px] text-black dark:text-white">{dummyUserData.isAdmin ? 'Admin' : 'Owner'} Dashboard</h1>
      <p className="text-gray-400 text-sm md:w-[400px]">
        Monitor overall platform performance including total cars, bookings,
        revenue, and recent activities
      </p>
      <motion.div initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6, ease: "easeOut"}} viewport={{ once: true, amount: 0.2}} className="flex flex-wrap gap-4 mt-10">
        <div className="flex items-center justify-between px-3 py-3 w-[200px] md:w-[220px] h-[77px] border border-gray-400/30 rounded">
            <div>
                <p className="text-gray-400 text-sm">Total Cars</p>
                <p className="font-bold text-[24px] dark:text-white">{dashboardData.totalCars}</p>
            </div>
            <div className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-primary/20">
                <img src={assets.carIconColored} alt="car icon" className="h-[25px]" />
            </div>
        </div>
        <div className="flex items-center justify-between px-3 py-3 w-[200px] md:w-[220px] h-[77px] border border-gray-400/30 rounded">
            <div>
                <p className="text-gray-400 text-sm">Total Bookings</p>
                <p className="font-bold text-[24px] dark:text-white">{dashboardData.totalBookings}</p>
            </div>
            <div className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-primary/20">
                <img src={assets.listIconColored} alt="car icon" className="h-[25px]" />
            </div>
        </div>
        <div className="flex items-center justify-between px-3 py-3 w-[200px] md:w-[220px] h-[77px] border border-gray-400/30 rounded">
            <div>
                <p className="text-gray-400 text-sm">Pending Bookings</p>
                <p className="font-bold text-[24px] dark:text-white">{dashboardData.pendingBookings}</p>
            </div>
            <div className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-primary/20">
                <img src={assets.cautionIconColored} alt="car icon" className="h-[25px]" />
            </div>
        </div>
        <div className="flex items-center justify-between px-3 py-3 w-[200px] md:w-[220px] h-[77px] border border-gray-400/30 rounded">
            <div>
                <p className="text-gray-400 text-sm">Completed Bookings</p>
                <p className="font-bold text-[24px] dark:text-white">{dashboardData.completedBookings}</p>
            </div>
            <div className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-primary/20">
                <img src={assets.carIconColored} alt="car icon" className="h-[25px]" />
            </div>
        </div>
      </motion.div>
      <RecentBookings />
    </motion.div>
  ) : (
    <Loading />
  );
};

export default Dashboard;

// isaiah 14 talks about the devil?.
// a prophecy against kush tall and smooth skin, land divided by rivers, the land of waring wings, feared far and wide, of strange speech
// egyptian against egyptians, loose heart, their plans to nothing, hand them over to the power of a rude master and a fierce king will rule
// over them.
