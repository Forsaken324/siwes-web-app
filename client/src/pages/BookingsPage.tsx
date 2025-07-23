import BookingCard from "../components/BookingCard";
import { dummyMyBookingsData } from "../assets/assets";
import type { BookingDataPayload } from "../interfaces/interfaces";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../common/animations/Loading";

const BookingsPage = () => {
  const { userId } = useParams();
  const [bookingData, setBookingData] = useState<BookingDataPayload[] | null>(
    null
  );
  const getBookingData = async (bookingData: BookingDataPayload[]) => {
    setBookingData(bookingData);
  };
  useEffect(() => {
    getBookingData(dummyMyBookingsData);
  }, [userId]);
  return (
    <div className="flex justify-center items-center mt-35">
      <div>
        <h1 className="text-[36px] text-black font-bold">My Bookings</h1>
        <p className="text-gray-400 text-sm mb-10">
          View and manage your car bookings
        </p>
        <div className="flex flex-col gap-6">
          {bookingData ? (
            bookingData.map((bookingData, index) => (
              <BookingCard key={index} index={index} bookedData={bookingData} />
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingsPage;

// zayd
