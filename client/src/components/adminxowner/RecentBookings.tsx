import { useEffect, useState } from "react"
import { assets, dummyMyBookingsData } from "../../assets/assets"
import type { BookingDataPayload } from "../../interfaces/interfaces"
import { toSlashedDate } from "../../lib/toSlashedDate";
import { getMonthlyRevenue } from "../../lib/getMonthlyRevenue";

const RecentBookings = () => {
  const [bookings, _setBookings] = useState<BookingDataPayload[]>(dummyMyBookingsData.slice(0, 4));
  const currency = import.meta.env.VITE_CURRENCY;
  
  const getStatusColor = (status: string): string => {
    if(status == 'confirmed')
    {
      console.log('here')
      return 'bg-green-400/20 text-green-600'
    } else if (status == 'canceled')
    {
      console.log('here')
      return 'bg-red-400/20 text-red-600'
    } else
    {
      console.log('here')
      return 'bg-yellow-400/20 text-yellow-600'

    }
    
  }

  // useEffect(() => {
  //   switch (status) {
  //     case "confirmed":
  //       setStatusBackgroundColor("bg-green-400/20");
  //       setStatusTextColor("text-green-600");
  //       break;
  //     case "canceled":
  //       setStatusBackgroundColor("bg-red-400/20");
  //       setStatusTextColor("text-red-600");
  //       break;
  //     default:
  //       setStatusBackgroundColor("bg-yellow-400/20");
  //       setStatusTextColor("text-yellow-600");
  //       break;
  //   }
  // }, []);
  
  return (
    <div className="flex flex-col md:flex-row gap-7 mt-15 ">
      <div className='flex flex-col justify-center md:w-[520px] md:h-[340px] border border-gray-400/30 rounded rounded-lg p-4'>
        <p className='text-black mx-4 mt-3'>Recent Bookings</p>
        <p className='text-gray-400 text-sm mx-4'>Latest customer bookings</p>
        {
          bookings.map((booking, index) => (
            <div key={index} className="flex justify-between px-3 my-3">
              <div className="flex gap-2">
                <div className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-primary/20">
                  <img src={assets.listIconColored} alt="car icon" className="h-[25px]" />
                </div>
                <div>
                  <p className="text-black">{booking.car.brand} {booking.car.model}</p>
                  <p className="text-gray text-sm">{toSlashedDate(booking.pickupDate)}</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
                <p className="text-gray-400 text-sm">{currency}{booking.price}</p>
                <span className={`w-[82.02px] rounded-full border px-3 py-1 text-[12px] ${getStatusColor(booking.status)}`}>{booking.status}</span>
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex w-[316px] h-[162px] rounded rounded-lg border border-gray-400/30">
        <div className="flex flex-col items-start justify-center ml-5 gap-5">
          <div>
            <p className="text-black">Monthly Revenue</p>
            <p className="text-[12px] text-gray-400">Revenue for current month</p>
          </div>
          <p className="text-[31.5px] text-primary font-bold">{currency}{getMonthlyRevenue(bookings)}</p>
        </div>
      </div>
    </div>
  )
}

export default RecentBookings


