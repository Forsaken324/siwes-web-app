import { useEffect, useState } from "react";
import { dummyMyBookingsData } from "../../assets/assets";
import type { BookingDataPayload } from "../../interfaces/interfaces";
import ManageCarG1 from "../../components/adminxowner/ManageCarG1";
import { toSlashedDate } from "../../lib/toSlashedDate";
import type { bookingStatus } from "../../types/types";
import { motion } from "motion/react";

const ManageBookings = () => {
  const [bookings, setBookings] = useState<BookingDataPayload[] | null>(null);
  const currency = import.meta.env.VITE_CURRENCY;
  const getBookings = async () => {
    setBookings(dummyMyBookingsData);
  };
  const getStatusColor = (status: bookingStatus) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-400/20 text-green-600';
      case 'completed':
        return 'bg-blue-400/20 text-blue-600';
      case 'canceled':
        return 'bg-green-400/20 text-green-600';
      default:
        return 'bg-yellow-400/20 text-yellow-600';
    }
  }
  useEffect(() => {
    getBookings();
  }, []);
  return (
    <motion.div initial={{scale: 0}} animate={{ scale: 1}}>
      <h1 className="text-black text-[26px]">Manage Bookings</h1>
      <p className="text-sm text-gray-400">
        Track all customer bookings, approve or cancel requests, and manage
        booking statuses
      </p>
      {bookings ? (
        <div className="overflow-hidden scroll-thin">
          <div className="overflow-x-auto scroll-thin">
            <table className="w-full min-w-[929px] border-separate border-spacing-0 rounded-lg rounded rounded-full mt-10 text-gray-400 border border-gray-400/40">
              <thead className="sticky top-0 bg-white h-[60px]">
                <tr>
                  <th className="w-[400px] text-start pl-8 border-b border-gray-400/40">Car</th>
                  <th className="text-start w-[280px] border-b border-gray-400/40">Date Range</th>
                  <th className="text-start w-[150px] border-b border-gray-400/40">Total</th>
                  <th className="text-start w-[190px] border-b border-gray-400/40">Status</th>
                  <th className="text-start w-[150px] border-b border-gray-400/40">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, index) => (
                  <tr key={index} className="border-t border-gray-400/40 h-[73px]">
                    <td className="pl-8 border-b border-gray-400/40">
                      <ManageCarG1
                        brand={booking.car.brand}
                        image={booking.car.image}
                        model={booking.car.model}
                        capacity={null}
                        transmission={null}
                      />
                    </td>
                    <td className="text-black border-b border-gray-400/40">
                      <div className="flex gap-2">
                        <span>{toSlashedDate(booking.pickupDate)}</span> To <span>{toSlashedDate(booking.returnDate)}</span>
                      </div>
                    </td>
                    <td className="text-sm text-black border-b border-gray-400/40">
                      {currency}
                      {booking.price}
                    </td>
                    <td className="border-b border-gray-400/40">
                      <div
                        className={`px-3 py-[2.5px] w-fit rounded-lg text-sm ${getStatusColor(
                          booking.status as bookingStatus
                        )}`}
                      >
                        {booking.status}
                      </div>
                    </td>
                    <td className="border-b border-gray-400/40">
                      <select name="cancel-booking" id="cancel-booking" className="border px-2 rounded text-sm">
                        <option value="cancel" selected>Cancel</option>
                        <option value="approve">Approve</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
          </table>
          </div>
        </div>

      ) : (
        <p>No data available</p>
      )}
    </motion.div>
  );
};

export default ManageBookings;
