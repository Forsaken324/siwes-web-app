import { useEffect, useState } from "react";
import { dummyMyBookingsData } from "../../assets/assets";
import type { BookingDataPayload } from "../../interfaces/interfaces";
import ManageCarG1 from "../../components/adminxowner/ManageCarG1";
import { toSlashedDate } from "../../lib/toSlashedDate";

const ManageBookings = () => {
  const [bookings, setBookings] = useState<BookingDataPayload[] | null>(null);
  const currency = import.meta.env.VITE_CURRENCY;
  const getBookings = async () => {
    setBookings(dummyMyBookingsData);
  };
  useEffect(() => {
    getBookings();
  }, []);
  return (
    <div>
      <h1 className="text-black text-[26px]">Manage Bookings</h1>
      <p className="text-sm text-gray-400">
        Track all customer bookings, approve or cancel requests, and manage
        booking statuses
      </p>
      {bookings ? (
        <table className="h-[341px] w-[929px] border-separate border-spacing-0 rounded-lg rounded rounded-full mt-10 text-gray-400 border border-gray-400/40">
          <thead className="border border-gray-400/40 h-[60px]">
            <tr>
              <th className="w-[400px] text-start pl-8 border border-r-0 border-t-0 border-l-0 border-gray-400/40">
                Car
              </th>
              <th className="text-start w-[280px] border border-r-0 border-t-0 border-l-0 border-gray-400/40">
                Date Range
              </th>
              <th className="text-start w-[150px] border border-r-0 border-t-0 border-l-0 border-gray-400/40">
                Total
              </th>
              <th className="text-start w-[150px] border border-r-0 border-t-0 border-l-0 border-gray-400/40">
                Status
              </th>
              <th className="text-start w-[150px] border border-r-0 border-t-0 border-l-0 border-gray-400/40">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr className="border border-gray-400/40 h-[73px]">
                <td className="pl-8 border border-r-0 border-t-0 border-l-0 border-gray-400/40">
                  <ManageCarG1
                    key={index}
                    brand={booking.car.brand}
                    image={booking.car.image}
                    model={booking.car.model} capacity={null} transmission={null}                  />
                </td>
                <td className="text-black border border-r-0 border-t-0 border-l-0 border-gray-400/40">
                  <div className="flex gap-2"><span>{toSlashedDate(booking.pickupDate)}</span>  To  <span>{toSlashedDate(booking.returnDate)}</span></div>
                </td>
                <td className="text-sm text-black border border-r-0 border-t-0 border-l-0 border-gray-400/40">
                  {currency}
                  {booking.price}
                </td>
                {/* <td className="border border-r-0 border-t-0 border-l-0 border-gray-400/40">
                  <div
                    className={`px-3 w-fit rounded rounded-lg text-sm ${getAvailableColor(
                      car.isAvailable
                    )}`}
                  >
                    {car.isAvailable ? "Available" : "Not Available"}
                  </div>
                </td>
                <td className="border border-r-0 border-t-0 border-l-0 border-gray-400/40">
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default ManageBookings;
