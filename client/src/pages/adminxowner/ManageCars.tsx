import { useEffect, useState } from "react";
import { dummyCarData } from "../../assets/assets";
import type { CarPayload } from "../../interfaces/interfaces";
import ManageCarG1 from "../../components/adminxowner/ManageCarG1";
import type { carTransmission } from "../../types/types";
import { EyeClosedIcon, EyeIcon, Trash2Icon } from "lucide-react";
import { div } from "motion/react-client";

const ManageCars = () => {
  const [cars, setCars] = useState<CarPayload[] | null>(null);
  const currency = import.meta.env.VITE_CURRENCY;
  const getCarData = async () => {
    setCars(dummyCarData);
  };
  const getAvailableColor = (isAvalilable: boolean): string => {
    if (isAvalilable) {
      return "bg-green-400/20 text-green-600";
    }
    return "bg-green-400/20 text-green-600";
  };
  // const toggleCarAvailability = () => {}
  const deleteCar = async () => {};
  useEffect(() => {
    getCarData();
  }, []);
  return (
    <div>
      <h1 className="text-black text-[26px]">Manage Cars</h1>
      <p className="text-gray-400 text-sm">
        View all listed cars, update their details, or remove them from the
        booking platform
      </p>
      {cars ? (
        <div className="overflow-hidden scroll-thin">
          <div className="overflow-x-auto scroll-thin">
            <table className="w-full min-w-[929px] border-separate border-spacing-0 rounded-lg rounded rounded-full mt-10 text-gray-400 border border-gray-400/40">
              <thead className="border border-gray-400/40 h-[60px]">
                <tr>
                  <th className="w-[400px] text-start pl-8 border border-r-0 border-t-0 border-l-0 border-gray-400/40">
                    Car
                  </th>
                  <th className="text-start w-[150px] border border-r-0 border-t-0 border-l-0 border-gray-400/40">
                    Category
                  </th>
                  <th className="text-start w-[150px] border border-r-0 border-t-0 border-l-0 border-gray-400/40">
                    Price
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
                {cars.map((car, index) => (
                  <tr className="border border-gray-400/40 h-[73px]">
                    <td className="pl-8 border border-r-0 border-t-0 border-l-0 border-gray-400/40">
                      <ManageCarG1
                        key={index}
                        brand={car.brand}
                        image={car.image}
                        transmission={car.transmission as carTransmission}
                        model={car.model}
                        capacity={car.seating_capacity}
                      />
                    </td>
                    <td className="text-black border border-r-0 border-t-0 border-l-0 border-gray-400/40">
                      {car.category}
                    </td>
                    <td className="text-sm text-black border border-r-0 border-t-0 border-l-0 border-gray-400/40">
                      {currency}
                      {car.pricePerDay}/day
                    </td>
                    <td className="border border-r-0 border-t-0 border-l-0 border-gray-400/40">
                      <div
                        className={`px-3 w-fit rounded rounded-lg text-sm ${getAvailableColor(
                          car.isAvailable
                        )}`}
                      >
                        {car.isAvailable ? "Available" : "Not Available"}
                      </div>
                    </td>
                    <td className="border border-r-0 border-t-0 border-l-0 border-gray-400/40">
                      <div className="flex gap-5">
                        {car.isAvailable ? <EyeIcon /> : <EyeClosedIcon />}
                        <Trash2Icon onClick={deleteCar} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        // </div>
        <div className="flex justify-center mt-10 border border-gray-400/50 p-10 rounded rounded-lg">
          <p>You have not listed any car yet.</p>
        </div>
      )}
    </div>
  );
};

export default ManageCars;
