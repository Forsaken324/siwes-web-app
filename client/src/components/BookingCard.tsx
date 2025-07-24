import { Dot } from "lucide-react";
import type { BookedCarProps } from "../interfaces/interfaces";
import { toSlashedDate } from "../lib/toSlashedDate";
import { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const BookingCard = ({ bookedData, index }: BookedCarProps) => {
  const status = bookedData.status;
  const currency = import.meta.env.VITE_CURRENCY;
  console.log(status)

  const [statusBackgroundColor, setStatusBackgroundColor] = useState("");
  const [statusTextColor, setStatusTextColor] = useState("");

  useEffect(() => {
    switch (status) {
      case "confirmed":
        setStatusBackgroundColor("bg-green-400/20");
        setStatusTextColor("text-green-600");
        break;
      case "canceled":
        setStatusBackgroundColor("bg-red-400/20");
        setStatusTextColor("text-red-600");
        break;
      default:
        setStatusBackgroundColor("bg-yellow-400/20");
        setStatusTextColor("text-yellow-600");
        break;
    }
    console.log(statusBackgroundColor);
    console.log(statusTextColor);
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-7 xl:w-[1188px] md:h-[279px] rounded-lg border border-border-color p-5">
      <div>
        <img
          src={bookedData.car.image}
          alt={bookedData.car.brand}
          className="h-[160px] w-[302px] object-cover rounded-lg"
        />
        <p className="font-bold mt-4">
          {bookedData.car.brand} {bookedData.car.model}
        </p>
        <p className="text-gray-400 text-[12px] flex items-center">
          {bookedData.car.year}
          <Dot />
          {bookedData.car.category}
          <Dot />
          {bookedData.car.location}
        </p>
      </div>
      <div className="flex justify-between md:w-[70%]">
        <div>
          <div className="flex gap-5">
            <div className="flex items-center justify-center bg-gray-400/20 w-[77px] h-[25px] text-black text-[12px] rounded">
              booking #{index}
            </div>
            <div
              className={`flex items-center justify-center w-[77px] h-[25px] text-[12px] ${statusTextColor} ${statusBackgroundColor} rounded-full`}
            >
              {bookedData.status}
            </div>
          </div>
          <div>
            <div className="flex items-start gap-1 mt-5">
              <img src={assets.calendar_icon_colored} alt="a" />
              <p className=" text-gray-400">
                Rental Period{" "}<br />
                <span className="text-[12px] text-black">
                  {toSlashedDate(bookedData.pickupDate)} - {toSlashedDate(bookedData.returnDate)}
                </span>
              </p>
            </div>
            <div className="flex items-start gap-1 mt-2">
              <img src={assets.calendar_icon_colored} alt="a" />
              <p className=" text-gray-400">
                Rental Period{" "}<br />
                <span className="text-[12px] text-black">
                  {toSlashedDate(bookedData.pickupDate)} - {toSlashedDate(bookedData.returnDate)}
                </span>
              </p>
            </div>
            <div className="flex items-start gap-1 mt-2">
              <img src={assets.calendar_icon_colored} alt="a" />
              <p className="text-gray-400">
                Rental Period{" "}<br />
                <span className="text-black text-[12px]">
                  {toSlashedDate(bookedData.pickupDate)} - {toSlashedDate(bookedData.returnDate)}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end text-gray-400 text-sm">
          <p>Total Price</p>
          <p className="text-primary text-[24px] font-bold">{currency}{bookedData.price}</p>
          <p>Booked on {toSlashedDate(bookedData.pickupDate)}</p>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;


// when Jesus died, there was the first resurrection