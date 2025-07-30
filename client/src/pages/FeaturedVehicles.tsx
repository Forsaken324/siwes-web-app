import { useEffect, useState } from "react";
import { dummyCarData } from "../assets/assets";
import CarCard from "../components/CarCard";
import type { CarPayload } from "../interfaces/interfaces";
import Loading from "../common/animations/Loading";
import { MoveRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const FeaturedVehicles = () => {
  const [cars, setCars] = useState<CarPayload[]>([]);

  const getCars = async () => {
    setCars(dummyCarData.slice(0, 3) as CarPayload[]);
  };
  const navigate = useNavigate();

  useEffect(() => {
    getCars();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center flex-wrap dark:bg-black dark:text-white">
      <h2 className="text-[35px] md:text-[40px] font-bold mt-[150px]">Featured Vehicles</h2>
      <p className="text-[12px] p-3 md:p-0 md:text-[19px] md:mt-[25px]">
        Explore our selection of premium vehicles available for your next adventure
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-15 mt-[50px] md:mt-[90px] ml-3 md:ml-0">
        {cars.length == 0 ? (
          <Loading />
        ) : (
          cars.map((car, index) => <Link key={index} to={`/car-details/${car._id}`}><CarCard car={car} /></Link>)
        )}
      </div>
      <button className="flex justify-evenly items-center w-[180px] h-[47px] border border-gray-400/30 rounded-lg mt-[100px] hover:bg-primary hover:text-white duration-900 transition dark:bg-primary dark:text-white dark:border-0" onClick={() => navigate('/car-search')}>Explore all cars <MoveRight /></button>
    </div>
  );
};

export default FeaturedVehicles;
