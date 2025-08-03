import { Dot } from "lucide-react";
import type { ManageCarsOwner } from "../../interfaces/interfaces";

const ManageCarG1 = ({
  brand,
  capacity,
  image,
  model,
  transmission,
}: ManageCarsOwner) => {
  return (
    <div className="flex items-center gap-4">
      <img
        src={image}
        alt={model}
        className="w-[40px] h-[40px] rounded rounded-lg object-cover"
      />
      <div className="flex flex-col items-start">
        <p className="text-black dark:text-white">
          {brand} {model}
        </p>
        {capacity && transmission ? (
          <p className="flex items-center justify-center text-gray-400">
            {capacity} {capacity > 1 ? "seats" : "seat"} <Dot />{" "}
            {(transmission as string).toLowerCase()}
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ManageCarG1;
