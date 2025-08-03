import { Link, useParams } from "react-router-dom";
import { assets, dummyCarData } from "../assets/assets";
import { useEffect, useRef, useState } from "react";
import type { CarPayload } from "../interfaces/interfaces";
import Loading from "../common/animations/Loading";
import { ArrowLeft, Dot } from "lucide-react";
// import { toDateString } from "../lib/toDateString";
import DatePicker from "react-datepicker";

// date picker css
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";

const CarDetails = () => {
  const { carId } = useParams();
  const [car, setCar] = useState<CarPayload | null>(null);
  const carImgRef = useRef<HTMLInputElement>(null);
  const currency = import.meta.env.VITE_CURRENCY;

  const date = new Date();
  const [pickupDate, setPickupDate] = useState(date);
  const [returnDate, setReturnDate] = useState(date);

  const getCar = async (carId: string) => {
    const fetchedCar = dummyCarData.find((car) => car._id === carId);
    setCar(fetchedCar as CarPayload);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const today = new Date();
    if (pickupDate < today || returnDate < today) {
      return toast("you cannot book for a date in the past", {
        duration: 5000,
        style: {},
      });
    }
  };

  const handlePickupDate = (date: Date | null) => {
    if (date) setPickupDate(date);
  };
  const handleReturnDate = (date: Date | null) => {
    if (date) setReturnDate(date);
  };

  useEffect(() => {
    if (!carId) return;
    getCar(carId);
  }, [carId]);

  useEffect(() => {
    if (carImgRef.current) {
      carImgRef.current.style.backgroundImage = `url(${car?.image})`;
      carImgRef.current.style.backgroundSize = "cover";
      carImgRef.current.style.backgroundPosition = "center";
    }
  }, [car?.image]);

  useEffect(() => {
    scrollTo(0, 0);
  }, [])
  // const bookCar = async () => {}

  return (
    <div className="flex flex-wrap justify-start ml-5 mr-5 md:ml-10 lg:ml-20 xl:ml-0 xl:justify-center gap-30 mt-50">
      {car ? (
        <>
          <div className="w-[833.94px]">
            <div className="text-gray-400 flex gap-2 text-sm items-center pb-4">
              <ArrowLeft /> <Link to={"/car-search"}>Back to all cars</Link>
            </div>
            <div>
              <div
                className="h-[387px] w-auto rounded-xl"
                ref={carImgRef}
              ></div>
              <h2 className="text-black font-bold text-[30px] mt-4">
                {car.brand} {car.model}
              </h2>
              <p className="flex items-center text-md text-gray-400">
                {car.year}
                <Dot />
                {car.category}
              </p>
              <hr className="mt-3 text-gray-400/50" />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-15">
                <div className="flex items-center justify-center flex flex-col lg:w-[197px] h-[80px] bg-v-light-gray rounded-xl">
                  <img
                    src={assets.users_icon}
                    alt="seating-capacity"
                    className="h-[20px]"
                  />
                  <p className="font-bold">
                    {car.seating_capacity}{" "}
                    {car.seating_capacity > 1 ? "seats" : "seat"}
                  </p>
                </div>
                <div className="flex items-center justify-center flex flex-col lg:w-[197px] h-[80px] bg-v-light-gray rounded-xl">
                  <img
                    src={assets.fuel_icon}
                    alt="fuel-type"
                    className="h-[20px]"
                  />
                  <p className="font-bold">{car.fuel_type}</p>
                </div>
                <div className="flex items-center justify-center flex flex-col lg:w-[197px] h-[80px] bg-v-light-gray rounded-xl">
                  <img
                    src={assets.carIcon}
                    alt="transmission"
                    className="h-[20px]"
                  />
                  <p className="font-bold">{car.transmission}</p>
                </div>
                <div className="flex items-center justify-center flex flex-col lg:w-[197px] h-[80px] bg-v-light-gray rounded-xl">
                  <img
                    src={assets.location_icon}
                    alt="location"
                    className="h-[20px]"
                  />
                  <p className="font-bold">{car.location}</p>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="font-bold text-[19.53px]">Description</h3>
                <p className="text-sm text-gray-400">{car.description}</p>
              </div>
              <div className="mt-6">
                <h3 className="font-bold text-[19.53px] mb-5">Features</h3>
                <div className="flex gap-2 text-sm md:text-base">
                  <div className="flex flex-col gap-3">
                    {car.features.slice(0, 2).map((feature, index) => (
                      <p key={index} className="flex items-start gap-2 text-sm">
                        <img src={assets.check_icon} alt="tic-icon" /> {feature}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3">
                    {car.features.slice(2).map((feature, index) => (
                      <p key={index} className="flex items-start gap-2">
                        <img src={assets.check_icon} alt="tic-icon" /> {feature}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col w-[310px] h-[400px] rounded-xl shadow shadow-xl">
            <div className="flex items-center justify-between w-[85%] mt-5 pb-3">
              <p className="font-bold text-2xl">
                {currency}
                {car.pricePerDay}
              </p>
              <p className="text-sm text-gray-400">per day</p>
            </div>
            <hr className="text-gray-400/50 w-[85%]  mb-13" />
            <form
              onSubmit={handleSubmit}
              id="book-car-form"
              className="flex flex-col justify-center"
            >
              <label htmlFor="pickup-date" className="font-bold">
                Pickup Date
              </label>
              <DatePicker
                id="pickup-date"
                className="flex items-center w-[263px] h-[40px] border border-gray-400/50 rounded rounded-lg mb-5 pl-3"
                selected={pickupDate}
                onChange={(date) => handlePickupDate(date)}
              />
              <label htmlFor="return-date" className="font-bold">
                Return Date
              </label>
              <DatePicker
                id="return-date"
                className="flex items-center w-[263px] h-[40px] border border-gray-400/50 rounded rounded-lg mb-9 pl-3"
                selected={returnDate}
                onChange={(date) => handleReturnDate(date)}
              />
              <button
                type="submit"
                className="bg-primary text-white w-[263px] h-[42px] rounded-lg hover:bg-primary-light duration-500 trasition"
              >
                Book Now
              </button>
            </form>
            <p className="text-sm text-gray-400 mt-3">
              No credit card required to reserve
            </p>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default CarDetails;

// the disciple whom he loved was standing there, they cast lots among themselves for his garment.
// he said to the his mother, woman, here is your son, and to the disciple, here is your mother. Who was this disciple.
// that was the disciple that took mary the mother of Jesus into his house. Do not hold on to me, for I have not yet ascended to my father.

// peter, james , john, thomas, matthew
