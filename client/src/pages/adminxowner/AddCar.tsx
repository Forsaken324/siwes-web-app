import { useState } from "react";
import { assets } from "../../assets/assets";
import type { carTransmission } from "../../types/types";

const AddCar = () => {
  const [file, setFile] = useState<File | null>(null);
  const [carBrand, setCarBrand] = useState<string>("");
  const [carModel, setCarModel] = useState<string>("");
  const [carYear, setCarYear] = useState<number>();
  const [dailyPrice, setDailyPrice] = useState<number>();
  const [category, setCategory] = useState<string>("");
  const [transmission, setTransmission] =
    useState<carTransmission>();
  const [fuelType, setFuelType] = useState<string>("");
  const [seatingCapacity, setSeatingCapacity] = useState<number>(5);
  const [location, setLocation] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const currency = import.meta.env.VITE_CURRENCY;

  const handleFileChange = (e: any): void => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e: any): void => {};

  return (
    <div>
      <h1 className="text-black text-[26px]">Add New Car</h1>
      <p className="text-sm text-gray-400">
        Fill in details to list a new car for booking, including pricing,
        availability, and car specifications.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mt-7">
          <label htmlFor="car-photo" className="flex items-center">
            <img
              src={assets.upload_icon}
              alt="label icon"
              className="h-[60px] w-[107px]"
            />{" "}
            <span className="text-gray-400 ml-3">
              Upload a picture of your car
            </span>
          </label>
          <input
            type="file"
            id="car-photo"
            name="car-photo"
            onChange={handleFileChange}
            hidden
            accept=".png, .jpg, .jpeg, .gif"
          />
        </div>
        {file && <p className="text-sm text-gray-400 mt-2">{file.name}</p>}
        <div className="mt-6 flex gap-5">
          <div>
            <label htmlFor="car-brand">Brand</label>
            <br />
            <input
              type="text"
              id="car-brand"
              name="car-brand"
              value={carBrand}
              onChange={(e) => setCarBrand(e.target.value)}
              className="h-[40px] w-[248px] rounded text-gray-400 border border-gray-400/40 p-3 text-sm focus:outline-yellow-400/50"
              placeholder="e.g BMW, Mercedes, Audi..."
            />
          </div>
          <div>
            <label htmlFor="car-model">Model</label>
            <br />
            <input
              type="text"
              id="car-model"
              name="car-model"
              value={carModel}
              onChange={(e) => setCarModel(e.target.value)}
              className="h-[40px] w-[248px] rounded text-gray-400 border border-gray-400/40 p-3 text-sm focus:outline-yellow-400/50"
              placeholder="e.g X5, E-Class, M4..."
            />
          </div>
        </div>
        <div className="flex gap-5 mt-5">
          <div>
            <label htmlFor="car-year">Year</label>
            <br />
            <input
              type="number"
              id="car-year"
              name="car-year"
              value={carYear}
              onChange={(e) => setCarYear(Number(e.target.value))}
              className="text-gray-400 border border-gray-400/40 h-[40px] w-[180px] text-sm p-3 rounded text-sm focus:outline-yellow-400/50"
              placeholder={`${new Date().getFullYear()}`}
            />
          </div>
          <div>
            <label htmlFor="car-daily-price">Daily Price ({currency})</label>
            <br />
            <input
              type="number"
              id="car-daily-price"
              name="car-daily-price"
              value={dailyPrice}
              onChange={(e) => setDailyPrice(Number(e.target.value))}
              className="text-gray-400 border border-gray-400/40 h-[40px] w-[180px] text-sm p-3 rounded text-sm focus:outline-yellow-400/50"
              placeholder="500"
            />
          </div>
          <div>
            <label htmlFor="car-category">Category</label>
            <br />
            <input
              type="text"
              id="car-category"
              name="car-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-gray-400 border border-gray-400/40 h-[40px] w-[180px] text-sm p-3 rounded text-sm focus:outline-yellow-400/50"
              placeholder="Sedan"
            />
          </div>
        </div>
        <div className="flex gap-5 mt-5">
          <div>
            <label htmlFor="car-transmission">Transmission</label>
            <br />
            <input
              type="string"
              id="car-transmission"
              name="car-transmission"
              value={transmission}
              onChange={(e) => setTransmission(e.target.value)}
              className="text-gray-400 border border-gray-400/40 h-[40px] w-[180px] text-sm p-3 rounded text-sm focus:outline-yellow-400/50"
              placeholder="Automatic"
            />
          </div>
          <div>
            <label htmlFor="car-fuel-type">Fuel Type</label>
            <br />
            <input
              type="text"
              id="car-fuel-type"
              name="car-fuel-type"
              value={fuelType}
              onChange={(e) => setFuelType(e.target.value)}
              className="text-gray-400 border border-gray-400/40 h-[40px] w-[180px] text-sm p-3 rounded text-sm focus:outline-yellow-400/50"
              placeholder="500"
            />
          </div>
          <div>
            <label htmlFor="car-seat-capacity">Seating Capacity</label>
            <br />
            <input
              type="number"
              id="car-seat-capacity"
              name="car-seat-capacity"
              value={seatingCapacity}
              onChange={(e) => setSeatingCapacity(Number(e.target.value))}
              className="text-gray-400 border border-gray-400/40 h-[40px] w-[180px] text-sm p-3 rounded text-sm focus:outline-yellow-400/50"
              placeholder="5"
            />
          </div>
        </div>
        <div className="mt-5">
          <label htmlFor="location">Location</label><br />
          <input type="text" className="w-[100%] md:w-[586px] h-[40px] rounded text-gray-400 border border-gray-400/40 p-3 text-sm focus:outline-yellow-400/50" placeholder="e.g Uyo, AK"/>
        </div>
        <div className="mt-5">
          <label htmlFor="description">Description</label><br />
          <textarea name="description" id="description" className="w-[100%] md:w-[586px] h-[155px] rounded text-gray-400 border border-gray-400/40 p-3 text-sm focus:outline-yellow-400/50" placeholder="Describe your car, its condition, and any notable details..."></textarea>
        </div>
        <button type="submit" className="text-white bg-primary flex gap-2 h-[40px] w-[137px] items-center justify-center rounded mt-7 text-sm "><img src={assets.tick_icon} alt="tick icon" /> List Your Car</button>
      </form>
      <p></p>
    </div>
  );
};

export default AddCar;

// add automatic location recognition.
