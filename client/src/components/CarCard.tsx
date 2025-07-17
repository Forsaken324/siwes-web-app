import type { CarCardProps } from "../interfaces/interfaces";
import { assets } from "../assets/assets";
import { useEffect, useRef } from "react";
const CarCard = ({car}: CarCardProps) => {

    const carImgRef = useRef(null);
    const currency = import.meta.env.VITE_CURRENCY;
    useEffect(() => {
        if(carImgRef.current)
        {
            carImgRef.current.style.backgroundImage = `url(${car.image})`;
            carImgRef.current.style.backgroundSize = 'cover';
            carImgRef.current.style.backgroundPosition = 'center';
        }
    }, [car.image]);

  return (
    <div className='h-[283px] w-[317px] bg-white rounded-xl shadow shadow-xl'>
        <div ref={carImgRef} className="flex flex-col justify-between h-[168px] w-full rounded-t-lg">
            <div className="flex items-center justify-center m-3 bg-primary text-white rounded-full w-[100px] h-[22px] text-[12px]">Available Now</div>
            <div className="flex justify-end"><div className="flex items-center justify-center m-3 bg-black text-white text-[12px] rounded-lg h-[30px] w-[75px]">{currency}{car.pricePerDay}/day</div></div>
        </div>
        <div>
            <div className="pl-3 pt-2">
                <h3 className="text-black font-bold">{car.brand} {car.model}</h3>
                <p className="text-gray-400 text-[12px]">{car.category} {car.year}</p>
            </div>
            <div className="flex gap-10 p-3 text-gray-500">
                <div>
                    <p className="flex gap-2 items-center text-[12px]"><img src={assets.users_icon} alt="" /> {car.seating_capacity}</p>
                    <p className="flex gap-2 items-center text-[12px]"><img src={assets.car_icon} alt="" /> {car.transmission}</p>
                </div>
                <div>
                    <p className="flex gap-2 items-center text-[12px]"><img src={assets.fuel_icon} alt="" /> {car.fuel_type}</p>
                    <p className="flex gap-2 items-center text-[12px]"><img src={assets.location_icon} alt="" /> {car.location}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CarCard;


// to the person who pleases him, God gives wisdom, knowledge and happiness
