import {useEffect} from "react"
import SearchHeader from "../components/SearchHeader";
import { dummyCarData } from "../assets/assets";
import CarCard from "../components/CarCard";
import { Link } from "react-router-dom";


const CarSearch = () => {
  const carsLength = dummyCarData.length;
  
  useEffect(() => {
    scrollTo(0,0)
  }, [])
  return (
    <div className="dark:bg-black">
      <SearchHeader />
      <div className="flex flex-col items-center justify-center">
        <div>
          <p className="text-gray-400 text-sm mt-10 mb-8">
            Showing{" "}
            {carsLength > 1 ? `${carsLength} cars` : `${carsLength} car`}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {dummyCarData.map((car, index) => (
              <Link key={index}  to={`/car-details/${car._id}`}><CarCard car={car} /></Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSearch;
