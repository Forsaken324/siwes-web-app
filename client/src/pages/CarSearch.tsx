import SearchHeader from "../components/SearchHeader";
import { dummyCarData } from "../assets/assets";
import CarCard from "../components/CarCard";

const CarSearch = () => {
  const carsLength = dummyCarData.length;
  return (
    <div>
      <SearchHeader />
      <div className="flex flex-col items-center justify-center">
        <div>
          <p className="text-gray-400 text-sm mt-10 mb-8">
            Showing{" "}
            {carsLength > 1 ? `${carsLength} cars` : `${carsLength} car`}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {dummyCarData.map((car, index) => (
              <CarCard key={index} car={car} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSearch;
