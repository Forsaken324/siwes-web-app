import { ChevronDown, SearchIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Countries } from "../interfaces/interfaces";
import { toDateString } from "../lib/toDateString";
import { assets } from "../assets/assets";
import FeaturedVehicles from "./FeaturedVehicles";
import AboutBanner from "./AboutBanner";
import Reviews from "./Reviews";

const Home = () => {
  const date = new Date();

  const [pickupDate, setPickupDate] = useState<string>(
    date.toISOString().split("T")[0]
  ); // yyyy-mm-dd
  const [returnDate, setReturnDate] = useState<string>(
    date.toISOString().split("T")[0]
  );
  const [selectedCountry, setSelectedCountry] = useState<string>("Nigeria");

  const [pickupDateString, setPickupDateString] = useState<string>(
    toDateString(new Date(pickupDate))
  );
  const [returnDateString, setReturnDateString] = useState<string>(
    toDateString(new Date(returnDate))
  );

  const countries: Array<Countries> = [
    { code: "US", name: "United States" },
    { code: "CA", name: "Canada" },
    { code: "GB", name: "United Kingdom" },
    { code: "AU", name: "Australia" },
    { code: "DE", name: "Germany" },
    { code: "FR", name: "France" },
    { code: "IN", name: "India" },
    { code: "JP", name: "Japan" },
    { code: "NG", name: "Nigeria" },
    { code: "BR", name: "Brazil" },
  ];

  const pickupRef = useRef<HTMLInputElement>(null);
  const returnRef = useRef<HTMLInputElement>(null);

  const openCalendar = (ref: React.RefObject<HTMLInputElement>) => {
    ref.current?.showPicker?.(); // open native picker if supported
  };

  useEffect(() => {
    setPickupDateString(toDateString(new Date(pickupDate)));
    setReturnDateString(toDateString(new Date(returnDate)));
  }, [pickupDate, returnDate]);

  return (
    <div>
      <div className="bg-home-gray flex flex-col items-center justify-center h-[100vh] gap-16">
        <h2 className="text-[32px] md:text-[50px] font-bold">
          Luxury Cars on Rent
        </h2>

        <div className="flex flex-col md:flex-row md:items-center justify-evenly p-10 gap-5 md:p-0 md:gap-0 h-auto w-[90%] md:h-[90px] md:w-[878px] bg-white rounded-xl md:rounded-full shadow-xl">
          {/* Pick-up location */}
          <div>
            <label htmlFor="country" className="flex gap-4 cursor-pointer">
              Pick-up Location <ChevronDown />
            </label>
            <select
              name="country"
              id="country"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="outline-none appearance-none text-gray-400 w-full"
            >
              {countries.map((country) => (
                <option key={country.code}>{country.name}</option>
              ))}
            </select>
          </div>

          {/* Dates */}
          <div className="flex gap-4">
            {/* Pick-up date */}
            <div>
              <label
                htmlFor="pickup-date"
                className="flex gap-2 items-center cursor-pointer"
                onClick={() => openCalendar(pickupRef)}
              >
                Pick-up Date <ChevronDown />
              </label>
              <input
                ref={pickupRef}
                type="date"
                id="pickup-date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="absolute opacity-0 pointer-events-none"
              />
              <p className="text-gray-400 text-sm">{pickupDateString}</p>
            </div>

            {/* Return date */}
            <div>
              <label
                htmlFor="return-date"
                className="flex gap-2 items-center cursor-pointer"
                onClick={() => openCalendar(returnRef)}
              >
                Drop-off Date <ChevronDown />
              </label>
              <input
                ref={returnRef}
                type="date"
                id="return-date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="absolute opacity-0 pointer-events-none"
              />
              <p className="text-gray-400 text-sm">{returnDateString}</p>
            </div>
          </div>

          {/* Search button */}
          <button className="flex gap-2 items-center bg-primary text-white h-[49px] w-[148px] rounded-full">
            <SearchIcon className="ml-2" />
            Search
          </button>
        </div>
        <img src={assets.main_car} alt="" />
      </div>
      <FeaturedVehicles />
      <AboutBanner />
      <Reviews />
    </div>
  );
};

export default Home;



// faith is confidence for what we hope for, and assurance for what we cannot see.